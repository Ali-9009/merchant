// src/pages/IndustryDetails.jsx

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import PrimaryButton from "../components/PrimaryButton";
import { industries } from "../data/industries";

export default function IndustryDetails() {
    const { industrySlug } = useParams();

    const industry = industries.find(
        (item) => item.slug === industrySlug,
    );

    if (!industry) {
        return <Navigate to="/industries" replace />;
    }

    const Icon = industry.icon;

    return (

        <section className="py-12 md:py-16 px-6">
            <div className="mx-auto max-w-7xl">
                <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-(--primary-color)"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Industries
                </Link>

                <div className="mt-10 grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-(--primary-color)">
                            <Icon className="h-7 w-7" />
                        </div>

                        <h1 className="mt-7 text-4xl font-semibold tracking-tight text-(--secondary-color) sm:text-5xl lg:text-6xl">
                            Payment solutions for
                            <span className="text-(--primary-color)">
                                {" "}{industry.title}
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {industry.description}
                        </p>

                        <div className="mt-9">
                            <PrimaryButton to="/contact-us">
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 lg:p-10">
                        <h2 className="text-2xl font-semibold text-(--secondary-color)">
                            Built for your business
                        </h2>

                        <div className="mt-7 space-y-5">
                            {[
                                "Secure payment processing",
                                "Competitive and transparent rates",
                                "Modern point-of-sale technology",
                                "Fast and reliable funding",
                                "Dedicated merchant support",
                            ].map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-(--primary-color)">
                                        <Check className="h-4 w-4" />
                                    </span>

                                    <span className="text-gray-700">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}