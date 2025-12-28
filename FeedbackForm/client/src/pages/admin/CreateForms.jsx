import React, { useState } from 'react';

const CreateFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionText: '',
      type: 'short',
      options: [''],
      required: false
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (questionId) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  const handleQuestionChange = (questionId, field, value) => {
    setQuestions(questions.map(q => {
      if (q.id !== questionId) return q;
      
      const updated = { ...q, [field]: value };
      
      // Handle type change: initialize or clear options
      if (field === 'type') {
        const needsOptions = ['mcq', 'checkbox', 'dropdown'].includes(value);
        const hadOptions = ['mcq', 'checkbox', 'dropdown'].includes(q.type);
        
        if (needsOptions && !hadOptions) {
          // Switching to a type that needs options
          updated.options = ['', ''];
        } else if (!needsOptions && hadOptions) {
          // Switching to a type that doesn't need options
          updated.options = [];
        }
      }
      
      return updated;
    }));
  };

  const handleAddOption = (questionId) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, options: [...q.options, ''] } : q
    ));
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) } 
        : q
    ));
  };

  const handleOptionChange = (questionId, optionIndex, value) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { 
            ...q, 
            options: q.options.map((opt, i) => i === optionIndex ? value : opt) 
          } 
        : q
    ));
  };

  const validateForm = (title, questions) => {
    // 1️⃣ Form title validation
    if (!title || !title.trim()) {
      return "Form title is required";
    }

    // 2️⃣ At least one question
    if (!questions || questions.length === 0) {
      return "At least one question is required";
    }

    // 3️⃣ Validate each question
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];

      // Question text validation
      if (!question.questionText || !question.questionText.trim()) {
        return `Question ${i + 1} must have text`;
      }

      // Option-based question validation
      if (
        question.type === "mcq" ||
        question.type === "checkbox" ||
        question.type === "dropdown"
      ) {
        // Minimum 2 options
        if (!question.options || question.options.length < 2) {
          return `Question ${i + 1} must have at least 2 options`;
        }

        // No empty options
        for (let j = 0; j < question.options.length; j++) {
          if (!question.options[j] || !question.options[j].trim()) {
            return `Question ${i + 1} has an empty option`;
          }
        }
      }
    }

    // ✅ All validations passed
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationError = validateForm(formTitle, questions);
    if (validationError) {
      setError(validationError);
      return;
    }

    onSubmit({ 
      title: formTitle, 
      description: formDescription,
      questions 
    });
    
    setFormTitle('');
    setFormDescription('');
    setQuestions([]);
    setError('');
  };

  const handleClose = () => {
    setFormTitle('');
    setFormDescription('');
    setQuestions([]);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Form</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body - Scrollable */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="px-6 py-6 space-y-6 overflow-y-auto">
            {/* Error message */}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2">
                {error}
              </div>
            )}

            {/* Form Title */}
            <div>
              <label htmlFor="formTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Form Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="formTitle"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                placeholder="Enter form title"
              />
            </div>

            {/* Form Description */}
            <div>
              <label htmlFor="formDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Form Description
              </label>
              <textarea
                id="formDescription"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
                placeholder="Enter form description (optional)"
              />
            </div>

            {/* Questions Section */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Questions</h3>
              
              {questions.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 border border-gray-200 rounded">
                  <p className="text-sm text-gray-600">No questions added yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={question.id} className="border border-gray-200 rounded p-4 bg-gray-50">
                      {/* Question header */}
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Question {index + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(question.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Question text */}
                      <div className="mb-3">
                        <input
                          type="text"
                          value={question.questionText}
                          onChange={(e) => handleQuestionChange(question.id, 'questionText', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                          placeholder="Enter question text"
                        />
                      </div>

                      {/* Question type and required */}
                      <div className="flex gap-4 mb-3">
                        <div className="flex-1">
                          <select
                            value={question.type}
                            onChange={(e) => handleQuestionChange(question.id, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                          >
                            <option value="short">Short Answer</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="mcq">MCQ</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="dropdown">Dropdown</option>
                          </select>
                        </div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={question.required}
                            onChange={(e) => handleQuestionChange(question.id, 'required', e.target.checked)}
                            className="w-4 h-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700"
                          />
                          <span className="text-sm text-gray-700">Required</span>
                        </label>
                      </div>

                      {/* Options for MCQ/Checkbox/Dropdown */}
                      {(question.type === 'mcq' || question.type === 'checkbox' || question.type === 'dropdown') && (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">Options</label>
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} className="flex gap-2">
                              <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(question.id, optIndex, e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                                placeholder={`Option ${optIndex + 1}`}
                              />
                              {question.options.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveOption(question.id, optIndex)}
                                  className="px-3 py-2 text-sm text-red-600 hover:text-red-800"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => handleAddOption(question.id)}
                            className="text-sm text-blue-700 hover:text-blue-800 font-medium"
                          >
                            + Add Option
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Add Question button */}
              <button
                type="button"
                onClick={handleAddQuestion}
                className="mt-4 px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-700 rounded hover:bg-blue-50"
              >
                + Add Question
              </button>
            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800"
            >
              Create Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFormModal;
