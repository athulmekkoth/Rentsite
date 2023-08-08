"use client"
import Image from 'next/image'
import { Hero, ShowMore } from '../components/index'
import {Dfetch} from '@/utils'

import {CustomFilter,SearchBar,BikeCard} from '@/components'
import { yearsOfProduction,fuels } from '@/constants'
import { useEffect, useState } from 'react'
export default  function Home() {
const[allcars,setAllCars]=useState([])
const[loading,setLoading]=useState(true)
//search
const[manufacture,setManufacturer]=useState("")
const[model,setModel]=useState("")
//filter
 const[fuel,setFuel]=useState("")
 const[year,setYear]=useState(2022)
 const[limit,setLimit]=useState(10)
const getcars=async()=>{  
  try{
  const allcars=await Dfetch({manufactured:manufacture || "",
  model:model || "",
year:year || 2022,
fuel:fuel || "",

limit:limit || 10


  })
}
catch(err)
{
  console.log(err)
}
finally{
  setLoading(false)
}
}
useEffect(()=>{
 
  getcars()

},[fuel,year,limit,manufactures.model])

const empty=!Array.isArray(allcars) || allcars.length<1 || !allcars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="disocver">
<div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
<h1 className='text-4xl'>Home Catalouge</h1>
<p>Rent Any House</p>
</div>
<div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
<SearchBar />
<div className="flex justify-start flex-wrap items-center gap-2">
   <CustomFilter title="fuel"  options={fuels}/>
   <CustomFilter title="year" options={yearsOfProduction} />
</div>
</div> 

{!empty ?(
  <section>
 <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
  {allcars.map((item)=>(
    <BikeCard item={item} />
  ))} 
  </div>
  <ShowMore
  pageNumber={(searchParams.limit || 10)/10}
 isNext={(searchParams.limit || 10)>allcars.length}
 />
  </section>
):(
  <section>
    we dont
    <p>{allcars?.message}</p>
  </section>
)}


      </div>
   
    </main>
  )
}
