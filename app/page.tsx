import Nav from "@/components/Nav";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-base">
      <Nav />
      <ScrollyCanvas />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
