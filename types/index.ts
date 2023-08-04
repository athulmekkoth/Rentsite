import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title:string,
    containerStyles?:string //optional
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"|"submit",
    textStyles?:string;
    isDisabled?:boolean
}

export interface SearchListProps{
    list:string,
    SetList:(list:string)=>void
}

export interface Carprops{
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number,
}