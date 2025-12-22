import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="Privacy Policy | Data Protection at OneRooted"
        description="Learn how OneRooted collects, uses, and protects your personal data. GDPR compliant. Your privacy is our priority."
        url="https://onerooted.com/privacy"
      />
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">1. Introduction</h2>
              <p>
                OneRooted ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                Hiring OS platform and related services.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Account information (name, email address, company name)</li>
                <li>Candidate data you upload to the platform</li>
                <li>Communication preferences</li>
                <li>Usage data and analytics</li>
              </ul>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
              </ul>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. All data is 
                encrypted in transit and at rest.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">5. GDPR Compliance</h2>
              <p>
                As a company based in the Netherlands, we fully comply with the General Data Protection 
                Regulation (GDPR). You have the right to access, rectify, erase, and port your personal data.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@onerooted.com" className="text-primary hover:underline">
                  privacy@onerooted.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Privacy;