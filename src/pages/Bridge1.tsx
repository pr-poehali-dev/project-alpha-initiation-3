import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const stationPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/1cd2a646-7e18-441a-a24b-c59e7357c60d.png";
const mainCover = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/files/39dcb1f2-0e73-4382-8685-3aca378ed54e.jpg";

export default function Bridge1() {
  const coverContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: coverProgress } = useScroll({
    target: coverContainer,
    offset: ["start start", "end start"],
  });
  const coverY = useTransform(coverProgress, [0, 1], ["0vh", "50vh"]);

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* COVER — Мосты Томска */}
      <div
        ref={coverContainer}
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <motion.div style={{ y: coverY }} className="absolute inset-0 w-full h-full">
          <img
            src={mainCover}
            alt="Мосты Томска"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
            Пеший маршрут
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            МОСТЫ<br />ТОМСКА
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Прогулка сквозь века — история городских переправ,<br className="hidden md:block" />
            от деревянных настилов до железобетонных пролётов
          </p>
          <div className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] opacity-80 animate-pulse">
            <Icon name="ChevronDown" size={16} />
            Остановка №1
          </div>
        </div>
      </div>

      {/* HERO — Мост у Томск-1 */}
      <div
        ref={container}
        className="relative flex items-end h-screen overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img
            src={stationPhoto}
            alt="Вокзал Томск-1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        </motion.div>

        <div className="relative z-10 text-white px-6 lg:px-16 pb-20 max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-80">
            Остановка №1 — Маршрут по мостам Томска
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Пешеходный мост<br />у вокзала Томск-1
          </h1>
          <p className="text-base md:text-xl max-w-2xl opacity-90 leading-relaxed">
            Путепровод над железной дорогой, построенный в конце 1960-х
            всего за четыре месяца — рекорд того времени.
          </p>
        </div>
      </div>

      {/* ХАРАКТЕРИСТИКА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Краткая характеристика
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Объект на карте города
          </h2>

          <div className="border-t border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 border-b border-neutral-200">
              <div className="flex items-center gap-3 text-neutral-500 uppercase text-sm tracking-wide">
                <Icon name="Building2" size={18} />
                Тип сооружения
              </div>
              <div className="md:col-span-2 text-lg lg:text-xl text-neutral-900">
                Путепровод (мост над железной дорогой)
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 border-b border-neutral-200">
              <div className="flex items-center gap-3 text-neutral-500 uppercase text-sm tracking-wide">
                <Icon name="Calendar" size={18} />
                Год постройки
              </div>
              <div className="md:col-span-2 text-lg lg:text-xl text-neutral-900">
                Конец 1960-х годов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ИСТОРИЯ СТАНЦИИ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            История места
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Как появилась станция
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed">
              Чтобы понять историю перехода, нужно начать с самой станции.
              Это история о том, как пассажиры «проголосовали ногами»
              и изменили судьбу томских вокзалов.
            </p>
            <p>
              В конце XIX века началось строительство Транссибирской
              железнодорожной магистрали — места, которое должно было
              принести Томску процветание. Однако случилось неожиданное:
              главная магистраль прошла в 70 верстах южнее города,
              и Томск получил только тупиковую однопутную ветку,
              соединяющую его с магистралью в районе станции Тайга.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight my-10">
              22 июля 1896 года в Томск прибыл первый поезд.
            </blockquote>
            <p>
              Главной станцией была построена станция «Томск» (сегодня —
              Томск-II) в районе Иркутского тракта. Однако для удобства
              пассажиров ближе к центру обустроили небольшую платформу.
              Её назвали Межениновкой — в честь инженера Николая
              Меженинова, главного строителя томской ветки.
            </p>
            <p>
              И случилось неожиданное: пассажиры полюбили Межениновку.
              Поезд прибывал сюда раньше, чем на главную станцию,
              а отправлялся чуть позже — это было удобнее. И хотя
              расстояние до центра города было примерно одинаковым,
              народ выбирал именно эту платформу.
            </p>
            <p>
              В 1909 году Томская городская дума приняла решение:
              платформа Межениновка становится станцией Томск-I, а бывшая
              главная станция получает название Томск-II.
            </p>
          </div>
        </div>
      </section>

      {/* ЗДАНИЕ ВОКЗАЛА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Архитектура
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Здание вокзала:<br />от дерева до модерна
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Первое здание вокзала на Томске-I было деревянным — и, по
              некоторым данным, его архитектором мог быть сам Константин
              Константинович Лыгин, создатель Каменного моста. Этот вокзал
              не был типовым (в отличие от вокзала на Томске-II) и имел
              уникальную архитектуру.
            </p>
            <p>
              Но дерево — материал недолговечный. Уже в 1910-х годах
              началось строительство нового, кирпичного вокзала в стиле
              модерн. Проект разработал архитектор Яков Родюков.
            </p>
            <p>
              29 января 1917 года состоялось освящение первой очереди
              нового вокзала — центральной части и южного крыла. Это было
              за несколько недель до Февральской революции, которая
              навсегда изменит страну. Северное крыло достраивали…
              почти 50 лет — его завершили только в 1960-х годах.
            </p>
          </div>

          {/* Реконструкции */}
          <div className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
              Реконструкции XX–XXI века
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              За свою историю вокзал перестраивался трижды:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { year: "1930-е", label: "Первая перестройка" },
                { year: "1970-е", label: "Вторая перестройка" },
                { year: "2001–2004", label: "К 400-летию Томска" },
              ].map((r) => (
                <div
                  key={r.year}
                  className="border border-neutral-200 p-6 hover:border-neutral-900 transition-colors"
                >
                  <div className="text-3xl font-bold text-neutral-900 mb-2">
                    {r.year}
                  </div>
                  <div className="text-sm uppercase tracking-wide text-neutral-500">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-neutral-700">
              Последняя реконструкция была масштабной: её приурочили
              к 400-летию Томска. Проект разработал институт
              «Сибжелдорпроект», сметная стоимость составила
              128 миллионов рублей. Работы начались в октябре 2001 года.
              В ходе реконструкции вокзалу «вернули первоначальный
              архитектурный облик»: здание расширили в сторону города,
              внутри появилась отделка мрамором и гранитом, залы ожидания
              преобразились. Реконструкция завершилась в 2004 году.
            </p>
          </div>
        </div>
      </section>

      {/* ЖИЗНЬ МОСТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Хронология
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 leading-tight">
            Жизнь моста: от советской<br />стройки до наших дней
          </h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-neutral-800">
              <div className="text-2xl font-bold">1960-е</div>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Мост построен в конце десятилетия, причём возводили его
                очень быстро — основные работы на путепроводе заняли
                всего четыре месяца, что по тем временам было рекордным сроком.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-neutral-800">
              <div className="text-2xl font-bold">Советский<br />период</div>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Мост активно использовался жителями ближайших районов
                (район вокзала, улица Пушкина, Иркутский тракт). Он стал
                важной транспортной артерией для пешеходов, позволяя
                безопасно добираться до вокзала и между районами.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
              <div className="text-2xl font-bold">Наши<br />дни</div>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Путепровод продолжает функционировать. По некоторым данным,
                мост периодически ремонтируется, так как является важным
                объектом пешеходной инфраструктуры города. До сих пор он
                играет важную роль в транспортной системе Томска, являясь
                одним из немногих разноуровневых пересечений с железной
                дорогой в черте города.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ИНТЕРЕСНЫЕ ФАКТЫ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-neutral-50 p-8 lg:p-10">
            <Icon name="TrainFront" size={32} className="mb-6 text-neutral-900" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Несбывшийся трамвай
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Изначально при строительстве автомобильного путепровода
              на улице Пушкина (находящегося неподалёку) предполагалось
              пустить по нему трамвай. Рельсы даже уложили, но по
              неизвестным причинам линию так и не запустили,
              и впоследствии рельсы оказались под асфальтом.
              С пешеходным мостом могла быть похожая история —
              проектировали с заделом на будущее.
            </p>
          </div>
          <div className="bg-neutral-50 p-8 lg:p-10">
            <Icon name="Camera" size={32} className="mb-6 text-neutral-900" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Рай для трейнспоттеров
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              С моста открывается отличный вид на железнодорожные пути
              станции Томск-1. Это настоящий рай для любителей поездов
              и железнодорожной фотографии — можно наблюдать за
              манёврами составов, прибытием и отправлением пассажирских
              поездов, включая знаменитый «Томич» Москва–Томск.
            </p>
          </div>
        </div>
      </section>

      {/* ФОТО ВИДА С МОСТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Вид с моста
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Станция Томск-1 сегодня
          </h2>
          <figure>
            <img
              src={stationPhoto}
              alt="Вид с пешеходного моста на здание вокзала Томск-1"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Здание вокзала после реконструкции 2001–2004 годов
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </main>
  );
}