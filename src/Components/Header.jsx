import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


export const Header = ({ links, logo }) => {
    return (

        <header className='bg-white text-dark shadow px-3 py-1 sticky top'>
            <nav className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo" width='60px' height='auto' />
                </div>
                <ul className='flex items-center gap-4'>
                    {links.map((link, indx) => (
                        <li key={indx} className='text-sm font-bold text-dark hover:text-blue-600 cursor-pointer'>
                            <NavLink to={link.path} className={({isActive}) => isActive ? 'text-blue-600' : 'text-dark'}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-2'>
                    <CiSearch className='text-xl'/>
                    <FaShoppingCart className='text-xl'/>
                </div>
            </nav>
        </header>
    )
}
