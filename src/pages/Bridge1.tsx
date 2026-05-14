import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const stationPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/1cd2a646-7e18-441a-a24b-c59e7357c60d.png";
const mainCover = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/files/39dcb1f2-0e73-4382-8685-3aca378ed54e.jpg";
const communalBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/d8002f44-85b5-4442-b429-908254541934.jpg";

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 font-bold">
            МОСТЫ<br />ТОМСКА
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Прогулка сквозь века — история городских переправ,<br className="hidden md:block" />
            от деревянных настилов до железобетонных пролётов
          </p>
          <button
            onClick={() =>
              container.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="group mt-12 inline-flex flex-col items-center gap-3 text-white/90 hover:text-white transition-colors"
            aria-label="Перейти к мосту"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em]">
              Перейти к мосту
            </span>
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/60 group-hover:border-white group-hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              <Icon name="ArrowDown" size={20} />
            </motion.span>
          </button>
        </div>
      </div>

      {/* HERO — Мост у Томск-1 */}
      <div
        ref={container}
        className="relative flex items-end h-screen overflow-hidden scroll-mt-0"
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

      {/* ============================================= */}
      {/* МОСТ №2 — КОММУНАЛЬНЫЙ (ЮЖНЫЙ, СТАРЫЙ) */}
      {/* ============================================= */}

      {/* HERO Коммунального моста */}
      <div className="relative flex items-end h-screen overflow-hidden">
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

      {/* ХАРАКТЕРИСТИКА — таблица */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Краткая характеристика
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Объект на карте города
          </h2>

          <div className="border-t border-neutral-200">
            {[
              { icon: "FileText", label: "Полное название", value: "Коммунальный (Южный, Старый) мост" },
              { icon: "Building2", label: "Тип сооружения", value: "Автомобильный, с пешеходными тротуарами" },
              { icon: "Waves", label: "Пересекает", value: "Река Томь" },
              { icon: "Ruler", label: "Длина моста", value: "729,1 метра" },
              { icon: "MoveHorizontal", label: "Общая длина (с развязками)", value: "Более 2 километров" },
              { icon: "Car", label: "Ширина проезжей части", value: "15,6 метра" },
              { icon: "Footprints", label: "Тротуары", value: "По 1,5 метра с каждой стороны" },
              { icon: "Calendar", label: "Год постройки", value: "1973 (открытие 28 сентября)" },
              { icon: "Award", label: "Статус", value: "Первый капитальный мост через Томь в Томске" },
            ].map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 border-b border-neutral-200"
              >
                <div className="flex items-center gap-3 text-neutral-500 uppercase text-sm tracking-wide">
                  <Icon name={row.icon} size={18} />
                  {row.label}
                </div>
                <div className="md:col-span-2 text-lg lg:text-xl text-neutral-900">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧТО БЫЛО ДО МОСТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Предыстория
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Что было до моста:<br />переправы через Томь
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed">
              До появления Коммунального моста перебраться через широкую
              и своенравную Томь было непросто.
            </p>
            <p>На месте современного моста существовали:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            {[
              { icon: "Anchor", title: "Понтонный мост", desc: "Временное сооружение, которое собирали и разбирали" },
              { icon: "Ship", title: "Паромная переправа", desc: "Для перевозки людей, транспорта и грузов" },
              { icon: "Snowflake", title: "Ледовая переправа", desc: "Зимой, когда река замерзала, переправа шла по льду" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-neutral-200 p-6 hover:border-neutral-900 transition-colors"
              >
                <Icon name={item.icon} size={28} className="mb-4 text-neutral-900" />
                <div className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </div>
                <div className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-neutral-700">
            Эти способы были неудобными, зависели от погоды и времени года.
            Особенно остро проблема встала в середине XX века — город рос,
            развивалась промышленность, росла потребность в постоянной
            и надёжной связи между берегами. Нужен был капитальный мост.
          </p>
        </div>
      </section>

      {/* СТРОЙКА ВЕКА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Строительство
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Стройка века
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 py-4 border-b border-neutral-200">
              <div className="text-neutral-500 uppercase text-sm tracking-wide">Проектировщик</div>
              <div className="text-neutral-900">Институт «Гипротрансмост» (проектное задание — 1968 год)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 py-4 border-b border-neutral-200">
              <div className="text-neutral-500 uppercase text-sm tracking-wide">Строитель</div>
              <div className="text-neutral-900">Мостоотряд-101 (мостопоезд № 804 треста «Мостострой» № 2 Минтрансстроя)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 py-4 border-b border-neutral-200">
              <div className="text-neutral-500 uppercase text-sm tracking-wide">Старт</div>
              <div className="text-neutral-900">Апрель 1969 года</div>
            </div>

            <p className="pt-4">
              Изначально полное завершение работ планировалось на апрель
              1974 года. Но в январе 1973 года вышло распоряжение
              Министерства транспортного строительства с жёстким графиком
              и требованием сдать объект в III квартале 1973 года.
            </p>
            <p>
              Начальник управления капитального строительства Томского
              облисполкома <strong>Анатолий Степанович Харусь</strong> (отец
              известного томского историка Ольги Харусь) лично контролировал
              ход работ. В марте 1973 года он зафиксировал на фотографиях
              состояние стройки — впереди были полгода напряжённого труда.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              По сути, мост строили 4,5 года, а последний рывок —
              буквально несколько месяцев — стал настоящим подвигом строителей.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ТОРЖЕСТВЕННОЕ ОТКРЫТИЕ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            28 сентября 1973
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            Торжественное открытие
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              Мост открыли <strong className="text-white">28 сентября 1973 года</strong>.
              В день открытия провели необходимые испытания на прочность.
            </p>
            <p>
              По воспоминаниям, в этот же день Анатолий Харусь сделал
              символичные фотографии: новый автомобильный мост и старый
              понтонный мост, который стоял неподалёку. На снимках —
              два берега, две эпохи.
            </p>
            <p>
              Акт о приёмке в эксплуатацию подписали 3 октября 1973 года,
              а 19 ноября его утвердил Совет Министров РСФСР.
            </p>
            <blockquote className="border-l-4 border-white pl-6 py-2 text-2xl lg:text-3xl font-bold text-white leading-tight my-10">
              Мост приняли с оценкой «отлично».
            </blockquote>
          </div>
        </div>
      </section>

      {/* ЖИЗНЬ ПОСЛЕ ОТКРЫТИЯ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            После открытия
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Жизнь после открытия
          </h2>

          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Главный мост четверти века
          </h3>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 mb-12">
            <p>
              Более 25 лет, до постройки Северного (Нового) моста в 1999 году,
              Коммунальный мост оставался единственным капитальным мостом
              через Томь в Томске. Он соединял город с западными районами
              области и давал выход на федеральную трассу Р255 «Сибирь».
            </p>
            <p>
              Удивительно, но официального названия у моста нет. В народе
              его называют Коммунальным (по идеологическому созвучию с эпохой),
              Южным (по расположению) или Старым (после появления нового,
              Северного моста).
            </p>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Следили за прочностью
          </h3>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              За состоянием моста внимательно наблюдали после первого
              ледохода весной 1974 года. Когда выяснилось, что мост
              выдержал зимний ледостав и весенний ледоход без дефектов,
              было собрано экспертное заключение и отзывы прессы.
              Эти документы передали для награждения участников строительства.
            </p>
            <p>
              В 1975 году большую группу проектировщиков и строителей
              удостоили <strong>премии Совета Министров СССР</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* РЕМОНТЫ И РЕКОНСТРУКЦИИ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Хронология ремонтов
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
            Как менялся мост:<br />ремонты и реконструкции
          </h2>

          <div className="space-y-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-8 border-b border-neutral-300">
              <div className="text-2xl font-bold text-neutral-900">2008 год</div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Первая реконструкция моста.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-8 border-b border-neutral-300">
              <div className="text-2xl font-bold text-neutral-900">2006–2010</div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Мост включали в городскую целевую программу обследования
                и капитального ремонта мостовых сооружений.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
              <div className="text-2xl font-bold text-neutral-900">2022–2023</div>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  <strong>Капитальный ремонт.</strong> Это событие
                  запомнилось томичам надолго. Ремонт длился 15 месяцев
                  и обошёлся в 1,2 миллиарда рублей.
                </p>
                <p className="text-neutral-900 font-semibold pt-2">
                  Что произошло за это время:
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-neutral-900 shrink-0 mt-1" />
                    <span>Многокилометровые пробки на въезде и выезде из города — ремонт превратился в настоящее испытание для водителей и жителей левого берега</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-neutral-900 shrink-0 mt-1" />
                    <span>Падение автокрана с моста в июле 2022 года — рабочий успел выпрыгнуть за секунды до падения</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-neutral-900 shrink-0 mt-1" />
                    <span>Гибель рабочего в октябре 2022 года — 31-летний мужчина упал с шестиметровой высоты без страховки</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-neutral-900 shrink-0 mt-1" />
                    <span>Судебные разбирательства между подрядчиком и мэрией на миллионы рублей</span>
                  </li>
                </ul>
                <p className="pt-4">
                  Работы завершили в начале сентября 2023 года.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЛЕГЕНДА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Легенда
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Тома и Ушай
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="text-xl lg:text-2xl text-neutral-900 italic">
              Под мостом течёт река Томь.
            </p>
            <p>
              Давным-давно на одном берегу Томи правил князь Тоян,
              а на другом — князь Басандай. У Тояна рос сын — храбрый
              и ловкий <strong>Ушай</strong>. У Басандая — красавица
              дочь <strong>Тома</strong>. Басандай мечтал выдать дочь
              за знатного сибирского хана, но однажды Тома встретила
              в лесу Ушая, и они полюбили друг друга.
            </p>
            <p>
              Отец застал их вместе, прогнал Ушая и наказал дочь.
              Не вынеся разлуки, Тома бросилась в реку — с тех пор
              реку назвали Томью. Ушай, узнав о гибели возлюбленной,
              тоже бросился с утёса в другую реку. Её назвали Ушайкой.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Так появились две реки, чьи воды сливаются в Томске.
              Город стоит на их берегах.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ТЕХНИЧЕСКИЕ ПОДРОБНОСТИ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Для самых любопытных
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 leading-tight">
            Технические подробности
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: "Layers", title: "Конструкция", value: "Сталежелезобетонные пролётные строения в виде неразрезной восьмипролётной балки" },
              { icon: "BarChart3", title: "Схема пролётов", value: "65 + 6×87 + 65 метров" },
              { icon: "Maximize2", title: "Основной пролёт", value: "87 метров" },
              { icon: "Network", title: "В состав входят", value: "Сам мост через Томь, двухуровневые транспортные развязки на обоих берегах и железобетонный трёхпролётный путепровод" },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-800 p-8">
                <Icon name={item.icon} size={28} className="mb-4 text-white" />
                <div className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
                  {item.title}
                </div>
                <div className="text-lg text-white leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-white pl-6 py-2 text-xl lg:text-2xl leading-relaxed">
            Коммунальный мост — это не просто бетон и металл.
            Это строительный подвиг, символ советской эпохи и свидетельство
            совсем недавней истории Томска. Пройти по нему — значит
            пройти через полвека жизни города, с его триумфами,
            трудностями и древними легендами.
          </blockquote>
        </div>
      </section>

      {/* ФОТО КОММУНАЛЬНОГО МОСТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Вид с высоты
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Коммунальный мост сегодня
          </h2>
          <figure>
            <img
              src={communalBridgePhoto}
              alt="Коммунальный мост через Томь — вид с высоты"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Длина 729,1 м — первый капитальный мост через Томь
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </main>
  );
}