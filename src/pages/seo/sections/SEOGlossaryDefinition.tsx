import { motion } from "framer-motion";
import { BookOpen, Lightbulb, ArrowRight, Link2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface RelatedTerm {
  slug: string;
  term: string;
}

interface SEOGlossaryDefinitionProps {
  term: string;
  definition: string;
  explanation?: string;
  whyItMatters?: string;
  examples?: string[];
  relatedTerms?: RelatedTerm[];
  relatedFeature?: {
    slug: string;
    title: string;
    description: string;
  };
}

export function SEOGlossaryDefinition({
  term,
  definition,
  explanation,
  whyItMatters,
  examples = [],
  relatedTerms = [],
  relatedFeature,
}: SEOGlossaryDefinitionProps) {
  const { lang } = useParams<{ lang?: string }>();
  const langPrefix = lang ? `/${lang}` : "";

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wide mb-4">
            <BookOpen className="h-4 w-4" />
            Kennisbank
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            {term}
          </h1>
          
          {/* Quick Definition Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <p className="text-lg text-foreground font-medium">
              {definition}
            </p>
          </div>
        </motion.div>

        {/* Detailed Explanation */}
        {explanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Wat is {term.toLowerCase()}?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{explanation}</p>
            </div>
          </motion.div>
        )}

        {/* Why It Matters */}
        {whyItMatters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Waarom is dit belangrijk?
            </h2>
            <div className="bg-card rounded-xl border border-border p-6">
              <p className="text-muted-foreground">{whyItMatters}</p>
            </div>
          </motion.div>
        )}

        {/* Examples */}
        {examples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Voorbeelden
            </h2>
            <ul className="space-y-3">
              {examples.map((example, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{example}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Related Feature */}
        {relatedFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Hoe OneRooted hiermee helpt
            </h2>
            <Link
              to={`${langPrefix}/${relatedFeature.slug}`}
              className="block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {relatedFeature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {relatedFeature.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </motion.div>
        )}

        {/* Related Terms */}
        {relatedTerms.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Link2 className="h-5 w-5 text-primary" />
              Gerelateerde termen
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedTerms.map((related, index) => (
                <Link
                  key={index}
                  to={`${langPrefix}/${related.slug}`}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm text-foreground transition-colors"
                >
                  {related.term}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
