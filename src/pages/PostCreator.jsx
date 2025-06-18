import { useState } from "react";
import axios from "axios";
import TextEditor from "../components/ContentEditor";

const PostCreator = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/posts/create", {
        title,
        text,
        tags: tags.split(",").map((tag) => tag.trim()),
      });

      console.log("Post saved:", response.data);
      setNotification({
        type: "success",
        message: `Post created successfully! ID: ${response.data._id}`,
      });
      setTitle("");
      setText("");
      setTags("");
    } catch (error) {
      console.error("Failed to create post:", error);
      setNotification({ type: "error", message: "Failed to create post!" });
    }
  };

  return (
    <div className="markdown-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
            <button onClick={() => setNotification(null)}>X</button>
          </div>
        )}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <TextEditor text={text} setText={setText} />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostCreator;
