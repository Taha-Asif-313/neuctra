"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FileText,
  Fingerprint,
  LayoutTemplate,
  Lock,
  Mail,
  Rocket,
} from "lucide-react";
import { Badge } from "@neuctra/ui";
import {
  useMotionPreference,
  useMotionStill,
} from "@/app/components/patterns/MotionPreference";
import { useLoopingStages } from "@/app/components/patterns/useLoopingStages";

const STAGE_MS = 3400;
const LAST_STAGE_HOLD_MS = 1800;

const STAGES = [
  {
    label: "Brief",
    detail: "Understand the problem",
    icon: FileText,
    phrase: "turn ideas into products",
    events: [{ title: "Brief received", meta: "client portal" }],
  },
  {
    label: "Interface",
    detail: "Neuctra UI",
    icon: LayoutTemplate,
    phrase: "design digital systems clearly",
    events: [
      { title: "Layout composed", meta: "sidebar · tiles · chart" },
      { title: "Theme applied", meta: "light + dark" },
    ],
  },
  {
    label: "Identity",
    detail: "Neuctra Authix",
    icon: Fingerprint,
    phrase: "build useful software",
    events: [
      { title: "Sign-in connected", meta: "email + password" },
      { title: "User data linked", meta: "per account" },
    ],
  },
  {
    label: "Launch",
    detail: "Ship and improve",
    icon: Rocket,
    phrase: "grow with practical technology",
    events: [
      { title: "Build deployed", meta: "production" },
      { title: "Product live", meta: "ready for users" },
    ],
  },
];

const LONGEST_PHRASE = "design digital systems clearly";
const BAR_HEIGHTS = [34, 52, 44, 68, 58, 82, 62, 74, 92, 70, 86, 100];
const TILES = [
  { label: "Clients", value: "24" },
  { label: "Invoices", value: "118" },
  { label: "Open tasks", value: "7" },
];
const NAV_WIDTHS = ["w-4/5", "w-3/5", "w-2/3", "w-1/2"];
const BURST = Array.from({ length: 14 }, (_, i) => (i / 14) * Math.PI * 2);

export default function HeroContent() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const { reduced } = useMotionPreference();
  const still = useMotionStill();
  const inView = useInView(panelRef, { amount: 0.25 });
  const { stage, select } = useLoopingStages({
    count: STAGES.length,
    durationMs: STAGE_MS,
    lastHoldMs: LAST_STAGE_HOLD_MS,
    inView,
    // Reduced motion opens on the finished product rather than an empty one.
    reducedStage: STAGES.length - 1,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollTilt = useTransform(scrollYProgress, [0, 0.42], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.42], [0.95, 1]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 70, damping: 18 });
  const pointerTilt = useSpring(pointerY, { stiffness: 70, damping: 18 });
  const rotateX = useTransform(
    [scrollTilt, pointerTilt],
    ([fromScroll, fromPointer]) => fromScroll + fromPointer,
  );

  const handlePointerMove = (event) => {
    if (still || event.pointerType !== "mouse") return;
    pointerX.set((event.clientX / window.innerWidth - 0.5) * 7);
    pointerY.set((event.clientY / window.innerHeight - 0.5) * -5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-28 pt-10 text-center sm:px-6 lg:px-8 lg:pt-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge
          text="Software products + custom technology solutions"
          variant="solid"
          size="md"
          rounded={true}
          className="mb-6"
        />
      </motion.div>

      <motion.h1
        className="max-w-6xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Neuctra helps you{" "}
        <span className="relative mt-2 grid justify-items-center text-primary">
          <span
            aria-hidden="true"
            className="invisible col-start-1 row-start-1"
          >
            {LONGEST_PHRASE}
          </span>
          <AnimatePresence initial={false}>
            <motion.span
              key={STAGES[stage].phrase}
              className="col-start-1 row-start-1"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45 }}
            >
              {STAGES[stage].phrase}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-3xl text-base text-secondary sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We build software products for developers, teams, and everyday users
        while helping businesses turn ideas into custom web apps, SaaS
        platforms, internal systems, and digital experiences that solve real
        problems.
      </motion.p>

      <motion.div
        className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Link
          href="/#products"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:w-auto"
        >
          <span>Explore products</span>
          <ArrowUpRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary sm:w-auto"
        >
          <span>Discuss your project</span>
          <Mail
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>

      <div className="relative mt-12 w-full [perspective:1600px]">
        <div className="pointer-events-none absolute -inset-x-10 -top-16 bottom-1/2 rounded-full bg-primary/20 blur-[90px]" />

        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={
            reduced
              ? undefined
              : { rotateX, rotateY, scale, transformOrigin: "50% 0%" }
          }
          className="nx-frame relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_30px_70px_-50px_rgba(0,194,20,0.45)] backdrop-blur"
        >
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
            <p className="min-w-0 truncate font-mono text-xs text-secondary">
              <span className="hidden sm:inline">
                neuctra <span className="text-muted-foreground">/</span>{" "}
              </span>
              <span className="text-foreground">idea to launch</span>
            </p>
            <span className="ml-auto shrink-0 whitespace-nowrap rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              Sample project
            </span>
          </div>

          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)_250px]">
            <StageRail stage={stage} onSelect={select} />
            <div className="border-border p-3 sm:p-4 lg:border-x">
              <AssemblingApp stage={stage} />
            </div>
            <EventLog stage={stage} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StageRail({ stage, onSelect }) {
  return (
    <ol className="grid grid-cols-4 gap-1 border-b border-border p-2 lg:grid-cols-1 lg:content-center lg:gap-1 lg:border-b-0 lg:p-3">
      {STAGES.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === stage;
        const isDone = index < stage;
        const duration =
          index === STAGES.length - 1
            ? STAGE_MS + LAST_STAGE_HOLD_MS
            : STAGE_MS;

        return (
          <li key={item.label} className="relative">
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-current={isActive ? "step" : undefined}
              className={`relative flex w-full flex-col items-center gap-1.5 overflow-hidden rounded-xl px-1 py-2 text-center transition-colors lg:flex-row lg:gap-3 lg:px-3 lg:py-3 lg:text-left ${
                isActive ? "bg-primary/10" : "hover:bg-muted"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                  isActive || isDone
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {isDone ? <Check size={15} /> : <Icon size={15} />}
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-xs font-semibold sm:text-sm ${
                    isActive ? "text-foreground" : "text-secondary"
                  }`}
                >
                  {item.label}
                </span>
                <span className="hidden truncate text-[11px] text-muted-foreground lg:block">
                  {item.detail}
                </span>
              </span>
              {isActive && (
                <span
                  key={stage}
                  className="nx-stage-fill absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                  style={{ animationDuration: `${duration}ms` }}
                />
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function AssemblingApp({ stage }) {
  const isBuilt = stage >= 1;
  const isLive = stage === 3;

  return (
    <div
      aria-hidden="true"
      className="relative flex h-[300px] flex-col overflow-hidden rounded-xl border border-border bg-background sm:h-[380px]"
    >
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {isLive && <Lock size={10} className="shrink-0 text-primary" />}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isLive ? "live" : "local"}
              className="truncate"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {isLive ? "portal.yourcompany.com" : "localhost:3000"}
            </motion.span>
          </AnimatePresence>
        </span>
        <AnimatePresence>
          {isLive && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex items-center gap-1.5 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="nx-pulse absolute inset-0 rounded-full bg-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Live
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="relative flex min-h-0 flex-1">
        <AnimatePresence>
          {isBuilt && (
            <motion.div
              key="sidebar"
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -70, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="hidden w-32 shrink-0 flex-col gap-3 border-r border-border p-3 sm:flex"
            >
              <span className="mb-1 h-3 w-14 rounded bg-primary/70" />
              {NAV_WIDTHS.map((width, index) => (
                <span
                  key={width}
                  className={`h-2 rounded bg-muted-foreground/20 ${width} ${
                    index === 0 ? "bg-primary/40" : ""
                  }`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-3">
          <AnimatePresence>
            {isBuilt && (
              <motion.div
                key="content"
                className="flex min-h-0 flex-1 flex-col gap-3"
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground">
                    Client portal
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-300 ${
                      isLive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-transparent"
                    }`}
                  >
                    AK
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {TILES.map((tile, index) => (
                    <motion.div
                      key={tile.label}
                      initial={{ y: 22, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.25 + index * 0.1,
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                      }}
                      className="rounded-lg border border-border bg-card p-2"
                    >
                      <p className="truncate text-[10px] text-muted-foreground">
                        {tile.label}
                      </p>
                      <p
                        className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                          isLive ? "text-foreground" : "text-transparent"
                        }`}
                      >
                        {tile.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex min-h-0 flex-1 items-end gap-1 rounded-lg border border-border bg-card p-3">
                  {BAR_HEIGHTS.map((height, index) => (
                    <motion.span
                      key={index}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        delay: 0.6 + index * 0.04,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      style={{ height: `${height}%`, originY: 1 }}
                      className={`flex-1 rounded-t-sm transition-colors duration-500 ${
                        isLive ? "bg-primary" : "bg-muted-foreground/25"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {stage === 0 && <BriefNote key="brief" />}
          {stage === 2 && <SignInCard key="sign-in" />}
          {isLive && <LaunchBurst key="burst" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function BriefNote() {
  const words = "A client portal with sign-in and a simple dashboard.".split(
    " ",
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ y: 16, rotate: -2 }}
        animate={{ y: 0, rotate: -1 }}
        className="w-full max-w-xs rounded-xl border border-border bg-card p-4 shadow-lg"
      >
        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
          <FileText size={12} /> Project brief
        </p>
        <p className="text-sm font-medium leading-snug text-foreground sm:text-base">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 + index * 0.14 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </motion.div>
  );
}

function SignInCard() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-background/70 p-4 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        initial={{ y: 26, scale: 0.92 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -16, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="w-full max-w-[250px] rounded-xl border border-border bg-card p-4 shadow-xl"
      >
        <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-foreground">
          <Fingerprint size={14} className="text-primary" /> Sign in
        </p>
        <div className="mb-2 h-8 overflow-hidden rounded-md border border-border bg-background px-2 font-mono text-[11px] leading-8 text-secondary">
          <motion.span
            className="block overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.35, duration: 0.9, ease: "linear" }}
          >
            you@yourcompany.com
          </motion.span>
        </div>
        <div className="mb-3 flex h-8 items-center gap-1 rounded-md border border-border bg-background px-2">
          {Array.from({ length: 8 }, (_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + index * 0.05 }}
              className="h-1.5 w-1.5 rounded-full bg-secondary"
            />
          ))}
        </div>
        <motion.div
          initial={{ backgroundColor: "var(--muted)" }}
          animate={{ backgroundColor: "var(--primary)" }}
          transition={{ delay: 1.9, duration: 0.25 }}
          className="relative flex h-8 items-center justify-center overflow-hidden rounded-md text-[11px] font-semibold text-primary-foreground"
        >
          <motion.span
            className="flex items-center gap-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
          >
            <Check size={12} /> Signed in
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function LaunchBurst() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      exit={{ opacity: 0 }}
    >
      <motion.span
        className="absolute h-24 w-24 rounded-full border-2 border-primary"
        initial={{ scale: 0.2, opacity: 0.9 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      {BURST.map((angle, index) => (
        <motion.span
          key={angle}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos(angle) * (130 + (index % 3) * 45),
            y: Math.sin(angle) * (90 + (index % 3) * 35),
            opacity: 0,
            scale: 0.4,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
}

function EventLog({ stage }) {
  const events = STAGES.slice(0, stage + 1).flatMap((item) =>
    item.events.map((event) => ({ ...event, id: event.title })),
  );

  return (
    <div className="hidden flex-col p-4 lg:flex">
      <p className="mb-3 text-xs font-semibold text-foreground">Activity</p>
      <ul className="flex flex-col gap-3">
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.li
              key={event.id}
              layout
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2.5"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="min-w-0">
                <span className="block text-xs font-medium text-foreground">
                  {event.title}
                </span>
                <span className="block truncate font-mono text-[10px] text-muted-foreground">
                  {event.meta}
                </span>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
