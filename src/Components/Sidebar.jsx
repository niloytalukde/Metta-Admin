import { useState } from "react";
import { Link } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Blog Upload", href: "/upload-blog" },
    { label: "All Blog", href: "/all-blog" },
    { label: "News Upload", href: "/upload-news" },
    { label: "All News", href: "/all-news" },
    { label: "Gallery Image", href: "/upload-image" },
    { label: "All Image", href: "/all-image" },
    { label: "Facebook Link", href: "/upload-facebook-link" },
    { label: "Youtube Link", href: "/upload-youtube-link" },
    { label: " All Youtube Link", href: "/all-youtube-link" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-3 text-white bg-gray-900 fixed top-3 left-3 z-50 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-gray-100 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-60 md:translate-x-0 md:static md:block z-40`}
      >
        <div className="flex flex-col h-full p-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link to={"/upload-blog"}>
              <h2 className="text-lg font-bold">Dashboard</h2>
            </Link>
            <button
              className="p-2 md:hidden"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 pt-2 pb-4 overflow-y-auto">
            <ul className="space-y-1 text-md font-bold">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-800"
                    onClick={() => setIsOpen(false)} // close sidebar on mobile after click
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-400"
                  >
                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
