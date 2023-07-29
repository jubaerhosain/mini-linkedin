import { useState } from "react";
import axiosInstance from "../../config/axiosInstance";

const AddPostForm = () => {
  const [postText, setPostText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", postText);
      formData.append("image", imageFile);

      const response = await axiosInstance.post("/post", formData);
      console.log(response);

      setPostText("");
      setImageFile(null);

      alert("Post added successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="max-w-md mt-10 mx-auto p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="postText" className="block text-gray-700 font-bold mb-2">
          Post Text:
        </label>
        <textarea
          id="postText"
          name="postText"
          value={postText}
          onChange={handleTextChange}
          placeholder="Write your post here..."
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Upload Image:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
