import Experiencia from "../../components/Experiencia/Experiencia";
import Footer from "../../components/Footer/Footer";
import Formacion from "../../components/Formacion/Formacion";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Logros from "../../components/Logros/Logros";
import Proyectos from "../../components/Proyectos/Proyectos";
import Skills from "../../components/Skills/Skills";

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