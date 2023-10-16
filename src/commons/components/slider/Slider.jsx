"use client";

import { useRef, useState } from "react";
import SliderItem from "./SliderItem";
import useIsMobile from "@/hooks/useIsMobile";

export default function Slider({ className = "", image }) {


  const [active, setActive] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef();
  const isMobile = useIsMobile();

  const handleClickNavigation = (idx) => {
    const elementScroll = ref.current;
    
    const result = idx * (isMobile ? 224 : 670);
    elementScroll.scrollLeft = result;
    
    setActive(idx);
  };

  const handleMouseDown = (e) => {
    const x = e.pageX - ref.current.offsetLeft;

    setStartX(x);
    setIsDown(true);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (isDown) {
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = x - startX;
      ref.current.scrollLeft = scrollLeft - walk;
      const nav = Math.floor(ref.current.scrollLeft / (isMobile ? 190 : 600));
      setActive(nav);
    }
  };

  const handleTouchMove = () => {
    const nav = Math.floor(ref.current.scrollLeft / 190);
    setActive(nav);
  };

  return (
    <div className="space-y-7">
      <div
        className={
          `w-full overflow-x-scroll no-scrollbar flex gap-4 transition-transform duration-300 ${
            !isDown ? "scroll-smooth" : ""
          } ` + className
        }
        ref={ref}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => setIsDown(false)}
        onMouseLeave={() => setIsDown(false)}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchMove={handleTouchMove}
      >
        {image.map((item, idx) => (
          <SliderItem key={idx} {...item}></SliderItem>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        {Array.from(
          { length: Math.floor(image.length / (isMobile ? 1 : 3)) },
          (_, idx) => (
            <div
              key={idx}
              className={
                "w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 ease-in-out " +
                (idx === active ? "bg-neutral-600" : "bg-neutral-300")
              }
              onClick={() => handleClickNavigation(idx)}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
