import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full w-60 p-3 bg-gray-900 text-gray-100">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to={"/upload-blog"}><h2 className="text-lg font-bold">Dashboard</h2></Link>
          <button className="p-2" aria-label="Options">
            {/* Icon or settings can go here */}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 pt-2 pb-4">
          <ul className="space-y-1 text-md font-bold">
            {[
              { label: "Blog Upload", href: "/upload-blog" },
              // { label: "All Blog", href: "" },
              { label: "Gallery Image", href: "/upload-image" },
              // { label: "All Image", href: "" },
              { label: "Facebook Link", href: "/upload-facebook-link", },
              { label: "Youtube Link", href: "/upload-youtube-link" },
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
    </aside>
  );
};

export default Sidebar;
