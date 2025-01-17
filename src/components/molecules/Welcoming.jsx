import WelcomingText from "../atoms/WelcomingText";
import LabelName from "../atoms/LabelName";
import { Link } from "react-router";

export default function Welcoming() {
  return (
    <section className="space-y-2">
      <div>
        <LabelName>evanalifian</LabelName>
        <WelcomingText>Evan Alifian's Blog</WelcomingText>
      </div>
      <p>
        Here, i share my thoughts about what's happening to me. Reed my all my blog
        posts <Link to="/blog">here</Link>.
      </p>
    </section>
  );
}
