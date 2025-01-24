import { Link } from "react-router";

export default function BlogLists() {
  return (
    <main className="py-8 mt-8">
      <div className="w-full max-w-xl mx-auto px-4">
        <section>
          <h1 className="text-2xl font-bold">Enjoy my writes!</h1>
          <div className="flex flex-col gap-y-4 mt-8">
            <div className="border border-zinc-300 p-4 rounded-lg space-y-6">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-700 font-medium">
                  Category: Techs
                </span>
                <span className="text-lg font-bold">
                  Techs That I Use To Make Website
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-zinc-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium ab repellendus debitis explicabo magnam omnis.
                </p>
                <Link
                  to=""
                  className="h-10 flex items-center justify-center bg-zinc-600 text-white font-semibold rounded-md transition-colors hover:bg-zinc-500"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="border border-zinc-300 p-4 rounded-lg space-y-6">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-700 font-medium">
                  Category: Techs
                </span>
                <span className="text-lg font-bold">
                  Techs That I Use To Make Website
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-zinc-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium ab repellendus debitis explicabo magnam omnis.
                </p>
                <Link
                  to=""
                  className="h-10 flex items-center justify-center bg-zinc-600 text-white font-semibold rounded-md transition-colors hover:bg-zinc-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
