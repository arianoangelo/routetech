import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/route_logo.svg'
import { ReactComponent as LogoSymbol } from '../images/route_symbol.svg'

function Header({contactRef}) {
    const [top, setTop] = useState(true)
    
    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    
    const scrollToContacts = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
    
    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Route Tech">
                            <Logo className={'sm:block hidden w-[240px]'}/>
                            <LogoSymbol className={'block sm:hidden w-[40px]'}/>
                        </Link>
                    </div>
                    {/* Site navigation */}
                    <nav className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <button onClick={scrollToContacts}
                                      className="px-4 py-2 rounded text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                                    <span>CONTACTS</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
