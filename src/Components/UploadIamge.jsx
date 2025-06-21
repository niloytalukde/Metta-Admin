import React from 'react';

const ImageUpload = () => {
  return (
    <div className="flex items-center justify-center gap-5 min-h-screen bg-white">
      <form className="p-6 border rounded-lg shadow-sm bg-white">
        <div>
          <label htmlFor="product-image" className="block text-base font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <label htmlFor="product-image" className="cursor-pointer inline-block">
            <input type="file" id="product-image" accept="image/*" hidden />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-28 h-28 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
          <label htmlFor="product-image" className="cursor-pointer inline-block">
            <input type="file" id="product-image" accept="image/*" hidden />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-28 h-28 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
          <label htmlFor="product-image" className="cursor-pointer inline-block">
            <input type="file" id="product-image" accept="image/*" hidden />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              alt="Upload"
              className="w-28 h-28 object-cover border border-dashed border-gray-400 rounded"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
