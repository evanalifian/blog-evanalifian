import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import BlogList from "../../components/BlogList";

export default function Page() {
  return (
    <>
      <HeaderNav />
      <main className="pt-4 pb-8 mt-4">
        <div className="w-full max-w-xl mx-auto px-4">
          <BlogList />
        </div>
      </main>
      <Footer />
    </>
  );
}
