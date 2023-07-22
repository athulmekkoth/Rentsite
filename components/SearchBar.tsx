'use client'
import React from 'react'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
const SearchBar = () => {
  const[list,SetList]=useState("");
  const handleSearch=()=>{

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}> 
<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
<SearchManufacturer
list={list}
SetList={SetList}
/>
</div>
    </form>
  )
}

export default SearchBar