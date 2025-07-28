import { useState } from "react";
import axios from "axios";

const News = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newsImage = formData.get("newsImage");
    const title = formData.get("newsTitle");
    const content = formData.get("newsDescription");

    if (!newsImage || newsImage.size === 0) {
      return alert("Please select a news image.");
    }

    setUploading(true);

    try {
      // Upload image to ImgBB
      const imageData = new FormData();
      imageData.append("image", newsImage);

      const imageRes = await axios.post(
        "https://api.imgbb.com/1/upload?key=918213795f0109863777729e33762291",
        imageData
      );

      const uploadedImageUrl = imageRes.data.data.url;

      const newsData = {
        newsImage: uploadedImageUrl,
        title,
        content,
      };

      // Post news data to backend
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/news/create-news`,
        newsData
      );

      console.log("News uploaded:", response.data);
      alert("News uploaded successfully!");

      // Reset form
      form.reset();
      setPreviewImage(null);
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleImagePreview = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <form
        onSubmit={handleUpload}
        className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow"
      >
        {/* Image Upload */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">
            News Image
          </label>
          <label
            htmlFor="news-image"
            className="cursor-pointer inline-block w-24 h-24 border border-dashed border-gray-400 rounded overflow-hidden"
          >
            <input
              type="file"
              id="news-image"
              name="newsImage"
              accept="image/*"
              onChange={handleImagePreview}
              hidden
              required
            />
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                alt="Upload Placeholder"
                className="w-full h-full object-cover"
              />
            )}
          </label>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="news-title"
            className="text-base font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="news-title"
            name="newsTitle"
            type="text"
            placeholder="Type news title"
            required
            className="px-3 py-2.5 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="news-description"
            className="text-base font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="news-description"
            name="newsDescription"
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
            disabled={uploading}
            className={`w-full px-6 py-2.5 text-white font-medium rounded transition ${
              uploading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {uploading ? "Uploading..." : "Post News"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default News;
