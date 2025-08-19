import { Download, Github, Linkedin, Mail } from "lucide-react";
import './styles.css';

export default function Landing() {
  return (
    <div className="min-h-screen p-10 mt-20">
      <div className="grid grid-cols-3 grid-rows-3 gap-6 h-full">

        {/* Caja principal */}
        <div
          className="col-span-2 row-span-2 bg-white border-8 border-black relative overflow-hidden transition-transform duration-500 hover:scale-105"
          style={{ borderStyle: "double" }}
        >
          <div className="flex h-full">
            {/* Imagen */}
            <div className="flex-1 flex justify-center items-center p-6">
              <img
                src="./andres-logo.webp"
                alt="imagen de andres"
                className="max-w-full h-auto object-contain rounded-xl"
              />
            </div>
            {/* Texto */}
            <div className="flex-1 flex flex-col justify-center p-6">
              <p className="text-2xl mb-4">
                Hola soy <strong>Andrés E. Breceda</strong>
              </p>
              <p className="text-4xl font-bold mb-4">
                Desarrollador Web Full-stack
              </p>
              <p className="text-xl leading-relaxed">
                Tengo un año de experiencia en desarrollo web, además de
                trabajar como profesor de inglés, portugués y francés.
              </p>
            </div>
          </div>
        </div>

        {/* Caja 2 - Amarillo con video de fondo */}
        <a
        href="/#Proyectos"
        className="relative group col-start-3 bg-white border-8 border-black flex items-center justify-center text-2xl font-bold overflow-hidden text-center p-6"
        style={{ borderStyle: "double" }}
        >
          {/* Overlay amarillo (animado con hover) */}
          <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-70"></div>

          {/* Texto encima */}
          <div className="relative z-10 text-black group-hover:text-white ">
              <span>Revisa mis proyectos</span>
          </div>
        </a>


        {/* Caja 3 - Verde */}
        <a
          href="andres-esquivel-cv.pdf"
          className="relative group col-start-3 row-start-2 bg-white border-8 border-black flex flex-col items-center justify-center text-2xl font-bold gap-4 overflow-hidden text-center p-6"
          style={{ borderStyle: "double" }}
          download
        >
          <span className="relative z-10 text-black group-hover:text-white">Descarga mi CV</span>
          <Download size={72} className="relative z-10 text-black group-hover:text-white spin-y-once" />
          <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </a>

        {/* Caja 4 - Azul clarito */}
        <a
          href="mailto:a.e.breceda@gmail.com"
          className="relative group row-start-3 bg-white border-8 border-black flex flex-col items-center justify-center text-2xl font-bold gap-4 overflow-hidden text-center p-6"
          style={{ borderStyle: "double" }}
        >
          <span className="relative z-10 text-black group-hover:text-white">Contáctame por Email</span>
          <Mail size={72} className="relative z-10 text-black group-hover:text-white spin-y-once" />
          <div className="absolute inset-0 bg-sky-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </a>

        {/* Caja 5 - Azul */}
        <a
          href="https://www.linkedin.com/in/andres-esquivel-breceda/"
          className="relative group row-start-3 bg-white border-8 border-black flex flex-col items-center justify-center text-2xl font-bold gap-4 overflow-hidden p-6"
          style={{ borderStyle: "double" }}
          target="_blank"
        >
          <span className="relative z-10 text-black group-hover:text-white">LinkedIn</span>
          <Linkedin size={72} className="relative z-10 text-black group-hover:text-white spin-y-once" />
          <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </a>

        {/* Caja 6 - Roja */}
        <a
          href="https://github.com/AndresBreceda"
          className="relative group row-start-3 bg-white border-8 border-black flex flex-col items-center justify-center text-2xl font-bold gap-4 overflow-hidden p-6"
          style={{ borderStyle: "double" }}
          target="_blank"
        >
          <span className="relative z-10 text-black group-hover:text-white">GitHub</span>
          <Github
            size={72}
            className="relative z-10 text-black group-hover:text-white spin-y-once"
          />

          <div className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </a>
      </div>
    </div>
  );
}
