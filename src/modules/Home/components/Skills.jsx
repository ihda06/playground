import { SkillList } from "@/commons/constants/skills";
import { SectionHeader } from "@/commons/elements/SectionHeader";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";

export default function Skills() {
  const filteredSkill = SkillList.filter((item) => item.isShow);
  return (
    <section className="space-y-6">
      <div className="flex flex-col ">
        <SectionHeader title="Skills" icon={<BiCodeAlt />} />
        <span className="text-neutral-600 dark:text-neutral-400">
          My Coding Skill
        </span>
      </div>
      <div className="flex gap-3 text-neutral-900 dark:text-neutral-100">
        {filteredSkill.map((skill, index) => (
          <div key={index} className={"w-8 " + skill.color}>
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
