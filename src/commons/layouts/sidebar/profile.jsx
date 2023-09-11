"use client"

import useIsMobile from "@/hooks/useIsMobile";
import { MobileMenuButton } from "./mobilemenubutton/MobileMenuButton";
import { ProfileHeader } from "./ProfileHeader";
import { ToggleTheme } from "./toggleTheme/ToggleTheme";
import { useMenu } from "@/context/menu";
import { MobileMenu } from "./MobileMenu";
import { Status } from "./Status";

export const Profile = () => {
  const isMobile = useIsMobile();
  const isOpen = useMenu((state) => state.isOpen);
  const imageSize = isMobile ? 40 : 100;
  return (
    <div className="z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0">
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4 ">
        <ProfileHeader
          expandMenu={isOpen}
          imageSize={imageSize}
        ></ProfileHeader>
        {isMobile && (
          <div
            className={
              "flex lg:hidden items-center gap-5 mt-2" +
              (isOpen
                ? "!items-end flex-col-reverse justify-between h-[120px] pb-1"
                : "")
            }
          >
            <ToggleTheme />
            <MobileMenuButton></MobileMenuButton>
          </div>
        )}
        {!isMobile && (
          <div className="flex items-center w-full justify-between">
            <Status />
            <ToggleTheme />
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <>
          <MobileMenu></MobileMenu>
        </>
      )}
    </div>
  );
};
