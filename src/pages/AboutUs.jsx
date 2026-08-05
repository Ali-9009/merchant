import {
    BadgeDollarSign,
    Clock3,
    MapPin,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

import PrimaryButton from "../components/PrimaryButton";

const features = [
    {
        title: "Secure Processing",
        description:
            "Trusted payment technology that protects every transaction.",
        icon: ShieldCheck,
    },
    {
        title: "Faster Funding",
        description:
            "Receive payments quickly to keep your business moving.",
        icon: Clock3,
    },
    {
        title: "Transparent Pricing",
        description:
            "Competitive rates with no hidden fees or surprises.",
        icon: BadgeDollarSign,
    },
];

export default function AboutUs() {
    return (
        <>
            <section className="relative overflow-hidden py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mx-auto max-w-6xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            About Us
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                            Building Better
                            <span className=" text-blue-600">
                                {" "}Payment Solutions
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 text-lg text-gray-600">
                            At Merchant Businesses, we are committed to helping businesses
                            simplify payment processing with secure, reliable, and
                            cost-effective merchant solutions tailored to their unique needs.
                        </p>

                        <p className="mx-auto mt-4 text-lg text-gray-600">
                            Our mission is to build lasting relationships through transparent
                            pricing, exceptional customer service, and innovative payment
                            technology that empowers businesses to grow with confidence.
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
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left content */}
                        <div>

                            <h2 className="mt-6 primary-heading">
                                Lower Rates.
                                <br />

                                <span className="text-(--primary-color)">
                                    Faster Payments.
                                </span>

                                <br />
                                Secure Transactions.
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">
                                Merchant Services is powered by First Data to deliver secure,
                                reliable payment processing and modern point-of-sale solutions
                                for businesses of every size, with specialized expertise in the
                                hospitality industry.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We help businesses accept all major credit cards, process
                                payments quickly, and reduce processing costs through flexible
                                merchant solutions backed by industry-leading technology.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our mission is to provide exceptional service, transparent
                                pricing, and innovative payment solutions that help our clients
                                grow with confidence. From our headquarters in Los Angeles, our
                                experienced team builds long-term partnerships through
                                technology, expertise, and genuine customer care.
                            </p>
                        </div>

                        {/* Right content */}
                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 lg:p-10">
                            <div className="space-y-8">
                                {features.map(({ title, description, icon: Icon }) => (
                                    <div key={title} className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-(--primary-color)">
                                            <Icon className="h-6 w-6" strokeWidth={2} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-(--secondary-color)">
                                                {title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-gray-600">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-(--primary-color)">
                                        <MapPin className="h-6 w-6" strokeWidth={2} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                                            Headquarters
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold text-(--secondary-color)">
                                            Los Angeles, California
                                        </h3>

                                        <p className="mt-3 leading-7 text-gray-600">
                                            Supporting businesses nationwide with trusted merchant
                                            services and dedicated customer support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}