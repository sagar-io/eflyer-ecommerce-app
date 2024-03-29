import { SetStateAction } from "react"

export type ProductType = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    }
    title: string
}

export type SetStateType = {
    setSearchQuery: React.Dispatch<SetStateAction<string>>
}
