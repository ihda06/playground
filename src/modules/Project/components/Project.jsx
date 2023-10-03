import { Container } from "@/commons/components/Container";
import { BreakLine } from "@/commons/elements/BreakLine";
import { SectionHeader } from "@/commons/elements/SectionHeader";
import ProjectCards from "./ProjectCards";

export default function Project({}) {
  const subtitle = `"Every great project begins with a dream and every dream needs someone who believes in it."`;
  return (
    <>
      <Container>
        <SectionHeader title="Project" subtitle={subtitle}></SectionHeader>
        <BreakLine className=" border-dotted border-t-2"></BreakLine>
        <ProjectCards ></ProjectCards>
      </Container>
    </>
  );
}
