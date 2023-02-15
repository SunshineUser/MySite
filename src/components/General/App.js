import React, {useState, useEffect} from "react"
import {Outlet} from 'react-router-dom';

import Navbar from './Navbar';

const App = () => {

    return(
    <div>

        
        <Navbar className="navbar"/>
        <Outlet />

        <footer>
            footer
        </footer>
    </div>)
}

export default App;