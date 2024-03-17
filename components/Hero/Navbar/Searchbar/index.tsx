"use client"

import { SetStateType } from '@/libs/types'
import search from '@/public/images/search-icon.png'
import Image from 'next/image'
import { useState } from 'react'

export const Searchbar = ({ setSearchQuery }: SetStateType) => {
    const [searchQuery, setQuery] = useState("")

    return (
        <div>
            <div className='flex'>
                <input onChange={handleChange} className='py-1 pl-2 pr-20' type="search" placeholder="Search this blog" />
                <span onClick={handleSearch} className='bg-orange-600 flex justify-center items-center px-2'><Image src={search} alt='Search' /></span>
            </div>
        </div>
    )
    function handleChange(e: any) {
        const element: HTMLSelectElement = e.target;
        setQuery(element.value)
    }
    function handleSearch() {
        setSearchQuery(searchQuery)
    }
}