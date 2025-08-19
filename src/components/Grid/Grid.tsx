type GridProps = {
  images: { src: string; title: string }[]; // ahora cada imagen puede traer título
  gradientColor?: string;
};

export default function Grid({ images, gradientColor = "from-blue-500" }: GridProps) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full h-full">
      {images.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-start overflow-hidden rounded-xl border bg-white p-4"
        >
          {/* Fondo difuminado radial */}
          <div
            className={`absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from),transparent)] ${gradientColor}`}
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
