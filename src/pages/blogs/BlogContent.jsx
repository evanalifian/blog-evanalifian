import { useParams } from "react-router";
import TechsThatIUseToMakeWebsite from "./techs/TechsThatIUseToMakeWebsite.mdx"
import HelloWorld from "./talks/HelloWorld.mdx"

export default function BlogContent() {
  let { title } = useParams();

  if (title === "techs-that-i-use-to-make-website") {
    return <TechsThatIUseToMakeWebsite />
  }

  if (title === "hello-world") {
    return <HelloWorld />
  }
}
