import { GiStaticWaves } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-2xl lg:text-3xl font-semibold">Hi, I'm Ihda Anwari</h3>
          <div className="space-y-4">
            <ul className="flex flex-col pt-2 lg:flex-row lg:gap-8 list-disc ml-5 gap-1 text-neutral-500">
              <li>Software Engineer </li>
              <li>Focusing on Frontend Website</li>
              <li>Based in Bandung </li>
            </ul>
          </div>
        </div>
        <GiStaticWaves size={25}></GiStaticWaves>
      </div>
      <div className="pt-5 text-lg text-neutral-600 leading-[1.63]">
        I am a digital business graduate who has an interest in front-end
        developers, graphic designers, and UI/UX designers. I am capable of
        designing UI Websites with ReactJs or VueJs, I have experienced building websites
        as a full stack with Laravel. I am also familiar with design tools like
        Adobe XD, Adobe Photoshop, Figma, Canva, and CorelDraw
      </div>
    </section>
  );
}
