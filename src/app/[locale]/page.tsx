import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, DownloadIcon } from "@/components/BrandIcons";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const STACK = [
  { name: "ReactJS", c: "#38bdf8" },
  { name: "NextJS", c: "#8b8b9e" },
  { name: "NodeJS", c: "#4ade80" },
  { name: "NestJS", c: "#ff5d73" },
  { name: "TypeScript", c: "#3b82f6" },
  { name: "PostgreSQL", c: "#a78bfa" },
  { name: "MongoDB", c: "#84cc16" },
  { name: "Prisma", c: "#ffa14a" },
];

const NAV = ["about", "projects", "blog", "contact"] as const;

export default function Home() {
  const locale = useLocale();

  const t = useTranslations();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 left-1/2 h-[600px] w-[900px] -translate-x-1/2 blur-[40px]"
        style={{
          opacity: "var(--glow-opacity)",
          background:
            "radial-gradient(circle at 30% 30%, #38bdf8, transparent 60%), radial-gradient(circle at 70% 50%, #a78bfa, transparent 60%), radial-gradient(circle at 50% 80%, #ff5d73, transparent 60%)",
        }}
      />

      {/* NAV */}
      <nav className="relative mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 sm:px-12">
        <span className="flex items-center gap-2 font-mono font-bold tracking-widest text-[var(--text)]">
          <Terminal size={16} className="text-[var(--accent-blue)]" />
          NCD
        </span>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden gap-6 sm:flex">
            {NAV.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {t(`nav.${l}`)}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>

      {/* HERO */}
      <header className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-16 sm:px-12 sm:pt-28">
        <p className="mb-5 font-mono text-[13px] tracking-widest text-[var(--accent-blue)]">
          <span className="animate-pulse">▍</span> {t("hero.location")}
        </p>
        <h1 className="m-0 bg-gradient-to-r from-[var(--text)] via-[var(--accent-purple)] to-[var(--accent-blue)] bg-clip-text pt-1 text-[clamp(52px,12vw,132px)] font-bold leading-[1.06] tracking-tight text-transparent">
          Nguyễn
          <br />
          Cao Duy
        </h1>
        <p className="mt-6 font-mono text-[clamp(16px,2.5vw,24px)] text-[var(--text)]">
          {t("hero.role")}
          <span className="animate-pulse text-[var(--accent-green)]">_</span>
        </p>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-[var(--text-muted)]">
          {t("hero.lede")}
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href="https://github.com/dennisnguyen9722"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] px-5 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-85"
          >
            <GithubIcon size={17} /> GitHub <ArrowUpRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/duynguyen221298/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-5 py-3 text-[15px] text-[var(--text)] transition-opacity hover:opacity-85"
          >
            <LinkedinIcon size={17} /> LinkedIn
          </a>
          <a
            href={`/NguyenCaoDuy-CV-${locale}.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-5 py-3 text-[15px] text-[var(--text)] transition-opacity hover:opacity-85"
          >
            <DownloadIcon size={17} /> {t("hero.downloadCV")}
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="relative mx-auto max-w-[1200px] border-t border-[var(--border)] px-5 pb-24 pt-16 sm:px-12"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <p className="mb-6 font-mono text-[13px] tracking-widest text-[var(--accent-orange)]">
              01 — {t("about.label")}
            </p>
            <p className="mb-4 text-[17px] leading-relaxed text-[var(--text-muted)]">
              {t("about.p1")}
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
              {t("about.p2")}
            </p>
          </div>
          <div>
            <p className="mb-6 font-mono text-[13px] tracking-widest text-[var(--accent-orange)]">
              {t("about.stack")}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {STACK.map((s) => (
                <span
                  key={s.name}
                  className="cursor-default rounded-[10px] border px-3.5 py-2 font-mono text-sm transition-transform hover:-translate-y-0.5"
                  style={{
                    color: s.c,
                    borderColor: `color-mix(in srgb, ${s.c} 40%, transparent)`,
                    background: `color-mix(in srgb, ${s.c} 12%, transparent)`,
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Contact />
    </div>
  );
}