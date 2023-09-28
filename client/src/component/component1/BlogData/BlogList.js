// src/components/BlogList.js
import React from "react";
import BlogPost from "./BlogPost";
import blogData from "./BlogData";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogData.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
