import { GithubIcon, Info } from "lucide-react";
import type { JSX } from "react";

interface CardProps{
  titulo: string;
  explicacion: JSX.Element;
  direccion1: string;
  direccion2: string;
  imagen: string;
}

export default function Card({ imagen, titulo, explicacion, direccion1, direccion2 }: CardProps) {
  return (
    <div className="max-w-3xl mx-auto p-5 border-2 border-black rounded-md shadow-md flex items-center gap-6 bg-white">
      {/* Imagen */}
      <div className="w-32 h-32 bg-gradient-to-b from-sky-200 to-green-200 flex items-center justify-center rounded-sm">
        <img
          src={imagen}
          alt="placeholder"
          className="object-cover rounded"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {titulo}
        </h1>
        <p className="text-gray-600 text-sm max-w-lg">
          {explicacion}
        </p>

        {/* Botones */}
        <div className="flex gap-4">
          <a href={direccion1} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 transition">
            <GithubIcon /> Codigo
          </a>
          <a href={direccion2} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
            <Info /> Conocer más
          </a>
        </div>
      </div>
    </div>
  );
}
