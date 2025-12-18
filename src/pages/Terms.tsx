import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="Terms of Service"
        description="OneRooted Terms of Service. Read about the terms and conditions for using our platform."
        url="https://onerooted.com/terms"
      />
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using OneRooted's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">2. Description of Service</h2>
              <p>
                OneRooted provides a Hiring Operating System (Hiring OS) that helps organizations streamline 
                their recruitment processes. Our platform includes candidate tracking, workflow management, 
                collaboration tools, and analytics.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for 
                all activities that occur under your account. You must notify us immediately of any 
                unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the service for any unlawful purpose</li>
                <li>Upload malicious code or attempt to gain unauthorized access</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Collect user information without consent</li>
              </ul>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">5. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by OneRooted 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">6. Subscription and Payment</h2>
              <p>
                Subscription fees are billed monthly or annually, depending on your chosen plan. 
                You may cancel your subscription at any time, and cancellation will take effect 
                at the end of your current billing period.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">7. Limitation of Liability</h2>
              <p>
                OneRooted shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes via email or through the platform.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@onerooted.com" className="text-primary hover:underline">
                  legal@onerooted.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Terms;