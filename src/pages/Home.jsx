import { ArrowRight, ClipboardList, Code2, SearchCheck, MonitorSmartphone, Headset, ArrowUpRight, BadgeDollarSign, Handshake } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import ContactUs from "./ContactUs";
import FloatingCards from "../components/FloatingCards";

const steps = [
  {
    icon: SearchCheck,
    title: "Fast Approvals",
    description:
      "We strive to make onboarding quick and easy so you can continue running your business and begin savings!",
  },
  {
    icon: ClipboardList,
    title: "No Long-Term Contracts & No Early Termination Fees",
    description:
      "We support our clients in doing what’s best for their business, which is why we don’t believe in long-term contracts or Early Termination Fees.",
  },
  {
    icon: Code2,
    title: "Transparency",
    description:
      "Our commitment to having transparency means you know exactly what you are paying before you sign your contract.",
  },
];

export default function Home() {
  return (
    <>
      <section className="md:pt-22 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl sm:text-5xl">
                Card Processing <br /> Made Easy for You!
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-gray-600">
                Not only do we provide the SAVINGS from excess credit card fees, but we are a Solutions-Focused company.  Our aim is to relieve you of any challenges you may face so you can focus on your business and grow your profits!
              </p>

              <PrimaryButton to="/contact-us" className="mt-3">
                Analyze My Savings
                <ArrowRight className="ml-2 h-4 w-4" />
              </PrimaryButton>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/assets/users.png"
                  alt="Active users"
                  className="h-14 w-auto"
                />

                <div>
                  <h4 className="text-2xl font-semibold">
                    10.2k+
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Active users around the world
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <FloatingCards />
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="relative mx-auto max-w-7xl">

          <h2 className="primary-heading text-center">
            What We Offer!
          </h2>

          {/* Process */}
          <div className="relative mt-12">
            {/* Desktop Line */}
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-linear-to-r from-(--primary-color)/20 via-(--primary-color) to-(--primary-color)/20 lg:block" />

            <div className="grid gap-10 lg:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="relative text-center"
                  >

                    {/* Icon */}
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-(--primary-color)/30 bg-(--primary-color) text-white">
                      <Icon size={34} />
                    </div>

                    {/* Card */}
                    <div className="mt-8 rounded-[28px] border border-gray-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-(--primary-color)/50 hover:bg-white/10">

                      <h3 className="mt-4 text-xl font-semibold ">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              Why Choose Us
            </span>

            <h2 className="mt-4 primary-heading">
              Everything You Need To Accept Payments
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              From free payment terminals to dedicated customer support, we make
              payment processing simple for every business.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Card */}
            <article className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary-color) text-white">
                <MonitorSmartphone size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-950">
                Need a Terminal?
              </h3>

              <p className="mt-3 text-gray-600">
                Get professional payment terminal equipment with no upfront
                hardware cost, helping you start accepting payments immediately.
              </p>

              <div className="mt-8 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                ✓ No Cost Equipment
              </div>
            </article>

            {/* Card */}
            <article className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary-color) text-white">
                <Headset size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-950">
                Need Support?
              </h3>

              <p className="mt-3 text-gray-600">
                Our concierge support team provides fast, personalized assistance
                whenever you need help with your payment solutions.
              </p>

              <div className="mt-8 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                ✓ Concierge Customer Support
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="flex justify-center item-center">
              <img
                src="/assets/home-2.jpg"
                alt=""
                loading="eager"
                fetchPriority="high"
                className="rounded-2xl"
              />
            </div>

            <div>
              <h1 className="primary-heading">
                Here at Merchant Businesses, we treat our merchants like family.

              </h1>

              <p className="mt-6 max-w-2xl text-lg text-gray-600">
                We know how important your business is to you, so we take extra care in ensuring you have all the tools, products and support you need to make credit card processing easy.
              </p>

              <PrimaryButton to="/contact-us" className="mt-3">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </PrimaryButton>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Our Mission
              </span>

              <h2 className="mt-5 primary-heading">
                Payment processing built around your business
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                At Merchant Businesses, our mission is to provide customized
                credit card processing solutions that fit the unique needs of
                every merchant.
              </p>

              <p className="mt-4 text-gray-600">
                By helping businesses reduce processing costs and operate more
                efficiently, we give merchants more room to grow their revenue,
                strengthen their business, and increase their profits.
              </p>

              <div className="mt-8">
                <PrimaryButton to="/contact-us">
                  Find Your Payment Solution
                  <ArrowUpRight />
                </PrimaryButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-(--primary-color) p-8 text-white sm:p-10">
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  What drives us
                </p>

                <blockquote className="mt-5 text-2xl font-semibold leading-9 sm:text-3xl">
                  Helping merchants save more, grow faster, and keep more of what
                  they earn.
                </blockquote>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Handshake
                      className="h-7 w-7"
                      aria-hidden="true"
                    />

                    <h3 className="mt-4 font-semibold">
                      Customized Solutions
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      Payment services designed around each merchant’s needs.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <BadgeDollarSign
                      className="h-7 w-7"
                      aria-hidden="true"
                    />

                    <h3 className="mt-4 font-semibold">
                      Greater Savings
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      Lower processing costs that support long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}