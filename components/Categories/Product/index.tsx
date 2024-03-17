import { ProductType } from "@/libs/types"
import Image from "next/image";

type OneProductType = {
    productData: ProductType
}

export const Product = ({ productData }: OneProductType) => {
    const { category, description, id, image, price, rating, title } = productData;

    return (
        <div className="shadow-lg rounded-md w-80 h-[600px] flex flex-col justify-between items-center py-2 px-2 text-center">
            <p className="font-bold text-lg">{title}</p>
            <p className="mb-5"><span className="text-orange-600">Price</span>$ {price}</p>
            <div className="w-[220px] h-[350px] flex">
                <img className="h-auto w-auto" src={image} alt="Product-Image" />
            </div>
            <div className="flex text-blue-500 justify-between w-full py-5">
                <button>
                    Buy Now
                </button>
                <button>
                    See More
                </button>
            </div>
        </div>
    )
}
