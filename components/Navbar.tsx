import Link from 'next/link';

function Navbar() {
    return(
        <nav className="fixed min-w-full flex flex-wrap p-2 shadow-xl backdrop-blur-sm z-50">           
            {/* Large Screen*/}
            <div className="hidden flex-grow lg:flex lg:items-center lg:w-auto space-x-4">
                <div>
                    <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-500 hover:bg-white mt-4 lg:mt-0">
                        Download CV
                    </Link>
                </div>
                <div className="text-md space-x-3">
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-slate-200 hover:text-white">
                        Portfolio
                    </Link>
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-slate-200 hover:text-white">
                        Work
                    </Link>
                    <Link href="#responsive-header" className="block lg:inline-block lg:mt-0 text-slate-200 hover:text-white">
                        Contact
                    </Link>
                </div>
                
            </div>
            
            {/* Small screens */}
            <div className="block lg:hidden">
                <label htmlFor="menu-toggle" className="cursor-pointer flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </label>
                <input type="checkbox" id="menu-toggle" className="hidden peer" title="Toggle menu" />
                {/* Small screen menu */}
                <div className="bg-slate-800/90 absolute left-0 top-full mt-0.5 hidden peer-checked:block shadow-xl rounded-lg py-2 px-4 w-36 ml-0.5 z-50">
                    <Link href="#responsive-header" className="block text-sm py-2 text-slate-400 hover:text-white">
                        Portfolio
                    </Link>
                    <Link href="#responsive-header" className="block text-sm py-2 text-slate-400 hover:text-white">
                        Work
                    </Link>
                    <Link href="#responsive-header" className="block text-sm py-2 text-slate-400 hover:text-white">
                        Contact
                    </Link>
                    <div className="border-t border-slate-400 my-2"></div>
                    <Link href="#" className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-500 hover:bg-white">
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