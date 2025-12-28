import Form from "../models/formModel.js";



export const createForm = async (req, res, next) => {
  try {
    const { title, description, questions } = req.body;

    if (!title || !questions || !Array.isArray(questions)) {
      const error = new Error("Invalid form data");
      error.statusCode = 400;
      return next(error);
    }

    const form = await Form.create({
      title,
      description,
      questions,
      createdBy: req.user._id, 
    });

    res.status(201).json({
      message: "Form created successfully",
      data: form,
    });
  } catch (error) {
    next(error);
  }
};

export const getFormById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const form = await Form.findById(id);
    if (!form) {
      const error = new Error("Form not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      data: form,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllForms = async (req, res, next) => {
  try {
    let forms;

    if (req.user.role === "admin") {
      // Admin sees all forms
      forms = await Form.find().sort({ createdAt: -1 });
    } else {
      // Teacher sees only their forms
      forms = await Form.find({ createdBy: req.user._id })
        .sort({ createdAt: -1 });
    }

    res.json({ data: forms });
  } catch (error) {
    next(error);
  }
};

export const deleteForm = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    if (
      req.user.role !== "admin" &&
      form.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await form.deleteOne();
    res.json({ message: "Form deleted" });
  } catch (error) {
    next(error);
  }
};







