import Link from "next/link";
import { Sidebar } from "./sidebar";


export const Layouts = ({ children }) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
        <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
          <header>
            <Sidebar></Sidebar>
          </header>

          <main className="lg:max-w-[854px] transition-all duration-300 w-full lg:h-screen overflow-y-auto no-scrollbar">
            {children}
          </main>
        </div>
      </div>
      <div className="flex gap-1 justify-center border border-t-neutral-200 dark:text-neutral-400 py-3">
        This website inspired by <Link href="https://codebayu.com">codebayu.com</Link>
      </div>
    </div>
  );
};
