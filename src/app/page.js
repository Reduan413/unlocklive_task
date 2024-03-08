import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Recipe from "@/components/Recipe";
import Showcase from "@/components/Showcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <WhyChooseUs />
      <Menu />
      <Recipe />
      <Showcase />
      <Footer />
    </>
  );
}
