import { BreakLine } from "@/commons/elements/BreakLine";
import Introduction from "./Introduction";
import { Career } from "./Career";
import { Skills } from "./Skills";

export default function Home() {
  return (
    <>
      <Introduction />
      <BreakLine></BreakLine>
      <Career />
      <BreakLine></BreakLine>
      <Skills />
    </>
  );
}
