import { Link } from "react-router";

export function BlogCard({ children }) {
  return (
    <div className="bg-zinc-950/15 border border-zinc-900 p-4 rounded-lg space-y-6">
      {children}
    </div>
  );
}

export function BlogCardHeader({ children }) {
  return <div className="flex flex-col gap-y-1">{children}</div>;
}

export function BlogCardContent({ children }) {
  return <div className="space-y-4">{children}</div>;
}

export function BlogCardLabel({ children }) {
  return <span className="text-xs text-gray-400 font-medium">{children}</span>;
}

export function BlogCardTitile({ children }) {
  return <span className="text-lg font-bold">{children}</span>;
}

export function BlogCardText({ children }) {
  return <p className="m-0">{children}</p>;
}

export function BlogCardButton({ children, link }) {
  return (
    <Link
      to={link}
      className="h-10 flex items-center justify-center bg-zinc-950 text-white font-semibold rounded-md m-0 transition-colors hover:bg-zinc-900"
    >
      {children}
    </Link>
  );
}
