"use client";

import { useRef, useState } from "react";
import SliderItem from "./SliderItem";
import { transform } from "framer-motion";
import { useDraggable } from "react-use-draggable-scroll";

export default function Slider({ className = "" }) {
  const imagetmp = [
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
    {
      img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp",
      title: "test",
      subtitle: "sub",
    },
  ];

  const [active, setActive] = useState(0);
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const handleClickNavigation = (idx) => {
    const elementScroll = ref.current;
    const { scrollHeight, scrollTop, clientHeight } = elementScroll;
    const scroll = scrollHeight - scrollTop - clientHeight;
    if (active > idx) {
      const result = scroll - idx * 670;
      elementScroll.scrollLeft = result;
    } else {
      const result = scroll + idx * 670;
      elementScroll.scrollLeft = result;
    }
    setActive(idx)
  };

  return (
    <div className="space-y-7">
      <div
        className={
          `w-full overflow-x-scroll no-scrollbar flex gap-4 transition-transform duration-300 scroll-smooth ` +
          className
        }
        {...events}
        ref={ref}
      >
        {imagetmp.map((item, idx) => (
          <SliderItem key={idx} {...item}></SliderItem>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        {Array.from({ length: imagetmp.length / 3 + 1 }, (_, idx) => (
          <div
            key={idx}
            className={
              "w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 ease-in-out " +
              (idx === active ? "bg-neutral-600" : "bg-neutral-300")
            }
            onClick={() => handleClickNavigation(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}
