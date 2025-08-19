import Grid from "../Grid/Grid";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-2 m-10">
      {/* Encabezado principal */}
      <div className="flex justify-center items-center gap-2">
        <img src="./adorno3.svg" className="w-120" alt="adorno izquierdo" />
        <h1 className="text-6xl font-bold">Skills</h1>
        <img src="./adorno3.svg" className="w-120" alt="adorno derecho" />
      </div>

      {/* Secciones */}
      <div className="flex flex-col p-20">
        {/* Frontend */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">Frontend</h2>
          <Grid 
            images={[
            { src: "./React.png", title: "React" },
            { src: "https://via.placeholder.com/150", title: "Tailwind" },
            { src: "https://via.placeholder.com/150", title: "C#" },
            { src: "https://via.placeholder.com/150", title: "PostgreSQL" },
            { src: "https://via.placeholder.com/150", title: "GitHub" },
          ]}/>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-2 mt-10">
          <h2 className="text-4xl font-semibold">Backend</h2>
          <Grid
            images={[
            { src: "./React.png", title: "React" },
            { src: "https://via.placeholder.com/150", title: "Tailwind" },
            { src: "https://via.placeholder.com/150", title: "C#" },
            { src: "https://via.placeholder.com/150", title: "PostgreSQL" },
            { src: "https://via.placeholder.com/150", title: "GitHub" },
          ]}/>
        </div>

        {/* Otras tecnologías */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">Otras Tecnologías</h2>
          <Grid             images={[
            { src: "./React.png", title: "React" },
            { src: "https://via.placeholder.com/150", title: "Tailwind" },
            { src: "https://via.placeholder.com/150", title: "C#" },
            { src: "https://via.placeholder.com/150", title: "PostgreSQL" },
            { src: "https://via.placeholder.com/150", title: "GitHub" },
          ]}/>
        </div>

      </div>
    </div>
  );
}
