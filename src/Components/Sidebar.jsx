import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full w-60 p-3 bg-gray-900 text-gray-100">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <button className="p-2" aria-label="Options">
            {/* Icon or settings can go here */}
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button
              type="submit"
              className="p-2 focus:outline-none focus:ring"
              aria-label="Search"
            >
              {/* Search icon can be inserted here */}
            </button>
          </span>
         
				 
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 pt-2 pb-4">
          <ul className="space-y-1 text-sm">
            {[
              { label: "Blog Upload", href: "/upload-blog" },
              { label: "All Blog", href: "#" },
              { label: "Gallery Image", href: "#" },
              { label: "All Image", href: "#" },
              { label: "News", href: "#", active: true },
              { label: "All News", href: "#" },
            ].map(({ label, href, active }) => (
              <li key={label}>
                <a
                  href={href}
                  rel="noopener noreferrer"
                  className={`flex items-center p-2 space-x-3 rounded-md ${
                    active ? "bg-gray-800 text-gray-50" : ""
                  }`}
                >
                  <span>{label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
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

      {/* User Profile */}
      <div className="flex items-center p-2 mt-12 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt="User avatar"
          className="w-12 h-12 rounded-lg bg-gray-500"
        />
        <div>
          <h3 className="text-lg font-semibold">Leroy Jenkins</h3>
          <a
            href="#"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:underline"
          >
            View profile
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
