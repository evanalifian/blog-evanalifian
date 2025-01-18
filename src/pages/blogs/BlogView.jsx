import { Link, useParams } from "react-router";
import BlogContent from "./BlogContent";
import { ArrowLeft } from "lucide-react";

export default function BlogView() {
  return (
    <div className="py-4">
      <div className="mb-12">
        <Link to="/blog" className="flex items-center gap-x-2 text_hover"><ArrowLeft size={18} /> Back to blog</Link>
      </div>
      <article>
        <BlogContent />
      </article>
    </div>
  );
}
