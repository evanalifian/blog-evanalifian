import { Link } from "react-router";

export function BlogCard({ children }) {
  return (
    <div className="border border-zinc-300 p-4 rounded-lg space-y-2">
      {children}
    </div>
  );
}

export function BlogCardHeader({ children }) {
  return <div className="flex flex-col">{children}</div>;
}

export function BlogCardContent({ children }) {
  return <div className="space-y-4">{children}</div>;
}

export function BlogCardLabel({ children }) {
  return <span className="text-sm text-zinc-700 font-medium">{children}</span>;
}

export function BlogCardTitile({ children }) {
  return <span className="text-lg font-bold">{children}</span>;
}

export function BlogCardText({ children }) {
  return <p className="text-zinc-700 m-0">{children}</p>;
}

export function BlogCardButton({ children, link }) {
  return (
    <Link
      to={link}
      className="h-10 flex items-center justify-center bg-zinc-700 text-white font-semibold rounded-md m-0 transition-colors hover:bg-zinc-600"
    >
      {children}
    </Link>
  );
}
