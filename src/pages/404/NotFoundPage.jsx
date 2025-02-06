import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="pt-4 pb-16 mt-4">
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center pt-16">
          <h1 className="text-center">Oops! Page not found.</h1>
          <Link
            to={"/"}
            className="text-blue-600 transition-colors hover:text-blue-500"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
