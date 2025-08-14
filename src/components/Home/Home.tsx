import Experiencia from "../Experiencia/Experiencia";
import Footer from "../Footer/Footer";
import Formacion from "../Formacion/Formacion";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Logros from "../Logros/Logros";
import Proyectos from "../Proyectos/Proyectos";
import Skills from "../Skills/Skills";

export default function Home(){
    return (
        <div>
            <Header></Header>

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