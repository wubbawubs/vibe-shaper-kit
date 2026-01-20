import { motion } from "framer-motion";
import { CheckSquare, AlertCircle, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Criterion {
  title: string;
  description: string;
  mustHave: boolean;
}

interface SEOBuyingCriteriaProps {
  headline: string;
  subheadline?: string;
  criteria: Criterion[];
  checklistDownloadText?: string;
}

export function SEOBuyingCriteria({
  headline,
  subheadline,
  criteria,
  checklistDownloadText,
}: SEOBuyingCriteriaProps) {
  const mustHaves = criteria.filter(c => c.mustHave);
  const niceToHaves = criteria.filter(c => !c.mustHave);

  return (
    <section className="relative bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Selectiecriteria
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
            )}
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {/* Must-haves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h3 className="font-semibold text-foreground">Must-haves</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {mustHaves.map((criterion, index) => (
                <AccordionItem
                  key={index}
                  value={`must-${index}`}
                  className="rounded-lg border bg-background px-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <CheckSquare className="h-4 w-4 text-primary" />
                      <span className="text-left font-medium">{criterion.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-7 text-muted-foreground">
                    {criterion.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Nice-to-haves */}
          {niceToHaves.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Nice-to-haves</h3>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {niceToHaves.map((criterion, index) => (
                  <AccordionItem
                    key={index}
                    value={`nice-${index}`}
                    className="rounded-lg border bg-background px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <CheckSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-left font-medium">{criterion.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-7 text-muted-foreground">
                      {criterion.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
