// src/pages/Blog.jsx

import { useMemo, useState } from "react";
import {
    ArrowRight,
    CalendarDays,
    Clock3,
    Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import { blogPosts } from "../data/blogPosts";

export default function Blog() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredPost =
        blogPosts.find((post) => post.featured) || blogPosts[0];

    const categories = [
        "All",
        ...new Set(blogPosts.map((post) => post.category)),
    ];

    const filteredPosts = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return blogPosts.filter((post) => {
            const matchesCategory =
                activeCategory === "All" ||
                post.category === activeCategory;

            const matchesSearch =
                !normalizedSearch ||
                post.title.toLowerCase().includes(normalizedSearch) ||
                post.excerpt.toLowerCase().includes(normalizedSearch) ||
                post.category.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <>
            <section className="py-12 md:py-16 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            Merchant Resources
                        </span>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-(--secondary-color) sm:text-5xl lg:text-6xl">
                            Insights to help your
                            <span className="text-(--primary-color)">
                                {" "}business grow
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Explore payment processing tips, industry insights, security
                            guidance, and practical advice for growing your business.
                        </p>
                    </div>

                    {/* Featured post */}
                    <article className="mt-16 grid overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 lg:grid-cols-2">
                        <div className="min-h-72 overflow-hidden lg:min-h-107">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                            <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-(--primary-color)">
                                Featured · {featuredPost.category}
                            </span>

                            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-(--secondary-color) sm:text-4xl">
                                {featuredPost.title}
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-gray-600">
                                {featuredPost.excerpt}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    {featuredPost.date}
                                </span>

                                <span className="flex items-center gap-2">
                                    <Clock3 className="h-4 w-4" />
                                    {featuredPost.readingTime}
                                </span>
                            </div>

                            <Link
                                to={`/blog/${featuredPost.slug}`}
                                className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-(--primary-color)"
                            >
                                Read article
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </article>

                    {/* Search and filters */}
                    <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category
                                            ? "border-(--primary-color) bg-(--primary-color) text-white"
                                            : "border-gray-200 bg-white text-gray-600 hover:border-(--primary-color) hover:text-(--primary-color)"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <label className="relative block w-full lg:max-w-sm">
                            <span className="sr-only">Search articles</span>

                            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search articles..."
                                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-base outline-none transition focus:border-(--primary-color) focus:ring-4 focus:ring-blue-100"
                            />
                        </label>
                    </div>

                    {/* Blog grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-12 rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
                            <h2 className="text-2xl font-semibold text-(--secondary-color)">
                                No articles found
                            </h2>

                            <p className="mt-3 text-gray-600">
                                Try another keyword or category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function BlogCard({ post }) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:shadow-lg">
            <Link
                to={`/blog/${post.slug}`}
                className="block aspect-16/10 overflow-hidden"
            >
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="p-6">
                <span className="text-sm font-semibold text-(--primary-color)">
                    {post.category}
                </span>

                <h2 className="mt-3 text-2xl font-semibold leading-tight text-(--secondary-color)">
                    <Link
                        to={`/blog/${post.slug}`}
                        className="transition-colors hover:text-(--primary-color)"
                    >
                        {post.title}
                    </Link>
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                    {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {post.date}
                    </span>

                    <span className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4" />
                        {post.readingTime}
                    </span>
                </div>

                <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-(--primary-color)"
                >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}