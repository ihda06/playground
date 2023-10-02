import BackButton from "@/commons/components/BackButton";
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
      <div className="p-5 mt-4 flex h-32 border rounded-xl justify-between ">
        <div className="flex gap-5">
          <Image
            src={companyImg}
            width={100}
            height={30}
            className=" object-contain shadow-md rounded-lg dark:bg-white"
            alt="company-image"
          ></Image>
          <div className="flex flex-col justify-between font-medium ">
            <div className="">
              <h1 className=" text-slate-900 font-bold dark:text-neutral-200">{position}</h1>
              <div className="flex gap-3 text-gray-500 dark:text-neutral-300">
                <h2>{company}</h2>
                <span>•</span>
                <h2>{location}</h2>
              </div>
            </div>

            <h2 className="text-gray-500 text-xs dark:text-neutral-400">
              {period} ({time} Bulan)
            </h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-block rounded-full bg-sky-500 cursor-pointer shadow-md px-6 pb-2 pt-2.5 text-xs leading-normal font-semibold uppercase text-white">
            Visit
          </div>
        </div>
      </div>
    </>
  );
}
