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
export interface Filterprops{
    manufactured:string,
  model:string,
year:number,
fuel:string,

limit:number
}
export interface Optionprops{
    title:string,
    value:string
}
export interface CustomProps{
    title:string,
    options:Optionprops[]
}
export interface Pageprops{
    pageNumber:number,
    isNext:boolean
}