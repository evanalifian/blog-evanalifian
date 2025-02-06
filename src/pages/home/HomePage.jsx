import BlogList from "../../components/BlogList";

export default function HomePage() {
  return (
    <main className="pt-4 pb-16 mt-4">
      <div className="w-full max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold m-0">Evan Alifian Blog</h1>
        <p className="mt-2">
          In this blog, I want to share my thoughts about programming topics, my
          tech stack, and whatever i like. I hope you enjoy to read my blog.
        </p>
        <BlogList />
      </div>
    </main>
  );
}
