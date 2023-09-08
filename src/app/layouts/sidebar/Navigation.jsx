import { MENU_ITEMS, SOCMED } from "@/app/constant/menu"
import { Menu } from "./Menu"
import { useEffect } from "react"
import { BreakLine } from "@/app/commons/elements/BreakLine"
import { SocialMedia } from "./SocialMedia"

export const Navigation = () => {
    const menu = MENU_ITEMS
    const filteredSocmed = SOCMED?.filter(item=>item?.isShow)
    useEffect(()=>{
        console.log(menu);
    }, [])
  return (
    <div>
        <Menu list={menu}></Menu>
        <BreakLine/>
        <SocialMedia items={filteredSocmed}/>
    </div>
  )
}
