import SocialMedia from "../molecules/SocialMedia";
import Welcoming from "../molecules/Welcoming";

export default function Jumbotron() {
  return (
    <header className="min-h-screen flex flex-col justify-center gap-y-8">
      <Welcoming />
      <SocialMedia />
    </header>
  )
}
