import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Galeria from "../pages/galeria";
import Contato from "../pages/contato";

export default function RoutesApp() {
    return (

       
            <Routes>
                <Route path="/schw-portfolio/" element={<Home />} />
                <Route path="/schw-portfolio/sobre" element={<Sobre />} />
                <Route path="/schw-portfolio/galeria" element={<Galeria />} />
                <Route path="/schw-portfolio/contato" element={<Contato />} />
            </Routes>
       


    )
};
