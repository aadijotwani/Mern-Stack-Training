
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../config/api';

const FillForm = () => {
  const [answers, setAnswers] = useState({});
  const [studentName, setStudentName] = useState('');
  const { formId } = useParams();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/forms/${formId}`);
        setFormData(res.data.data);
      } catch (error) {
        console.error("Error fetching form", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [formId]);

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (questionId, option) => {
    const currentAnswers = answers[questionId] || [];
    const updatedAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter(item => item !== option)
      : [...currentAnswers, option];
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: updatedAnswers
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert answers object to array format
    const answersArray = Object.entries(answers).map(([questionId, answer]) => ({
      questionId,
      answer
    }));

    try {
      await api.post(`/responses/${formId}`, {
        studentName,
        answers: answersArray
      });
      
      alert('Form submitted successfully!');
      
      // Clear form
      setStudentName('');
      setAnswers({});
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'short':
        return (
          <input
            type="text"
            value={answers[question._id] || ''}
            onChange={(e) => handleInputChange(question._id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
            placeholder="Your answer"
          />
        );

      case 'paragraph':
        return (
          <textarea
            value={answers[question._id] || ''}
            onChange={(e) => handleInputChange(question._id, e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
            placeholder="Your answer"
          />
        );

      case 'mcq':
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${question._id}`}
                  value={option}
                  checked={answers[question._id] === option}
                  onChange={(e) => handleInputChange(question._id, e.target.value)}
                  className="w-4 h-4 text-blue-700 border-gray-300 focus:ring-blue-700"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  checked={(answers[question._id] || []).includes(option)}
                  onChange={() => handleCheckboxChange(question._id, option)}
                  className="w-4 h-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'dropdown':
        return (
          <select
            value={answers[question._id] || ''}
            onChange={(e) => handleInputChange(question._id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          >
            <option value="">Select an option</option>
            {question.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading form...</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Not Found</h2>
          <p className="text-base text-gray-600">The form you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {formData.title}
            </h1>
            {formData.description && (
              <p className="text-base text-gray-600">
                {formData.description}
              </p>
            )}
          </div>

          {/* Questions */}
          <form onSubmit={handleSubmit}>
            <div className="px-6 py-6 space-y-8">
              {/* Student Name Field */}
              <div className="pb-6 border-b border-gray-200">
                <div className="mb-4">
                  <label className="block text-base font-medium text-gray-900">
                    Student Name
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {formData.questions.map((question) => (
                <div key={question._id} className="pb-6 border-b border-gray-200 last:border-b-0">
                  {/* Question text */}
                  <div className="mb-4">
                    <label className="block text-base font-medium text-gray-900">
                      {question.questionText}
                      {question.required && (
                        <span className="text-red-600 ml-1">*</span>
                      )}
                    </label>
                  </div>

                  {/* Question input */}
                  {renderQuestion(question)}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-gray-200">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
