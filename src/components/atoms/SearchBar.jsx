import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <label htmlFor="blog_title" className="block w-full relative">
      <Search size={18} className="stroke-zinc-700 absolute left-4 top-2.5" />
      <input
        type="text"
        name="blog_title"
        placeholder="Search blog title"
        className="outline-none w-full border border-zinc-300 py-2 px-12 rounded-lg text-sm text-zinc-700 font-semibold focus:outline focus:outline-zinc-400 focus:outline-2"
      />
    </label>
  );
}
