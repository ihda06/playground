import { projects } from "@/commons/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCards({}) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
}
