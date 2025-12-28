import mongoose from "mongoose";


const questionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["short", "paragraph", "mcq", "checkbox", "dropdown"],
      required: true
    },

    options: {
      type: [String],
      default: []
    },

    required: {
      type: Boolean,
      default: false
    }
  },
  { _id: true }
);


const formSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true
    },

    questions: {
      type: [questionSchema],
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    },

    expiresAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
