import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-white/70 backdrop-blur-md border-b border-gray-300">
      <a href="/" className="flex items-center gap-3">
        <img 
          src="./andres-logo.svg" 
          alt="Logo Andrés Portafolio" 
          className="h-10 w-auto"
        />
        <div className="text-2xl font-semibold">
          Andrés E. Breceda
        </div>
      </a>

      <div>
        <AlignJustify className="w-6 h-6" />
      </div>
    </header>
  );
}
