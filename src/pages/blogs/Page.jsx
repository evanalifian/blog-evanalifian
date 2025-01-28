import { Link, useParams } from "react-router";
import BlogContent from "./BlogContent";
import { ArrowLeft } from "lucide-react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";

export default function BlogView() {
  const { category } = useParams();

  return (
    <>
      <HeaderNav />
      <section className="bg-white py-2 border-b border-b-zinc-300 sticky top-9">
        <div className="w-full max-w-xl mx-auto px-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-x-2 text-sm text-zinc-500 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="text-sm">Category: {category}</span>
        </div>
      </section>
      <main className="pt-4 pb-8 mt-4">
        <div className="w-full max-w-xl mx-auto px-4">
          <article>
            <BlogContent />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
