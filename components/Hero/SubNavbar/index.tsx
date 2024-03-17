export const SubNavbar = () => {
    return (
        <div>
            <ul className="flex w-full md:w-fit gap-2 md:gap-5 text-center items-center justify-center m-auto bg-gray-800 text-white md:px-10 pb-2 flex-wrap">
                <li><a className="text-xs" href="#">Best Sellers</a></li>
                <li><a className="text-xs" href="#">Gift Ideas</a></li>
                <li><a className="text-xs" href="#">New Releases</a></li>
                <li><a className="text-xs" href="#">Today&apos;s Deals</a></li>
                <li><a className="text-xs hidden md:block" href="#">Customer Service</a></li>
            </ul>
        </div>
    )
}