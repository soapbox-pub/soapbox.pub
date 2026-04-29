import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
  /** Short, SEO-aware question text. */
  question: string;
  /** Rich answer — supports JSX (links, strong, code). */
  answer: React.ReactNode;
  /** If true, this item starts expanded. Optional. */
  defaultOpen?: boolean;
}

interface FAQSectionProps {
  /** Defaults to "Frequently Asked Questions". */
  title?: string;
  items: FAQItem[];
}

/**
 * Styled FAQ block for blog posts.
 *
 * - Visually distinct from the surrounding `prose` body (gray card, teal
 *   left-accent, smaller typography, accordion collapse).
 * - Lives in `not-prose` so the surrounding blog typography doesn't
 *   override the layout.
 * - The on-page content is rendered with JSX; FAQPage JSON-LD is emitted
 *   separately by `extractSEOData` from the post's `meta.faq` field,
 *   which is a plain-string mirror of the same questions.
 */
export function FAQSection({
  title = 'Frequently Asked Questions',
  items,
}: FAQSectionProps) {
  const defaultValues = items
    .map((item, i) => (item.defaultOpen ? `faq-${i}` : null))
    .filter((v): v is string => v !== null);

  return (
    <section className="not-prose my-16">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10">
        <header className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>
        </header>

        <Accordion
          type="multiple"
          defaultValue={defaultValues}
          className="w-full"
        >
          {items.map((item, i) => (
            <AccordionItem
              key={`faq-${i}`}
              value={`faq-${i}`}
              className="border-b border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-gray-900 hover:no-underline md:text-lg [&[data-state=open]]:text-teal-700">
                <span className="flex items-start gap-3 pr-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-5 w-1 shrink-0 rounded-full bg-teal-400"
                  />
                  <span>{item.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-4 pr-2 text-base leading-relaxed text-gray-700 [&_a]:text-teal-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-teal-800 [&_code]:rounded [&_code]:bg-gray-200 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_p]:mt-2 [&_p:first-child]:mt-0">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
