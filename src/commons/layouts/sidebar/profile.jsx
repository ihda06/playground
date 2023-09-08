import { MobileMenuButton } from "./mobilemenubutton/MobileMenuButton";
import { ProfileHeader } from "./profileHeader";

export const Profile = () => {
  return (
    <div className="z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0">
      <div className="flex justify-between items-center">
        <ProfileHeader></ProfileHeader>
        <MobileMenuButton></MobileMenuButton>
      </div>
    </div>
  );
};
