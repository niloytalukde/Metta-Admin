import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./Components/Sidebar";
import UploadBlog from "./Components/UploadBlog";
import ImageUpload from "./Components/UploadIamge";

export default function App() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar */}
      <div className="col-span-3">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-9  p-4">
        <Routes>
          <Route path="/upload-blog" element={<UploadBlog />} />
          <Route path="/upload-image" element={<ImageUpload/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}
