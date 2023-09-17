import { Container } from "@/commons/components/Container";
import Header from "./Header";
import { BreakLine } from "@/commons/elements/BreakLine";
import Content from "./Content";

export default function About() {
  return (
    <Container>
      <Header></Header>
      <BreakLine className="mt-5"></BreakLine>
      <Content />
    </Container>
  );
}
