import Icon from "@/components/ui/icon";

const stoneBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/2abbce60-79dd-4704-b334-7863fa1e8d65.jpg";
const oldStoneBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/c8107ad6-1368-463f-ae9c-be9b4c603ebd.jpg";

export default function StoneBridgeContent() {
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
              { icon: "FileText", label: "Полное название", value: "Каменный мост (историческое название — Думский мост)" },
              { icon: "Building2", label: "Тип сооружения", value: "Автомобильный, трамвайный, пешеходный" },
              { icon: "Waves", label: "Пересекает", value: "Река Ушайка" },
              { icon: "Ruler", label: "Длина", value: "42,2 метра" },
              { icon: "MoveHorizontal", label: "Ширина", value: "24,4 метра" },
              { icon: "Layers", label: "Материал", value: "Железобетон" },
              { icon: "User", label: "Архитектор", value: "Константин Константинович Лыгин" },
              { icon: "Users", label: "Строители", value: "Цезарь Любинский и Эдуард Веккер (фирма «Любинский и Векер»)" },
              { icon: "Calendar", label: "Год постройки", value: "1916" },
              { icon: "Award", label: "Статус", value: "Памятник архитектуры федерального значения (с 1995 года)" },
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

          <p className="mt-12 text-lg lg:text-xl leading-relaxed text-neutral-700">
            Ушайка — небольшая река, которая, извиваясь, проходит через
            весь Томск и впадает в Томь. На территории города через неё
            перекинуто 13 мостов и переходов, но лишь один из них стал
            памятником федерального значения — Каменный, который изначально
            назывался Думским.
          </p>
        </div>
      </section>

      {/* ДЕРЕВЯННЫЙ ПРЕДШЕСТВЕННИК */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Предшественник
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Деревянный предшественник:<br />мост Батенькова
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Судьба деревянного моста, стоявшего на месте современного
              Каменного, началась в 1817 году. Строительство велось силами
              «колодников» — ссыльных, отбывавших наказание в Томском остроге.
              Уже через год плотницкие работы были почти завершены, мост
              украсили двумя обелисками с гербами Российской империи.
            </p>
            <p>
              Однако с вводом в эксплуатацию возникла заминка: мостовую
              должны были настилать сами горожане в порядке повинности,
              а в страдную пору, когда все были заняты на полях,
              работы замирали.
            </p>
            <p>
              Открыть мост удалось лишь в 1819 году. Горожане сразу прозвали
              его <strong>Думским</strong> — неподалёку заседала Городская
              Дума в здании магистрата. Проект моста разработал{" "}
              <strong>Гавриил Степанович Батеньков</strong> — инженер,
              который позже станет декабристом и будет сослан в Сибирь
              после восстания на Сенатской площади.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Деревянный мост оказался удивительно прочным
              и прослужил почти сто лет.
            </blockquote>
            <p>
              Но к 1911 году он окончательно обветшал: проезжая часть
              дала прогиб, деревянные конструкции подгнили, ездить по мосту
              стало опасно и для пешеходов, и для транспорта.
            </p>
          </div>
        </div>
      </section>

      {/* СПОРЫ О МАТЕРИАЛЕ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Дебаты в Думе
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Споры о материале:<br />железо или железобетон?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Когда встал вопрос о строительстве нового моста, разгорелись
              настоящие дебаты. Городская Дума рассматривала четыре варианта:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            {[
              { icon: "Box", title: "Железобетонный", desc: "Новый материал для Томска" },
              { icon: "Wrench", title: "Железный", desc: "На каменных устоях" },
              { icon: "TreePine", title: "Деревянный", desc: "На ряжевых опорах" },
              { icon: "Hammer", title: "Деревянный", desc: "На сваях" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-50 border border-neutral-200 p-6"
              >
                <Icon name={item.icon} size={24} className="mb-3 text-neutral-900" />
                <div className="text-lg font-bold text-neutral-900 mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-neutral-600">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              В какой-то момент решили строить железный мост — он обошёлся бы
              в 80 тысяч рублей. Но цены на железо внезапно выросли, и проект
              пришлось пересматривать. Сказалась и позиция нового городского
              инженера Якова Ивановича Николина: он сомневался в прочности
              железобетонных конструкций и тоже склонялся в пользу железа.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              После долгих споров 12 февраля 1914 года Дума постановила
              строить мост из железобетона — материала для Томска нового
              и во многом экспериментального.
            </blockquote>
          </div>
        </div>
      </section>

      {/* СТРОИТЕЛЬСТВО */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Стройка 1915–1916
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            Строительство: ночные смены<br />и военнопленные
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              Составление проекта поручили фирме «Любинский и Векер»,
              которая предоставила три варианта. Специальная комиссия
              с участием профессоров Технологического института выработала
              окончательные параметры будущего моста.
            </p>
            <p>
              <strong className="text-white">18 марта 1915 года</strong>{" "}
              Городская Дума заключила контракт с инженерами Цезарем
              Любинским и Эдуардом Веккером. Стоимость работ составила
              75 тысяч рублей. Согласно контракту, мост должны были открыть
              для проезда уже к 1 октября 1915 года.
            </p>
            <p>
              Деньги на строительство выделялись из городского бюджета,
              а также собирались с торгово-промышленных фирм, которые
              из-за невозможности пользоваться старым мостом несли
              серьёзные убытки.
            </p>
            <blockquote className="border-l-4 border-white pl-6 py-2 text-xl lg:text-2xl font-bold text-white leading-tight my-10">
              В середине июня работы не прекращали даже ночью.
              Чтобы ускорить процесс, штаб военного округа выделил
              50 военнопленных австрийцев и чехов.
            </blockquote>
            <p>
              Движение транспорта и пешеходов впервые открыли{" "}
              <strong className="text-white">20 ноября (2 декабря) 1915 года</strong>.
              Но весной 1916 года случилось непредвиденное: сильный паводок
              и ледоход вызвали трещины в несущих конструкциях моста.
              Строителям пришлось оставить отделочные работы и заняться
              восстановлением.
            </p>
            <p>
              Торжественное открытие состоялось{" "}
              <strong className="text-white">7 октября 1916 года</strong>.
              Длина моста составила 42,2 метра, ширина — 24,4 метра.
            </p>
          </div>
        </div>
      </section>

      {/* АРХИВНОЕ ФОТО */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Архивное фото
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Каменный мост в начале XX века
          </h2>
          <figure>
            <img
              src={oldStoneBridgePhoto}
              alt="Каменный мост — старая фотография"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Вид моста вскоре после открытия в 1916 году
            </figcaption>
          </figure>
        </div>
      </section>

      {/* АРХИТЕКТУРНЫЙ ОБЛИК */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Архитектура
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Архитектурный облик:<br />петербургский стиль в Сибири
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Особую выразительность мосту придало архитектурное оформление,
              которое доверили <strong>Константину Константиновичу Лыгину</strong> —
              преподавателю Томского технологического института. К тому
              времени Лыгин уже был автором около двадцати проектов в Томске.
            </p>
            <p>
              По углам моста Лыгин установил <strong>ростральные колонны</strong>,
              украсив их гирляндами и изображениями ростров — носов кораблей
              с головами фантастических животных. Между колоннами по бокам
              моста разместили по два четырёхгранных шпиля, предназначенных
              для фонарей.
            </p>
            <p>
              Сам Лыгин учился в Петербурге, и в его работе явно угадывается
              влияние Северной столицы. Неслучайно обыватели называли мост{" "}
              <em>«Питерским»</em>, а иногда и <em>«Австрийским»</em>.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Название «Каменный» закрепилось из-за отделки рустановой
              штукатуркой, которая создавала эффект натурального камня.
            </blockquote>
            <p>
              Впрочем, официально мост так и остался Думским — оба имени
              используются до сих пор. Каменный мост стал последним
              сооружением по проекту Лыгина. После него архитектор
              сосредоточился исключительно на преподавании.
            </p>
          </div>
        </div>
      </section>

      {/* ИСПЫТАНИЕ ВОЙНОЙ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            1941–1945
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Испытание войной:<br />железная дорога через мост
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Во время Великой Отечественной войны по мосту проложили
              железнодорожную ветку, чтобы доставлять каменный уголь
              на ТЭЦ-1. Конструкция моста не была рассчитана на такие
              нагрузки — пришлось укреплять его бревенчатым каркасом.
            </p>
            <p>
              Мост выдержал. И выдержал следующее испытание: в 1949
              (по другим данным — в 1950) году по нему прошла трамвайная
              линия. Для этого железнодорожные пути переложили, а декоративные
              ростральные колонны и шпили стали использовать как опоры
              контактной сети — с них свисали провода.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Каменный мост — единственный в Томске мост, по которому
              ходят трамваи. Такого больше нет нигде в городе.
            </blockquote>
          </div>
        </div>
      </section>

      {/* РЕСТАВРАЦИИ И СОВРЕМЕННОСТЬ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Современность
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Реставрации и современность
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Лишь в <strong>1984–1989 годах</strong> провели полноценную
              реставрацию моста. Восстановили саму конструкцию, декоративные
              элементы, а главное — убрали трамвайные провода с лыгинских
              шпилей. Мост вернул себе первоначальный вид.
            </p>
            <p>
              В <strong>1995 году</strong> Каменный мост внесли в список
              памятников архитектуры федерального значения.
            </p>
            <p>
              В <strong>2007 году</strong> провели капитальную реконструкцию:
              сняли излишнее асфальтовое покрытие, укрепили опоры моста
              и берега Ушайки в этом районе.
            </p>
            <p>
              Сегодня Каменный мост продолжает служить томичам. По нему
              ездят автомобили и трамваи, ходят пешеходы. Он соединяет
              улицу Розы Люксембург и Набережную реки Ушайки.
            </p>
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
              { year: "1817", text: "20 октября — начало строительства деревянного моста под руководством Г. С. Батенькова" },
              { year: "1819", text: "Открытие деревянного Думского моста" },
              { year: "1911", text: "Мост признан аварийным, движение опасно" },
              { year: "1914", text: "12 февраля — Дума постановила строить железобетонный мост" },
              { year: "1915", text: "18 марта — заключён контракт с фирмой «Любинский и Векер». 20 ноября — первое открытие движения по новому мосту" },
              { year: "1916", text: "Весной — повреждения паводком и ледоходом. 7 октября — окончательное торжественное открытие" },
              { year: "1941–1945", text: "Прокладка железнодорожной ветки к ТЭЦ-1" },
              { year: "1949/1950", text: "Прокладка трамвайной линии" },
              { year: "1984–1989", text: "Реставрация моста, убраны провода со шпилей" },
              { year: "1995", text: "Присвоен статус памятника федерального значения" },
              { year: "2007", text: "Капитальная реконструкция" },
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

      {/* ИНТЕРЕСНЫЙ ФАКТ — КИНО */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <Icon name="Film" size={40} className="mb-6 text-white" />
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Интересный факт
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            Мост и кинематограф
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-neutral-300">
            В 1979 году режиссёр Андрей Кончаловский снимал в Томске сцены
            фильма <strong className="text-white">«Сибириада»</strong>.
            Каменный мост с его ростральными колоннами попал в кадр,
            навсегда запечатлев узнаваемый томский пейзаж в одной
            из самых известных кинокартин о Сибири.
          </p>
        </div>
      </section>

      {/* НАРОДНЫЕ НАЗВАНИЯ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Имена моста
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Народные названия
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 mb-10">
            У этого моста — богатая «биография» имён, каждое из которых
            отражает определённый этап его истории или какую-то особенность:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { icon: "Landmark", name: "Думский", desc: "Оригинальное название деревянного предшественника — от располагавшейся рядом Городской Думы" },
              { icon: "Mountain", name: "Каменный", desc: "Отделка рустановой штукатуркой «под камень» — самое распространённое современное название" },
              { icon: "Sparkles", name: "Питерский", desc: "За сходство оформления (ростральные колонны) с мостами Санкт-Петербурга" },
              { icon: "Users", name: "Австрийский", desc: "В память о 50 военнопленных австрийцах и чехах, участвовавших в стройке" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-neutral-50 border border-neutral-200 p-6 hover:border-neutral-900 transition-colors"
              >
                <Icon name={item.icon} size={28} className="mb-4 text-neutral-900" />
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  «{item.name}»
                </div>
                <div className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-lg lg:text-xl leading-relaxed text-neutral-700">
            Мост стал свидетелем почти всей новейшей истории Томска.
            Здесь ездили извозчики и пролётки, потом трамваи и грузовики
            с углём. Он помнит Батенькова, Лыгина, чехов-военнопленных
            и советских реставраторов. И стоит до сих пор. И по нему
            всё ещё можно пройти.
          </blockquote>
        </div>
      </section>

      {/* ФОТО МОСТА СЕГОДНЯ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Мост сегодня
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
            Ростральные колонны Лыгина
          </h2>
          <figure>
            <img
              src={stoneBridgePhoto}
              alt="Современный вид Каменного моста"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Памятник архитектуры федерального значения, 1916 год
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
