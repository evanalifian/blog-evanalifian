import { Link, useParams } from "react-router";
import BlogContent from "./BlogContent";

export default function BlogView() {
  return (
    <div className="py-4">
      <article>
        <BlogContent />
      </article>
      <div className="mt-12 mb-6">
      <Link to="/blogs">Back to blog</Link>
      </div>
    </div>
  );
}
