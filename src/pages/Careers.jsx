import {
    ArrowRight,
    BadgeDollarSign,
    Cable,
    Clock3,
    Headset,
    MonitorSmartphone,
    Repeat2,
    Split,
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

export default function Careers() {
    return (
        <>
            <section className="relative overflow-hidden py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mx-auto max-w-6xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-(--primary-color) shadow-sm">
                            Build With Us
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                            Unlock Your Potential: <br /> Become a Business
                            <span className="text-(--primary-color)">
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

            <section className="px-6 py-16 md:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                        {/* Intro */}
                        <div className="lg:sticky lg:top-28">
                            <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-(--primary-color) shadow-sm">
                                Agent Support
                            </span>

                            <h2 className="mt-5 primary-heading">
                                Optimize Your Business Goals and Objectives
                            </h2>

                            <p className="mt-6 max-w-xl text-lg text-gray-600">
                                Your role as a Business Development Agent is to sell. We handle
                                the operational work behind the scenes, helping you stay focused
                                and increase your productivity without unnecessary distractions.
                            </p>

                            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-(--primary-color) shadow-sm">
                                        <BadgeDollarSign className="size-5" aria-hidden="true" />
                                    </span>

                                    <div>
                                        <h3 className="font-semibold text-gray-950">
                                            You sell. We handle the rest.
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            From proposals and equipment to residuals and support, our
                                            team helps keep every deal moving forward.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <PrimaryButton to="/contact-us">
                                    Become an Agent
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </PrimaryButton>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid gap-5 sm:grid-cols-2">
                            {benefits.map(({ title, description, icon: Icon }, index) => (
                                <article
                                    key={title}
                                    className={`group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg ${index === benefits.length - 1
                                        ? "sm:col-span-2"
                                        : ""
                                        }`}
                                >
                                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-(--primary-color) transition group-hover:bg-(--primary-color) group-hover:text-white">
                                        <Icon className="size-5" aria-hidden="true" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-gray-950">
                                        {title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-600">
                                        {description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
