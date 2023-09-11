import { SkillList } from "@/commons/constants/Skills";
import { SectionHeader } from "@/commons/elements/SectionHeader";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";

export const Skills = () => {
  const filteredSkill = SkillList.filter((item) => item.isShow);
  return (
    <section className="space-y-6">
      <div className="flex flex-col">
        <SectionHeader title="Skills" icon={<BiCodeAlt />} />
        <span className="text-neutral-600">My Coding Skill</span>
      </div>
      <div className="flex gap-3">
        {filteredSkill.map((skill, index) => (
          <div key={index} className={"w-8 " + skill.color}>
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
};
