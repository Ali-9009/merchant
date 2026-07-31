import { ArrowRight, Check } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";

const benefits = [
    "We serve all industries — restaurants, retail stores, spas, dry cleaning and tailor services, medical and dental offices, and many more.",
    "We can equip you with mobile and contactless payment solutions.",
    "We also have point-of-sale solutions to meet your needs.",
];

const inputStyles = `
  mt-2 w-full rounded-xl border border-gray-200
  bg-gray-50 px-4 py-3.5 text-gray-950
  outline-none transition
  placeholder:text-gray-400
  hover:border-gray-300
  focus:border-blue-500 focus:bg-white
  focus:ring-4 focus:ring-blue-100
`;

export default function ContactUs() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    };

    return (
        <section className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Content */}
                    <div className="lg:sticky lg:top-28">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            Get Started
                        </span>

                        <h2 className="mt-4 primary-heading">
                            Look No Further
                        </h2>

                        <p className="mt-3 text-lg text-gray-600">
                            Our partnering process is quick and simple. Just fill out the
                            contact form with your details and the services you’re seeking,
                            and we’ll be right with you.
                        </p>

                        <ul className="mt-10 space-y-5">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex max-w-xl items-start gap-4"
                                >
                                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-(--primary-color)">
                                        <Check className="size-4" aria-hidden="true" />
                                    </span>

                                    <p className="leading-7 text-gray-700">
                                        {benefit}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-950">
                                Tell us what you need
                            </h3>

                            <p className="mt-2 leading-7 text-gray-600">
                                Complete the form and our team will contact you shortly.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        First name
                                    </label>

                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        placeholder="John"
                                        className={inputStyles}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Last name
                                    </label>

                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        placeholder="Smith"
                                        className={inputStyles}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="john@company.com"
                                        className={inputStyles}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Phone number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        placeholder="(555) 123-4567"
                                        className={inputStyles}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-gray-900"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us a little about your business and what you need."
                                    className={`${inputStyles} resize-none`}
                                />
                            </div>

                            <PrimaryButton
                                type="submit"
                                className="w-full py-3.5 sm:w-auto"
                            >
                                Submit Request
                                <ArrowRight className="size-4" aria-hidden="true" />
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}