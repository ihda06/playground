"use client"

import "./style.scss"
import { useMenu } from "@/context/menu";

export const MobileMenuButton = () => {
  const toggleMenu = useMenu((state)=> state.toggleMenu)
  const expandMenu = useMenu((state)=> state.isOpen)
  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  const expandMenuClick = ()=>{
    console.log(expandMenu)
    toggleMenu()
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

