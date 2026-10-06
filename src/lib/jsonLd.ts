// Serializes structured data for a <script type="application/ld+json">,
// escaping "<" so no string can close the script tag.
export function toJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
