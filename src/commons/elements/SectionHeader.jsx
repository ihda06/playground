import React from "react";

export const SectionHeader = ({ icon, title, subtitle, className = "" }) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={
          "flex items-center font-semibold text-xl gap-2 dark:text-white text-neutral-800 " +
          className
        }
      >
        {icon && <>{icon}</>}
        <h5 className="capitalize">{title}</h5>
      </div>
      {subtitle ? (
        <div className=" text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          {subtitle}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
