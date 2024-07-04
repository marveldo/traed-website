import React from "react";
import { Landingpage } from "./Compenents/Landingpage";
import { BrowserRouter, HashRouter, Routes , Route } from "react-router-dom";
import "./index.css"
import "animate.css/animate.compat.css"

export const App = () => {
    return(
        <HashRouter>
         <Routes>
            <Route path="/" element={<Landingpage/>}/>
         </Routes>
        </HashRouter>
    )
}