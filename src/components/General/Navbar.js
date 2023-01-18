import { Link } from 'react-router-dom'; 

const Navbar = () =>{

    return(
        <div className="navbar-return">
            <nav>
                <Link to="/" className="Linker">Home</Link>

                <Link to="/about" className="Linker">About</Link> 

                <Link to="/skills" className="Linker">Skills</Link>
            </nav>
        </div>
    )
}

export default Navbar;