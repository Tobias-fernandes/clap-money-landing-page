"use client";
// "Preferências de cookies" link in the footer: reopens the cookie notice.
import { openCookieNotice } from "@/lib/consent";

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieNotice} className={className}>
      Preferências de cookies
    </button>
  );
}
