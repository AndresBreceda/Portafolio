import Grid from "../Grid/Grid";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-2 m-10" id="Skills">
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
            { src: "./React.webp", title: "React", gradientColor: "#0000FF" },
            { src: "./typescript.webp", title: "Typescript", gradientColor: "#3178c6"  },
            { src: "./tailwind.webp", title: "TailwindCss", gradientColor: "#38bdf8" },
            { src: "./html.webp", title: "HTML", gradientColor: "#E44D26"  },
            { src: "./css.webp", title: "Css", gradientColor: "#2BA1D2"  },
            { src: "./javascript.webp", title: "JavaScript", gradientColor: "#F7DF1E"  },
          ]}/>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-2 mt-10">
          <h2 className="text-4xl font-semibold">Backend</h2>
          <Grid
            images={[
            { src: "./c-gato.svg", title: "C#", gradientColor: "#944a91" },
            { src: "./php.webp", title: "Php", gradientColor: "#6f76a9" },
            { src: "./py.webp", title: "Python", gradientColor: "#fedb52" },
          ]}/>
        </div>

        {/* Otras tecnologías */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">Otras Tecnologías</h2>
          <Grid             
          images={[
            { src: "./sql.webp", title: "SQL" , gradientColor: "#DF6E24" },
            { src: "./mongo.webp", title: "MongoDB", gradientColor: "#11aa50" },
            { src: "./git.webp", title: "Git", gradientColor: "#F05033 " },
            { src: "./github.webp", title: "GitHub", gradientColor: "#BA24DF"  },
            { src: "./linux.webp", title: "Linux", gradientColor: "#ecb20a" },
            { src: "./docker.webp", title: "Docker", gradientColor: "#099cec" },
            { src: "./Azure.webp", title: "Azure", gradientColor: "#0000FF"  },
          ]}/>
        </div>

      </div>
    </div>
  );
}
