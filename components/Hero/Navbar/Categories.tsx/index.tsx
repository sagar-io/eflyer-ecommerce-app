"use client"

import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { ChangeEvent, useState } from "react"

export const Categories = () => {
    const router = useRouter()
    const [currentCategory, setCurrentCategory] = useState<string>('');

    if (currentCategory != '') {
        router.push(`/category/${currentCategory}`)
    }
    return (
        <select onChange={handleChange} value={currentCategory} className="bg-gray-800 py-1 px-2 text-white">
            <option value="" >All Category</option>
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
        </select>
    )
    function handleChange(e: any) {
        const element: HTMLSelectElement = e.target;
        setCurrentCategory(element.value)
    }
}