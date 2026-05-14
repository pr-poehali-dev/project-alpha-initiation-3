import Icon from "@/components/ui/icon";

const pharmacyBridgePhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/f81ebec9-9714-46f7-aef5-adf4a96550c6.jpg";
const oldPharmacyPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/dde4d276-5407-4840-b4c7-89c330693f8c.jpg";

export default function PharmacyBridgeContent() {
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
              { icon: "FileText", label: "Полное название", value: "Аптекарский мост" },
              { icon: "Building2", label: "Тип сооружения", value: "Автомобильный, пешеходный" },
              { icon: "Waves", label: "Пересекает", value: "Река Ушайка" },
              { icon: "Calendar", label: "Год постройки", value: "1914 год" },
              { icon: "User", label: "Архитектор", value: "Константин Константинович Лыгин" },
              { icon: "MapPin", label: "Соединяет", value: "Исторические районы Болото (под Воскресенской горой) и Уржатку" },
              { icon: "Award", label: "Статус", value: "Памятник истории и культуры, объект культурного наследия" },
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

      {/* КАК МОСТ ПОЛУЧИЛ НАЗВАНИЕ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Происхождение названия
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Как мост получил своё название
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Аптекарский мост назван по переулку, в котором расположен,
              а переулок получил имя от находившейся здесь в XIX веке
              аптеки — одной из первых в Томске. Владельцем аптеки был
              провизор <strong>Станислав Станиславович Танаевский-Баткевич</strong>,
              а само здание построил известный архитектор А. П. Деев.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Название закрепилось за переулком, а затем и за мостом,
              который стал важной транспортной артерией, соединяющей
              исторические районы города.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ГЕОГРАФИЯ — БОЛОТО И УРЖАТКА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            География
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Между Болотом<br />и Уржаткой
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Мост связывает два исторических района Томска с необычными
              названиями — <strong>Болото</strong> (на правом берегу Ушайки,
              под Воскресенской горой) и <strong>Уржатка</strong>
              {" "}(на левом берегу).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            <div className="bg-neutral-50 border border-neutral-200 p-6">
              <Icon name="Droplet" size={28} className="mb-4 text-neutral-900" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">
                Болото
              </div>
              <div className="text-sm text-neutral-600 leading-relaxed">
                Название от особенностей рельефа — низина, где скапливалась
                вода. Расположено под Воскресенской горой.
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-6">
              <Icon name="Home" size={28} className="mb-4 text-neutral-900" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">
                Уржатка
              </div>
              <div className="text-sm text-neutral-600 leading-relaxed">
                Историческая часть города, застроенная деревянными домами.
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Сегодня Аптекарский мост — важная дорожная артерия,
              соединяющая Советский и Октябрьский районы. Дорога через мост
              служит дублёром улицы Яковлева и позволяет жителям районов
              Пушкина и Иркутского тракта быстрее добираться до центра Томска.
            </p>
          </div>
        </div>
      </section>

      {/* ИСТОРИЯ СТРОИТЕЛЬСТВА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            1914 год
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            История строительства
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              <strong className="text-white">1914 год</strong> — Аптекарский
              мост построен как постоянное деревянное сооружение
              на каменных сваях. Автором проекта выступил известный
              томский архитектор{" "}
              <strong className="text-white">
                Константин Константинович Лыгин
              </strong>{" "}
              — тот самый, который создал Каменный мост и другие знаковые
              здания Томска.
            </p>
            <p>
              Мост был возведён в капитальном исполнении в середине XIX века,
              а полностью перестроен во второй половине XX века. Однако
              именно 1914 год считается датой появления современного
              мостового сооружения.
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
            Переулок Аптекарский — старое фото
          </h2>
          <figure>
            <img
              src={oldPharmacyPhoto}
              alt="Аптекарский переулок и мост — старая фотография"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Деревянная застройка вокруг Аптекарского моста · pastvu.com
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ЭТАПЫ РЕКОНСТРУКЦИИ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Этапы
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
            Как менялся мост:<br />этапы реконструкции
          </h2>

          <div className="space-y-8">
            {[
              { year: "1940-е", text: "Деревянный мост заменён каменным на сваях" },
              { year: "1987", text: "Последний капитальный ремонт перед современной реконструкцией" },
              { year: "2007", text: "Проведена очередная реконструкция моста" },
              { year: "2024", text: "На мосту ввели запрет на проезд большегрузного транспорта из-за неудовлетворительного состояния. Также было ограничено движение пешеходов." },
            ].map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-8 border-b border-neutral-300"
              >
                <div className="text-2xl font-bold text-neutral-900">
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

      {/* КАПИТАЛЬНЫЙ РЕМОНТ 2025 */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Ремонт 2025 года
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Капитальный ремонт 2025:<br />обновление века
          </h2>

          <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed mb-10">
            Самое масштабное преображение Аптекарского моста произошло
            в 2025 году.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { label: "Начало работ", value: "7 апреля 2025 года" },
              { label: "Подрядчик", value: "Новосибирская компания «Клинкерстрой»" },
              { label: "Стоимость", value: "33 миллиона рублей" },
              { label: "Срок завершения", value: "1 ноября 2025 года" },
            ].map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-4 border-b border-neutral-200"
              >
                <div className="text-neutral-500 uppercase text-sm tracking-wide">
                  {item.label}
                </div>
                <div className="text-neutral-900 text-lg">{item.value}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Что сделано в ходе ремонта
          </h3>
          <ul className="space-y-3 mb-10">
            {[
              "Отреставрированы дефектные участки бетонной поверхности главных балок и опор",
              "Заменены консоли пролётного строения и тротуарные блоки",
              "Устроена гидроизоляция пролётных строений и опор",
              "Уложено новое асфальтобетонное покрытие",
              "Установлены деформационные швы и новые барьерные ограждения",
              "Установлены новые перила",
              "Установлены стилизованные ретро-фонари в стиле исторического центра Томска",
              "Модернизирована система водоотвода",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-lg text-neutral-700">
                <Icon name="Check" size={22} className="text-neutral-900 shrink-0 mt-1" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl text-neutral-900 leading-relaxed italic my-10">
            «Добавили "украшения" — светильники, перила.
            Это не просто ремонт, а возвращение мосту его исторического облика»
            <footer className="text-base not-italic text-neutral-500 mt-3">
              — Дмитрий Махиня, мэр Томска
            </footer>
          </blockquote>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ РЕМОНТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Результат
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Исторический облик
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              К ноябрю 2025 года работы были полностью завершены.
              Мост приобрёл законченный вид:
            </p>
            <ul className="space-y-3 my-6">
              {[
                "Установлены опоры освещения в ретро-стиле",
                "Смонтированы стилизованные ретро-фонари",
                "Полностью заменена линия электропередач, устаревшие коммуникации демонтированы и заменены современными",
                "Специалисты «Горсетей» завершили подключение новых светильников к сети наружного освещения",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="Lightbulb" size={22} className="text-neutral-900 shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl text-neutral-900 leading-relaxed italic my-10">
              «Мост приобрёл свой красивый вид, достойный исторической
              улицы нашего города»
              <footer className="text-base not-italic text-neutral-500 mt-3">
                — Администрация Томска
              </footer>
            </blockquote>
            <p>
              Полноценное движение транспорта по мосту было восстановлено
              уже в октябре 2025 года.
            </p>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-16 mb-6">
            Что ещё изменилось вокруг
          </h3>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>В рамках благоустройства территории вблизи моста:</p>
            <ul className="space-y-3">
              {[
                "Расчищены от поросли берега реки Ушайки — это позволило открыть прекрасный вид на реку с моста",
                "Проведён ремонт части переулка Аптекарского — подъездной дороги к мосту и тротуаров",
                "Ведутся работы по передаче старых деревянных домов (№11 и №11/1) инвесторам для восстановления по программе «Дом за рубль»",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="TreePine" size={22} className="text-neutral-900 shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ИНТЕРЕСНЫЙ ФАКТ — МАКЕТ */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <Icon name="Boxes" size={40} className="mb-6 text-white" />
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
            Интересный факт
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
            Макет моста
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-neutral-300">
            В 2020 году студенты Томского колледжа гражданского транспорта{" "}
            <strong className="text-white">Андрей Топоров</strong> и{" "}
            <strong className="text-white">Александр Егоров</strong> создали
            макет Аптекарского моста в рамках учебной работы.
            Это говорит о том, что мост стал не только важным транспортным
            объектом, но и значимым архитектурным символом города,
            изучаемым будущими специалистами.
          </p>
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
              { year: "XIX век", text: "Середина века — мост впервые возведён в капитальном исполнении" },
              { year: "1914", text: "Построен постоянный деревянный мост на каменных сваях" },
              { year: "1940-е", text: "Деревянный мост заменён каменным на сваях" },
              { year: "1987", text: "Последний капитальный ремонт перед современной реконструкцией" },
              { year: "2007", text: "Проведена реконструкция моста" },
              { year: "2024", text: "Запрет на проезд большегрузов и движение пешеходов из-за аварийного состояния" },
              { year: "Апрель 2025", text: "Начало капитального ремонта" },
              { year: "Октябрь 2025", text: "Восстановлено полноценное движение транспорта" },
              { year: "Ноябрь 2025", text: "Завершение ремонта, установка ретро-фонарей" },
            ].map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 py-6 border-b border-neutral-200"
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

      {/* ИТОГОВАЯ ЦИТАТА */}
      <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
            Эпилог
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
            Рабочий ровесник<br />Каменного моста
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Аптекарский мост — ровесник Каменного моста (оба построены
              в 1914–1916 годах) и тоже создан по проекту Лыгина.
              Но если Каменный мост — парадный, с ростральными колоннами,
              то Аптекарский — рабочий, утилитарный. Он соединял
              повседневную жизнь двух районов, по нему возили дрова,
              продукты, ездили на работу.
            </p>
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-xl lg:text-2xl font-bold text-neutral-900 leading-tight my-10">
              Сегодня, после ремонта 2025 года, он наконец обрёл тот облик,
              который заслуживает: не просто мост, а часть исторического
              ландшафта, с видом на Ушайку и старые деревянные дома,
              которые скоро обретут новую жизнь.
            </blockquote>
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
            Новые перила и ретро-фонари
          </h2>
          <figure>
            <img
              src={pharmacyBridgePhoto}
              alt="Аптекарский мост после ремонта 2025 года"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
              Памятник истории и культуры · ремонт 2025 года · фото Tomsk.ru
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
