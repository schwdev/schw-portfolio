import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Galeria from "../pages/galeria";
import Contato from "../pages/contato";

export default function RoutesApp() {
    return (

            <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            </HashRouter>


    )
};
