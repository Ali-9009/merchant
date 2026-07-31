import { FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const navItems = [
  { title: "Home", path: "/" },
  { title: "Our Services", path: "/our-services" },
  { title: "Careers", path: "/careers" },
  { title: "Contact", path: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:px-8 py-6 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <p className="mt-2 text-sm text-gray-500">
            Developed by{" "}
            <a
              href="https://flowbitmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 transition hover:text-gray-600"
            >
              ----
            </a>
          </p>
        </div>

        {/* Center */}
        <div>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:bg-(--primary-color) hover:text-white"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:bg-(--primary-color) hover:text-white"
          >
            <FaYoutube size={18} />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:bg-(--primary-color) hover:text-white"
          >
            <FaPinterestP size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}