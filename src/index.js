import React from "react";
import { createRoot } from 'react-dom/client';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/General/App'
import Homepage from './components/General/Homepage'
import Navbar from './components/General/Navbar';
import ErrorPage from './components/General/ErrorPage';

import About from './components/Pages/About';
import Skills from './components/Pages/Skills';

const router = createBrowserRouter([
    {   
        path:'/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "skills",
                element: <Skills />
            }
        ]
    }
]);


const root = createRoot( document.getElementById("app") );
root.render( <RouterProvider router={router} /> );