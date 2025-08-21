
interface GridProps{
    video: string;
    texto: string;
}

export default function LanguageCard({ video, texto }: GridProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Card 1 */}
      <div className="flex items-center gap-4">
        <div className="w-32 h-20 border-2 border-black overflow-hidden rounded-md">
          <video
            src={video} // tu video aquí
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-3xl font-bold">{texto}</span>
      </div>
    </div>
  );
}
