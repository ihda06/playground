import React from "react";

export const SectionHeader = ({icon, title, className=""}) => {
  return (
    <div className={"flex items-center font-semibold text-xl gap-2 text-neutral-800 "+(className)}>
      {icon && <>{icon}</>}
      <h5 className="capitalize">{title}</h5>
    </div>
  );
};
