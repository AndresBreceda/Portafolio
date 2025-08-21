import { useState, type JSX } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ProyectoDetalle from "../../../components/ProyectoDetalle/ProyectoDetalle";
import SidePanel from "../../../components/Sidepanel/Sidepanel";

let explicacion1: JSX.Element = (
  <>
    En este proyecto trabajé junto a un equipo universitario aplicando la{" "}
    <strong>metodología Scrum</strong>.
    <br />
    <br />
    Participé en todas las fases del desarrollo:{" "}
    <em>1-Planeación, 2-Diseño, 3-Producción y 4-Despliegue</em>. En este
    proyecto desempeñé los cargos de <strong>Scrum Master</strong> y{" "}
    <strong>Desarrollador web</strong>.
    <br />
    <br />
    Además, trabajé con tecnologías como <strong>React, Tailwind CSS,
    TypeScript</strong> y las librerías <strong>jsPDF</strong> y{" "}
    <strong>GSAP</strong>, además de emplear{" "}
    <strong>Git y GitHub</strong> para el control de versiones.
    <br />
    <br />
    El proyecto web consiste en el siguiente flujo:
    <br />
    <br />
    1 - Escoger una plantilla para editar <br />
    2 - Llenar un formulario con la información <br />
    3 - Generar un CV en PDF con los datos personalizados
    <br />
    <br />
    Como <strong>Scrum Master</strong>, logré que todas las entregas se
    realizaran a tiempo. Organicé las reuniones diarias para dar seguimiento al
    progreso del equipo y definí las tecnologías a utilizar en el proyecto.
    <br />
    <br />
    Como <strong>Desarrollador</strong>, diseñé interfaces con{" "}
    <strong>React</strong>, apliqué estilos con <strong>Tailwind CSS</strong>,
    mantuve buenas prácticas con <strong>TypeScript</strong> e integré la
    librería <strong>jsPDF</strong> en la aplicación web.
    <br />
    <br />
    <strong>Lo aprendido:</strong> Fortalecí mi conocimiento en flujos de
    trabajo, consolidé el uso de <strong>Git y GitHub</strong> y mejoré mis
    habilidades de trabajo en equipo para la creación de una aplicación web.
  </>
);


export default function Pronto(){
      const [panelAbierto, setPanelAbierto] = useState(false);

    return (
        <div>
            <Header abrirPanel={() => setPanelAbierto(true)} />
            <SidePanel abierto={panelAbierto} cerrarPanel={() => setPanelAbierto(false)} />

            <ProyectoDetalle 
            titulo="Pronto Cv"
            imagenes={["./Pronto/landing.webp", "./Pronto/plantillas.webp", "./Pronto/formulario.webp"]}
            tecnologias={[
                { nombre: "React", color: "#61DAFB" },
                { nombre: "Tailwind", color: "linear-gradient(to right, #06B6D4, #3B82F6)" },
                { nombre: "github", color: "#BA24DF" },
                { nombre: "TypeScript", color: "#3178C6" },
            ]}
            descripciones={[
                explicacion1
            ]}/>

            <Footer></Footer>
        </div>
    );
}