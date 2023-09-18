import { Container } from "@/commons/components/Container";
import Header from "./Header";
import { BreakLine } from "@/commons/elements/BreakLine";
import Content from "./Content";
import Slider from "./slider/Slider";

export default function About() {
  return (
    <Container className="">
      <Header></Header>
      <BreakLine className="mt-5"></BreakLine>
      <Content />
      <Slider className=" mt-7"/>
    </Container>
  );
}
