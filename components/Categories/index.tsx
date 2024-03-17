"use client"
import { useContext, useEffect, useState } from "react"
import { Products } from "./Products"
import { ProductType } from "@/libs/types"
import { QueryContext } from "@/libs/context/queryContext"

const currentCategories = ["men's clothing", "women's clothing", "jewelery", "electronics"]

export const Categories = () => {
    const [categoriesData, setCategoriesData] = useState<ProductType[][]>();
    const query = useContext(QueryContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allCategoriesData: ProductType[][] = await Promise.all(
                    currentCategories.map(async (category) => {
                        const data = await handleFetch(category);
                        const modifiedData = data.filter((obj: ProductType) =>
                            obj.title.toLowerCase().includes(query.toLowerCase())
                        );
                        return modifiedData;
                    })
                );

                setCategoriesData(allCategoriesData);
            } catch (error) {
                console.log(`Error while fetching products data: ${error}`);
            }
        };

        fetchData();
    }, [query]);

    let AllCategoriesElements: any = [];
    if (categoriesData) {
        AllCategoriesElements = categoriesData.map((categoryData, id) => (
            <Products key={`products-${id}`} categoryData={categoryData} />
        ))
    }

    return (
        <div>{AllCategoriesElements}</div>
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