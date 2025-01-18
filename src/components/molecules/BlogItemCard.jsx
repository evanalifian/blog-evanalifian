import LabelName from "../atoms/LabelText";
import { getSlug } from "../../assets/functions";
import { Link } from "react-router";

export default function BlogItemCard({ category, title }) {
  return (
    <div
      className="flex flex-col  gap-y-1 border border-zinc-300 rounded-lg bg-white p-4 transition-colors hover:border-zinc-400/70"
      title={title}
    >
      <LabelName>Category: {category}</LabelName>
      <Link to={`/blog/${category.toLowerCase()}/${getSlug(title)}`} className="whitespace-pre text-ellipsis overflow-hidden font-medium">
        {title}
      </Link>
    </div>
  );
}
