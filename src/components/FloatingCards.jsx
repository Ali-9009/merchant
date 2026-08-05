import { motion } from "framer-motion";

const cards = [
    {
        src: "/assets/c-card-1.jpg",
        className:
            "z-10 -translate-x-[72%] -translate-y-[58%] -rotate-[12deg]",
        floatY: -8,
        duration: 5,
        delay: 0,

    },
    {
        src: "/assets/c-card-2.jpg",
        className:
            "z-20 -translate-x-1/2 -translate-y-1/2 -rotate-[3deg]",
        floatY: -12,
        duration: 4.5,
        delay: 0.2,
    },
    {
        src: "/assets/c-card-3.jpg",
        className:
            "z-30 -translate-x-[28%] -translate-y-[42%] rotate-[14deg]",
        floatY: -7,
        duration: 5.5,
        delay: 0.4,
    },
];

export default function FloatingCards() {
    return (
        <div className="relative mx-auto h-65 w-full max-w-130 sm:h-82">
            {/* Soft background decoration */}
            <div
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl"
                aria-hidden="true"
            />

            {cards.map((card, index) => (
                <motion.img
                    key={card.src}
                    src={card.src}
                    alt={`Payment card design ${index + 1}`}
                    loading={index === 1 ? "eager" : "lazy"}
                    className={`
            absolute left-1/2 top-1/2
            w-55 rounded-2xl object-cover
            shadow-[0_25px_60px_rgba(15,23,42,0.18)]
            sm:w-70 lg:w-77
            ${card.className}
          `}
                    initial={{
                        opacity: 0,
                        scale: 0.88,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, card.floatY, 0],
                    }}
                    transition={{
                        opacity: {
                            duration: 0.7,
                            delay: card.delay,
                        },
                        scale: {
                            duration: 0.7,
                            delay: card.delay,
                            ease: [0.22, 1, 0.36, 1],
                        },
                        y: {
                            duration: card.duration,
                            delay: card.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    whileTap={{
                        scale: 1.01,
                    }}
                    whileHover={{
                        scale: 1.04,
                        rotate: 0,
                        zIndex: 50,
                        transition: {
                            type: "spring",
                            stiffness: 180,
                            damping: 18,
                            mass: 0.8,
                        },
                    }}
                />
            ))}
        </div>
    );
}