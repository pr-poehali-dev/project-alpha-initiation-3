const stoneBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/2abbce60-79dd-4704-b334-7863fa1e8d65.jpg";

export default function StoneBridgeHero() {
  return (
    <div className="relative flex items-end h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={stoneBridgePhoto}
          alt="Каменный мост (Думский мост)"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 text-white px-6 lg:px-16 pb-20 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-80">
          Остановка №4 — Маршрут по мостам Томска
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Каменный мост<br />
          <span className="opacity-70 text-3xl md:text-5xl lg:text-6xl">
            (Думский мост)
          </span>
        </h1>
        <p className="text-base md:text-xl max-w-2xl opacity-90 leading-relaxed">
          Соединяет улицу Розы Люксембург и Набережную реки Ушайки.
          Единственный в Томске мост, по которому ходят трамваи.
        </p>
      </div>
    </div>
  );
}
