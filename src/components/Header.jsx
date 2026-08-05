import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import PrimaryButton from "./PrimaryButton";
import { industries } from "../data/industries";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  {
    title: "Industries",
    path: "/industries",
    dropdown: industries,
  },
  { title: "Products", path: "/products" },
  { title: "Our Services", path: "/our-services" },
  { title: "Careers", path: "/careers" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] =
    useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);

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
    setMobileIndustriesOpen(false);
    setDesktopIndustriesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${sticky
            ? "border-gray-200 bg-white/90 shadow-sm backdrop-blur-lg"
            : "border-transparent bg-white"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6">
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
                src="/assets/Merchany-Business.png"
                alt="Company name"
                width="160"
                height="48"
                className={`w-auto object-contain transition-all duration-300 ${sticky ? "h-7" : "h-9"
                  }`}
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:block"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-8">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <li
                        key={item.path}
                        className="relative"
                        onMouseEnter={() => setDesktopIndustriesOpen(true)}
                        onMouseLeave={() => setDesktopIndustriesOpen(false)}
                      >
                        <NavLink
                          to={item.path}
                          onClick={() => setDesktopIndustriesOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-1 text-sm font-semibold transition-colors ${isActive
                              ? "text-(--primary-color)"
                              : "text-gray-700 hover:text-(--primary-color)"
                            }`
                          }
                        >
                          {item.title}

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${desktopIndustriesOpen ? "rotate-180" : ""
                              }`}
                            aria-hidden="true"
                          />
                        </NavLink>

                        {/* Keeps hover active between link and dropdown */}
                        <div className="absolute left-0 top-full h-4 w-full" />

                        <div
                          className={`absolute left-0 top-[calc(100%+16px)] w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-200 ${desktopIndustriesOpen
                              ? "visible translate-y-0 opacity-100"
                              : "invisible translate-y-2 opacity-0"
                            }`}
                        >
                          <Link
                            to="/industries"
                            onClick={() => setDesktopIndustriesOpen(false)}
                            className="mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-(--secondary-color) transition-colors hover:bg-blue-50 hover:text-(--primary-color)"
                          >
                            View All Industries
                            <ChevronRight className="h-4 w-4" />
                          </Link>

                          <div className="my-1 border-t border-gray-100" />

                          {item.dropdown.map((industry) => {
                            const Icon = industry.icon;

                            return (
                              <NavLink
                                key={industry.slug}
                                to={`/industries/${industry.slug}`}
                                onClick={() => setDesktopIndustriesOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-50 text-(--primary-color)"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-(--primary-color)"
                                  }`
                                }
                              >
                                <Icon className="h-4 w-4 shrink-0" />
                                {industry.title}
                              </NavLink>
                            );
                          })}
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                          `text-sm font-semibold transition-colors ${isActive
                            ? "text-(--primary-color)"
                            : "text-gray-700 hover:text-(--primary-color)"
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
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
              className="inline-flex size-11 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div className="h-20" aria-hidden="true" />

      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${open
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
              src="/assets/Merchany-Business.png"
              alt="Company name"
              width="150"
              height="40"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex size-11 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color)"
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
            <li>
              <div className="flex items-center">
                <NavLink
                  to="/industries"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex flex-1 rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive
                      ? "bg-blue-50 text-(--primary-color)"
                      : "text-gray-800 hover:bg-gray-100 hover:text-(--primary-color)"
                    }`
                  }
                >
                  Industries
                </NavLink>

                <button
                  type="button"
                  onClick={() =>
                    setMobileIndustriesOpen((current) => !current)
                  }
                  className="flex size-11 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
                  aria-label="Toggle industries menu"
                  aria-expanded={mobileIndustriesOpen}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ${mobileIndustriesOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {industries.map((industry) => {
                      const Icon = industry.icon;

                      return (
                        <li key={industry.slug}>
                          <NavLink
                            to={`/industries/${industry.slug}`}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-50 text-(--primary-color)"
                                : "text-gray-700 hover:bg-gray-100 hover:text-(--primary-color)"
                              }`
                            }
                          >
                            <Icon className="h-4 w-4" />
                            {industry.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>

            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${isActive
                      ? "bg-blue-50 text-(--primary-color)"
                      : "text-gray-800 hover:bg-gray-100 hover:text-(--primary-color)"
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