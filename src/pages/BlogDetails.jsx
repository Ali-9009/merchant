// src/pages/BlogDetails.jsx

import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    UserRound,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { blogPosts } from "../data/blogPosts";

export default function BlogDetails() {
    const { blogSlug } = useParams();

    const post = blogPosts.find(
        (blogPost) => blogPost.slug === blogSlug,
    );

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const relatedPosts = blogPosts
        .filter(
            (item) =>
                item.slug !== post.slug &&
                item.category === post.category,
        )
        .slice(0, 3);

    const fallbackRelatedPosts = blogPosts
        .filter((item) => item.slug !== post.slug)
        .slice(0, 3);

    const visibleRelatedPosts =
        relatedPosts.length > 0
            ? relatedPosts
            : fallbackRelatedPosts;

    return (
        <>
            <article className="py-12 md:py-16 px-6">
                <div className="mx-auto max-w-7xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-(--primary-color)"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to blog
                    </Link>

                    <header className="mx-auto mt-10 max-w-4xl text-center">

                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            {post.category}
                        </span>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-(--secondary-color) sm:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            {post.excerpt}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <UserRound className="h-4 w-4" />
                                {post.author}
                            </span>

                            <span className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                {post.date}
                            </span>

                            <span className="flex items-center gap-2">
                                <Clock3 className="h-4 w-4" />
                                {post.readingTime}
                            </span>
                        </div>
                    </header>

                    <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="aspect-16/8 w-full object-cover"
                        />
                    </div>

                    <div className="mx-auto mt-14 max-w-3xl">
                        <BlogContent content={post.content} />
                    </div>
                </div>
            </article>

            <RelatedPosts posts={visibleRelatedPosts} />
        </>
    );
}

function BlogContent({ content }) {
    return (
        <div className="space-y-6">
            {content.map((block, index) => {
                if (block.type === "heading") {
                    return (
                        <h2
                            key={`${block.type}-${index}`}
                            className="pt-5 text-3xl font-semibold tracking-tight text-(--secondary-color)"
                        >
                            {block.text}
                        </h2>
                    );
                }

                if (block.type === "paragraph") {
                    return (
                        <p
                            key={`${block.type}-${index}`}
                            className="text-lg leading-8 text-gray-600"
                        >
                            {block.text}
                        </p>
                    );
                }

                if (block.type === "list") {
                    return (
                        <ul
                            key={`${block.type}-${index}`}
                            className="space-y-3 pl-2"
                        >
                            {block.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-lg leading-8 text-gray-600"
                                >
                                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-(--primary-color)" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "quote") {
                    return (
                        <blockquote
                            key={`${block.type}-${index}`}
                            className="my-9 border-l-4 border-(--primary-color) bg-blue-50 px-6 py-5 text-xl font-medium leading-8 text-(--secondary-color)"
                        >
                            {block.text}
                        </blockquote>
                    );
                }

                return null;
            })}
        </div>
    );
}

function RelatedPosts({ posts }) {
    return (
        <section className="border-t border-gray-200 bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <span className="text-sm font-semibold text-(--primary-color)">
                            Continue reading
                        </span>

                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-(--secondary-color)">
                            Related articles
                        </h2>
                    </div>

                    <Link
                        to="/blog"
                        className="hidden items-center gap-2 font-semibold text-(--primary-color) sm:inline-flex"
                    >
                        View all articles
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
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

                                <h3 className="mt-3 text-xl font-semibold text-(--secondary-color)">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="hover:text-(--primary-color)"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {post.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-(--primary-color)"
                                >
                                    Read article
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}