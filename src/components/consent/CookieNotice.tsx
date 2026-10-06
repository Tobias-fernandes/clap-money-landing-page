"use client";
// Cookie notice, same card as the app's CookieNotice: bottom-left (full
// width on phones), refusing as easy as accepting. Shown until the visitor
// answers; "Preferências de cookies" in the footer opens it again.
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { COOKIE_NOTICE } from "@/constants/analytics";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { onOpenCookieNotice, setConsent, useSiteConsent } from "@/lib/consent";

export function CookieNotice() {
  const consent = useSiteConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => onOpenCookieNotice(() => setReopened(true)), []);

  if (consent === "unknown" || (consent !== null && !reopened)) return null;

  function choose(choice: "all" | "essential") {
    setConsent(choice);
    setReopened(false);
  }

  return (
    <section
      aria-labelledby="cookie-notice-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-105 flex-col gap-3.5 rounded-xl border border-border bg-surface p-4.5 shadow-float transition-[opacity,translate] duration-200 md:right-auto md:bottom-6 md:left-6 md:mx-0 dark:shadow-float-dark starting:translate-y-2 starting:opacity-0"
    >
      <h2 id="cookie-notice-title" className="flex items-center gap-2 text-15 font-semibold">
        <Cookie aria-hidden className="size-4.5 text-brand-emphasis" strokeWidth={1.8} />
        {COOKIE_NOTICE.title}
      </h2>
      <p className="text-14 leading-relaxed text-pretty text-content-muted">{COOKIE_NOTICE.text}</p>
      <p className="text-14 text-content-muted">
        Saiba mais na{" "}
        <Link href="/privacidade#cookies" className="font-medium text-brand-emphasis hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" className={buttonClasses("secondary")} onClick={() => choose("essential")}>
          {COOKIE_NOTICE.essential}
        </button>
        <button type="button" className={buttonClasses("primary")} onClick={() => choose("all")}>
          {COOKIE_NOTICE.all}
        </button>
      </div>
    </section>
  );
}
