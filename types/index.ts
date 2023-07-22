import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title:string,
    containerStyles?:string //optional
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"|"submit"
}

export interface SearchListProps{
    list:string,
    SetList:(list:string)=>void
}