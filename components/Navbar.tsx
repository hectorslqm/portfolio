function Navbar() {
    return(
        <nav className="bg-slate-200 flex rounded-b-sm px-2">
            <div className="flex flex-none">
                Hector Lazcano
            </div>
            <div  className="flex flex-auto justify-end space-x-2">
                <a className="btn">Projects</a>
                <a className="btn">Contact</a>
                <a className="btn">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar;