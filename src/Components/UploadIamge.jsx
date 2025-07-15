import axios from "axios";
import React from "react";

const ImageUpload = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const imagedata = fromData.get("image");

    const data = new FormData();
    data.append("image", imagedata);

    console.log(imagedata);
    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=918213795f0109863777729e33762291",
      data
    );
    const image = imageResponse.data.data.url;
    const Url = await axios.post(
      `${import.meta.env.VITE_URL}/image/create-image-link`,
      { image }
    );
  };

  return (
    <div className="flex items-center justify-center gap-5 min-h-screen bg-white">
      <form
        onSubmit={handelSubmit}
        className="p-6 border rounded-lg shadow-sm bg-white"
      >
        <div>
          <label
            htmlFor="product-image"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Upload Image
          </label>
          <label
            htmlFor="product-image"
            className="cursor-pointer inline-block"
          >
            <input
              type="file"
              name="image"
              id="product-image"
              accept="image/*"
              hidden
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-28 h-28 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-3 mt-2 bg-blue-500 rounded-xl text-white flex justify-center "
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
