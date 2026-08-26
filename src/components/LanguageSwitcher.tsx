"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchTo = (next: "vi" | "en") => {
        router.replace(pathname, { locale: next });
    };

    return (
        <div className="flex items-center gap-1 font-mono text-sm">
            {(["vi", "en"] as const).map((l) => (
                <button
                    key={l}
                    onClick={() => switchTo(l)}
                    className={`rounded-md px-2 py-1 transition-colors ${locale === l
                            ? "bg-[var(--surface)] text-[var(--text)]"
                            : "text-[var(--text-soft)] hover:text-[var(--text)]"
                        }`}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    );
}