import Icon from "@/components/ui/icon";

const communalBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/d8002f44-85b5-4442-b429-908254541934.jpg";
const pontoonBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/5f346959-44ba-42ac-91ca-68ab2573420f.jpg";

export default function CommunalBridgeContent() {
  return (
    <>
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

          <figure className="my-10 -mx-6 lg:mx-0">
            <img
              src={pontoonBridgePhoto}
              alt="Понтонный мост через Томь в Томске, архивное фото"
              className="w-full h-auto object-cover grayscale"
            />
            <figcaption className="text-sm text-neutral-500 mt-3 px-6 lg:px-0">
              Понтонный мост через Томь — временная переправа, которая служила городу до открытия Коммунального моста в 1973 году.
              Фото: pastvu.com / alex korotkoff
            </figcaption>
          </figure>

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
    </>
  );
}