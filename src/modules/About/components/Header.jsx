
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-60 rounded-xl">
      <Image
        src="https://res.cloudinary.com/dy6fdp9ar/image/upload/v1694660441/IMG_0288_xwn2sn.webp"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full hover:scale-105 h-60 duration-1000 rounded-xl object-cover object-[50%__75%]"
      ></Image>
    </div>
  );
}
