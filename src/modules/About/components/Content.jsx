import { BreakLine } from "@/commons/elements/BreakLine";
import { SectionHeader } from "@/commons/elements/SectionHeader";

export default function Content({}) {
  return (
    <>
      <SectionHeader title="About" />
      <h5>A little story about me</h5>
      <div className="mt-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, totam
          earum distinctio neque perferendis, quisquam odit aperiam magnam
          consequatur alias deleniti doloremque aut aliquid dolores delectus,
          nemo cum omnis qui?
        </p>
      </div>
    </>
  );
}
