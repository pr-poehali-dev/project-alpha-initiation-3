const communalBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/d8002f44-85b5-4442-b429-908254541934.jpg";

export default function CommunalBridgeHero() {
  return (
    <div id="bridge-communal" className="relative flex items-end h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={communalBridgePhoto}
          alt="Коммунальный мост через Томь"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 text-white px-6 lg:px-16 pb-20 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-80">
          Остановка №2 — Маршрут по мостам Томска
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Коммунальный мост<br />
          <span className="opacity-70 text-3xl md:text-5xl lg:text-6xl">
            (Южный, Старый)
          </span>
        </h1>
        <p className="text-base md:text-xl max-w-2xl opacity-90 leading-relaxed">
          Первый капитальный мост через Томь — символ советской эпохи
          и свидетель полувека жизни Томска.
        </p>
      </div>
    </div>
  );
}