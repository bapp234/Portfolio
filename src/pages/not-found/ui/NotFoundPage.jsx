import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <span
        className="
          text-7xl
          font-black
          text-[var(--accent)]
          md:text-9xl
        "
      >
        404
      </span>

      <h1
        className="
          mt-6
          text-3xl
          font-black
          text-[var(--text)]
        "
      >
        Page Not Found
      </h1>

      <p
        className="
          mt-3
          max-w-md
          text-[var(--muted)]
        "
      >
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="
          mt-8
          rounded-full
          bg-[var(--accent)]
          px-6
          py-3
          font-semibold
          text-[var(--button-text)]
          transition
          hover:-translate-y-1
        "
      >
        Back Home
      </Link>
    </main>
  );
}