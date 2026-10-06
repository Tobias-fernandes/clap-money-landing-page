// "Perguntas frequentes": native <details>, one outlined box per question
// (transparent, hairline border that strengthens on hover and turns brand
// when open). Text sizes and the rotating plus come from the app's own
// public page (features/landing/components/Faq).
import { Plus } from "lucide-react";
import { FAQ } from "@/constants/faq";
import { SECTION_IDS } from "@/constants/site";

export function Faq() {
  return (
    <section id={SECTION_IDS.faq} aria-labelledby="faq-title" className="border-t border-border">
      <div className="mx-auto grid max-w-300 gap-10 px-4 py-20 md:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="text-32 leading-[1.08] font-bold tracking-section md:text-42 lg:sticky lg:top-28">
            Perguntas frequentes
          </h2>
        </div>
        <div className="flex flex-col gap-2.5 lg:col-span-8">
          {FAQ.map((item, index) => (
            <details
              key={item.question}
              name="faq"
              open={index === 0}
              className="group rounded-xl border border-border bg-transparent transition-colors duration-150 faq-details hover:border-border-strong open:border-brand-emphasis"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4.5 text-17 leading-relaxed font-medium focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none md:text-18">
                {item.question}
                <Plus
                  aria-hidden
                  className="size-4.5 flex-none text-content-muted transition-transform duration-200 ease-out group-open:rotate-45 group-open:text-brand-emphasis motion-reduce:transition-none"
                  strokeWidth={1.8}
                />
              </summary>
              <p className="pr-12 pb-5 pl-5 text-16 leading-relaxed text-content-muted md:text-17">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
