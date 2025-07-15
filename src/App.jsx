import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./Components/Sidebar";
import UploadBlog from "./Components/UploadBlog";
import ImageUpload from "./Components/UploadIamge";
import FacebookLink from "./Components/FacebookLink";
import YoutubeLink from "./Components/YoutubeLink";

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
          <Route path="/upload-facebook-link" element={<FacebookLink/>} />
          <Route path="/upload-youtube-link" element={<YoutubeLink/>} />
        
        </Routes>
      </div>
    </div>
  );
}
