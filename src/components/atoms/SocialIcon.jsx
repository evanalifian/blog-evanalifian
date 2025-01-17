import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SocialIcon({ name }) {
  const socialName = name.toLowerCase();

  if (socialName === "instagram") {
    return <Instagram size={18} />;
  } else if (socialName === "x") {
    return <Twitter size={18} />;
  } else if (socialName === "github") {
    return <Github size={18} />;
  } else if (socialName === "linkedin") {
    return <Linkedin size={18} />;
  }
}
