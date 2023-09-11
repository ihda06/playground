import { Card } from "@/commons/elements/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CareerItem = ({
  company,
  companyUrl,
  location,
  position,
  companyImg,
  period,
  time,
}) => {
  return (
    <Card className="flex items-center gap-5 py-4 px-6 hover:scale-105 transition duration-300 cursor-default">
      <Image height={55} width={55} src={companyImg}></Image>
      <div className="flex flex-col gap-1 text-neutral-500">
        <h4 className="text-xl text-neutral-600 font-medium">{position}</h4>
        <div className="flex gap-1 text-sm">
          <Link href={companyUrl} className="underline">{company}</Link>
          <span>•</span>
          <span>{location}</span>
        </div>
        <div className="text-sm pt-1">
          <h5>{period}</h5>
          <h5>~ {time} Months</h5>
        </div>
      </div>
    </Card>
  );
};
