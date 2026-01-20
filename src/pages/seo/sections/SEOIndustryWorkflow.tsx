import { motion } from "framer-motion";
import { Building2, Users, Clock, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

interface WorkflowStep {
  stage: string;
  description: string;
  metric?: string;
}

interface SEOIndustryWorkflowProps {
  headline: string;
  industryName: string;
  challenges: string[];
  workflowSteps?: WorkflowStep[];
  compliancePoints?: string[];
  keyMetrics?: { label: string; value: string }[];
}

export function SEOIndustryWorkflow({
  headline,
  industryName,
  challenges,
  workflowSteps = [],
  compliancePoints = [],
  keyMetrics = [],
}: SEOIndustryWorkflowProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wide mb-4">
            <Building2 className="h-4 w-4" />
            {industryName}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {headline}
          </h2>
        </motion.div>

        {/* Challenges */}
        {challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Specifieke uitdagingen in {industryName.toLowerCase()}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Workflow Pipeline */}
        {workflowSteps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Typische recruitment pipeline
            </h3>
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-card rounded-lg border border-border p-4 text-center"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-foreground mt-2 mb-1 text-sm">
                      {step.stage}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {step.description}
                    </p>
                    {step.metric && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        <Clock className="h-3 w-3" />
                        {step.metric}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Compliance Points */}
          {compliancePoints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Compliance & vereisten
              </h3>
              <ul className="space-y-3">
                {compliancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Key Metrics */}
          {keyMetrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Belangrijke KPI's
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
