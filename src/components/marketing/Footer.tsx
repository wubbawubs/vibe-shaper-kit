import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";
import onerootedLogo from "@/assets/onerooted-logo.png";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

export function Footer() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getLocalizedHref = (href: string) => {
    return lang ? getLocalizedPath(href, lang as Language) : href;
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to={getLocalizedHref("/")} className="flex items-center gap-3 mb-4 md:mb-6">
              <img src={onerootedLogo} alt="One Rooted" className="h-7 md:h-8 w-auto brightness-0 invert" />
              <span className="font-semibold text-base md:text-lg">One Rooted</span>
            </Link>
            <p className="text-background/60 max-w-sm leading-relaxed text-sm md:text-base">
              {t("footer.tagline")}
            </p>
            {/* Company LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/110167349/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-background/60 hover:text-background transition-colors"
              aria-label="One Rooted on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wider text-background/80">{t("nav.product")}</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-background/60">
              <li><Link to={getLocalizedHref("/product")} className="hover:text-background transition-colors">{t("nav.product")}</Link></li>
              <li><Link to={getLocalizedHref("/pricing")} className="hover:text-background transition-colors">{t("nav.pricing")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wider text-background/80">{t("footer.company")}</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-background/60">
              <li><Link to={getLocalizedHref("/why-onerooted")} className="hover:text-background transition-colors">{t("nav.whyOneRooted")}</Link></li>
              <li><Link to={getLocalizedHref("/team")} className="hover:text-background transition-colors">{t("nav.team")}</Link></li>
              <li><Link to={getLocalizedHref("/partners")} className="hover:text-background transition-colors">{t("nav.partners")}</Link></li>
              <li><Link to={getLocalizedHref("/demo")} className="hover:text-background transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-medium mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wider text-background/80">{t("footer.legal")}</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-background/60">
              <li><Link to={getLocalizedHref("/privacy")} className="hover:text-background transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link to={getLocalizedHref("/terms")} className="hover:text-background transition-colors">{t("footer.terms")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-background/40 text-center md:text-left">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs md:text-sm text-background/40">
            Part of the One-Time Group
          </p>
        </div>
      </div>
    </footer>
  );
}
