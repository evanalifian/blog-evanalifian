import { Github } from "lucide-react";
import { Link } from "react-router";

export default function HeaderNav() {
  return (
    <header className="bg-black h-9 flex items-center border-b border-b-zinc-900 sticky top-0 z-50">
      <div className="w-full max-w-xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-medium">
          <span className="text-blue-600">evanalifian</span> - blog
        </Link>
        <Link to="https://github.com/evanalifian/">
          <Github
            size={18}
            className="stroke-zinc-500 transition-colors hover:stroke-blue-600"
          />
        </Link>
      </div>
    </header>
  );
}
