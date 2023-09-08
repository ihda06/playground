import { MENU_ITEMS, SOCMED } from "@/commons/constants/menu"
import { Menu } from "./Menu"
import { useEffect } from "react"
import { BreakLine } from "@/commons/elements/BreakLine"
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
