import type { JSX } from "react";
import CardProyectos from "../CardProyectos/CardProyectos";

export default function Proyectos() {
    let explicacion1: JSX.Element = (
    <>
        En este proyecto freelance, una compañía de paquetería necesitaba un servicio para generar notas, 
        además de reportar cuando estas fueran entregadas y una hoja de gestión al final del mes. 
        Decidí crear un proyecto con <strong>React</strong>, <strong>C#</strong> y <strong>MongoDB</strong>.
        <br />
        <br />
        <strong>1. React:</strong> Se usó para el frontend con la creación de componentes usando <em>TypeScript</em> para los tipos.
        <br />
        <strong>2. C#:</strong> Usando Swagger cree y genere toda la logica para conectar la parte visual con mi base de datos
        <br />
        <strong>2. MongoDb:</strong> En este NoSQL cree 2 tablas donde se guardaba la información de los paquetes enviados y recibidos
    </>
    );

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Título con adornos */}
      <div className="flex justify-center items-center m-10" id="Proyectos">
        <img
          src="./adorno1.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
        <h1 className="text-6xl font-bold">Proyectos</h1>
        <img
          src="./adorno1.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
      </div>

  
      {/* Lista de Cards */}
      <div className="flex flex-col items-center gap-8 w-full">
        <CardProyectos titulo={"Servicio de paquetería de Logipack"} explicacion={explicacion1} direccion1={"https://github.com/AndresBreceda/Papa"} direccion2={"/Logipack"} />
        <CardProyectos titulo={""} explicacion={explicacion1} direccion1={""} direccion2={""} />
        <CardProyectos titulo={""} explicacion={explicacion1} direccion1={""} direccion2={""} />
      </div>
    </div>
  );
}
