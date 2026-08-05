// src/data/industries.js

import {
    Fuel,
    Hotel,
    Laptop,
    ShoppingBasket,
    ShoppingBag,
    UtensilsCrossed,
} from "lucide-react";

export const industries = [
    {
        slug: "hotels-hospitality",
        title: "Hotels & Hospitality",
        shortDescription:
            "Secure and flexible payment solutions designed for hotels, motels, and hospitality businesses.",
        description:
            "Hotels and hospitality businesses can streamline payment processing, accept payments across multiple locations, and deliver a smoother guest experience with our secure merchant solutions.",
        icon: Hotel,
    },
    {
        slug: "restaurants-cafes",
        title: "Restaurants & Cafés",
        shortDescription:
            "Fast payment processing that keeps service moving and customers satisfied.",
        description:
            "Our restaurant payment solutions help businesses process transactions quickly, support flexible payment options, and improve the overall customer experience.",
        icon: UtensilsCrossed,
    },
    {
        slug: "e-commerce",
        title: "E-Commerce",
        shortDescription:
            "Accept secure online payments through a smooth and reliable checkout experience.",
        description:
            "Our e-commerce solutions help businesses accept major credit cards online while providing customers with a secure and convenient checkout experience.",
        icon: Laptop,
    },
    {
        slug: "retail-stores",
        title: "Retail Stores",
        shortDescription:
            "Reliable point-of-sale technology for modern retail businesses.",
        description:
            "Retail businesses can simplify checkout, protect transactions, and manage payments more efficiently with flexible point-of-sale solutions.",
        icon: ShoppingBag,
    },
    {
        slug: "grocery-stores",
        title: "Grocery Stores",
        shortDescription:
            "Dependable processing built for busy and high-volume checkout environments.",
        description:
            "Our payment solutions help grocery stores process high transaction volumes quickly while maintaining security and reliability.",
        icon: ShoppingBasket,
    },
    {
        slug: "gas-stations",
        title: "Gas Stations",
        shortDescription:
            "Fast and secure payments for fuel pumps and convenience stores.",
        description:
            "Gas stations can process payments quickly at the pump and inside the store with secure and dependable payment technology.",
        icon: Fuel,
    },
];