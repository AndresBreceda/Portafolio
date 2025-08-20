type GridProps = {
  images: { src: string; title: string; gradientColor?: string }[]; 
};

export default function Grid({ images }: GridProps) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full h-full">
      {images.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-start overflow-hidden rounded-xl border bg-white p-4"
        >
          {/* Fondo difuminado radial con el color que venga de props */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${item.gradientColor ?? "#ffffff"}, transparent)`
            }}
          ></div>


          {/* Título arriba */}
          <h2 className="relative z-10 text-black font-semibold mb-2 text-center">
            {item.title}
          </h2>

          {/* Imagen */}
          <img
            src={item.src}
            alt={`Imagen ${index + 1}`}
            className="relative z-10 w-auto h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
