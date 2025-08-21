import LanguageCard from "../Language/Language";

export default function Logros() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      {/* Encabezado con adornos */}
      <div className="flex items-center justify-center gap-4">
        <img
          src="./adorno.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
        <h1 className="text-6xl font-bold">Logros</h1>
        <img
          src="./adorno.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
      </div>

      {/* LanguageCard abajo */}
      <LanguageCard video="./usa.webm" texto="Ingles C1 toefl 540" />
      <LanguageCard video="./mexico.webm" texto="Español nativo" />
      <LanguageCard video="./brasil.webm" texto="Portugués C1" />
      <LanguageCard video="./francia.webm" texto="Francés B1" />

    <div className="flex flex-col gap-6">
      {/* Card 1 */}
      <div className="flex items-center gap-4">
        <div className="w-32 h-20 border-2 border-black overflow-hidden rounded-md flex items-center justify-center bg-white">
        <img
            src="./rotary.png"
            className="max-w-[80%] max-h-[80%] object-contain"
        />
        </div>

        <span className="text-3xl font-bold">Rotary Internacional: Intercambio a Brasil 2021-2022 </span>
      </div>
    </div>
    </div>
  );
}
