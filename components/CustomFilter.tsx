"use client"

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState,Fragment } from 'react'
import { CustomProps } from '@/types'
import { Listbox,Transition } from '@headlessui/react'
import Image from 'next/image'
import { UpdateParams } from '@/utils'
export const CustomFilter = ({title,options,setFilter}:CustomProps) => {
 
  const[selected,setSelected]=useState(options[0]);

  return (
    <div>
       
      <Listbox value={selected}
      onChange={(e)=>{setSelected(e)
      setSelected(e)
      setFilter(e.value)
    }}
   
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button  className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
<span className='block truncate'>{selected.title}</span>
         <Image 
         src="/chevron-up-down.svg"
         alt="f"
         width={20}
         height={20}
         className='ml-4 object-contain'

         
         />
          </Listbox.Button>
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
export default CustomFilter