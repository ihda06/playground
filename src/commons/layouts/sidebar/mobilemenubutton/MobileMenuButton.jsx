"use client"

import { useState } from "react";
import "./style.scss"

export const MobileMenuButton = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  const expandMenuClick = ()=>{
    console.log(expandMenu)
    setExpandMenu(!expandMenu)
  }

  return (
    <div
      className="flex lg:hidden mobile-button-wrapper"
      onClick={() => expandMenuClick() }
    >
      {menuSpanData.map((item) => (
        <span
          key={item.index}
          className={
            "bg-neutral-950 dark:bg-neutral-100 " + (expandMenu ? "active" : "")
          }
        />
      ))}
    </div>
  );
};

