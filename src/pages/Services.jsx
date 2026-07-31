import { ArrowRight } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import ContactUs from "./ContactUs";

const services = [
    {
        title: "Credit Card Processing",
        image: "/assets/card-1.jpg",
        description:
            "Secure, fast, and affordable payment processing solutions for businesses of every size.",
    },
    {
        title: "Point-of-Sale Systems",
        image: "/assets/card-2.jpg",
        description:
            "Modern POS systems designed to simplify operations and improve customer experience.",
    },
    {
        title: "Mobile Payments",
        image: "/assets/card-3.jpg",
        description:
            "Accept payments anywhere with flexible mobile and contactless payment solutions.",
    },
];

export default function Services() {
    return (
        <>
            <section className="relative overflow-hidden py-24 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            Our Services
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                            Our
                            <span className=" text-blue-600">
                                {" "}Services
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 text-lg text-gray-600">
                            No matter the business venture, Merchant Businesses provides customized merchant services solutions. Our skilled representatives, specializing in merchant services, guarantee optimal rates and exceptional service quality.
                        </p>

                        <p className="mx-auto mt-4 text-lg text-gray-600">
                            Our offerings include highly competitive rates for credit card processing and ZERO COST for most equipment.
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
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mt-5 primary-heading">
                            Solutions Designed For Every Business
                        </h2>

                        <p className="mt-5 text-lg text-gray-600">
                            Discover flexible payment solutions that help your business accept
                            payments securely, reduce costs, and improve customer experience.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                to="/contact"
                                className="block h-full"
                            >
                                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col p-5">
                                        <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                            Payment Solution
                                        </span>

                                        <h3 className="mt-4 text-2xl font-bold text-gray-950 transition-colors group-hover:text-blue-600">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 flex-1 leading-7 text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactUs />
        </>
    );
}