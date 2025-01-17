import { blogs } from "../../assets/utils";
import BlogItemCard from "../molecules/BlogItemCard";

export default function BlogLists() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {blogs.map(blog => (
        <BlogItemCard key={blog.title} {...blog} />
      ))}
    </div>
  );
}
