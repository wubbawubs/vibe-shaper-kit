import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

interface RelatedPage {
  slug: string;
  title: string;
  description: string;
}

interface SEORelatedPagesProps {
  headline: string;
  pages: RelatedPage[];
}

export function SEORelatedPages({ headline, pages }: SEORelatedPagesProps) {
  const { lang } = useParams<{ lang: string }>();
  
  const getLocalizedHref = (slug: string) => {
    const path = `/${slug}`;
    return getLocalizedPath(path, (lang as Language) || "en");
  };

  if (pages.length === 0) return null;

  // Dynamische grid class op basis van aantal items voor visuele consistentie
  const getGridCols = () => {
    if (pages.length === 1) return 'sm:grid-cols-1 max-w-md';
    if (pages.length === 2) return 'sm:grid-cols-2 max-w-2xl';
    if (pages.length === 4) return 'sm:grid-cols-2 lg:grid-cols-2 max-w-3xl';
    return 'sm:grid-cols-2 lg:grid-cols-3'; // 3, 5, 6+ items
  };

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {headline}
          </span>
        </motion.div>

        <div className={`grid gap-4 mx-auto ${getGridCols()}`}>
          {pages.map((page, index) => (
            <motion.div
              key={page.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={getLocalizedHref(page.slug)}
                className="group flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground group-hover:text-primary">
                    {page.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {page.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
