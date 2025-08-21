import { useState } from "react";
import Experiencia from "../../components/Experiencia/Experiencia";
import Footer from "../../components/Footer/Footer";
import Formacion from "../../components/Formacion/Formacion";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Logros from "../../components/Logros/Logros";
import Proyectos from "../../components/Proyectos/Proyectos";
import Skills from "../../components/Skills/Skills";
import SidePanel from "../../components/Sidepanel/Sidepanel";

export default function Home(){
      const [panelAbierto, setPanelAbierto] = useState(false);

    return (
        <div>
            <Header abrirPanel={() => setPanelAbierto(true)} />
            <SidePanel abierto={panelAbierto} cerrarPanel={() => setPanelAbierto(false)} />

            <Landing></Landing>

            <Experiencia></Experiencia>

            <Proyectos></Proyectos>

            <Formacion></Formacion>

            <Skills></Skills>

            <Logros></Logros>

            <Footer></Footer>
        </div>
    );
}