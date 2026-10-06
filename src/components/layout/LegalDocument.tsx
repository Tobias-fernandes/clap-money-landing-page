// Layout of a legal document page: title, last update, plain summary, an
// index of sections and the sections with their anchors.
import type { LegalDocumentContent } from "@/constants/legal";

const dateFormat = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function LegalDocument({ document }: { document: LegalDocumentContent }) {
  return (
    <article className="mx-auto max-w-300 px-4 py-14 md:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-20">
      <header className="lg:col-span-12">
        <h1 className="text-38 leading-[1.08] font-bold tracking-section md:text-44">{document.title}</h1>
        <p className="mt-2 text-14 text-content-faint">
          Última atualização: <time dateTime={document.updatedAt}>{dateFormat.format(new Date(document.updatedAt))}</time>
        </p>
        <p className="mt-6 max-w-180 rounded-xl border border-border bg-surface p-5 text-16 leading-relaxed">{document.summary}</p>
      </header>

      <nav aria-label="Seções do documento" className="mt-10 lg:col-span-4 lg:mt-12">
        <ol className="flex flex-col gap-0.5 text-14 lg:sticky lg:top-24">
          {document.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="block rounded-lg px-2 py-1.5 text-content-muted hover:bg-surface-hover hover:text-content">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 max-w-175 lg:col-span-8 lg:mt-12">
        {document.sections.map((section) => (
          <section key={section.id} id={section.id} className="border-t border-border py-7 first:border-t-0 first:pt-0">
            <h2 className="text-20 font-semibold tracking-heading">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-16 leading-relaxed text-content-muted">
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-16 leading-relaxed text-content-muted marker:text-brand-emphasis">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
