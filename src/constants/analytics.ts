// Google Analytics 4 and the site's cookie consent.
//
// GA only loads after the visitor answers "Aceitar todos" in the cookie
// notice (no cookies, no requests to Google before that), and only on the
// production deployment, so previews and local runs never pollute the data.

import { LEGAL_UPDATED_AT } from "./legal";

/** GA4 measurement ID of the "clapmoney.com.br" web stream. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * On Vercel, NEXT_PUBLIC_VERCEL_ENV is "production" only on the production
 * domain. Elsewhere (self-hosting), a production build counts as production.
 */
const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
export const ANALYTICS_ENABLED =
  GA_MEASUREMENT_ID !== "" &&
  process.env.NODE_ENV === "production" &&
  (vercelEnv === undefined || vercelEnv === "production");

/**
 * The visitor's answer, saved as "<version>.<all|essential>". The version is
 * the date of the privacy policy: when the policy changes what this site
 * stores, the notice asks again. Separate from the app's own cookie
 * (clapmoney_consent on app.clapmoney.com.br), which covers other choices.
 */
export const SITE_CONSENT_COOKIE = "clapmoney_site_consent";
export const SITE_CONSENT_VERSION = LEGAL_UPDATED_AT;
export const SITE_CONSENT_MAX_AGE_DAYS = 365;

/** GA cookies expire after 13 months instead of Google's default 2 years. */
export const GA_COOKIE_EXPIRES_SECONDS = 395 * 24 * 60 * 60;

export const COOKIE_NOTICE = {
  title: "Cookies e privacidade",
  text: "Se você permitir, usamos cookies do Google Analytics para contar visitas e entender como este site é usado. Não usamos cookies de publicidade.",
  essential: "Só essenciais",
  all: "Aceitar todos",
} as const;
