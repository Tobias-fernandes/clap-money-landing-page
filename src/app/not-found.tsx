// 404 page: the app's NotFoundPage copied as-is (../clapMoney/src/pages/errors
// /NotFoundPage), same illustration, copy and button, without header/footer.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/buttonClasses";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 py-10 text-center">
      <Image src="/not-found.webp" alt="" width={660} height={550} priority className="mb-2 h-auto w-64 max-w-full md:w-80" />
      <p className="text-20 font-semibold text-brand-emphasis">404</p>
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="max-w-md text-content-muted">O endereço acessado não existe ou foi removido.</p>
      <Link href="/" className={buttonClasses()}>
        Voltar para o início
      </Link>
    </main>
  );
}
