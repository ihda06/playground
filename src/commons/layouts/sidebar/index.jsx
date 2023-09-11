"use client"

import { BreakLine } from "@/commons/elements/BreakLine";
import { Profile } from "./Profile";
import { Navigation } from "./Navigation";
import useIsMobile from "@/hooks/useIsMobile";

export const Sidebar = () => {
  const isMobile = useIsMobile();
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile></Profile>
      {!isMobile && (
        <>
          <BreakLine></BreakLine>
          <Navigation></Navigation>
        </>
      )}
    </div>
  );
};
