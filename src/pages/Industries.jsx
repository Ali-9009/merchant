// src/pages/Industries.jsx

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { industries } from "../data/industries";
import PrimaryButton from "../components/PrimaryButton";

export default function Industries() {
    return (
        <>
            <section className="relative overflow-hidden py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mx-auto max-w-6xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            Industries
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                            Payment solutions for
                            <span className=" text-blue-600">
                                {" "}every business
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 text-lg text-gray-600">
                            Explore secure and flexible merchant services designed around the needs of your industry. From seamless payment processing to advanced security and scalable solutions, we help your business accept payments with confidence and grow without limits.
                        </p>

                        <div className="mt-10 gap-4">
                            <PrimaryButton to="/contact-us">
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => {
                            const Icon = industry.icon;

                            return (
                                <Link
                                    key={industry.slug}
                                    to={`/industries/${industry.slug}`}
                                    className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-(--primary-color) transition-colors group-hover:bg-(--primary-color) group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h2 className="mt-6 text-2xl font-semibold text-(--secondary-color)">
                                        {industry.title}
                                    </h2>

                                    <p className="mt-3 leading-7 text-gray-600">
                                        {industry.shortDescription}
                                    </p>

                                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-(--primary-color)">
                                        Learn more
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
} 