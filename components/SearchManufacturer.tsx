'use client'
import React from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';
import { SearchListProps } from '@/types';
import { relative } from 'path';

const SearchManufacturer = ({ list, SetList }: SearchListProps) => {
  const [query, SetQuery] = useState('');

  const filtered = query === "" ?
    manufacturers : manufacturers.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">

      <Combobox value={list} onChange={set} >
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/hlogo.svg" width={20} height={20} alt="logo" />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="volks"
            onChange={(e) => {
              SetQuery(e.target.value);
            }}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => SetQuery('')}
          >
            <Combobox.Options>
              {filtered.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
               
                </Combobox.Option>
              ) : (
                filtered.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `
                    relative cursor-default select-none py-2 pl-10 pr-4
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                  `}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
