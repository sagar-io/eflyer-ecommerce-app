import Image from "next/image"
import { Carousel } from "./Carousel"
import { Navbar } from "./Navbar"
import { SubNavbar } from "./SubNavbar"
import logo from '@/public/images/logo.png'
import React, { SetStateAction, useContext } from "react"
import { SetStateType } from "@/libs/types"
import { QueryContext } from "@/libs/context/queryContext"

export const Hero = ({ setSearchQuery }: SetStateType) => {
    const searchQuery = useContext(QueryContext)
    return (
        <div>
            <header>
                <div className="pb-14 bg-hero-bg bg-no-repeat bg-cover bg-center">
                    <SubNavbar />
                    <Image className="mx-auto my-6" src={logo} alt="Eflyer" />
                    <Navbar setSearchQuery={setSearchQuery} />
                    <Carousel />
                    <button className="uppercase bg-gray-800 px-8 py-2 text-white rounded-sm font-bold m-auto w-fit block">Buy Now</button>
                </div>
            </header >
            <div>
                {
                    searchQuery && <h3>Search Results For: {searchQuery}</h3>
                }
            </div>
        </div>
    )
}
