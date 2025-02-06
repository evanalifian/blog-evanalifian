import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";

export default function CTABlog() {
  const { category } = useParams();

  return (
    <>
      <section className="bg-black py-2 border-b border-b-zinc-900 sticky top-9">
        <div className="w-full max-w-xl mx-auto px-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-x-2 text-sm text-gray-400 transition-colors hover:text-gray-300"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="text-sm text-gray-400">Category: {category}</span>
        </div>
      </section>
    </>
  );
}
