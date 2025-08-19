import './styles.css';

export default function Card() {
  return (
    <div
      className="
        relative group bg-white border-2 border-black flex flex-col 
        items-center justify-center text-center p-6 gap-4 overflow-hidden
        card-with-lines
      "
    >

      <img
        src="./tique.svg"
        alt="Tique logo"
        className="w-100 object-contain relative z-10"
      />

      {/* Título */}
      <h2 className="relative z-10 text-2xl font-bold">
        Event Singer V3 - Tique Tecnologías de la Información
      </h2>

      {/* Subtexto */}
      <p className="relative z-10 text-sm leading-snug text-black max-w-md text-left">
        En Tique desempeñé el rol de desarrollador full-stack junior, trabajando en la creación de interfaces con React, modelado de componentes con Tailwind CSS, desarrollo de APIs con C# y su integración al frontend mediante TanStack Query. Además, participé en dailys y aprendí de la cultura de trabajo de la empresa.
      </p>
    </div>
  );
}
