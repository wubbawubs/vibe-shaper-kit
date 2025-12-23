import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  steps: Step[];
}

export const HowItWorksSteps = ({ steps }: HowItWorksStepsProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Connecting line - visible on md+ screens */}
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5">
          <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full" />
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Step number circle */}
              <motion.div
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.number}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{step.description}</p>

              {/* Mobile connector - visible on small screens */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <motion.div
                    className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
