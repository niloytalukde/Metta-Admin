import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./Components/Sidebar";
import UploadBlog from "./Components/UploadBlog";
import ImageUpload from "./Components/UploadIamge";
import FacebookLink from "./Components/FacebookLink";
import YoutubeLink from "./Components/YoutubeLink";
import News from "./Components/News";
import AllBlogs from "./Components/AllBlogs";
import AllNews from "./Components/AllNews";
import AllImage from "./Components/AllImage";
import AllYoutubeLinks from "./Components/AllYoutubeLinks";

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
          <Route path="/all-blog" element={<AllBlogs />} />
          <Route path="/upload-news" element={<News />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/upload-image" element={<ImageUpload />} />
          <Route path="/all-image" element={<AllImage />} />
          <Route path="/upload-facebook-link" element={<FacebookLink />} />
          <Route path="/upload-youtube-link" element={<YoutubeLink />} />
          <Route path="/all-youtube-link" element={<AllYoutubeLinks />} />
        </Routes>
      </div>
    </div>
  );
}
