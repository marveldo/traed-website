import React from "react";
import { Landingpage } from "./Compenents/Landingpage";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./index.css"
import "animate.css/animate.compat.css"

export const App = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Landingpage/>}/>
         </Routes>
        </BrowserRouter>
    )
}