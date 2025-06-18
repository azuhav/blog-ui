import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const TextEditor = ({ text, setText }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.imageUrl) {
        setImageUrl(response.data.imageUrl);
        setText(
          (prevText) =>
            `${prevText}\n\n![Uploaded Image](${response.data.imageUrl})`
        );
      } else {
        setErrorMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      setErrorMessage("Error uploading image. Please check your connection.");
    }
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        placeholder="Write in Markdown format..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleImageUpload}
        accept="image/*"
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {imageUrl && <p>Image uploaded! Embedded into Markdown.</p>}

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button type="button" onClick={() => setPreview(!preview)}>
          {preview ? "Hide Preview" : "Show Preview"}
        </button>
      </div>

      {preview && (
        <div className="preview">
          <h3>Markdown Preview:</h3>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
