import { SectionHeader } from "@/commons/elements/SectionHeader";
import { GoTasklist } from "react-icons/go";
import { BiCodeAlt } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import Tooltip from "@/commons/components/Tooltip";
import { useEffect } from "react";

export default function Content({ about, jobdesks, tools }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 h-auto mb-3">
        <div className="basis-4/5 border rounded-lg h-full p-5 space-y-5">
          <div className="space-y-3">
            <SectionHeader
              title="About Company"
              icon={
                <BsBuildingsFill
                  size="30px"
                  className=" text-sky-700"
                ></BsBuildingsFill>
              }
            ></SectionHeader>
            <p className="text-xs text-neutral-500 text-justify leading-relaxed dark:text-neutral-300">
              {about}
            </p>
          </div>
          <div className="space-y-3">
            <SectionHeader
              title="Job Description"
              icon={<GoTasklist size="30px"></GoTasklist>}
            ></SectionHeader>
            <ul className=" text-xs list-disc pl-4 space-y-2 mt-6 text-neutral-600 dark:text-neutral-300">
              {jobdesks.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="basis-1/5 border rounded-lg h-full p-5">
          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
            <BiCodeAlt size="20px"></BiCodeAlt>
            <h1 className="  font-bold">Tools</h1>
          </div>
          <div className="flex gap-3 mt-3">
            {tools.map((item, idx) => {
              return (
                <Tooltip key={idx} content={item.title} position="bottom">
                  <div>{item.icon}</div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
