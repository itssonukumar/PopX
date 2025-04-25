import { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log("Submitted comment:", comment); // Log the comment, replace with API call if needed
      setComment(""); // Clear the comment input
    }
  };

  return (
    <div className="w-full bg-white p-6 border shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Comment</h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment here..."
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 resize-none mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition"
      >
        Submit Comment
      </button>
    </div>
  );
};

export default CommentForm;
