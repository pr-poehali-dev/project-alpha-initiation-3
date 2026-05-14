import { useScroll, useTransform, motion } from "framer-motion";
import { RefObject } from "react";
import Icon from "@/components/ui/icon";

const stationPhoto = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/1cd2a646-7e18-441a-a24b-c59e7357c60d.png";
const mainCover = "https://cdn.poehali.dev/projects/dd5ec458-7358-4f12-96c2-5d5da99daff2/bucket/6425bd86-778e-4b22-a37b-c17f53cd7c20.jpg";

interface BridgeIntroProps {
  coverContainer: RefObject<HTMLDivElement>;
  container: RefObject<HTMLDivElement>;
}

export default function BridgeIntro({ coverContainer, container }: BridgeIntroProps) {
  const { scrollYProgress: coverProgress } = useScroll({
    target: coverContainer,
    offset: ["start start", "end start"],
  });
  const coverY = useTransform(coverProgress, [0, 1], ["0vh", "50vh"]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);

  return (
    <>
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
        id="bridge-railway"
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
    </>
  );
}