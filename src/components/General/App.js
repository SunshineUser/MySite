import React, {useState, useEffect} from "react"
import {Outlet} from 'react-router-dom';

import Navbar from './Navbar';

const App = () => {

    return(
    <div>
        <header>
            <h1>Ian Sorensen</h1>
        </header>

        <Navbar className="navbar"/>
        <Outlet />

        <footer>
            footer
        </footer>
    </div>)
}

export default App;