import Icon from "@/components/ui/icon";

const medichkaPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/ee4df50d-b0f7-4126-a888-d96a14edb787.jpg";
const oldMedichkaPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/e7d48be5-af34-48b5-bb17-81faf4cc536e.jpg";

export default function MedichkaBridgeContent() {
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
              { icon: "Building2", label: "Тип сооружения", value: "Пешеходный арочный мост" },
              { icon: "Layers", label: "Материал", value: "Железобетон" },
              { icon: "Calendar", label: "Год постройки", value: "1909 (открытие 1 августа 1909 года)" },
              { icon: "User", label: "Архитектор", value: "Андрей Дмитриевич Крячков" },
              { icon: "Waves", label: "Пересекал", value: "Овраг с водотоком (впоследствии — речка Медичка)" },
              { icon: "Award", label: "Историческое значение", value: "Первое железобетонное сооружение в Сибири" },
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

      {/* МОСТ-ЛЕГЕНДА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Загадка в роще
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Мост-легенда:<br />загадка, скрытая в роще
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed">
              В Университетской роще Томска есть место, о котором знают
              далеко не все. Среди старых деревьев, на задворках
              хозяйственных построек СибГМУ, спрятан небольшой арочный мостик.
            </p>
            <p>
              Он не переброшен через реку — её здесь уже давно нет.
              И всё же он стоит, и по нему до сих пор можно пройти.
            </p>
            <p>
              Этот мостик называют по-разному: <strong>Мост через Медичку</strong>,
              <strong> Мостик Медичка</strong>, а ещё — <strong>Мост предсказаний</strong>.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10 italic">
              Говорят, если поцеловать на нём свою половинку и почувствовать
              лёгкий электрический разряд — значит, этот человек
              действительно ваша судьба.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ВОЗВРАЩАЯСЬ К ИСТОКАМ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            История создания
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Возвращаясь к истокам
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              У мостика Медички запутанная история, полная загадок
              и неожиданных открытий. Официальные источники утверждают,
              что он был построен в 1909 году по проекту выдающегося
              сибирского архитектора <strong>Андрея Дмитриевича Крячкова</strong>.
            </p>
            <p>
              Крячков — один из самых известных зодчих дореволюционной
              Сибири. Именно он проектировал здание Томского технологического
              института (сегодня — ТПУ) и Дом науки — тот самый, что стоит
              над Каменным мостом.
            </p>
            <p>
              Мостик возводили на месте старого деревянного, который
              простоял здесь с 1891 года. Строителем выступил крестьянин
              Прохоров, а Крячков курировал стройку как архитектор
              университета. Но есть и другая версия, более смелая: некоторые
              исследователи считают, что прямых доказательств авторства
              Крячкова нет, и его «назначили» архитектором позже —
              по косвенным признакам.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Это был первый в Сибири железобетонный мост.
              Более того — вообще первое железобетонное сооружение за Уралом.
            </blockquote>
            <p>
              Стиль модерн, популярный в ту эпоху, архитектор подчеркнул
              четырьмя пьедесталами для фонарей и декоративной бетонной
              решёткой. По бокам мост украшали изящные вазы.
            </p>
          </div>
        </div>
      </section>

      {/* ИСТОРИЧЕСКОЕ ФОТО */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Архивное фото
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 leading-tight">
            Мост в годы расцвета
          </h2>
          <figure>
            <img
              src={oldMedichkaPhoto}
              alt="Мост через Медичку — старая фотография"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-400 uppercase tracking-wide">
              Снимок Александра Попова, 1972 год · pastvu.com
            </figcaption>
          </figure>
        </div>
      </section>

      {/* РЕКА КОТОРОЙ НЕ БЫЛО */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Парадокс
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Река, которой<br />(возможно) не было
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed">
              Самая необычная часть этой истории — река, которой мост
              обязан своим названием.
            </p>
            <p>
              По официальной и самой красивой версии, под мостом протекала
              небольшая речка <strong>Медичка</strong>, или Еланка.
              Она начиналась в районе пересечения улиц Герцена и Вершинина,
              проходила через Буфф-сад, Университетскую рощу, Заисток
              и впадала в Томь. Позже речку спрятали в бетонную трубу
              на глубине трёх метров — и сегодня она течёт под землёй,
              время от времени напоминая о себе подтоплениями и сыростью.
            </p>
            <p>
              Но томские краеведы перелопатили старые карты и планы XIX века —
              и не нашли там никакой реки. На картах обозначен только овраг.
              Нет упоминаний о мосте через реку Еланку в финансовых отчётах
              Городской управы. Нет никаких следов.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10 italic">
              Тогда откуда взялась речка?
            </blockquote>
            <p>Вот что выяснили исследователи:</p>
          </div>

          <div className="space-y-4 my-10">
            {[
              { year: "До 1909", text: "По дну оврага текли канализационные стоки, дождевые и талые воды. Это был не природный водоток, а рукотворная сточная канава." },
              { year: "1909–1917", text: "Часть оврага закопали, сделав его подземной трубой. Выход канавы оставался открытым только у моста в Университетской роще. Сюда сливал отходы сам университет." },
              { year: "Советское время", text: "Поток увеличился, деревянную трубу заменили железобетонной. Открытый ручей в овраге превратился в постоянный водоток — и его начали называть «речкой»." },
            ].map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 bg-white border border-neutral-200 p-6"
              >
                <div className="text-lg font-bold text-neutral-900">{item.year}</div>
                <p className="text-neutral-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              То есть Медичка — это <strong>рукотворная река</strong>,
              возникшая из канализационной трубы. Её название придумали
              студенты медицинского института, мимо которого она протекала.
              Шутя речку называли то <em>Медункой</em> (течёт между МЕДом
              и УНивером), то <em>Вонючкой</em> (за характерный запах).
            </p>
            <p>
              А название «Еланка» — скорее всего, поздняя выдумка,
              связанная с историческим районом «Нижняя Елань».
              Настоящая река Еланка, кстати, существует на севере Томской
              области — и к Томску отношения не имеет.
            </p>
          </div>
        </div>
      </section>

      {/* КАК МОСТ ОКАЗАЛСЯ НА ЗАДВОРКАХ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Забытый памятник
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Как мост оказался<br />на задворках
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              В 2009 году Университетскую рощу разделили железным забором
              между двумя вузами — ТГУ и СибГМУ. Мостик оказался
              на территории клиник СибГМУ. Сначала в заборе со стороны ТГУ
              не сделали даже калитки — пройти к мосту было невозможно.
              Позже проход всё-таки оборудовали, но мостик так и остался
              спрятанным за хозяйственными постройками — не сразу и заметишь.
            </p>
            <p>
              С годами овраг под мостом засыпали. Сегодня мост стоит
              на уровне земли — его архитектура, рассчитанная на высоту
              до трёх метров, теперь не видна. Тем не менее, конструкция
              сохранилась. По мосту можно пройти — и многие делают это,
              даже не подозревая, какая у него удивительная история.
            </p>
          </div>
        </div>
      </section>

      {/* ВОЗРОЖДЕНИЕ — ФЕСТИВАЛЬ 2021 */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Возрождение · 2021
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            Фестиваль, который<br />вернул мост городу
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              В 2021 году мост через Медичку неожиданно привлёк внимание.
              Здесь прошёл паблик-арт фестиваль{" "}
              <strong className="text-white">«мУкА. Склады искусства»</strong>.
              Организаторы нашли забытый мост случайно — во время
              архитектурного фотокросса.
            </p>
            <p>
              В рамках фестиваля ТГУ и СибГМУ объединили усилия:
              мост отремонтировали, территорию вокруг облагородили.
              Из забытого памятника архитектуры он превратился
              в новую достопримечательность Томска и место встреч.
            </p>
            <blockquote className="border-l-4 border-white pl-6 py-2 text-xl lg:text-2xl font-bold text-white leading-tight my-10">
              Так у столетнего мостика началась новая глава истории.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ХРОНОЛОГИЯ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Хронология
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
            Хронология событий
          </h2>

          <div className="space-y-0">
            {[
              { year: "1824", text: "Овраг впервые отмечен на плане Томска" },
              { year: "1850", text: "На фотографиях виден деревянный мостик через овраг" },
              { year: "1891", text: "Построен деревянный мостик" },
              { year: "1909", text: "1 августа открыт железобетонный мост, построенный крестьянином Прохоровым под руководством архитектора А. Д. Крячкова" },
              { year: "1917–1930-е", text: "Овраг частично засыпан, образовался постоянный водоток — «речка» Медичка" },
              { year: "1972", text: "Сохранилась фотография моста (снимок Александра Попова)" },
              { year: "1995", text: "Мост получил статус памятника федерального значения" },
              { year: "2009", text: "Роща разделена забором между ТГУ и СибГМУ, мост оказался на территории клиник" },
              { year: "2021", text: "Фестиваль «мУкА. Склады искусства» вернул мостику известность, провели ремонт и благоустройство территории" },
            ].map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-6 border-b border-neutral-200"
              >
                <div className="text-xl lg:text-2xl font-bold text-neutral-900">
                  {item.year}
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* АРХИТЕКТУРНЫЕ ОСОБЕННОСТИ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Архитектура
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Архитектурные особенности
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Мостик выполнен в стиле <strong>модерн</strong> — самом
              актуальном архитектурном стиле начала XX века. Лаконичность
              сооружения подчёркивают четыре пьедестала, декоративные вазы
              и решётка из бетона.
            </p>
            <p>
              Изначально овраг под мостом был глубже — высота достигала
              2,5–3 метров. Сегодня он почти полностью засыпан, поэтому
              величие замысла Крячкова оценить сложно. Полностью сохранились
              перила (на исторических фото видно, что они шли с обеих сторон),
              часть столбиков и бетонные вазы. Решётка тоже местами уцелела.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {[
              { icon: "Columns", title: "4 пьедестала", desc: "Под фонари — характерный элемент модерна" },
              { icon: "Flower2", title: "Бетонные вазы", desc: "Украшали мост по бокам" },
              { icon: "Grid3x3", title: "Декоративная решётка", desc: "Сохранилась местами до наших дней" },
              { icon: "Ruler", title: "Высота 2,5–3 м", desc: "Изначальная глубина оврага под аркой" },
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
        </div>
      </section>

      {/* ФОТО МОСТА СЕГОДНЯ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Мост сегодня
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Перила и вазы — что сохранилось
          </h2>
          <figure>
            <img
              src={medichkaPhoto}
              alt="Современный вид моста через Медичку"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Памятник архитектуры федерального значения, 1909 год
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
