'use client';
import React, { useState } from 'react';
import { Carprops } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Bikedetails from './Bikedetails';
interface Carsprops {
  item: Carprops ;
}

const BikeCard = ({ item}: Carsprops) => {

    const[isOpen,SetOpen]=useState(false)
  const {  city_mpg,
    
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year} = item;

  // Calculate the car rent based on the CC (as a number) and year
  const rent = calculateCarRent(city_mpg,year);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
        <p className='flex mt-6 text-[32px] font-extrabold'>
         $
        <span>
        <span className="self-start text-[14px] font-semibold">{rent}</span>
        </span>
        
        </p>
      </div>
      <div className='relative w-ful h-40 my-3 object-contain'>
        <Image src={generateCarImageUrl(item)} alt="s"  width={50} height={50} />

      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between'>
<div className='flex flex-col justify-center  items-center gap-2'>
<Image src='/hlogo.svg'  alt='stree' width={20} height={20}/>
<p className='text-[14px]'>{ fuel_type}</p>
</div>
<div className='flex flex-col justify-center  items-center gap-2'>
<Image src='/hlogo.svg'  alt='stree' width={20} height={20}/>
<p className='text-[14px]'>{highway_mpg}</p>
</div>
<div className='flex flex-col justify-center  items-center gap-2'>
<Image src='/hlogo.svg'  alt='stree' width={20} height={20}/>
<p className='text-[14px]'>{transmission}</p>
</div>
        </div>
        <div className=' group-hover:flex absolute bottom-0 w-full z-10'>
<CustomButton 
title='view more'
containerStyles="hidden hover:w-full mt-10 py-[16px] rounded-full bg-primary-blue"
textStyles="text-whitr text-[14px] leading-[17px]"
handleClick={()=>SetOpen     (true)}

/>
        </div>
      </div>
      <Bikedetails  isOpen={isOpen} car={item} closeModal={()=>{SetOpen(false)}}  />
    </div>
  );
};

export default BikeCard;
