import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is OneRooted?",
    answer: "OneRooted is a Hiring Operating System — not just another ATS. It connects all your hiring data, workflows, and stakeholders in one intelligent system designed to help you make better hiring decisions faster.",
  },
  {
    question: "How is OneRooted different from an ATS?",
    answer: "An ATS stores resumes. OneRooted runs your hiring process. It connects candidates, workflows, and decision-makers in real-time with intelligent ranking, automated collaboration, and insights that surface automatically.",
  },
  {
    question: "Who is OneRooted built for?",
    answer: "Growing teams that hire regularly and want structure without complexity. Whether you're a founder, talent leader, or recruiter — if you're tired of scattered tools and want one shared system, OneRooted is for you.",
  },
  {
    question: "Can I use OneRooted with external recruiters or agencies?",
    answer: "Yes. Our Partner Portal gives external recruiters their own pipeline view per client. They can submit candidates directly, see real-time status updates, and collaborate without endless email chains.",
  },
  {
    question: "How long does it take to get started?",
    answer: "Most teams are up and running within a day. No complex migrations, no lengthy onboarding. We'll help you set up your first vacancy and invite your team — it's that simple.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're fully GDPR compliant, use enterprise-grade encryption, and never share your data. Your hiring data stays yours.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Common questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`faq-${index}`} 
                  className="border border-border/50 rounded-xl px-6 bg-background"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}