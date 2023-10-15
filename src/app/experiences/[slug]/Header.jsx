import BackButton from "@/commons/components/BackButton";
import Button from "@/commons/components/Button";
import Image from "next/image";

export default function Header({
  companyImg,
  position,
  company,
  location,
  period,
  time,
}) {
  return (
    <>
      <BackButton />
      <div className="p-5 mt-4 flex min-h-[128px] border rounded-xl justify-between">
        <div className="flex gap-5">
          <Image
            src={companyImg}
            width={100}
            height={30}
            className=" object-contain shadow-md rounded-lg dark:bg-white"
            alt="company-image"
          ></Image>
          <div className="flex flex-col lg:justify-between font-medium ">
            <div className="">
              <h1 className=" text-slate-900 font-bold dark:text-neutral-200">
                {position}
              </h1>
              <div className="flex gap-3 text-gray-500 dark:text-neutral-300">
                <h2>{company}</h2>
                <span>•</span>
                <h2>{location}</h2>
              </div>
            </div>

            <h2 className="text-gray-500 text-xs dark:text-neutral-400">
              {period} ({time} Bulan)
            </h2>
            <div className="md:hidden mt-4">
              <Button className="bg-sky-500 text-white" size="sm">
                Visit
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <Button className="bg-sky-500 text-white" size="md">
            Visit
          </Button>
        </div>
      </div>
    </>
  );
}
