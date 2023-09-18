import Image from "next/image";

export default function SliderItem({img, title="", subtitle="", className}) {
  return (
    <>
      <div className={"flex-shrink-0 relative w-52 h-52 "+ className}>
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          className="w-52 h-52  object-center object-cover rounded-xl"
        ></Image>
        <div className="absolute bottom-1/4 left-0 pl-4">
          <h5 className="text-white drop-shadow-lg text-lg">{title}</h5>
          <h5 className="text-white drop-shadow-lg text-sm">{subtitle}</h5>
        </div>
      </div>
    </>
  );
}
