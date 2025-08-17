import { GithubIcon, InstagramIcon, Linkedin, Mail } from "lucide-react";

export default function Footer(){
    return(
    <footer className="bg-black flex justify-between p-10 text-white mt-10">
        <div>
            {/* cambiar a logo en blanco */}
            <img 
                src="./andres-logo.svg" 
                alt="Logo Andrés Portafolio" 
                className="h-10 w-auto"
            />
            <div className="text-2xl font-semibold">
                Andrés E. Breceda
            </div>
        </div>

        <div>
            <h2 className="text-2xl"><strong>Contactame</strong></h2>
            <div className="flex gap-4 p-4">
                <a className="hover:text-yellow-400" href="https://www.instagram/AndresBreceda.com" target="_blank">
                    <InstagramIcon></InstagramIcon>
                </a>
                
                <a className="hover:text-yellow-400" href="https://www.instagram/AndresBreceda.com" target="_blank">
                    <Linkedin></Linkedin>
                </a>
                    
                <a className="hover:text-yellow-400" href="https://www.instagram/AndresBreceda.com" target="_blank">
                    <Mail></Mail>
                </a>
                    
                <a className="hover:text-yellow-400" href="https://www.instagram/AndresBreceda.com" target="_blank">
                    <GithubIcon></GithubIcon>                    
                </a>

            </div>
        </div>
        

    </footer>

    );
}