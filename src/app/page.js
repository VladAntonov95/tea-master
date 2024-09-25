import Hero from "@/sections/Hero/Hero";
import Tea from "@/sections/Tea/Tea";
import Tableware from "@/sections/Tableware/Tableware";
import School from "@/sections/School/School";
import Wisdom from "@/sections/Wisdom/Wisdom";

export default function Home({ visibleSection }) {
  return (
    <>
      <Hero />
      <Tea className={visibleSection === "tea" ? "block" : "hidden"} />
      <Tableware
        className={visibleSection === "tableware" ? "block" : "hidden"}
      />
      <School className={visibleSection === "school" ? "block" : "hidden"} />
      <Wisdom />
    </>
  );
}
