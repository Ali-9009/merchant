import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2,
    ChevronRight,
    Fuel,
    Hotel,
    Laptop,
    ShoppingBasket,
    ShoppingBag,
    UtensilsCrossed,
} from "lucide-react";

const industries = [
    {
        id: "hotels",
        title: "Hotels & Motels",
        shortTitle: "Hotels",
        icon: Hotel,
        description:
            "Hotels and motels can expand their services to remote locations and streamline payment processing with reliable solutions at competitive prices.",
        benefits: [
            "Accept payments from multiple locations",
            "Simplify front-desk transactions",
            "Improve payment security",
        ],
    },
    {
        id: "ecommerce",
        title: "E-Commerce",
        shortTitle: "E-Commerce",
        icon: Laptop,
        description:
            "Accept secure online payments and give your customers a smooth checkout experience across desktop and mobile devices.",
        benefits: [
            "Secure online checkout",
            "Mobile-friendly payments",
            "Simple transaction management",
        ],
    },
    {
        id: "gas-stations",
        title: "Gas Stations",
        shortTitle: "Gas Stations",
        icon: Fuel,
        description:
            "Process payments quickly at the pump and inside your store while keeping transactions reliable and secure.",
        benefits: [
            "Faster payment processing",
            "Reliable point-of-sale systems",
            "Secure customer transactions",
        ],
    },
    {
        id: "grocery",
        title: "Grocery Stores",
        shortTitle: "Grocery Stores",
        icon: ShoppingBasket,
        description:
            "Keep checkout lines moving with dependable payment technology designed for high-volume retail environments.",
        benefits: [
            "Quick checkout experiences",
            "Support for busy locations",
            "Easy payment management",
        ],
    },
    {
        id: "restaurants",
        title: "Restaurants & Cafés",
        shortTitle: "Restaurants",
        icon: UtensilsCrossed,
        description:
            "Make ordering and payment easier for your staff and customers with flexible payment solutions built for hospitality.",
        benefits: [
            "Faster table payments",
            "Flexible payment options",
            "Smooth customer experiences",
        ],
    },
    {
        id: "retail",
        title: "Retail Stores",
        shortTitle: "Retail Stores",
        icon: ShoppingBag,
        description:
            "Deliver a simple and secure checkout experience with payment solutions that can grow alongside your retail business.",
        benefits: [
            "Simple in-store payments",
            "Secure transaction processing",
            "Solutions built to scale",
        ],
    },
];

export default function Industries() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);

    return (
        <section className="py-12 md:py-16 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <h2 className="primary-heading">
                            Payment solutions built for your industry
                        </h2>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-base leading-7 text-neutral-600 sm:text-lg">
                            We provide merchant services designed around the needs of your
                            business, helping you process payments securely, efficiently, and
                            at the right price.
                        </p>

                        <p className="mt-3 text-base leading-7 text-neutral-500">
                            Explore how our payment solutions can support businesses across
                            a range of industries.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
                    <div className="space-y-2">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            const isActive = activeIndustry.id === industry.id;

                            return (
                                <button
                                    key={industry.id}
                                    type="button"
                                    onClick={() => setActiveIndustry(industry)}
                                    className="group flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-200"
                                    style={{
                                        borderColor: isActive
                                            ? "var(--primary-color)"
                                            : "#e5e5e5",
                                        backgroundColor: isActive
                                            ? "color-mix(in srgb, var(--primary-color) 7%, white)"
                                            : "#ffffff",
                                    }}
                                >
                                    <span className="flex items-center gap-3">
                                        <span
                                            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                                            style={{
                                                color: isActive
                                                    ? "var(--text-color)"
                                                    : "var(--primary-color)",
                                                backgroundColor: isActive
                                                    ? "var(--primary-color)"
                                                    : "color-mix(in srgb, var(--primary-color) 10%, white)",
                                            }}
                                        >
                                            <Icon size={20} />
                                        </span>

                                        <span
                                            className="font-medium"
                                            style={{
                                                color: isActive
                                                    ? "var(--primary-color)"
                                                    : "var(--secondary-color)",
                                            }}
                                        >
                                            {industry.title}
                                        </span>
                                    </span>

                                    <ChevronRight
                                        size={18}
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                        style={{
                                            color: isActive
                                                ? "var(--primary-color)"
                                                : "#a3a3a3",
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-7 sm:p-10">
                        <div
                            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full blur-3xl"
                            style={{
                                backgroundColor:
                                    "color-mix(in srgb, var(--primary-color) 10%, transparent)",
                            }}
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndustry.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="relative"
                            >
                                <div
                                    className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl"
                                    style={{
                                        color: "var(--text-color)",
                                        backgroundColor: "var(--primary-color)",
                                    }}
                                >
                                    <activeIndustry.icon size={26} />
                                </div>

                                <p
                                    className="mb-3 text-sm font-medium"
                                    style={{ color: "var(--primary-color)" }}
                                >
                                    Built for {activeIndustry.shortTitle}
                                </p>

                                <h3
                                    className="mb-5 text-3xl font-semibold tracking-tight sm:text-4xl"
                                    style={{ color: "var(--secondary-color)" }}
                                >
                                    {activeIndustry.title}
                                </h3>

                                <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                                    {activeIndustry.description}
                                </p>

                                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                    {activeIndustry.benefits.map((benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                                        >
                                            <span
                                                className="mt-1 h-2 w-2 shrink-0 rounded-full"
                                                style={{ backgroundColor: "var(--primary-color)" }}
                                            />

                                            <span className="text-sm leading-6 text-neutral-700">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}