"use client";

import { BreakLine } from "@/commons/elements/BreakLine";
import Header from "./Header";
import Content from "./Content";
import getExperiences from "@/utils/getExperiences";
import NotFound from "../../../commons/components/NotFound";
import { Container } from "@/commons/components/Container";

export default function Page({ params }) {
  const { slug } = params;
  const data = getExperiences(slug);
  const details = data?.details;

  if (details) {
    return (
      <>
        <Container>
          <Header {...data}></Header>
          <BreakLine></BreakLine>
          <Content {...details}></Content>
        </Container>
      </>
    );
  } else {
    return <NotFound></NotFound>;
  }
}
