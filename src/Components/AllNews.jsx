import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function AllNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get All Blogs
  const getBlog = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_URL}/news/news`);
      setNews(res.data.news);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Blog and Refetch
  const DeleteBlog = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_URL}/news/delete-news/${id}`);
      await getBlog(); // refetch blogs after delete
    } catch (error) {
      console.error("Error deleting blog:", error);
      setLoading(false); // stop loading if error
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All News</h2>

        {loading ? (
          <p>Loading News...</p>
        ) : (
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">News</th>
                  <th className="px-4 py-3 font-semibold truncate hidden md:block">
                    Created At
                  </th>
                  <th className="px-4 py-3 font-semibold truncate">Delete</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {news.length > 0 ? (
                  news.map((blog, index) => (
                    <tr key={index} className="border-t border-gray-500/20">
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                        <div className="border border-gray-300 rounded overflow-hidden">
                          <img
                            src={
                              blog.newsImage || "https://via.placeholder.com/64"
                            }
                            alt={blog.title}
                            className="w-16"
                          />
                        </div>
                        <span className="truncate max-sm:hidden w-full">
                          {blog.title}
                        </span>
                      </td>

                      <td className="px-4 py-3 max-sm:hidden">
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "N/A"}
                      </td>

                      <td className="px-4 py-3">
                        <button
                          type="button" // prevent form reload
                          onClick={() => DeleteBlog(blog._id)}
                          className="text-xl text-red-500 hover:text-red-700"
                        >
                          <MdDeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-4">
                      No blogs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
