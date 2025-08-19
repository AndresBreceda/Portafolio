import { GithubIcon, InstagramIcon, Linkedin, Mail } from "lucide-react";

export default function Footer(){
    return(
    <footer className="bg-black flex justify-between p-10 text-white mt-10">
        <div>
            {/* cambiar a logo en blanco */}
            <img 
                src="./andres-logo-blanco.svg" 
                alt="Logo Andrés Portafolio" 
                className="h-10 w-auto"
            />
            <div className="text-2xl font-semibold">
                Andrés E. Breceda
            </div>
        </div>

        <div>
            <h2 className="text-2xl"><strong>Contactame</strong></h2>
            <div className="flex gap-4 pl-0 p-4">
                
                <a className="hover:text-yellow-400" href="https://www.linkedin.com/in/andres-esquivel-breceda/" target="_blank">
                    <Linkedin size={32}></Linkedin>
                </a>
                    
                <a className="hover:text-yellow-400" href="mailto:a.e.breceda@gmail.com">
                    <Mail size={32}></Mail>
                </a>
                    
                <a className="hover:text-yellow-400" href="https://github.com/AndresBreceda" target="_blank">
                    <GithubIcon size={32}></GithubIcon>                    
                </a>

            </div>
        </div>
        

    </footer>

    );
}