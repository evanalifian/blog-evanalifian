import { Outlet } from "react-router";
import CTABlog from "../../components/CTABlog";
import BlogContent from "./BlogRoute";

export default function BlogView() {
  return (
    <>
      <CTABlog />
      <main className="pt-4 pb-16 mt-4">
        <div className="w-full max-w-xl mx-auto px-4">
          <article>
            <Outlet />
          </article>
        </div>
      </main>
    </>
  );
}
