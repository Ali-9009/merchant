import { useState } from "react";
import {
    ArrowRight,
    BadgeDollarSign,
    Cable,
    Clock3,
    Headset,
    MonitorSmartphone,
    Repeat2,
    Split,
    Check,
    ChevronRight,
    CreditCard,
    Radio,
    ShieldCheck,
    Wifi,
} from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";

const benefits = [
    {
        title: "Proposal Processing",
        description:
            "Send us your client’s statement and we’ll consolidate the proposal and rate comparison, typically within one hour.",
        icon: Clock3,
    },
    {
        title: "Free Terminal Exchanges",
        description:
            "We provide a replacement terminal that is preloaded and ready to install, along with a return label for the existing equipment.",
        icon: Repeat2,
    },
    {
        title: "Free Loaner Terminals",
        description:
            "Merchants can receive terminal equipment at no upfront cost.",
        icon: MonitorSmartphone,
    },
    {
        title: "Loaner Clover Systems",
        description:
            "Clients can begin using a Clover system without an upfront payment and with a low monthly rental fee.",
        icon: Cable,
    },
    {
        title: "POS Reprogramming",
        description:
            "If your client already has a POS system, we can often support it and handle the reprogramming process.",
        icon: MonitorSmartphone,
    },
    {
        title: "Immediate Residual Split",
        description:
            "Begin earning residual income from day one without a waiting period.",
        icon: Split,
    },
    {
        title: "Hands-on Management",
        description:
            "Receive dedicated one-on-one support to keep both you and your clients informed and well cared for.",
        icon: Headset,
    },
];

export default function Products() {
    return (
        <>
            <section className="relative overflow-hidden py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mx-auto max-w-6xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            Build With Us
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                            Unlock Your Potential: <br /> Become a Business
                            <span className=" text-blue-600">
                                {" "}Development Agent
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 text-lg text-gray-600">
                            Explore a rewarding career as a business development agent with a leading provider in the credit card processing industry – revolutionizing payment solutions and empowering businesses worldwide!
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

            <ProductTabs />
        </>
    )
}





import { products } from "../data/products";

function ProductTabs() {
    const [activeProductId, setActiveProductId] = useState(
        products[0].id,
    );

    const activeProduct = products.find(
        (product) => product.id === activeProductId,
    );

    return (
        <section className="py-12 md:py-16 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-5 primary-heading">
                        Find the right terminal for
                        <span className="text-(--primary-color)">
                            {" "}
                            your business
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explore secure and reliable payment equipment designed
                        around the way your business operates.
                    </p>
                </div>

                {/* Product tabs */}
                <div
                    className="mt-12 flex flex-wrap justify-center gap-3"
                    role="tablist"
                    aria-label="Payment products"
                >
                    {products.map((product) => {
                        const isActive = product.id === activeProductId;

                        return (
                            <button
                                key={product.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`product-panel-${product.id}`}
                                onClick={() => setActiveProductId(product.id)}
                                className={`rounded-xl font-sans border px-5 py-3 text-sm font-semibold transition-colors ${isActive
                                        ? "border-(--primary-color) bg-(--primary-color) text-white"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-(--primary-color) hover:text-(--primary-color)"
                                    }`}
                            >
                                <span className="block">{product.name}</span>
                                <span
                                    className={`mt-0.5 block text-xs  font-normal ${isActive ? "text-white/80" : "text-gray-500"
                                        }`}
                                >
                                    {product.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div
                    id={`product-panel-${activeProduct.id}`}
                    role="tabpanel"
                    className="mt-12"
                >
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Product image */}
                        <div className="relative">
                            <div className="flex p-2 items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 ">
                                <img
                                    key={activeProduct.id}
                                    src={activeProduct.image}
                                    alt={`${activeProduct.name} payment terminal`}
                                    className="rounded-2xl transition duration-300"
                                />
                            </div>

                            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-(--primary-color) shadow-sm">
                                {activeProduct.label}
                            </div>
                        </div>

                        {/* Product content */}
                        <div>
                            <p className="text-sm font-sans font-semibold uppercase tracking-wider text-(--primary-color)">
                                {activeProduct.name}
                            </p>

                            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-(--secondary-color) sm:text-4xl">
                                {activeProduct.headline}
                            </h3>

                            <p className="mt-5 text-lg font-medium leading-8 text-gray-800">
                                {activeProduct.intro}
                            </p>

                            <p className="mt-5 leading-7 text-gray-600">
                                {activeProduct.description}
                            </p>

                            <p className="my-4 leading-7 text-gray-600">
                                {activeProduct.secondaryDescription}
                            </p>

                            <PrimaryButton to="/contact-us">
                                Request this terminal
                                <ArrowRight className="h-4 w-4" />
                            </PrimaryButton>

                        </div>
                    </div>

                    {/* How it works */}
                    <div className="mt-20">
                        <div className="max-w-2xl">
                            <span className="text-sm font-semibold text-(--primary-color)">
                                How it works
                            </span>

                            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-(--secondary-color)">
                                Everything you need to accept payments on the go
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                The {activeProduct.name} terminal gives your business a
                                simple and secure way to process card payments from
                                almost any location.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {activeProduct.features.map(
                                ({ title, description, icon: Icon }) => (
                                    <article
                                        key={title}
                                        className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:shadow-md"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-(--primary-color)">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h4 className="mt-5 text-lg font-semibold text-(--secondary-color)">
                                            {title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            {description}
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Industries served */}
                    <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9">
                        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-(--primary-color)">
                                    Industries served
                                </span>

                                <h3 className="mt-2 text-2xl font-semibold text-(--secondary-color)">
                                    Designed for mobile businesses
                                </h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {activeProduct.industries.map((industry) => (
                                    <div
                                        key={industry}
                                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-(--primary-color)">
                                            <Check className="h-4 w-4" />
                                        </span>

                                        <span className="text-sm font-medium text-gray-700">
                                            {industry}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}