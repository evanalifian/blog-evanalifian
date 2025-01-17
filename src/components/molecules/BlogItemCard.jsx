import LabelName from "../atoms/LabelName";
import { getSlug } from "../../assets/functions";
import { Link } from "react-router";

export default function BlogItemCard({ category, title }) {
  return (
    <div
      className="border border-zinc-300 rounded-lg bg-white p-4 transition-colors hover:border-zinc-400/70"
      title={title}
    >
      <LabelName>{category}</LabelName>
      <Link to={`/blog/${category.toLowerCase()}/${getSlug(title)}`}>
        {title}
      </Link>
    </div>
  );
}
