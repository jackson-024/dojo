import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar justify-content-center">
            <div className="links">
                <ul className="nav">
                    {/* <a href="/" className="navbar-brand">Dojo</a> */}
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand nav-link text-white" href="/dojo">Dojo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/samurai">Samurai</a>
                    </li>
                </ul>
            </div>
        </nav>

        // <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        //     <a className="navbar-brand col-sm-4 col-md-3 mr-1" href="#">Dojo</a>
        
        //     <ul className="nav px-3">
        //         <li className="nav-item ">
        //             <a className="nav-link" href="#"><i data-feather="log-out"></i>Home</a>
        //         </li>
        //         <li className="nav-item ">
        //             <a className="nav-link" href="#"><i data-feather="log-out"></i>Dojo</a>
        //         </li>
        //         <li className="nav-item ">
        //             <a className="nav-link" href="#"><i data-feather="log-out"></i> Samurai</a>
        //         </li>
        //     </ul>
        // </nav>
     );
}
 
export default Navbar;