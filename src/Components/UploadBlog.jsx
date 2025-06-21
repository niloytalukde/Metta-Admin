import React from 'react';

const UploadBlog = () => {
  return (
     <div className="py-10 flex flex-col items-center bg-white min-h-screen">
      <form className="md:p-10 p-4 space-y-6 w-full max-w-lg bg-white shadow-sm rounded-lg border border-gray-200">
        {/* Product Image Upload */}
        <div className=''>
          <label className="block text-base font-medium text-gray-700 mb-2">Blog Image</label>
          <label htmlFor="product-image" className="cursor-pointer inline-block">
            <input type="file" id="product-image" accept="image/*" hidden />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-24 h-24 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="product-name" className="text-base font-medium text-gray-700">
            Title 
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type product name"
            required
            className="px-3 py-2.5 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-1">
          <label htmlFor="product-description" className="text-base font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            placeholder="Write a short description..."
            className="px-3 py-2.5 border border-gray-300 rounded outline-none resize-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            ADD Blog 
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBlog;