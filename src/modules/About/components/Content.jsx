import { SectionHeader } from "@/commons/elements/SectionHeader";

export default function Content({}) {
  return (
    <>
      <SectionHeader title="About" />
      <h5 className="text-neutral-600">A little story about me</h5>
      <div className="mt-5 space-y-5" align="justify">
        <p>
          Hi there! I'm [Your Name], a passionate front-end software developer
          with expertise in React.js, Vue.js, and Laravel. I specialize in
          creating captivating user interfaces and seamless web experiences that
          leave a lasting impact. When I'm not coding, I'm out exploring the
          great outdoors, from hiking rugged trails to embarking on spontaneous
          road trips.
        </p>

        <p>
          Nature is my sanctuary, where I find inspiration and balance in this
          digital age. Traveling is more than a hobby; it's a way to connect
          with diverse cultures and create enduring memories. I believe in the
          harmony between the digital world and the beauty of our planet, and
          I'm dedicated to both realms.
        </p>

        <p>
          Join me on my journey of coding excellence and outdoor exploration.
          With a versatile skill set and a love for adventure, I'm ready to take
          on exciting projects and connect with fellow enthusiasts. Let's bring
          our shared passions to life in the ever-evolving landscape of
          technology and the great outdoors.
        </p>
      </div>
    </>
  );
}
