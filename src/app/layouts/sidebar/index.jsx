import { BreakLine } from "@/app/commons/elements/BreakLine";
import { Profile } from "./profile";
import { ToggleTheme } from "./toggleTheme/ToggleTheme";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile></Profile>
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-600 dark:text-neutral-300">
          Available for hire
        </span>
        <ToggleTheme></ToggleTheme>
      </div>
      <BreakLine></BreakLine>
      <Navigation></Navigation>
    </div>
  );
};
