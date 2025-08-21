import type { JSX } from "react";
import Reconocimiento from "../Reconocimiento/Reconocimeinto";

let titulo: JSX.Element = (
    <>
        Universidad Cuauhtémoc <br></br> Aguascalientes
    </>
    );

export default function Formacion() {
  return (
    <div className="flex flex-col items-center mt-10 gap-10" id="Formacion">
      {/* Título con adornos */}
      <div className="flex justify-center items-center gap-4">
        <img
          src="./adorno2.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
        <h1 className="text-6xl font-bold">Formación</h1>
        <img
          src="./adorno2.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
      </div>

      {/* Reconocimientos en fila */}
      <div className="flex justify-center items-start gap-8">
        <Reconocimiento
          institucion={titulo}
          logo="./uca.png"
          subtexto="Ingeniería en Diseño y Desarrollo de Software"
          tiempo="2023 - 2026"
        />

        <Reconocimiento
          institucion="Preparatoria de la Universidad Cuauhtémoc Aguascalientes"
          logo="./uca.png"
          subtexto="Técnico en Comunicación y Medios digitales"
          tiempo="2019 - 2022"
        />
      </div>
    </div>
  );
}
