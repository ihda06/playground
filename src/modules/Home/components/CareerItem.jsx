"use client";

import { Card } from "@/commons/elements/Card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function CareerItem({
  routeName,
  company,
  companyUrl,
  location,
  position,
  companyImg,
  period,
  time,
}) {
  return (
    <Link href={"/experiences/" + routeName}>
      <Card
        className="flex items-center gap-5 py-4 px-6 hover:scale-105 h-[170px] lg:h-auto transition duration-300 cursor-pointer "
      >
        <Image
          height={55}
          width={70}
          src={companyImg}
          alt="companyimg"
          className=" object-contain h-full px-2 rounded-lg dark:bg-white"
        ></Image>
        <div className="flex flex-col gap-1 text-neutral-500 dark:text-neutral-300">
          <h4 className="text-xl text-neutral-600 font-medium dark:text-white">
            {position}
          </h4>
          <div className="flex gap-1 text-sm">
            <Link href={companyUrl} className="underline">
              {company}
            </Link>
            <span>•</span>
            <span>{location}</span>
          </div>
          <div className="text-sm pt-1">
            <h5>{period}</h5>
            <h5>~ {time} Months</h5>
          </div>
        </div>
      </Card>
    </Link>
  );
}
