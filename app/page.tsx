import Image from 'next/image'
import { Hero } from '../components/index'
import {CustomFilter,SearchBar } from '@/components'
export default function Home() {
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
   <CustomFilter title="fuel" />
   <CustomFilter title="year" />
</div>
</div>
      </div>
   
    </main>
  )
}
