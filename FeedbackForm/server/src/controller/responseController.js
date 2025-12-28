import Response from "../models/responseModel.js";
import Form from "../models/formModel.js";

export const submitResponse = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("FORM ID:", req.params.formId);

    const { formId } = req.params;
    const { studentName, answers } = req.body;

    const response = await Response.create({
      form: formId,
      studentName,
      answers
    });

    res.status(201).json({
      message: "Response submitted successfully",
      data: response
    });
  } catch (error) {
    console.error("SUBMIT RESPONSE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


export const getFormResponses = async (req, res, next) => {
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

    const responses = await Response.find({ form: form._id })
      .populate('form', 'title questions')
      .sort({ createdAt: -1 });

    res.json({ data: responses });
  } catch (error) {
    next(error);
  }
};
