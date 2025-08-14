export default function Landing(){
    return(
        <div className="bg-white flex justify-between items-center p-10 m-10 h-screen gap-10 border-8 border-black"
             style={{ borderStyle: "double" }}>
            
            {/* Contenedor de la imagen */}
            <div className="flex-1 flex justify-center items-center">
                <img 
                    src="./andres-logo.webp" 
                    alt="imagen de andres"
                    className="max-w-full h-auto object-contain"
                />
            </div>

            {/* Contenedor del texto */}
            <div className="flex-1 flex flex-col justify-center">
                <p className="text-2xl mb-4">
                    Hola soy <strong>Andrés E. Breceda</strong>
                </p>
                <p className="text-4xl font-bold mb-4">
                    Desarrollador Web Full-stack
                </p>
                <p className="text-2xl leading-relaxed">
                    Tengo un año de experiencia en desarrollo web, además de trabajar como profesor 
                    de inglés, portugués y francés.
                </p>
            </div>

        </div>
    );
}
