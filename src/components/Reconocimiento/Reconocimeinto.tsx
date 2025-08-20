import type { JSX } from "react";

type ReconocimientoProps = {
  institucion: JSX.Element | string;
  logo: string;
  subtexto: string;
  tiempo: string;
};

export default function Reconocimiento({ institucion, logo, subtexto, tiempo }: ReconocimientoProps) {
  return (
    <div className="relative w-full max-w-2xl bg-white border-4 border-black rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
      {/* Logo */}
      <img
        src={logo}
        alt={`Logo de ${institucion}`}
        className="w-20 h-20 object-contain absolute -top-10 left-6 bg-white border-2 border-black rounded-full p-2 shadow-md"
      />

      {/* Título */}
      <h2 className="mt-8 text-3xl font-extrabold text-black">{institucion}</h2>

      {/* Subtexto */}
      <p className="mt-2 text-lg text-gray-700 italic">{subtexto}</p>

      {/* Tiempo */}
      <span className="mt-4 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-1 rounded-full border border-gray-300">
        {tiempo}
      </span>
    </div>
  );
}
