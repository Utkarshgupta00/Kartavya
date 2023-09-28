// src/components/BlogPost.js
import React, { useState } from "react";

const BlogPost = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="bg-blue-100 p-8 mx-6 rounded-lg shadow-lg my-4">
      <div className="mb-4 flex items-center space-x-2">
        <img
          src={post.image}
          alt={post.title}
          className="w-40 h-40 rounded-md" // Adjust the width and height as needed
        />
        <h2 className="text-xl font-bold mb-2 text-blue-800">{post.title}</h2>
      </div>
      <p className="text-gray-600">{post.date}</p>
      <p className={`text-gray-800 mt-2 ${showFullContent ? "" : "truncate"}`}>
        {post.content}
      </p>
      {!showFullContent && (
        <button
          onClick={toggleContent}
          className="text-blue-600 mt-2 hover:underline"
        >
          Show More
        </button>
      )}
      {showFullContent && (
        <button
          onClick={toggleContent}
          className="text-blue-600 mt-2 hover:underline"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default BlogPost;
