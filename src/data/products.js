import {
    BadgeCheck,
    CheckCircle2,
    CreditCard,
    FileCheck2,
    Gauge,
    Globe2,
    LayoutDashboard,
    MonitorSmartphone,
    Printer,
    Radio,
    ShieldCheck,
    ShoppingCart,
    Smartphone,
    Store,
    Wifi,
} from "lucide-react";

export const products = [

    {
        id: "fd410",
        name: "FD410",
        label: "Wireless Terminal",
        image: "/assets/product-1.png",

        eyebrow: "Mobile payment solution",

        headline:
            "Accept payments securely anywhere your business takes you!",

        intro:
            "The FD410 is a wireless, hand-held POS system with a full range of payment options.",

        description:
            "The FD410 terminal from First Data is a wireless, hand-held point-of-sale device that merchants can easily use remotely while providing customers with a complete range of payment options. Its touch-screen interface makes it simple to learn and operate, while wireless connectivity allows your business to accept payments from almost anywhere.",

        secondaryDescription:
            "Process credit cards, debit cards, gift cards, personal paper checks, and EBT through one dependable terminal. Its store-and-forward capability also helps preserve card-present rates when a wireless signal is temporarily unavailable.",

        howItWorksTitle:
            "Accept payments securely while your business is on the move.",

        howItWorksDescription:
            "The FD410 terminal gives mobile businesses a lightweight and flexible way to process transactions from almost any location.",

        features: [
            {
                title: "True mobility",
                description:
                    "Lightweight and ergonomically shaped for easy use wherever your business operates.",
                icon: Smartphone,
            },
            {
                title: "Wireless connectivity",
                description:
                    "Uses 3G technology over AT&T's GPRS network for fast data transmission and wider coverage.",
                icon: Wifi,
            },
            {
                title: "Multiple payment types",
                description:
                    "Accept credit, debit, gift cards, personal checks, and EBT from a single terminal.",
                icon: CreditCard,
            },
            {
                title: "Store and forward",
                description:
                    "Continue accepting transactions without a signal and process them when connectivity returns.",
                icon: Radio,
            },
        ],

        paymentMethods: [
            "Major credit cards",
            "Debit cards",
            "Gift cards",
            "Paper checks",
            "EBT",
        ],

        industries: [
            "Charity Functions & Events",
            "Event Marketing & Trade Shows",
            "Home Services & Delivery",
        ],
    },

    {
        id: "fd200",
        name: "FD200",
        label: "Multifunction Terminal",
        image: "/assets/product-2.png",

        eyebrow: "All-in-one payment solution",

        headline:
            "Process cards and checks from one powerful countertop terminal.",

        intro:
            "The FD200 virtually eliminates the need for several devices by handling multiple forms of payment through one compact terminal.",

        description:
            "Through optional Wi-Fi, Internet protocol, or dial-up communications, the FD200 processes transactions quickly and securely. Its advanced built-in check reader and imager supports TeleCheck Electronic Check Acceptance and lockbox services, including warranty and verification options.",

        secondaryDescription:
            "These services can reduce the risks associated with paper checks, save time by removing the need to take checks to the bank, and help protect customer information by returning the original check at the point of sale.",

        howItWorksTitle:
            "A complete card and check-processing solution in one device.",

        howItWorksDescription:
            "The FD200 accepts major credit cards through its magnetic-strip reader and processes paper checks through its built-in TeleCheck reader and imager.",

        features: [
            {
                title: "Built-in check reader",
                description:
                    "Processes paper checks through TeleCheck ECA, warranty, and verification services.",
                icon: FileCheck2,
            },
            {
                title: "Flexible connections",
                description:
                    "Processes transactions through optional Wi-Fi, IP, or dial-up connectivity.",
                icon: Wifi,
            },
            {
                title: "Dual printers",
                description:
                    "A thermal receipt printer and dedicated inkjet check printer help speed up transactions.",
                icon: Printer,
            },
            {
                title: "Fraud protection",
                description:
                    "Receipts display only the last four card digits to help protect against identity theft.",
                icon: ShieldCheck,
            },
        ],

        paymentMethods: [
            "Visa",
            "American Express",
            "Mastercard",
            "Diners Club",
            "Discover",
            "JCB",
            "Paper checks",
        ],

        additionalFeatures: [
            "TeleCheck Electronic Check Acceptance",
            "Check warranty and verification",
            "Optional Dynamic Currency Conversion",
            "Fast downloads",
            "Thermal receipt printing",
            "Inkjet check voiding",
        ],

        industries: [
            "Automotive",
            "Restaurants",
            "Retailers",
        ],
    },

    {
        id: "fd130",
        name: "FD130",
        label: "EMV-Ready Terminal",
        image: "/assets/product-3.png",

        eyebrow: "Secure countertop terminal",

        headline:
            "Get your business ready for secure EMV chip-enabled payments.",

        intro:
            "The FD130 is an affordable, compact terminal that combines performance, reliability, and ease of use.",

        description:
            "The FD130 is ready for EMV technology, the modern payment security standard. It allows your business to accept transactions when a customer presents an EMV chip card, adding an important layer of protection to every payment.",

        secondaryDescription:
            "Along with EMV chip cards, the FD130 supports major credit cards, contactless payments, debit cards, gift cards, personal paper checks, and EBT. Its compact design and simple on-screen prompts make installation and daily use straightforward.",

        howItWorksTitle:
            "A compact terminal built for secure everyday payments.",

        howItWorksDescription:
            "The FD130 safely accepts card payments while supporting modern EMV chip and contactless technology.",

        features: [
            {
                title: "EMV chip ready",
                description:
                    "Accept EMV chip-enabled cards with an additional layer of transaction security.",
                icon: ShieldCheck,
            },
            {
                title: "Easy installation",
                description:
                    "Simple setup with clear, easy-to-follow prompts displayed directly on the terminal.",
                icon: CheckCircle2,
            },
            {
                title: "Contactless payments",
                description:
                    "Accept contactless cards, mobile wallets, gift cards, and major credit cards.",
                icon: CreditCard,
            },
            {
                title: "Optional add-ons",
                description:
                    "Add a check reader or PIN pad for debit, signature, and electronic check transactions.",
                icon: Gauge,
            },
        ],

        paymentMethods: [
            "EMV chip cards",
            "Major credit cards",
            "Contactless payments",
            "Debit cards",
            "Gift cards",
            "Paper checks",
            "EBT",
        ],

        additionalFeatures: [
            "TeleCheck Electronic Check Acceptance",
            "Optional PIN pad",
            "Optional check reader",
            "Optional Dynamic Currency Conversion",
            "Compact countertop design",
        ],

        industries: [
            "Quick-Service Restaurants",
            "Restaurants",
            "Retailers",
        ],
    },

    {
        id: "fd-terminals",
        name: "FD Terminals",
        label: "First Data Terminals",
        image: "/assets/product-4.png",

        eyebrow: "Reliable payment hardware",

        headline:
            "Choose from dependable First Data terminals built for modern businesses.",

        intro:
            "FD Terminals provide flexible countertop, wireless, and multifunction payment options for different business environments.",

        description:
            "Our FD terminal lineup gives businesses access to secure and reliable payment equipment designed for daily transaction processing. Whether you need a compact countertop terminal, a wireless solution, or an all-in-one device, there is an option suited to your workflow.",

        secondaryDescription:
            "These terminals support a range of payment methods and connectivity options, helping businesses process transactions efficiently while providing customers with a smooth checkout experience.",

        howItWorksTitle:
            "Flexible terminal options for the way your business operates.",

        howItWorksDescription:
            "Select from wireless, countertop, and multifunction terminals depending on your payment processing and mobility needs.",

        features: [
            {
                title: "Multiple terminal options",
                description:
                    "Choose from countertop, wireless, and multifunction payment devices.",
                icon: CreditCard,
            },
            {
                title: "Secure processing",
                description:
                    "Process transactions through dependable and secure payment technology.",
                icon: ShieldCheck,
            },
            {
                title: "Flexible connectivity",
                description:
                    "Available connectivity options support different business environments.",
                icon: Wifi,
            },
            {
                title: "Easy daily use",
                description:
                    "Simple interfaces help teams process payments efficiently.",
                icon: CheckCircle2,
            },
        ],

        paymentMethods: [
            "EMV chip cards",
            "Major credit cards",
            "Debit cards",
            "Contactless payments",
            "Gift cards",
            "EBT",
        ],

        additionalFeatures: [
            "Countertop terminal options",
            "Wireless terminal options",
            "Contactless payment support",
            "Secure transaction processing",
            "Business-specific configurations",
        ],

        industries: [
            "Restaurants",
            "Retail Stores",
            "Hospitality",
            "Professional Services",
        ],
    },

    {
        id: "clover-pos",
        name: "Clover POS",
        label: "Smart POS System",
        image: "/assets/product-5.png",

        eyebrow: "Modern point-of-sale system",

        headline:
            "Manage payments and daily business operations from one flexible POS platform.",

        intro:
            "Clover POS combines payment processing with tools that help businesses manage checkout and everyday operations.",

        description:
            "Clover POS offers businesses a modern and user-friendly way to accept payments, manage transactions, and support daily operations. Its flexible hardware options make it suitable for countertop, mobile, and customer-facing checkout environments.",

        secondaryDescription:
            "The platform can support a variety of business types, from retail stores and restaurants to service-based companies looking for a streamlined point-of-sale experience.",

        howItWorksTitle:
            "A flexible POS platform designed around your business.",

        howItWorksDescription:
            "Choose hardware and software tools that match your checkout environment and operational needs.",

        features: [
            {
                title: "Flexible hardware",
                description:
                    "Choose from compact, countertop, handheld, and customer-facing devices.",
                icon: MonitorSmartphone,
            },
            {
                title: "Simple checkout",
                description:
                    "Provide customers with a clear and efficient payment experience.",
                icon: ShoppingCart,
            },
            {
                title: "Business management",
                description:
                    "Access tools that can help organize transactions and daily operations.",
                icon: LayoutDashboard,
            },
            {
                title: "Secure payments",
                description:
                    "Accept supported payment methods through secure processing technology.",
                icon: ShieldCheck,
            },
        ],

        paymentMethods: [
            "EMV chip cards",
            "Credit cards",
            "Debit cards",
            "Contactless payments",
            "Mobile wallets",
            "Gift cards",
        ],

        additionalFeatures: [
            "Countertop and handheld options",
            "Transaction management",
            "Customer-facing checkout",
            "Business reporting tools",
            "Optional business applications",
        ],

        industries: [
            "Restaurants",
            "Retail Stores",
            "Salons",
            "Professional Services",
        ],
    },

    {
        id: "square",
        name: "Square",
        label: "Payment & POS Platform",
        image: "/assets/product-6.png",

        eyebrow: "Simple payment solution",

        headline:
            "Accept payments with a simple point-of-sale solution built for growing businesses.",

        intro:
            "Square provides flexible payment hardware and POS tools for in-person and mobile transactions.",

        description:
            "Square can help businesses accept payments through countertop, handheld, and mobile devices. Its straightforward interface makes it suitable for businesses that want a simple payment and checkout experience.",

        secondaryDescription:
            "From small retail businesses to service providers and food vendors, Square offers adaptable payment options for different transaction environments.",

        howItWorksTitle:
            "Simple tools for accepting payments wherever you do business.",

        howItWorksDescription:
            "Select the device and checkout setup that best fits your business location and workflow.",

        features: [
            {
                title: "Easy setup",
                description:
                    "Get started with a straightforward payment and checkout interface.",
                icon: CheckCircle2,
            },
            {
                title: "Mobile payments",
                description:
                    "Accept payments from mobile and flexible business environments.",
                icon: Smartphone,
            },
            {
                title: "Multiple device options",
                description:
                    "Use compatible readers, terminals, and countertop POS equipment.",
                icon: MonitorSmartphone,
            },
            {
                title: "Business tools",
                description:
                    "Manage transactions and basic business activity from one platform.",
                icon: LayoutDashboard,
            },
        ],

        paymentMethods: [
            "Credit cards",
            "Debit cards",
            "EMV chip cards",
            "Contactless payments",
            "Mobile wallets",
        ],

        additionalFeatures: [
            "Mobile payment options",
            "Countertop POS options",
            "Transaction history",
            "Customer-facing checkout",
            "Business management tools",
        ],

        industries: [
            "Retail Stores",
            "Food Vendors",
            "Professional Services",
            "Mobile Businesses",
        ],
    },

    {
        id: "dejavoo",
        name: "Dejavoo",
        label: "Payment Terminals",
        image: "/assets/product-7.png",

        eyebrow: "Flexible terminal solutions",

        headline:
            "Secure and dependable payment terminals for a wide range of businesses.",

        intro:
            "Dejavoo provides terminal and payment hardware options for countertop, wireless, and integrated environments.",

        description:
            "Dejavoo offers payment terminal solutions designed for different checkout environments, including countertop, wireless, PIN pad, and POS configurations. Businesses can select hardware based on their processing and mobility needs.",

        secondaryDescription:
            "Its product families are designed to support secure card payments and flexible integration across retail, hospitality, service, and mobile business environments.",

        howItWorksTitle:
            "Payment hardware designed for flexibility and dependable performance.",

        howItWorksDescription:
            "Choose a Dejavoo terminal based on your preferred connection type, checkout setup, and processing requirements.",

        features: [
            {
                title: "Terminal variety",
                description:
                    "Choose from countertop, wireless, PIN pad, and integrated payment devices.",
                icon: CreditCard,
            },
            {
                title: "Flexible connectivity",
                description:
                    "Available terminal options support different connection environments.",
                icon: Wifi,
            },
            {
                title: "POS integration",
                description:
                    "Compatible solutions can support integrated point-of-sale environments.",
                icon: LayoutDashboard,
            },
            {
                title: "Secure transactions",
                description:
                    "Designed to help businesses process card payments securely.",
                icon: ShieldCheck,
            },
        ],

        paymentMethods: [
            "EMV chip cards",
            "Credit cards",
            "Debit cards",
            "Contactless payments",
            "Mobile wallets",
        ],

        additionalFeatures: [
            "Countertop terminals",
            "Wireless terminals",
            "PIN pad options",
            "POS integration options",
            "Multiple connectivity choices",
        ],

        industries: [
            "Restaurants",
            "Retail Stores",
            "Hospitality",
            "Mobile Businesses",
        ],
    },

    {
        id: "pos-approved-vendor",
        name: "POS Approved Vendor",
        label: "Approved POS Solutions",
        image: "/assets/product-8.png",

        eyebrow: "Compatible POS solutions",

        headline:
            "Connect your business with approved point-of-sale vendors and payment solutions.",

        intro:
            "We work with approved POS providers to help businesses select compatible payment equipment and software.",

        description:
            "Our approved vendor options give businesses access to a broader range of point-of-sale systems. This makes it easier to choose a solution that fits existing workflows, industry requirements, and payment processing needs.",

        secondaryDescription:
            "Whether your business needs a restaurant POS, retail checkout system, mobile terminal, or integrated payment setup, we can help identify a compatible vendor solution.",

        howItWorksTitle:
            "Find a POS solution that fits your processing environment.",

        howItWorksDescription:
            "Review compatible vendor options and select the system that best matches your business requirements.",

        features: [
            {
                title: "Approved providers",
                description:
                    "Access compatible point-of-sale systems from supported vendors.",
                icon: BadgeCheck,
            },
            {
                title: "Business compatibility",
                description:
                    "Choose solutions based on your industry and operational workflow.",
                icon: Store,
            },
            {
                title: "Integration support",
                description:
                    "Connect supported POS equipment with your payment processing setup.",
                icon: Globe2,
            },
            {
                title: "Guided selection",
                description:
                    "Get help identifying the right vendor and equipment for your business.",
                icon: CheckCircle2,
            },
        ],

        paymentMethods: [
            "Credit cards",
            "Debit cards",
            "EMV chip cards",
            "Contactless payments",
            "Mobile wallets",
        ],

        additionalFeatures: [
            "Multiple vendor options",
            "Industry-specific POS systems",
            "Integrated payment solutions",
            "Hardware compatibility guidance",
            "Setup and configuration support",
        ],

        industries: [
            "Restaurants",
            "Retail Stores",
            "Hospitality",
            "Professional Services",
        ],
    },
];

export const getProductById = (productId) =>
    products.find((product) => product.id === productId);

export const getProductByName = (productName) =>
    products.find(
        (product) =>
            product.name.toLowerCase() === productName.toLowerCase(),
    );