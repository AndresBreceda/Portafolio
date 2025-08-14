import { AlignJustify } from "lucide-react";

export default function Header(){
    return(
        <header className="flex justify-between items-center p-10">
            <div className="flex items-center gap-3">
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
                <AlignJustify className="w-6 h-6" />
            </div>
        </header>
    );
}
