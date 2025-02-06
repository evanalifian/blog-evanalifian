import { blogs } from "../assets/utils";
import {
  BlogCard,
  BlogCardButton,
  BlogCardContent,
  BlogCardHeader,
  BlogCardLabel,
  BlogCardText,
  BlogCardTitile,
} from "./BlogCard";
import { getSlug } from "../assets/functions";

export default function BlogList() {
  return (
    <div className="flex flex-col gap-y-4 mt-14">
      {blogs.map((blog) => (
        <BlogCard key={blog.title}>
          <BlogCardHeader>
            <BlogCardLabel>Category: {blog.category}</BlogCardLabel>
            <BlogCardTitile>{blog.title}</BlogCardTitile>
          </BlogCardHeader>
          <BlogCardContent>
            <BlogCardText>{blog.desc}</BlogCardText>
            <BlogCardButton
              link={`/blog/${blog.category.toLowerCase()}/${getSlug(
                blog.title
              )}`}
            >
              Read More
            </BlogCardButton>
          </BlogCardContent>
        </BlogCard>
      ))}
    </div>
  );
}
