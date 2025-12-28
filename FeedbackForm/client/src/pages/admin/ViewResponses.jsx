import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../config/api';

const ViewResponses = () => {
  const { formId } = useParams();
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const fetchResponses = async () => {
    try {
      setLoading(true);
      const params = {};
      if (fromDate) params.fromDate = fromDate;
      if (toDate) params.toDate = toDate;

      const res = await api.get(`/responses/${formId}/responses`, { params });

      setResponses(res.data.data);
    } catch (error) {
      console.error("Error fetching responses", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, [formId, fromDate, toDate]);

  const exportToCSV = () => {
    if (responses.length === 0) {
      alert('No data to export');
      return;
    }

    // Prepare CSV headers
    const headers = ['Student Name', 'Submission Date', 'Submission Time'];
    
    // Get questions from the first response's form
    if (responses[0].form && responses[0].form.questions) {
      responses[0].form.questions.forEach(q => {
        headers.push(q.questionText);
      });
    } else {
      const maxAnswers = Math.max(...responses.map(r => r.answers.length));
      for (let i = 1; i <= maxAnswers; i++) {
        headers.push(`Question ${i}`);
      }
    }

    // Prepare CSV rows
    const rows = responses.map(response => {
      const row = [
        response.studentName,
        new Date(response.submittedAt).toLocaleDateString(),
        new Date(response.submittedAt).toLocaleTimeString()
      ];

      // Add answers
      response.answers.forEach(answerObj => {
        const answer = Array.isArray(answerObj.answer)
          ? answerObj.answer.join('; ')
          : answerObj.answer;
        row.push(answer);
      });

      return row;
    });

    // Convert to CSV string
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `form_responses_${formId}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading responses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/admin/dashboard"
            className="text-blue-700 hover:text-blue-900 font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Form Responses</h1>

          {/* Date Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-2">
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-2">
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Responses Count and Export */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900">
            Total Responses: {responses.length}
          </p>
          {responses.length > 0 && (
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-green-700 text-white font-medium rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            >
              Export to Excel
            </button>
          )}
        </div>

        {/* Responses List */}
        {responses.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-600">No responses found for this form.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {responses.map((response, index) => (
              <div
                key={response._id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6"
              >
                {/* Response Header */}
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Response #{index + 1}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Student:</span> {response.studentName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {new Date(response.submittedAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(response.submittedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>

                {/* Answers */}
                <div className="space-y-4">
                  {response.answers.map((answerObj, idx) => {
                    // Find the question text from the form
                    const question = response.form?.questions?.find(
                      q => q._id.toString() === answerObj.questionId.toString()
                    );
                    
                    return (
                      <div key={idx} className="bg-gray-50 border border-gray-200 rounded p-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          {question ? question.questionText : `Question ${idx + 1}`}
                        </p>
                        <p className="text-base text-gray-900">
                          {Array.isArray(answerObj.answer)
                            ? answerObj.answer.join(', ')
                            : answerObj.answer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewResponses;
