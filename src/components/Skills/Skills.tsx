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
            { src: "./React.png", title: "React", gradientColor: "#0000FF" },
            { src: "./typescript.png", title: "Typescript" },
            { src: "./tailwind.png", title: "TailwindCss", gradientColor: "#38bdf8" },
            { src: "./html.png", title: "HTML" },
            { src: "./css.png", title: "Css" },
            { src: "./javascript.png", title: "JavaScript" },
          ]}/>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-2 mt-10">
          <h2 className="text-4xl font-semibold">Backend</h2>
          <Grid
            images={[
            { src: "./c-gato.svg", title: "C#", gradientColor: "#944a91" },
            { src: "./php.png", title: "Php", gradientColor: "#6f76a9" },
            { src: "./python.jpg", title: "Python", gradientColor: "#fedb52" },
          ]}/>
        </div>

        {/* Otras tecnologías */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">Otras Tecnologías</h2>
          <Grid             
          images={[
            { src: "./sql.png", title: "SQL" },
            { src: "./mongo.webp", title: "MongoDB", gradientColor: "#11aa50" },
            { src: "./git.png", title: "Git", gradientColor: "#F05033 " },
            { src: "./github.png", title: "GitHub", gradientColor: "" },
            { src: "./linux.jpg", title: "Linux", gradientColor: "#ecb20a" },
            { src: "./docker.png", title: "Docker", gradientColor: "#099cec" },
            { src: "./Azure.png", title: "Azure" },
          ]}/>
        </div>

      </div>
    </div>
  );
}
