import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-t-zinc-300 mt-auto">
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <section>
            <span className="text-blue-600 font-medium">evanalifian</span>
            <p className="text-sm text-zinc-600 m-0">
              &copy; 2025, All Rights Reserved.
            </p>
          </section>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <section className="flex flex-col gap-y-4">
              <span className="text-sm font-medium">Social Media</span>
              <ul className="flex flex-col gap-y-2 list-none pl-0 my-0">
                <li className="text-sm">
                  <Link
                    to=""
                    target="_blank"
                    className="text-zinc-500 transition-colors hover:text-black"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="text-sm">
                  <Link
                    to=""
                    target="_blank"
                    className="text-zinc-500 transition-colors hover:text-black"
                  >
                    X
                  </Link>
                </li>
                <li className="text-sm">
                  <Link
                    to=""
                    target="_blank"
                    className="text-zinc-500 transition-colors hover:text-black"
                  >
                    GitHub
                  </Link>
                </li>
                <li className="text-sm">
                  <Link
                    to=""
                    target="_blank"
                    className="text-zinc-500 transition-colors hover:text-black"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-y-4">
              <span className="text-sm font-medium">More</span>
              <ul className="flex flex-col gap-y-2 list-none pl-0 my-0">
                <li className="text-sm">
                  <Link
                    to=""
                    target="_blank"
                    className="text-zinc-500 transition-colors hover:text-black"
                  >
                    Portfolio Web
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
