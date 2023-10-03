"use client";

import { useRouter } from "next/navigation";
import { BiLeftArrow } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className="rounded-full cursor-pointer border border-neutral-200  shadow-md inline-block px-6 pb-2 pt-2.5 uppercase leading-normal text-xs hover:shadow-lg hover:scale-105 ease-in-out duration-300"
      onClick={() => router.back()}
    >
      <div className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300">
        <BiLeftArrow></BiLeftArrow>
        <h1>Back</h1>
      </div>
    </div>
  );
}
