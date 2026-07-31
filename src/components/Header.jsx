import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import PrimaryButton from "./PrimaryButton";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Our Services", path: "/our-services" },
  { title: "Careers", path: "/careers" },
  { title: "Contact", path: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${sticky
            ? "border-gray-200 bg-white/90 shadow-sm backdrop-blur-lg"
            : "border-transparent bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${sticky ? "h-16" : "h-20"
              }`}
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="shrink-0"
              aria-label="Go to homepage"
            >
              <img
                src="/assets/logo.png"
                alt="Company name"
                width="160"
                height="48"
                className={`w-auto object-contain transition-all duration-300 ${sticky ? "h-9" : "h-11"
                  }`}
              />
            </Link>

            <nav
              className="hidden lg:block"
              aria-label="Main navigation"
            >
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
            </nav>

            <div className="hidden lg:block">
              <PrimaryButton to="/contact-us">
                Get Started
              </PrimaryButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Prevent fixed header from covering page content */}
      <div className="h-20" aria-hidden="true" />

      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${open
            ? "visible opacity-100"
            : "invisible opacity-0"
          }`}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <aside
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!open}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-200 px-6">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            <img
              src="/assets/logo.png"
              alt="Company name"
              width="150"
              height="40"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex size-11 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close navigation menu"
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col overflow-y-auto px-6 py-6"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <PrimaryButton
              to="/contact-us"
              onClick={closeMenu}
              className="w-full"
            >
              Get Started
            </PrimaryButton>
          </div>
        </nav>
      </aside>
    </>
  );
}