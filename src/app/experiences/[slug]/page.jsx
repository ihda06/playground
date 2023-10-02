"use client";

import { BreakLine } from "@/commons/elements/BreakLine";
import Header from "./Header";
import Content from "./Content";
import getExperiences from "@/utils/getExperiences";
import NotFound from "../../../commons/components/NotFound";

export default function Page({ params }) {
  const { slug } = params;
  const data = getExperiences(slug);
  const details = data?.details;

  if (details) {
    return (
      <>
        <Header {...data}></Header>
        <BreakLine></BreakLine>
        <Content {...details}></Content>
      </>
    );
  } else {
    return <NotFound></NotFound>;
  }
}
