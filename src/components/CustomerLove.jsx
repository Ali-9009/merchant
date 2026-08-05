import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    BadgeDollarSign,
    Check,
    LockKeyhole,
    Zap,
} from "lucide-react";

const benefits = [
    {
        title: "Lower Rates",
        label: "Transparent pricing",
        description:
            "Get competitive rates with full disclosure, no hidden fees, and no surprise setup costs.",
        icon: BadgeDollarSign,
        highlights: ["Competitive rates", "No hidden fees", "No setup costs"],
    },
    {
        title: "Faster Payments",
        label: "Reliable cash flow",
        description:
            "Receive your funds on time and keep cash moving back into your business.",
        icon: Zap,
        highlights: ["Fast funding", "Reliable deposits", "Better cash flow"],
    },
    {
        title: "Secure Transactions",
        label: "Trusted protection",
        description:
            "First Data™ powered point-of-sale technology helps protect every transaction.",
        icon: LockKeyhole,
        highlights: ["Secure payments", "Trusted technology", "Protected transactions"],
    },
];

export default function CustomerLove() {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-80px",
    });

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-12 md:py-16 px-6"
        >
            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
                >
                    <h2 className="primary-heading">
                        What makes us so loved by our customers?
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Simple pricing, faster access to funds, and secure payment
                        technology built to support your business.
                    </p>
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={benefit.title}
                            benefit={benefit}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenefitCard({ benefit, index, isInView }) {
    const Icon = benefit.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:border-(--primary-color) hover:shadow-xl sm:p-8"
        >
            <div className="mb-10 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-(--primary-color) transition-colors duration-300 group-hover:bg-(--primary-color) group-hover:text-white">
                    <Icon size={23} />
                </div>

                <span className="text-sm font-medium text-slate-300">
                    {benefit.number}
                </span>
            </div>

            <p className="mb-2 text-sm font-medium text-(--primary-color)">
                {benefit.label}
            </p>

            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                {benefit.title}
            </h3>

            <p className="mb-7 leading-7 text-slate-600">
                {benefit.description}
            </p>

            <div className="space-y-3">
                {benefit.highlights.map((highlight) => (
                    <div
                        key={highlight}
                        className="flex items-center gap-3 text-sm text-slate-700"
                    >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-(--primary-color)">
                            <Check size={12} strokeWidth={3} />
                        </span>

                        {highlight}
                    </div>
                ))}
            </div>

            <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-(--primary-color) transition-transform duration-300 group-hover:scale-x-100" />
        </motion.article>
    );
}