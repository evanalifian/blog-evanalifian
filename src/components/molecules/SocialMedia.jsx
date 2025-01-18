import { socials } from "../../assets/utils";
import { Link } from "react-router";
import SocialIcon from "../atoms/SocialIcon";

export default function SocialMedia() {
  return (
    <ul className="flex flex-row gap-x-4 pl-0 my-0 list-none list-outside">
      {socials.map((social) => (
        <SocialLink key={social.name} {...social} />
      ))}
    </ul>
  );
}

function SocialLink({ name, link }) {
  return (
    <li>
      <Link to={link} target="_blank">
        <SocialIcon name={name} />
      </Link>
    </li>
  );
}
