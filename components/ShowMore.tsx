"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Pageprops } from '@/types'
import CustomButton from './CustomButton'
import { UpdateParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext, setLimit }: Pageprops) => {
    const router = useRouter()

    const handelnavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {
                !isNext && (
                    <CustomButton
                        title="show more"
                        btnType='button'
                        containerStyles='bg-primary-blue rounded-full text-white'
                        handleClick={handelnavigation}
                    />
                )
            }
        </div>
    )
}

export default ShowMore;
