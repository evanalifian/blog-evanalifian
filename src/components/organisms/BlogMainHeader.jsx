import SearchBar from "../atoms/SearchBar";

export default function BlogMainHeader() {
  return (
    <header className="sticky top-0 py-4 space-y-4 mb-6 backdrop-blur-sm bg-white/70 border-b border-zinc-300">
      <div>
        <h1 className="text-2xl text-blue-500 font-semibold my-0">All Blog Posts</h1>
        <p className="my-0">I hope you enjoy with my writings, folks.</p>
      </div>
      <SearchBar />
    </header>
  );
}
