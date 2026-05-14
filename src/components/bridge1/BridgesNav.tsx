import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const bridges = [
  { id: "bridge-railway", num: "01", title: "Пешеходный мост у Томск-1" },
  { id: "bridge-communal", num: "02", title: "Коммунальный мост" },
  { id: "bridge-medichka", num: "03", title: "Мост через Медичку" },
  { id: "bridge-stone", num: "04", title: "Каменный (Думский) мост" },
  { id: "bridge-pharmacy", num: "05", title: "Аптекарский мост" },
];

export default function BridgesNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>(bridges[0].id);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);

      let current = bridges[0].id;
      for (const b of bridges) {
        const el = document.getElementById(b.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = b.id;
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50"
        >
          <div className="relative flex flex-col items-end gap-3">
            {/* Список */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white shadow-2xl border border-neutral-200 p-2 min-w-[280px] md:min-w-[320px] max-h-[70vh] overflow-y-auto"
                >
                  <div className="px-3 py-2 mb-1 border-b border-neutral-200">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                      Маршрут
                    </p>
                    <p className="text-sm font-bold text-neutral-900 mt-1">
                      Мосты Томска
                    </p>
                  </div>
                  {bridges.map((b) => {
                    const isActive = activeId === b.id;
                    return (
                      <button
                        key={b.id}
                        onClick={() => scrollTo(b.id)}
                        className={`w-full text-left px-3 py-3 flex items-start gap-3 transition-colors ${
                          isActive
                            ? "bg-neutral-900 text-white"
                            : "hover:bg-neutral-100 text-neutral-900"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono tracking-wide pt-0.5 ${
                            isActive ? "text-white/60" : "text-neutral-400"
                          }`}
                        >
                          {b.num}
                        </span>
                        <span className="text-sm leading-snug">{b.title}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Кнопка */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Открыть оглавление маршрута"
              className="flex items-center gap-2 bg-neutral-900 text-white px-4 md:px-5 py-3 shadow-2xl hover:bg-neutral-800 transition-colors"
            >
              <Icon name={open ? "X" : "Menu"} size={18} />
              <span className="text-xs uppercase tracking-[0.25em] hidden md:inline">
                Маршрут
              </span>
              <span className="text-xs font-mono text-white/70">
                {bridges.find((b) => b.id === activeId)?.num ?? "01"}/05
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
