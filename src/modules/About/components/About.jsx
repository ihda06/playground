import { Container } from "@/commons/components/Container";
import Header from "./Header";
import { BreakLine } from "@/commons/elements/BreakLine";
import Content from "./Content";
import Gallery from "./Gallery";

export default function About() {
  return (
    <Container className="">
      <Header></Header>
      <BreakLine className="mt-5"></BreakLine>
      <Content />
      <Gallery className="py-7 px-3" />
    </Container>
  );
}
