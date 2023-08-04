'use client'
import React from 'react'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
const SearchBar = () => {
  const[list,SetList]=useState("");
  const handleSearch=()=>{

  }
  const SearchButton=({otherclasses})=>{
    <button type='submit' className={`-ml-3 z-10 ${otherclasses}`}>

    </button>
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}> 
<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
<SearchManufacturer
list={list}
SetList={SetList}
/>
<SearchButton otherclasses="sm:hidden" />
</div>
    </form>
  )
}

export default SearchBar