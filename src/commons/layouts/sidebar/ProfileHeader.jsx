import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


export const ProfileHeader = ({expandMenu, imageSize}) => {
  
  return (
    <div className={"flex items-center lg:items-start gap-4 lg:gap-1 flex-grow lg:flex-col w-full transition-all " + (expandMenu ? "flex-col !items-start" : "")}>
      <Image src="/logo.png" width={expandMenu ? 80 : imageSize} height={expandMenu ? 80 : imageSize} alt="logo" priority={true} className="duration-700 ease-in-out"></Image>
      <div className={"flex items-center gap-2 lg:pt-2"}>
        <h1 className="flex-grow text-lg text-neutral-950 dark:text-white font-semibold lg:text-xl">Ihda Anwari</h1>
        <MdVerified className="text-sky-400"></MdVerified>
      </div>
      <Link href="https://www.instagram.com/ihda.anwari" className="hidden lg:flex items-center gap-1 text-neutral-900 dark:text-neutral-200">
        <FaInstagram />
        <h5>ihda.anwari</h5>
      </Link>
    </div>
  );
};
