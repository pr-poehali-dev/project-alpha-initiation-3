const medichkaPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/ee4df50d-b0f7-4126-a888-d96a14edb787.jpg";

export default function MedichkaBridgeHero() {
  return (
    <div className="relative flex items-end h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={medichkaPhoto}
          alt="Мост через бывшую реку Медичку"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 text-white px-6 lg:px-16 pb-20 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-80">
          Остановка №3 — Маршрут по мостам Томска
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Мост через<br />бывшую реку Медичку
        </h1>
        <p className="text-base md:text-xl max-w-2xl opacity-90 leading-relaxed">
          Локация: Университетская роща, на границе территорий
          ТГУ и СибГМУ. Первое железобетонное сооружение в Сибири.
        </p>
      </div>
    </div>
  );
}
