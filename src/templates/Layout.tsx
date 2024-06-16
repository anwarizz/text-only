import Header from "../components/patterns/Header";
import Footer from "../components/patterns/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:w-[630px] md:px-0 px-6 m-auto font-inter">
      <Header />
      <main className="mb-[65px]">{children}</main>
      <Footer />
    </div>
  );
}
