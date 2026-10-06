"use client";
// Loads Google Analytics 4 only after the visitor accepts analytics cookies,
// and only on the production deployment. Revoking consent later disables
// the tag for this page and deletes its cookies.
import { useEffect } from "react";
import Script from "next/script";
import {
  ANALYTICS_ENABLED,
  GA_COOKIE_EXPIRES_SECONDS,
  GA_MEASUREMENT_ID,
} from "@/constants/analytics";
import { clearAnalyticsCookies, useSiteConsent } from "@/lib/consent";

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function GoogleAnalytics() {
  const consent = useSiteConsent();
  const granted = consent === "all";

  useEffect(() => {
    if (!ANALYTICS_ENABLED || consent === "unknown") return;
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = !granted;
    if (consent === "essential") clearAnalyticsCookies();
  }, [consent, granted]);

  if (!ANALYTICS_ENABLED || !granted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { cookie_expires: ${GA_COOKIE_EXPIRES_SECONDS}, allow_google_signals: false, allow_ad_personalization_signals: false });`}
      </Script>
    </>
  );
}
