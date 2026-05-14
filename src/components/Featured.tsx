import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const bridges = [
  {
    name: "Пешеходный мост у вокзала Томск-1",
    year: "1960-е",
    description: "Путепровод над железной дорогой у главного вокзала города. Построен за рекордные четыре месяца и до сих пор остаётся одним из немногих разноуровневых пересечений с железной дорогой в черте Томска.",
    fact: "Построен всего за 4 месяца",
    link: "/bridge-1",
  },
  {
    name: "Коммунальный мост",
    year: "1930-е",
    description: "Один из старейших сохранившихся мостов города. В начале XX века здесь проходил деревянный понтонный настил, по которому переправлялись купеческие обозы.",
    fact: "На этом месте переправа существует с 1850 года",
    link: null,
  },
  {
    name: "Железнодорожный мост",
    year: "1896",
    description: "Построен при прокладке Транссибирской магистрали. Стал символом стремительного роста Томска как торгового и промышленного центра Сибири.",
    fact: "Возраст конструкции — более 125 лет",
    link: null,
  },
];

export default function Featured() {
  return (
    <div id="bridges" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">Маршрут</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          Три моста —<br/>три эпохи Томска
        </h2>
        <div className="grid gap-0">
          {bridges.map((bridge, index) => {
            const content = (
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 border-t border-neutral-200 last:border-b group transition-colors hover:bg-neutral-50">
                <div className="text-6xl lg:text-8xl font-bold text-neutral-100 lg:w-24 shrink-0 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-4 mb-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">{bridge.name}</h3>
                    <span className="text-sm text-neutral-400 uppercase tracking-wide">с {bridge.year}</span>
                  </div>
                  <p className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-4">{bridge.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-block bg-neutral-100 px-4 py-2 text-sm text-neutral-700 uppercase tracking-wide">
                      {bridge.fact}
                    </div>
                    {bridge.link && (
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-neutral-900 font-semibold group-hover:gap-3 transition-all">
                        Подробнее
                        <Icon name="ArrowRight" size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
            return bridge.link ? (
              <Link key={bridge.name} to={bridge.link} className="block">
                {content}
              </Link>
            ) : (
              <div key={bridge.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
