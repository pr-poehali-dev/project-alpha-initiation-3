export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-6 sm:gap-8 shrink-0">
              <div className="flex gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Маршрут</h3>
                  <a
                    href="#bridges"
                    className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Мост Дружбы
                  </a>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Проект</h3>
                  <a
                    href="#history"
                    className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    История мостов
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-white text-sm sm:text-base sm:items-end sm:text-right max-w-xs">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Автор</h3>
                <p>Проект разработала Мурза Виктория Витальевна</p>
                <p className="text-neutral-400">2026 · Мосты Томска</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                МОСТЫ<br/>ТОМСКА
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}