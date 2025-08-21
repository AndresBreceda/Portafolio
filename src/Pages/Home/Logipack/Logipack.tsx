import { useState, type JSX } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ProyectoDetalle from "../../../components/ProyectoDetalle/ProyectoDetalle";
import SidePanel from "../../../components/Sidepanel/Sidepanel";

let explicacion1: JSX.Element = (
  <>
    Desarrollé un <strong>servicio de paquetería</strong> como proyecto personal
    utilizando <strong>React, Tailwind CSS, TypeScript</strong> en el frontend y
    <strong>C#, Swagger y MongoDB</strong> en el backend.
    <br />
    <br />
    El sistema permite crear paquetes, aceptar o eliminar entregas, y mostrar la
    lista de paquetes entregados en el mes. Toda la información se almacena y
    gestiona en la base de datos <strong>MongoDB</strong>.
    <br />
    <br />
    El flujo principal consiste en:
    <br />
    <br />
    1 - Crear un paquete en el sistema <br />
    2 - Generar automáticamente la guía en formato PDF <br />
    3 - Gestionar su estado (aceptado, entregado o eliminado) <br />
    4 - Consultar el listado de paquetes entregados en el mes <br />
    5 - Descargar un PDF consolidado con todas las entregas del mes
    <br />
    <br />
    Como <strong>desarrollador</strong>, me encargué de diseñar las interfaces
    con React y Tailwind, implementar la comunicación frontend-backend con
    TypeScript, documentar la API con <strong>Swagger</strong>, y desarrollar la
    lógica de generación de PDFs y persistencia de datos en <strong>MongoDB</strong>.
    <br />
    <br />
    <strong>Lo aprendido:</strong> Perfeccioné mis habilidades en el diseño de
    sistemas fullstack, manejo de <strong>APIs RESTful</strong>, documentación
    con Swagger y generación de reportes automáticos en PDF.
  </>
);



export default function Logipack(){
      const [panelAbierto, setPanelAbierto] = useState(false);

    return (
        <div>
            <Header abrirPanel={() => setPanelAbierto(true)} />
            <SidePanel abierto={panelAbierto} cerrarPanel={() => setPanelAbierto(false)} />

            <ProyectoDetalle 
            titulo="Servicio de paqueteria"
            imagenes={["./logipack/landing.png", "./logipack/descarga.png", "./logipack/pdf1.png"]}
            tecnologias={[
                { nombre: "React", color: "#61DAFB" },
                { nombre: "Tailwind", color: "linear-gradient(to right, #06B6D4, #3B82F6)" },
                { nombre: "MongoDb", color: "#11AA50" },
                { nombre: "TypeScript", color: "#3178C6" },
            ]}
            descripciones={[
                explicacion1
            ]}/>

            <Footer></Footer>
        </div>
    );
}