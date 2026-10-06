// Apple touch icon (180x180): the wallet mark on the cover green.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#0f6b5a" }}>
        <svg viewBox="0 0 32 32" width={120} height={120}>
          <g fill="#ffffff">
            <rect x="7" y="3" width="4" height="8" rx="2" />
            <rect x="14" y="3" width="4" height="8" rx="2" />
            <rect x="21" y="3" width="4" height="8" rx="2" />
            <path
              fillRule="evenodd"
              d="M9 7h13a6 6 0 0 1 6 6v2h-3.5a5.5 5.5 0 0 0 0 11H28a6 6 0 0 1-6 4H9a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Zm-.5 7.5a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3h-7Z"
            />
          </g>
          <path
            fill="#cfe6de"
            fillRule="evenodd"
            d="M25 17h3a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Zm1.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
          />
        </svg>
      </div>
    ),
    size,
  );
}
