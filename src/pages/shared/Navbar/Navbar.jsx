import { useState } from 'react';
import logo from '../../../assets/logo/3.png';
import ActiveLink from '../../../components/ActiveLink';
import Button from '../../../components/Button';
import check from '../../../assets/loginform-icons/google.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white rounded-md w-full md:static md:text-sm">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img className='w-24 md:w-40'
                            src={logo}
                            alt="logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setOpen(!open)}
                        >
                            {
                                open ? (
                                    // cross
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 border md:border-0 md relative rounded-lg p-3 mt-7 bg-slate-50 md:bg-white md:block md:pb-0 md:mt-0 ${open ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <div className='flex flex-col md:hidden space-y-3 md:space-y-0 md:space-x-5 md:items-center'>
                            <li>
                                <ActiveLink to='/'>Home</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/blog'>Blog</ActiveLink>
                            </li>
                        </div>
                        <hr />
                        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 md:items-center'>
                            <img className='w-7' src={check} alt="" />
                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                                <Link to='/auth-layout/login'><Button className="w-full">Sign in</Button></Link>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
            <div className="items-center px-4 max-w-screen-xl mx-auto hidden md:flex md:px-8 mt-5">
                <ul className="w-full border-b flex items-center gap-x-3">
                    <li className='py-2.5 px-4 rounded-lg duration-150 text-sm  hover:bg-gray-50 font-medium text-gray-500'>
                        <ActiveLink to='/'>Home</ActiveLink>
                    </li>
                    <li className='py-2.5 px-4 rounded-lg duration-150 text-sm  hover:bg-gray-50 font-medium text-gray-500'>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
    // );
};

export default Navbar;