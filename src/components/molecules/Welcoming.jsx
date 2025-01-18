import WelcomingText from "../atoms/WelcomingText";
import LabelText from "../atoms/LabelText";
import { Link } from "react-router";

export default function Welcoming() {
  return (
    <section>
      <div>
        <LabelText>evanalifian</LabelText>
        <WelcomingText>Evan Alifian's Blog</WelcomingText>
      </div>
      <div>
        <p>Here, i share my thoughts about what's happening to me.</p>
        <Link to="/blog" className="button solid_button">
          Read blog
        </Link>
      </div>
    </section>
  );
}
