import { Link } from "react-router-dom";

export default function PrimaryButton({
    children,
    to,
    href,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) {
    const styles = `
    inline-flex items-center justify-center gap-2
    rounded-lg bg-(--primary-color) px-6 py-3 
    text-sm font-semibold text-white
    transition-all duration-200
    hover:bg-(--secondary-color)
    active:scale-[0.98]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-(--primary-color)
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
    ${className}
  `;

    if (to) {
        return (
            <Link
                to={to}
                onClick={onClick}
                className={styles}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                className={styles}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            {children}
        </button>
    );
}