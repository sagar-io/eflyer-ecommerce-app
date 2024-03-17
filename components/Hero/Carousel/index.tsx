import Image from "next/image"
import leftArrow from '@/public/images/leftArrow.svg'

export const Carousel = () => {
    return (
        <>
            <div className="py-16 w-full m-auto flex items-center justify-evenly md:px-32 px-5">
                <div className=" bg-white/60 p-2 rounded-full">
                    <Image src={leftArrow} alt="<" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white text-center md:leading-normal">Get Start <br /> Your favriot shoping</h1>
                <div className="rotate bg-white/60 p-2 rounded-full">
                    <Image src={leftArrow} alt=">" />
                </div>
            </div>
        </>
    )
}