import { Link } from "react-router";
import HeaderNav from "../../components/organisms/HeaderNav";
import BlogLists from "../../components/organisms/BlogLists";
import Footer from "../../components/organisms/Footer";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <BlogLists />
      <Footer />
    </>
  )
}
