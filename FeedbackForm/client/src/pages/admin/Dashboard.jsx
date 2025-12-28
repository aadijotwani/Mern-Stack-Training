import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import CreateForms from "../admin/CreateForms.jsx";
import TeacherModal from "../admin/TeacherModal.jsx";
import api from "../../config/api.jsx";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalForms: 0,
    activeForms: 0,
    totalResponses: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    try {
      const res = await api.get("/forms");
      setForms(res.data.data);
    } catch (error) {
      console.error("Error fetching forms", error);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.get("/dashboard/stats");
      setStats(res.data.data);
    } catch (error) {
      console.error("Error fetching dashboard stats", error);
    }
  };

  useEffect(() => {
    fetchForms();
    fetchStats();
  }, []);

  const handleFormSubmit = async (formData) => {
    console.log("New form created:", formData);
    try {
      const res = await api.post("/forms", formData);
      console.log("Form created:", res.data);
      toast.success('Form created successfully!');

      setIsModalOpen(false);
      fetchForms();
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error('Error creating form');
    }
  };

  const handleDeleteForm = async (formId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this form?"
    );
    if (!confirmDelete) return;

    try {
      await api.delete(`/forms/${formId}`);
      toast.success('Form deleted successfully');
      fetchForms(); // refresh table
    } catch (error) {
      console.error("Error deleting form", error);
      toast.error('Error deleting form');
    }
  };

  const handleCopyLink = (formId) => {
    const link = `http://localhost:5173/form/${formId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success("Form link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link", error);
        toast.error("Failed to copy link");
      });
  };

  return (

    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Welcome, {user?.fullName || "Admin"}
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Total Forms
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalForms}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Active Forms
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.activeForms}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Total Responses
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalResponses}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 text-center"
          >
            Create New Form
          </button>
          <button
            onClick={() => setIsTeacherModalOpen(true)}
            className="px-6 py-3 bg-green-700 text-white font-medium rounded hover:bg-green-800 text-center"
          >
            Add Teacher
          </button>
        </div>

        {/* Recent forms table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Forms
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Form Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Created Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {forms.map((form) => (
                  <tr key={form._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {form.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(form.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          form.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {form.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-3">
                        <Link
                          to={`/admin/forms/${form._id}`}
                          className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                          View
                        </Link>
                        <Link
                          to={`/admin/responses/${form._id}`}
                          className="text-purple-700 hover:text-purple-900 font-medium"
                        >
                          Responses
                        </Link>
                        <button
                          onClick={() => handleCopyLink(form._id)}
                          className="text-green-600 hover:text-green-800 font-medium"
                        >
                          Copy Link
                        </button>
                        <button
                          onClick={() => handleDeleteForm(form._id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Form Modal */}
        <CreateForms
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
        />
        
        {/* Add Teacher Modal */}
        <TeacherModal
          isOpen={isTeacherModalOpen}
          onClose={() => setIsTeacherModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
