import { SectionHeader } from "@/commons/elements/SectionHeader";
import Link from "next/link";
import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { HiOutlineDownload } from "react-icons/hi";
import CareerItem from "./CareerItem";
import { CareerList } from "@/commons/constants/career";

export default function Career() {
  return (
    <section className="space-y-6 scrollbar-hidden">
      <div className="flex flex-col gap-2 text-neutral-600">
        <SectionHeader title="Career" icon={<BiBriefcase />} />
        <div className="flex flex-col lg:flex-row gap-2 justify-between text-neutral-600 dark:text-neutral-400">
          <span>My Professional Career Journey</span>
          <Link href="Resume-Ihda_Anwari.pdf" aria-label="download">
            <div className="flex items-center gap-2 hover:scale-105 duration-300">
              <HiOutlineDownload />
              Download Resume
            </div>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {CareerList.map((career, index) => (
          <CareerItem key={index} {...career} />
        ))}
      </div>
    </section>
  );
}
