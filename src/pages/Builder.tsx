import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Reconstruction {
  year: string;
  label: string;
}

interface TimelineItem {
  period: string;
  text: string;
}

interface FactItem {
  icon: string;
  title: string;
  text: string;
}

interface SpecItem {
  icon: string;
  label: string;
  value: string;
}

interface BuilderData {
  coverImage: string;
  coverKicker: string;
  coverTitle: string;
  coverDescription: string;
  coverButton: string;

  heroImage: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;

  specsKicker: string;
  specsTitle: string;
  specs: SpecItem[];

  historyKicker: string;
  historyTitle: string;
  historyLead: string;
  historyParagraphs: string[];
  historyQuote: string;

  architectureKicker: string;
  architectureTitle: string;
  architectureParagraphs: string[];
  reconstructionsTitle: string;
  reconstructionsLead: string;
  reconstructions: Reconstruction[];
  reconstructionsAfter: string;

  timelineKicker: string;
  timelineTitle: string;
  timeline: TimelineItem[];

  facts: FactItem[];

  galleryKicker: string;
  galleryTitle: string;
  galleryImage: string;
  galleryCaption: string;
}

const DEFAULT_DATA: BuilderData = {
  coverImage:
    "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/files/39dcb1f2-0e73-4382-8685-3aca378ed54e.jpg",
  coverKicker: "Пеший маршрут",
  coverTitle: "МОСТЫ\nТОМСКА",
  coverDescription:
    "Прогулка сквозь века — история городских переправ, от деревянных настилов до железобетонных пролётов",
  coverButton: "Перейти к мосту",

  heroImage:
    "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/1cd2a646-7e18-441a-a24b-c59e7357c60d.png",
  heroKicker: "Остановка №2 — Маршрут по мостам Томска",
  heroTitle: "Название моста\nв две строки",
  heroDescription:
    "Краткое описание объекта — что это, где находится, чем известен. Замените на свой текст.",

  specsKicker: "Краткая характеристика",
  specsTitle: "Объект на карте города",
  specs: [
    { icon: "Building2", label: "Тип сооружения", value: "Например, путепровод" },
    { icon: "Calendar", label: "Год постройки", value: "Например, 1970-е" },
  ],

  historyKicker: "История места",
  historyTitle: "Как появилось это место",
  historyLead:
    "Вводный абзац, который задаёт тон рассказу. Замените на свой большой первый абзац.",
  historyParagraphs: [
    "Первый исторический абзац. Расскажите, как и когда появился объект, какие события ему предшествовали.",
    "Второй абзац — продолжение истории. Можно упомянуть людей, даты, обстоятельства.",
  ],
  historyQuote: "Ключевая дата или цитата, которую хочется выделить.",

  architectureKicker: "Архитектура",
  architectureTitle: "Архитектура\nи строительство",
  architectureParagraphs: [
    "Расскажите про материалы, стиль, авторов проекта.",
    "Добавьте интересные детали об инженерных решениях.",
  ],
  reconstructionsTitle: "Реконструкции XX–XXI века",
  reconstructionsLead: "За свою историю объект перестраивался несколько раз:",
  reconstructions: [
    { year: "1930-е", label: "Первая перестройка" },
    { year: "1970-е", label: "Вторая перестройка" },
    { year: "2000-е", label: "Современная реконструкция" },
  ],
  reconstructionsAfter:
    "Подробности про последнюю реконструкцию — кто проектировал, сколько стоила, чем закончилась.",

  timelineKicker: "Хронология",
  timelineTitle: "Жизнь моста:\nот стройки до наших дней",
  timeline: [
    {
      period: "1960-е",
      text: "Описание периода — когда построили, кто строил, что было особенного.",
    },
    {
      period: "Советский\nпериод",
      text: "Как объект использовался в советское время.",
    },
    {
      period: "Наши\nдни",
      text: "Что происходит с объектом сейчас, какую роль он играет в городе.",
    },
  ],

  facts: [
    {
      icon: "TrainFront",
      title: "Интересный факт №1",
      text: "Расскажите неожиданную или малоизвестную историю про этот объект.",
    },
    {
      icon: "Camera",
      title: "Интересный факт №2",
      text: "Ещё одна занимательная деталь — то, что выделяет это место.",
    },
  ],

  galleryKicker: "Вид с моста",
  galleryTitle: "Объект сегодня",
  galleryImage:
    "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/1cd2a646-7e18-441a-a24b-c59e7357c60d.png",
  galleryCaption: "Подпись под фотографией",
};

const STORAGE_KEY = "bridge-builder-data";

function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const onFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-neutral-500">
        {label}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Вставьте ссылку на изображение"
      />
      <div className="flex items-center gap-2">
        <label className="cursor-pointer inline-flex items-center gap-2 text-xs px-3 py-1.5 border border-neutral-300 rounded hover:bg-neutral-100 transition-colors">
          <Icon name="Upload" size={14} />
          Загрузить файл
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
            }}
          />
        </label>
        {value && (
          <img
            src={value}
            alt=""
            className="w-12 h-12 object-cover rounded border border-neutral-200"
          />
        )}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  multiline,
  rows,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-neutral-500">
        {label}
      </Label>
      {multiline ? (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows ?? 3}
        />
      ) : (
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

export default function Builder() {
  const [data, setData] = useState<BuilderData>(() => {
    if (typeof window === "undefined") return DEFAULT_DATA;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_DATA, ...JSON.parse(saved) } : DEFAULT_DATA;
    } catch {
      return DEFAULT_DATA;
    }
  });
  const [panelOpen, setPanelOpen] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  const update = <K extends keyof BuilderData>(key: K, value: BuilderData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

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

  const arrEdit = <K extends keyof BuilderData>(
    key: K,
    idx: number,
    patch: Partial<BuilderData[K] extends (infer U)[] ? U : never>,
  ) => {
    setData((d) => {
      const arr = [...(d[key] as unknown as unknown[])];
      arr[idx] = { ...(arr[idx] as object), ...patch };
      return { ...d, [key]: arr } as BuilderData;
    });
  };

  const arrEditString = (key: "historyParagraphs" | "architectureParagraphs", idx: number, value: string) => {
    setData((d) => {
      const arr = [...d[key]];
      arr[idx] = value;
      return { ...d, [key]: arr };
    });
  };

  const arrAdd = <K extends keyof BuilderData>(key: K, item: BuilderData[K] extends (infer U)[] ? U : never) => {
    setData((d) => ({ ...d, [key]: [...(d[key] as unknown as unknown[]), item] } as BuilderData));
  };

  const arrRemove = <K extends keyof BuilderData>(key: K, idx: number) => {
    setData((d) => {
      const arr = [...(d[key] as unknown as unknown[])];
      arr.splice(idx, 1);
      return { ...d, [key]: arr } as BuilderData;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Toolbar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPanelOpen((v) => !v)}
          className="bg-white shadow-md"
        >
          <Icon name={panelOpen ? "PanelRightClose" : "PanelRightOpen"} size={16} />
          {panelOpen ? "Скрыть панель" : "Показать панель"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (confirm("Сбросить все изменения к шаблону?")) setData(DEFAULT_DATA);
          }}
          className="bg-white shadow-md"
        >
          <Icon name="RotateCcw" size={16} />
          Сбросить
        </Button>
      </div>

      <div className={`flex ${panelOpen ? "lg:pr-[440px]" : ""}`}>
        {/* PREVIEW */}
        <main className="flex-1 min-h-screen bg-white">
          <Header />

          {/* COVER */}
          <div
            ref={coverContainer}
            className="relative flex items-center justify-center h-screen overflow-hidden"
          >
            <motion.div style={{ y: coverY }} className="absolute inset-0 w-full h-full">
              {data.coverImage && (
                <img
                  src={data.coverImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 text-center text-white px-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
                {data.coverKicker}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 font-bold whitespace-pre-line">
                {data.coverTitle}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
                {data.coverDescription}
              </p>
              <button
                onClick={() =>
                  container.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="group mt-12 inline-flex flex-col items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <span className="text-xs md:text-sm uppercase tracking-[0.3em]">
                  {data.coverButton}
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

          {/* HERO */}
          <div
            ref={container}
            className="relative flex items-end h-screen overflow-hidden"
          >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
              {data.heroImage && (
                <img
                  src={data.heroImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
            </motion.div>

            <div className="relative z-10 text-white px-6 lg:px-16 pb-20 max-w-6xl">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-80">
                {data.heroKicker}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] whitespace-pre-line">
                {data.heroTitle}
              </h1>
              <p className="text-base md:text-xl max-w-2xl opacity-90 leading-relaxed">
                {data.heroDescription}
              </p>
            </div>
          </div>

          {/* SPECS */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
                {data.specsKicker}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
                {data.specsTitle}
              </h2>
              <div className="border-t border-neutral-200">
                {data.specs.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 border-b border-neutral-200"
                  >
                    <div className="flex items-center gap-3 text-neutral-500 uppercase text-sm tracking-wide">
                      <Icon name={s.icon} fallback="Circle" size={18} />
                      {s.label}
                    </div>
                    <div className="md:col-span-2 text-lg lg:text-xl text-neutral-900">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HISTORY */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
            <div className="max-w-3xl mx-auto">
              <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
                {data.historyKicker}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                {data.historyTitle}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed">
                  {data.historyLead}
                </p>
                {data.historyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {data.historyQuote && (
                  <blockquote className="border-l-4 border-neutral-900 pl-6 py-2 text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight my-10">
                    {data.historyQuote}
                  </blockquote>
                )}
              </div>
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
            <div className="max-w-3xl mx-auto">
              <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
                {data.architectureKicker}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight whitespace-pre-line">
                {data.architectureTitle}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                {data.architectureParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
                  {data.reconstructionsTitle}
                </h3>
                <p className="text-lg text-neutral-700 mb-6">
                  {data.reconstructionsLead}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {data.reconstructions.map((r, i) => (
                    <div
                      key={i}
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
                  {data.reconstructionsAfter}
                </p>
              </div>
            </div>
          </section>

          {/* TIMELINE */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-900 text-white">
            <div className="max-w-5xl mx-auto">
              <p className="uppercase text-sm tracking-[0.3em] text-neutral-400 mb-4">
                {data.timelineKicker}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold mb-16 leading-tight whitespace-pre-line">
                {data.timelineTitle}
              </h2>
              <div className="space-y-12">
                {data.timeline.map((t, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 ${
                      i < data.timeline.length - 1
                        ? "pb-12 border-b border-neutral-800"
                        : ""
                    }`}
                  >
                    <div className="text-2xl font-bold whitespace-pre-line">
                      {t.period}
                    </div>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FACTS */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {data.facts.map((f, i) => (
                <div key={i} className="bg-neutral-50 p-8 lg:p-10">
                  <Icon
                    name={f.icon}
                    fallback="Sparkles"
                    size={32}
                    className="mb-6 text-neutral-900"
                  />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {f.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section className="px-6 lg:px-16 py-20 lg:py-32 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
              <p className="uppercase text-sm tracking-[0.3em] text-neutral-500 mb-4">
                {data.galleryKicker}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
                {data.galleryTitle}
              </h2>
              {data.galleryImage && (
                <figure>
                  <img
                    src={data.galleryImage}
                    alt=""
                    className="w-full h-auto"
                  />
                  <figcaption className="mt-4 text-sm text-neutral-500 uppercase tracking-wide">
                    {data.galleryCaption}
                  </figcaption>
                </figure>
              )}
            </div>
          </section>

          <Footer />
        </main>

        {/* EDITOR PANEL */}
        {panelOpen && (
          <aside className="hidden lg:block fixed top-0 right-0 h-screen w-[440px] bg-white border-l border-neutral-200 overflow-y-auto shadow-xl z-40">
            <div className="p-6 border-b border-neutral-200 sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Icon name="Pencil" size={18} />
                Конструктор страницы
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Изменения сохраняются автоматически
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="cover" className="p-4">
              <AccordionItem value="cover">
                <AccordionTrigger>1. Обложка «Мосты Томска»</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <ImageField
                    label="Фоновое изображение"
                    value={data.coverImage}
                    onChange={(v) => update("coverImage", v)}
                  />
                  <TextField
                    label="Надпись сверху"
                    value={data.coverKicker}
                    onChange={(v) => update("coverKicker", v)}
                  />
                  <TextField
                    label="Заголовок (Enter = новая строка)"
                    value={data.coverTitle}
                    onChange={(v) => update("coverTitle", v)}
                    multiline
                    rows={2}
                  />
                  <TextField
                    label="Описание"
                    value={data.coverDescription}
                    onChange={(v) => update("coverDescription", v)}
                    multiline
                  />
                  <TextField
                    label="Текст кнопки-стрелки"
                    value={data.coverButton}
                    onChange={(v) => update("coverButton", v)}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hero">
                <AccordionTrigger>2. Главное фото моста</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <ImageField
                    label="Изображение моста"
                    value={data.heroImage}
                    onChange={(v) => update("heroImage", v)}
                  />
                  <TextField
                    label="Подпись сверху"
                    value={data.heroKicker}
                    onChange={(v) => update("heroKicker", v)}
                  />
                  <TextField
                    label="Заголовок (Enter = новая строка)"
                    value={data.heroTitle}
                    onChange={(v) => update("heroTitle", v)}
                    multiline
                    rows={2}
                  />
                  <TextField
                    label="Описание"
                    value={data.heroDescription}
                    onChange={(v) => update("heroDescription", v)}
                    multiline
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specs">
                <AccordionTrigger>3. Характеристика</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <TextField
                    label="Надпись сверху"
                    value={data.specsKicker}
                    onChange={(v) => update("specsKicker", v)}
                  />
                  <TextField
                    label="Заголовок"
                    value={data.specsTitle}
                    onChange={(v) => update("specsTitle", v)}
                  />
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider text-neutral-500">
                      Строки характеристик
                    </Label>
                    {data.specs.map((s, i) => (
                      <div
                        key={i}
                        className="border border-neutral-200 rounded p-3 space-y-2"
                      >
                        <Input
                          placeholder="Иконка (напр. Building2)"
                          value={s.icon}
                          onChange={(e) => arrEdit("specs", i, { icon: e.target.value })}
                        />
                        <Input
                          placeholder="Название"
                          value={s.label}
                          onChange={(e) => arrEdit("specs", i, { label: e.target.value })}
                        />
                        <Input
                          placeholder="Значение"
                          value={s.value}
                          onChange={(e) => arrEdit("specs", i, { value: e.target.value })}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => arrRemove("specs", i)}
                          className="text-red-600"
                        >
                          <Icon name="Trash2" size={14} />
                          Удалить
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        arrAdd("specs", { icon: "Circle", label: "Параметр", value: "Значение" })
                      }
                    >
                      <Icon name="Plus" size={14} />
                      Добавить строку
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="history">
                <AccordionTrigger>4. История места</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <TextField
                    label="Надпись сверху"
                    value={data.historyKicker}
                    onChange={(v) => update("historyKicker", v)}
                  />
                  <TextField
                    label="Заголовок"
                    value={data.historyTitle}
                    onChange={(v) => update("historyTitle", v)}
                  />
                  <TextField
                    label="Вводный (крупный) абзац"
                    value={data.historyLead}
                    onChange={(v) => update("historyLead", v)}
                    multiline
                    rows={4}
                  />
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider text-neutral-500">
                      Абзацы текста
                    </Label>
                    {data.historyParagraphs.map((p, i) => (
                      <div key={i} className="space-y-1">
                        <Textarea
                          rows={4}
                          value={p}
                          onChange={(e) =>
                            arrEditString("historyParagraphs", i, e.target.value)
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => arrRemove("historyParagraphs", i)}
                          className="text-red-600"
                        >
                          <Icon name="Trash2" size={14} />
                          Удалить абзац
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setData((d) => ({
                          ...d,
                          historyParagraphs: [...d.historyParagraphs, "Новый абзац"],
                        }))
                      }
                    >
                      <Icon name="Plus" size={14} />
                      Добавить абзац
                    </Button>
                  </div>
                  <TextField
                    label="Выделенная цитата"
                    value={data.historyQuote}
                    onChange={(v) => update("historyQuote", v)}
                    multiline
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="architecture">
                <AccordionTrigger>5. Архитектура и реконструкции</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <TextField
                    label="Надпись сверху"
                    value={data.architectureKicker}
                    onChange={(v) => update("architectureKicker", v)}
                  />
                  <TextField
                    label="Заголовок (Enter = новая строка)"
                    value={data.architectureTitle}
                    onChange={(v) => update("architectureTitle", v)}
                    multiline
                    rows={2}
                  />
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider text-neutral-500">
                      Абзацы про архитектуру
                    </Label>
                    {data.architectureParagraphs.map((p, i) => (
                      <div key={i} className="space-y-1">
                        <Textarea
                          rows={4}
                          value={p}
                          onChange={(e) =>
                            arrEditString("architectureParagraphs", i, e.target.value)
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => arrRemove("architectureParagraphs", i)}
                          className="text-red-600"
                        >
                          <Icon name="Trash2" size={14} />
                          Удалить
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setData((d) => ({
                          ...d,
                          architectureParagraphs: [...d.architectureParagraphs, "Новый абзац"],
                        }))
                      }
                    >
                      <Icon name="Plus" size={14} />
                      Добавить абзац
                    </Button>
                  </div>
                  <TextField
                    label="Заголовок блока «Реконструкции»"
                    value={data.reconstructionsTitle}
                    onChange={(v) => update("reconstructionsTitle", v)}
                  />
                  <TextField
                    label="Вводный текст реконструкций"
                    value={data.reconstructionsLead}
                    onChange={(v) => update("reconstructionsLead", v)}
                  />
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider text-neutral-500">
                      Карточки реконструкций
                    </Label>
                    {data.reconstructions.map((r, i) => (
                      <div
                        key={i}
                        className="border border-neutral-200 rounded p-3 space-y-2"
                      >
                        <Input
                          placeholder="Год / период"
                          value={r.year}
                          onChange={(e) =>
                            arrEdit("reconstructions", i, { year: e.target.value })
                          }
                        />
                        <Input
                          placeholder="Подпись"
                          value={r.label}
                          onChange={(e) =>
                            arrEdit("reconstructions", i, { label: e.target.value })
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => arrRemove("reconstructions", i)}
                          className="text-red-600"
                        >
                          <Icon name="Trash2" size={14} />
                          Удалить
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        arrAdd("reconstructions", { year: "Год", label: "Подпись" })
                      }
                    >
                      <Icon name="Plus" size={14} />
                      Добавить карточку
                    </Button>
                  </div>
                  <TextField
                    label="Текст после карточек"
                    value={data.reconstructionsAfter}
                    onChange={(v) => update("reconstructionsAfter", v)}
                    multiline
                    rows={4}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline">
                <AccordionTrigger>6. Хронология</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <TextField
                    label="Надпись сверху"
                    value={data.timelineKicker}
                    onChange={(v) => update("timelineKicker", v)}
                  />
                  <TextField
                    label="Заголовок (Enter = новая строка)"
                    value={data.timelineTitle}
                    onChange={(v) => update("timelineTitle", v)}
                    multiline
                    rows={2}
                  />
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider text-neutral-500">
                      Этапы
                    </Label>
                    {data.timeline.map((t, i) => (
                      <div
                        key={i}
                        className="border border-neutral-200 rounded p-3 space-y-2"
                      >
                        <Input
                          placeholder="Период (Enter = новая строка)"
                          value={t.period}
                          onChange={(e) =>
                            arrEdit("timeline", i, { period: e.target.value })
                          }
                        />
                        <Textarea
                          rows={3}
                          placeholder="Описание"
                          value={t.text}
                          onChange={(e) =>
                            arrEdit("timeline", i, { text: e.target.value })
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => arrRemove("timeline", i)}
                          className="text-red-600"
                        >
                          <Icon name="Trash2" size={14} />
                          Удалить
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        arrAdd("timeline", { period: "Период", text: "Описание" })
                      }
                    >
                      <Icon name="Plus" size={14} />
                      Добавить этап
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="facts">
                <AccordionTrigger>7. Интересные факты</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  {data.facts.map((f, i) => (
                    <div
                      key={i}
                      className="border border-neutral-200 rounded p-3 space-y-2"
                    >
                      <Input
                        placeholder="Иконка (напр. Camera)"
                        value={f.icon}
                        onChange={(e) => arrEdit("facts", i, { icon: e.target.value })}
                      />
                      <Input
                        placeholder="Заголовок"
                        value={f.title}
                        onChange={(e) => arrEdit("facts", i, { title: e.target.value })}
                      />
                      <Textarea
                        rows={4}
                        placeholder="Текст"
                        value={f.text}
                        onChange={(e) => arrEdit("facts", i, { text: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => arrRemove("facts", i)}
                        className="text-red-600"
                      >
                        <Icon name="Trash2" size={14} />
                        Удалить
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      arrAdd("facts", {
                        icon: "Sparkles",
                        title: "Новый факт",
                        text: "Описание",
                      })
                    }
                  >
                    <Icon name="Plus" size={14} />
                    Добавить факт
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gallery">
                <AccordionTrigger>8. Фото в конце</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <TextField
                    label="Надпись сверху"
                    value={data.galleryKicker}
                    onChange={(v) => update("galleryKicker", v)}
                  />
                  <TextField
                    label="Заголовок"
                    value={data.galleryTitle}
                    onChange={(v) => update("galleryTitle", v)}
                  />
                  <ImageField
                    label="Изображение"
                    value={data.galleryImage}
                    onChange={(v) => update("galleryImage", v)}
                  />
                  <TextField
                    label="Подпись под фото"
                    value={data.galleryCaption}
                    onChange={(v) => update("galleryCaption", v)}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>
        )}
      </div>
    </div>
  );
}