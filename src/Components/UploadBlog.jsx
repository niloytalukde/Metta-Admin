import axios from "axios";
import React from "react";

const UploadBlog = () => {
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const blogImage = formData.get("blogImage");
    const title = formData.get("blogTitle");
    const content = formData.get("blogDescription");

    if (!blogImage || blogImage.size === 0) {
      return alert("Please select a blog image.");
    }

    try {
      // Prepare image for ImgBB
      const data = new FormData();
      data.append("image", blogImage);

      const imageResponse = await axios.post(
        "https://api.imgbb.com/1/upload?key=918213795f0109863777729e33762291",
        data
      );

      const uploadedImageUrl = imageResponse.data.data.url;

      const blogData = {
        blogImage: uploadedImageUrl,
        title,
        content,
      };

      const blog = await axios.post(
        `${import.meta.env.VITE_URL}/metta/create-blog`,
        blogData
      );

      console.log("Blog uploaded:", blog.data);
      alert("Blog uploaded successfully!");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleUpload}
        className="md:p-10 p-4 space-y-6 w-full max-w-lg bg-white shadow-sm rounded-lg border border-gray-200"
      >
        {/* Blog Image Upload */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">
            Blog Image
          </label>
          <label htmlFor="blog-image" className="cursor-pointer inline-block">
            <input
              type="file"
              id="blog-image"
              name="blogImage"
              accept="image/*"
              hidden
              required
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-24 h-24 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
        </div>

        {/* Blog Title */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="blog-title"
            className="text-base font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="blog-title"
            name="blogTitle"
            type="text"
            placeholder="Type blog title"
            required
            className="px-3 py-2.5 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Blog Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="blog-description"
            className="text-base font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="blog-description"
            name="blogDescription"
            rows={4}
            placeholder="Write a short description..."
            required
            className="px-3 py-2.5 border border-gray-300 rounded outline-none resize-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            Upload Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBlog;