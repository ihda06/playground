import Button from "@/commons/components/Button";
import Tooltip from "@/commons/components/Tooltip";
import { Card } from "@/commons/elements/Card";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  img,
  title,
  subtitle,
  tools,
  projectLink,
  githubLink
}) {
  return (
    <>
      <Card className=" hover:scale-105 duration-300">
        <Image
          src={img}
          width={400}
          height={100}
          className="w-full rounded-t-lg h-[185px] md:h-[185px] lg:h-[195px] object-cover object-top "
          alt="preview-project"
        ></Image>

        <div className="flex flex-col justify-between h-44 p-6">
          <div className=" inline-block">
            <h1 className="font-bold capitalize text-neutral-900 dark:text-neutral-200">
              {title}
            </h1>
            <h2 className="text-sm text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </h2>
          </div>
          <div className="flex gap-3 items-center">
            {tools.map((item, idx) => {
              return <Tooltip key={idx} content={item.title}>{item.icon}</Tooltip>;
            })}
            <span className="text-neutral-500 dark:text-white">|</span>

            <Link href={projectLink}>
              <Button className="bg-sky-500 dark:bg-sky-400 text-neutral-100">
                visit
              </Button>
            </Link>
            <Link href={githubLink} className="pt-0.5">
              <BsGithub className="dark:text-white" />
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
}
