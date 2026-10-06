// Outfit, the app's typeface, self-hosted through next/font.
import { Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
