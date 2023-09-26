import React from "react";
import { useState } from "react";
import { doNewPost } from "../helpers/doNewPost";

export function PostForm() {
  const initialForm = {
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    async function submitPost() {
      await doNewPost(formData);
    }
    try {
      submitPost();
      alert("Post created successfully!");
    } catch (err) {
      alert("Error!!");
    }
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      ></input>
      <label htmlFor="body">Body</label>
      <textarea
        id="body"
        type="textarea"
        name="body"
        value={formData.body}
        onChange={handleChange}
      ></textarea>
      <button className="btn">Submit</button>
    </form>
  );
}
