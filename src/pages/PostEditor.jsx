import React, { useState } from "react";
import axios from "axios";
import TextEditor from "../components/ContentEditor";

const PostEditor = ({ post, setPost, closeEditor }) => {
  const [editedText, setEditedText] = useState(post.text);

  const handleSave = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, { text: editedText });
      setPost({ ...post, text: editedText });
      closeEditor();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <TextEditor text={editedText} setText={setEditedText} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSave}>Save</button>
        <button onClick={closeEditor}>Cancel</button>
      </div>
    </div>
  );
};

export default PostEditor;
