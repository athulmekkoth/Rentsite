'use client'
import React from 'react'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

import Image from 'next/image'
import { useRouter } from "next/navigation"


const SearchButton=({otherclasses}:{otherclasses:string})=>(    <button type='submit' className={`-ml-3 z-10 ${otherclasses}`}>
<Image

src="/magnifying-glass.svg"
alt="x"
width={40}
height={40}
className='object-contain'
/>
  </button>
)

const SearchBar = () => {
  const[list,SetList]=useState("");
  const[model,SetModel]=useState("")

  const router = useRouter();

  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
     if(list === "" && model === "") {
      return alert("erro")
     }
     updatesearch(model,list)



  }
  const updatesearch=(model:string,manufacture:string)=>{
    const search=new URLSearchParams(window.location.search)
if(model)
{
  search.set('model',model)

}else{
  search.delete('model')
}
if(manufacture){
  search.set('list',list)
}
else{
  search.delete('list')
}
const newpth=`${window.location.pathname}?${search.toString()}`

    router.push(newpth);
  }
  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchManufacturer
          manufacturer={list}
          setManuFacturer={SetList}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => SetModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    
    </form>
  );

};

export default SearchBar