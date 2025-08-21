import React, { type JSX } from "react";

interface Tecnologia {
  nombre: string;
  color: string; // puede ser un color normal o un gradient
}

interface ProyectoDetalleProps {
  titulo: string;
  imagenes: string[];
  tecnologias: Tecnologia[];
  descripciones: JSX.Element[];
}

const ProyectoDetalle: React.FC<ProyectoDetalleProps> = ({
  titulo,
  imagenes,
  tecnologias,
  descripciones,
}) => {
  return (
    <div className="flex gap-6 p-8 mt-20" id="Proyectos">
      {/* Columna izquierda (imagenes) */}
      <div className="flex flex-col gap-6 w-1/3">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Proyecto imagen ${index + 1}`}
            className="rounded-lg border object-cover"
          />
        ))}
      </div>

      {/* Columna derecha (contenido) */}
      <div className="flex flex-col gap-6 w-2/3">
        {/* Etiquetas de tecnologías */}
        <div className="grid grid-cols-2 gap-4 max-w-md">
          {tecnologias.map((tec, index) => (
            <span
              key={index}
              className="px-4 py-2 text-white font-semibold rounded-md text-center"
              style={{
                background: tec.color, // usa el color o gradiente que se pase
              }}
            >
              {tec.nombre}
            </span>
          ))}
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold">{titulo}</h1>

        {/* Descripciones */}
        <div className="flex flex-col gap-4 text-gray-700 bg-white border-2 p-10">
          {descripciones.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectoDetalle;
