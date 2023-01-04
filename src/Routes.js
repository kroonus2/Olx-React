import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";

export default () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/sobre', element: <About /> },
        { path: '/signin', element: <Signin /> },
        { path: '*', element: <NotFound /> }
    ]);
}