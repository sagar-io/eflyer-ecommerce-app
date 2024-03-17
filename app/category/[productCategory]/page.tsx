"use client"

import { Product } from "@/components/Categories/Product";
import { ProductType } from "@/libs/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { productCategory: string } }) {
    const [categoryData, setCategoryData] = useState<ProductType[]>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await handleFetch(params.productCategory)
            setCategoryData(data)
        }
        fetchData()
    }, [params.productCategory])

    let AllCategoryElements: any = [];
    if (categoryData) {
        AllCategoryElements = categoryData.map((categoryData, id) => (
            <Product key={`products-specific-${id}`} productData={categoryData} />
        ))
    }

    return (
        <div>
            <div>
                <button className="text-base px-4 py-2 text-black bg-slate-300 rounded-md shadow-md m-2"><Link href="/">Home</Link></button>
                <h2 className="capitalize text-3xl font-extrabold text-center mb-5 mt-2">{(categoryData) ? categoryData[0].category : ''}</h2>
            </div>
            <div className="flex flex-wrap gap-8 justify-center my-20">
                {AllCategoryElements}
            </div>
        </div>
    )

    async function handleFetch(category: string) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=3'`)
            const data = await response.json()
            return data;
        } catch (error) {
            console.log(`Error while fetching products data ${error}`);
        }
    }
}