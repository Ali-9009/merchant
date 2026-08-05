import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { industries } from "../data/industries";

export default function Footer() {

  const companyLinks = [
    // { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Our Services", path: "/our-services" },
    // { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    {
      name: "Terms & Conditions",
      path: "/term-and-conditions",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Merchant Businesses home"
            >
              <img
                src="/assets/Merchany-Business.png"
                alt="Merchant Businesses"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              Secure and reliable merchant services designed to help
              businesses accept payments, reduce costs, and grow with
              confidence.
            </p>

            <div className="mt-6 flex items-center gap-3 text-lg text-gray-700">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
              >
                <i className="ri-facebook-fill" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
              >
                <i className="ri-instagram-line" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
              >
                <i className="ri-linkedin-fill" />
              </a>

            </div>
          </div>

          {/* Company */}
          <FooterLinks
            title="Company"
            links={companyLinks}
          />

          {/* Industries */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Industries
            </h3>

            <ul className="mt-5 space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-(--primary-color)"
                  >
                    <ArrowRight
                      size={14}
                      className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                    />

                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Get in touch
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Questions about products, payment processing, or support?
              Reach out and our team will help with the next step.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+13468631648"
                className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-(--primary-color)"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-(--primary-color)"
                />

                <span>+1 346 863 1648</span>
              </a>

              <a
                href="mailto:Operations@merchantbusinesses.com"
                className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-(--primary-color)"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-(--primary-color)"
                />

                <span className="break-all">
                  Operations@merchantbusinesses.com
                </span>
              </a>

              <div className="flex gap-3 text-sm text-gray-600"> <MapPin size={18} className="mt-0.5 shrink-0 text-(--primary-color)" /> <span>125 4635 Southwest Fwy, suite 650
                Houston TX 77027
              </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — unchanged */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Merchant Businesses. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {policyLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-gray-500 transition-colors hover:text-(--primary-color)"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-(--primary-color)"
            >
              <ArrowRight
                size={14}
                className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
              />

              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}