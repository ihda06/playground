import Slider from "@/commons/components/slider/Slider";
import { adventures } from "@/commons/constants/adventure";

export default function Gallery({}) {
  return <Slider className="py-7 px-3" image={adventures} />;
}
