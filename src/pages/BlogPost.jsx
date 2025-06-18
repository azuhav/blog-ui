import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../components/AuthContext";
import NotFoundPage from "./NotFoundPage";
import PostEditor from "./PostEditor";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div>
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      {editing ? (
        <PostEditor
          post={post}
          setPost={setPost}
          closeEditor={() => setEditing(false)}
        />
      ) : (
        <ReactMarkdown>{post.text}</ReactMarkdown>
      )}
      {isAuthenticated && (
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => setEditing(true)}
          style={{ cursor: "pointer", fontSize: "24px", marginLeft: "10px" }}
        />
      )}
    </div>
  );
}
