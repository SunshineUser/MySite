import { Link } from 'react-router-dom'; 

const Navbar = () =>{

    return(
    <div className="navbar-return">
    <article id="body-container" style={{ display: "flex"}}>
        <nav id="sidebar-left">
            //content on left
                    
                <Link to="/" className="Linker">Home</Link>

                <Link to="/about" className="Linker">About</Link> 

                <Link to="/skills" className="Linker">Skills</Link>
        </nav>
    
      <section id="main-content" style={{width: "80%"}}>
        //content in main context
      </section>
    </article>
    </div>
    )
}

export default Navbar;