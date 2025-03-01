import Link from 'next/link';

function Navbar() {
    return(
        <nav className="relative flex flex-wrap bg-teal-500 p-2 shadow-xl">           
            {/* Menú para pantallas grandes (lg) */}
            <div className="hidden flex-grow lg:flex lg:items-center lg:w-auto space-x-4">
                <div>
                    <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Download CV
                    </Link>
                </div>
                <div className="text-md space-x-3">
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Portfolio
                    </Link>
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Work
                    </Link>
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Contact
                    </Link>
                </div>
                
            </div>
            
            {/* Botón del menú para dispositivos móviles */}
            <div className="block lg:hidden">
                <label htmlFor="menu-toggle" className="cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </label>
                <input type="checkbox" id="menu-toggle" className="hidden peer" />
                {/* Menú desplegable para dispositivos móviles */}
                <div className="absolute left-0 top-full mt-0.5 hidden peer-checked:block bg-teal-500 shadow-2xl rounded-lg py-2 px-4 z-10 w-36 ml-0.5">
                    <Link href="#responsive-header" className="block text-sm py-2 text-white hover:text-teal-200">
                        Portfolio
                    </Link>
                    <Link href="#responsive-header" className="block text-sm py-2 text-white hover:text-teal-200">
                        Work
                    </Link>
                    <Link href="#responsive-header" className="block text-sm py-2 text-white hover:text-teal-200">
                        Contact
                    </Link>
                    <div className="border-t border-teal-400 my-2"></div>
                    <Link href="#" className="block text-sm py-2 text-white hover:text-teal-200">
                        Download CV
                    </Link>
                </div>
            </div>
            <div className="flex items-center flex-grow justify-end text-white mr-1">
                <span className="font-semibold text-lg tracking-tight">Hector S. Lazcano</span>
            </div>
        </nav>
        
    )
}

export default Navbar;