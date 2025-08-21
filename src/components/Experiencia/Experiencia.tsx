import Card from "../Card/Card";

export default function Experiencia() {
  return (
    <div className="flex flex-col items-center gap-10" id="Experiencia">
      {/* Título con adornos */}
      <div className="flex items-center justify-center gap-4">
        <img
          src="./adorno.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
        <h1 className="text-6xl font-bold">Experiencia</h1>
        <img
          src="./adorno.svg"
          className="w-120"
          alt="adorno para pasar de sección"
        />
      </div>

      {/* Card con nota afuera */}
      <div className="relative flex justify-center">
        <Card />

        {/* Nota afuera, pegada en la esquina */}
        <img
          src="./nota.svg"
          alt="nota tiempo trabajado"
          className="w-50 object-contain absolute -top-16 -right-16 z-10"
        />
      </div>
    </div>
  );
}
