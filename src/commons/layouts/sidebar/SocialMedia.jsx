import Link from "next/link";

export const SocialMedia = ({ items }) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">
        Let&apos;s Connect
      </div>
      <div className="flex justify-around space-x-6 lg:justify-between px-5 pt-2">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 lg:hover:scale-110 transition duration-300"
            >
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
