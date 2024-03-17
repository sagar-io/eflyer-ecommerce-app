import hamburgerMenuIcon from '@/public/images/hamburger-menu.png'
import Image from 'next/image'
import flagUK from '@/public/images/flag-uk.png'
import flagFrance from '@/public/images/flag-france.png'
import person from '@/public/images/person.svg'
import cart from '@/public/images/cart.svg'
import { Categories } from './Categories.tsx'
import { Searchbar } from './Searchbar/'
import { SetStateType } from '@/libs/types.jsx'

export const Navbar = ({ setSearchQuery }: SetStateType) => {
    return (
        <menu>
            <div className='flex flex-col gap-4 md:gap-0 px-4 md:flex-row w-full items-center justify-evenly md:px-32'>
                <div className='flex justify-between gap-4 w-full md:w-auto'>
                    <Image src={hamburgerMenuIcon} alt='Menu' />
                    <Categories />
                </div>
                <Searchbar setSearchQuery={setSearchQuery} />
                <div className='flex gap-5 justify-between'>
                    <select className='px-2 py-1'>
                        <option defaultValue={1}>
                            English
                        </option>
                        <option>
                            French
                        </option>
                    </select>

                    <div className='flex gap-2 text-white'><Image src={cart} alt='' /> CART</div>
                    <div className='flex gap-2 text-white'><Image src={person} alt='' /> CART</div>
                </div>
            </div>
        </menu>
    )
}
