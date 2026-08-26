"use client";

import { useTranslations, useLocale } from "next-intl";
import { projects, type Locale } from "@/data/projects";
import {
    GithubIcon,
    ExternalLinkIcon,
    BriefcaseIcon,
} from "@/components/BrandIcons";

const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop";

// Tự động resize + nén ảnh Cloudinary để hết giật khi hover
const optimizeImage = (url: string) => {
    if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
        return url;
    }
    return url.replace("/upload/", "/upload/w_900,h_560,c_fill,f_auto,q_auto/");
};

const isValidLink = (link?: string) =>
    !!link && link !== "#" && link.trim() !== "";

export default function Projects() {
    const t = useTranslations("projects");
    const locale = useLocale() as Locale;

    return (
        <section
            id="projects"
            className="relative mx-auto max-w-[1200px] border-t border-[var(--border)] px-5 pb-24 pt-20 sm:px-12"
        >
            {/* header */}
            <p className="mb-4 font-mono text-[13px] tracking-widest text-[var(--accent-blue)]">
                02 — {t("label")}
            </p>
            <h2 className="max-w-2xl bg-gradient-to-r from-[var(--text)] to-[var(--accent-purple)] bg-clip-text text-[clamp(32px,6vw,56px)] font-bold leading-tight tracking-tight text-transparent">
                {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-[var(--text-muted)]">
                {t("subtitle")}
            </p>

            {/* grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <article
                        key={p.id}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-[var(--border-strong)] ${p.featured ? "md:col-span-2" : ""
                            }`}
                    >
                        {/* image */}
                        <div
                            className={`relative transform-gpu overflow-hidden ${p.featured ? "h-72" : "h-52"
                                }`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={optimizeImage(p.image)}
                                alt={p.title}
                                loading="lazy"
                                onError={(e) => {
                                    if (!e.currentTarget.src.includes("unsplash")) {
                                        e.currentTarget.src = FALLBACK_IMAGE;
                                    }
                                }}
                                className="h-full w-full transform-gpu object-cover object-top transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden] group-hover:scale-[1.04]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[color-mix(in_srgb,var(--bg)_40%,transparent)] to-transparent" />

                            {p.featured && (
                                <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] px-3 py-1 font-mono text-[11px] font-bold text-white">
                                    {t("featured")}
                                </span>
                            )}

                            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 font-mono text-[11px] text-white backdrop-blur-md">
                                <BriefcaseIcon size={12} />
                                {p.company}
                            </span>
                        </div>

                        {/* body */}
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-bold text-[var(--text)]">{p.title}</h3>
                            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[var(--text-muted)]">
                                {p.description[locale]}
                            </p>

                            {/* tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-2.5 py-1 font-mono text-[12px] text-[var(--text-muted)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* links */}
                            <div className="mt-5 flex gap-3">
                                {isValidLink(p.demoLink) && (
                                    <a
                                        href={p.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--accent-blue)] transition-opacity hover:opacity-75"
                                    >
                                        <ExternalLinkIcon size={15} /> {t("viewDemo")}
                                    </a>
                                )}
                                {isValidLink(p.githubLink) && (
                                    <a
                                        href={p.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--text-muted)] transition-opacity hover:opacity-75"
                                    >
                                        <GithubIcon size={15} /> {t("viewCode")}
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}