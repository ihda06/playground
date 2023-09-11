import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = ({ item, className="" }) => {
  const pathName = usePathname();
  const url = new URL(item.href, "http://localhost:3000/");
  const active =
    pathName == url.pathname
      ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-300"
      : "hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300";

  return (
    <Link href={item.href}>
      <div
        className={`flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300 hover:cursor-pointer ${active} ${className}`}
      >
        <div>{item.icon}</div>
        <div className="flex-grow ml-0.5">{item.title}</div>
      </div>
    </Link>
  );
};
