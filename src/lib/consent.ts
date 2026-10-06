// The visitor's cookie choice on this site: read and written in a
// first-party cookie, shared with React through useSiteConsent().
"use client";

import { useSyncExternalStore } from "react";
import { SITE_CONSENT_COOKIE, SITE_CONSENT_MAX_AGE_DAYS, SITE_CONSENT_VERSION } from "@/constants/analytics";

export type ConsentChoice = "all" | "essential";

const CHANGE_EVENT = "clapmoney:consent-change";
const OPEN_EVENT = "clapmoney:open-cookie-notice";

function readChoice(): ConsentChoice | null {
  const raw = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${SITE_CONSENT_COOKIE}=`))
    ?.slice(SITE_CONSENT_COOKIE.length + 1);
  const [version, choice] = decodeURIComponent(raw ?? "").split(".");
  if (version !== SITE_CONSENT_VERSION) return null;
  return choice === "all" || choice === "essential" ? choice : null;
}

export function setConsent(choice: ConsentChoice) {
  const maxAge = SITE_CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${SITE_CONSENT_COOKIE}=${SITE_CONSENT_VERSION}.${choice}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

/**
 * The saved choice, null when the visitor has not answered (or answered an
 * older version of the policy), "unknown" during server rendering.
 */
export function useSiteConsent(): ConsentChoice | null | "unknown" {
  return useSyncExternalStore(subscribe, readChoice, () => "unknown");
}

/** Reopens the cookie notice ("Preferências de cookies" in the footer). */
export function openCookieNotice() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieNotice(callback: () => void) {
  window.addEventListener(OPEN_EVENT, callback);
  return () => window.removeEventListener(OPEN_EVENT, callback);
}

/** Deletes Google Analytics cookies (_ga, _ga_<id>) on this host and its parent domain. */
export function clearAnalyticsCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host.split(".").slice(-3).join(".")}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of document.cookie.split("; ").map((part) => part.split("=")[0] ?? "")) {
    if (!name.startsWith("_ga")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}
