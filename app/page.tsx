"use client"
import Image from 'next/image'
import { Hero, ShowMore } from '../components/index'
import {Dfetch} from '@/utils'

import {CustomFilter,SearchBar,BikeCard} from '@/components'
import { yearsOfProduction,fuels, manufacturers } from '@/constants'
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
    
  const result=await Dfetch({manufactured:manufacture || "",
  model:model || "",
year:year || 2022,
fuel:fuel || "",

limit:limit || 10


  })
  setAllCars(result)
}
catch(err)
{
  console.log(err)
}
finally{
  setLoading(false)
  console.log(allcars)
}
}
useEffect(()=>{
 
  getcars()

},[fuel,year,limit,manufacturers,model])

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
<SearchBar setManufacturer={setManufacturer} setModel={setModel} 

/>
<div className="flex justify-start flex-wrap items-center gap-2">
   <CustomFilter title="fuel"  options={fuels} setFilter={setFuel} />
   <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
</div>
</div> 

{allcars.length>0 ?(
  <section>
 <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
  {allcars.map((item)=>(
    <BikeCard item={item} />
  ))} 
  </div>
  { loading && (
    <div>
      <Image 
      src="/loader.svg"
      alt='loader'
      width={50}
      height={50} 
      className='object-contain'
      />
    </div>
  )}
  <ShowMore
  pageNumber={limit/10}
 isNext={limit || 10>allcars.length}
 setLimit={setLimit}
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
