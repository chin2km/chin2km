import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav>
      <ul className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
        <li>
          <Link
            to="/"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            🤔 About
          </Link>
        </li>
        <li>
          <Link
            to="/about/hmm"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            🤷‍♂️ Hmmm
          </Link>
        </li>
      </ul>
    </nav>
  );
}
