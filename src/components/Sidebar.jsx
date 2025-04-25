import { useState } from "react";
import CommentForm from "./CommentForm"; // Import the CommentForm component

const Sidebar = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentForm = () => {
    setShowCommentForm((prev) => !prev); // Toggle the visibility of the comment form
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-4  fixed top-0 left-0">
        <h2 className="text-xl font-bold text-violet-500 mb-8">PopX Sidebar</h2>

        <button
          onClick={toggleCommentForm}
          className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition"
        >
          Add Comment
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow ml-64 bg-gray-100 p-4">
        {/* Conditionally render the CommentForm */}
        {showCommentForm && <CommentForm />}
      </div>
    </div>
  );
};

export default Sidebar;

