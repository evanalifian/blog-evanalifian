import { Link } from "react-router";

export default function Footer() {
  const publicSocial = {
    socials: [
      {
        name: "Instagram",
        url: "https://instagram.com/evanalifian",
      },
      {
        name: "X",
        url: "https://x.com/evanalifian",
      },
      {
        name: "GitHub",
        url: "https://github.com/evanalifian",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/evanalifian",
      },
    ],
    more: [
      {
        name: "Portfolio Web",
        url: "",
      },
      {
        name: "Products",
        url: "",
      },
    ],
  };

  return (
    <footer className="bg-black py-6 border-t border-t-zinc-900 mt-auto">
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <section>
            <span className="text-blue-600 font-medium">evanalifian</span>
            <p className="text-sm text-zinc-400 m-0">Enjoy my writes 💓.</p>
          </section>
          <div className="grid grid-cols-2 gap-12">
            <PublicSocial name={"Socials"} links={publicSocial.socials} />
            <PublicSocial name={"More"} links={publicSocial.more} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function PublicSocial({name, links}) {
  return (
    <section className="flex flex-col gap-y-4">
      <span className="text-sm font-medium">{name}</span>
      <ul className="flex flex-col gap-y-2 list-none pl-0 my-0">
        {links.map((personal) => (
          <li key={personal.name} className="text-sm">
            <Link
              to={personal.url}
              target="_blank"
              className="text-zinc-400 transition-colors hover:text-blue-600"
            >
              {personal.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
