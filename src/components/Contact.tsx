"use client";

import { useTranslations, useLocale } from "next-intl";
import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    DownloadIcon,
    ExternalLinkIcon,
} from "@/components/BrandIcons";

const EMAIL = "dnc221297@gmail.com";
const GITHUB = "https://github.com/dennisnguyen9722";
const LINKEDIN = "https://www.linkedin.com/in/duynguyen221298/";

export default function Contact() {
    const t = useTranslations("contact");
    const locale = useLocale();

    return (
        <section
            id="contact"
            className="relative mx-auto max-w-[1200px] border-t border-[var(--border)] px-5 pb-28 pt-20 sm:px-12"
        >
            <p className="mb-4 font-mono text-[13px] tracking-widest text-[var(--accent-blue)]">
                03 — {t("label")}
            </p>
            <h2 className="max-w-2xl bg-gradient-to-r from-[var(--text)] to-[var(--accent-purple)] bg-clip-text text-[clamp(32px,6vw,56px)] font-bold leading-tight tracking-tight text-transparent">
                {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-[var(--text-muted)]">
                {t("subtitle")}
            </p>

            {/* email nổi bật */}
            <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex items-center gap-3 font-mono text-[clamp(20px,4vw,34px)] font-bold text-[var(--text)] transition-colors hover:text-[var(--accent-blue)]"
            >
                <MailIcon size={28} />
                {EMAIL}
            </a>

            {/* nút hành động */}
            <div className="mt-10 flex flex-wrap gap-3.5">
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] px-5 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-85"
                >
                    <MailIcon size={17} /> {t("emailLabel")}
                </a>
                <a
                    href={`/NguyenCaoDuy-CV-${locale}.pdf`}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-5 py-3 text-[15px] text-[var(--text)] transition-opacity hover:opacity-85"
                >
                    <DownloadIcon size={17} /> {t("downloadCV")}
                </a>
                <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-5 py-3 text-[15px] text-[var(--text)] transition-opacity hover:opacity-85"
                >
                    <LinkedinIcon size={17} /> LinkedIn
                </a>
                <a
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-5 py-3 text-[15px] text-[var(--text)] transition-opacity hover:opacity-85"
                >
                    <GithubIcon size={17} /> GitHub
                </a>
            </div>

            {/* footer nhỏ */}
            <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 font-mono text-[13px] text-[var(--text-soft)] sm:flex-row sm:items-center">
                <span>© {new Date().getFullYear()} Nguyễn Cao Duy</span>
                <span className="flex items-center gap-1.5">
                    Built with Next.js
                    <ExternalLinkIcon size={13} />
                </span>
            </div>
        </section>
    );
}