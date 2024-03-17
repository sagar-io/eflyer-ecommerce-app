import { ProductType } from "@/libs/types"
import { Product } from "../Product"
import { useContext } from "react"
import { QueryContext } from "@/libs/context/queryContext"

type ProductsType = {
    categoryData: ProductType[]
}

export const Products = ({ categoryData }: ProductsType) => {
    const query = useContext(QueryContext)
    
    const ProductElements = categoryData.map((productData, id) => {
        if (id > 2) return;
        return <Product key={`product-${id}`} productData={productData} />
    })
    return (
        <section className="my-16">
            <h2 className="capitalize text-3xl font-extrabold text-center mb-5 mt-2">{categoryData[0]?.category}</h2>
            <div className="flex gap-8 justify-center flex-wrap">
                {ProductElements}
            </div>
        </section>
    )
}