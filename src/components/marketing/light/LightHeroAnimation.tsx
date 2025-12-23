import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Star, Check, ArrowRight, Sparkles } from "lucide-react";

const candidates = [
  { name: "S.V.", score: 92, role: "Sales Lead", status: "top-match" },
  { name: "M.D.", score: 87, role: "Developer", status: "qualified" },
  { name: "L.J.", score: 84, role: "Marketing", status: "qualified" },
  { name: "J.K.", score: 78, role: "Operations", status: "new" },
];

const stages = ["New", "Screen", "Interview", "Offer"];

export const LightHeroAnimation = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [highlightedCandidate, setHighlightedCandidate] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(stageInterval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const candidateInterval = setInterval(() => {
      setHighlightedCandidate((prev) => (prev + 1) % candidates.length);
    }, 3000);
    return () => clearInterval(candidateInterval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl opacity-60" />
      
      <motion.div 
        className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Pipeline stages */}
        <div className="flex items-center justify-between mb-6">
          {stages.map((stage, index) => (
            <div key={stage} className="flex items-center">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
                  index <= activeStage
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                animate={index === activeStage ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: 2 }}
              >
                {index + 1}
              </motion.div>
              {index < stages.length - 1 && (
                <div className={`w-8 h-0.5 mx-1 transition-colors duration-300 ${
                  index < activeStage ? "bg-primary" : "bg-border"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Stage label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            className="text-center mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium text-primary">{stages[activeStage]}</span>
          </motion.div>
        </AnimatePresence>

        {/* Candidate cards */}
        <div className="space-y-2">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.name}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                index === highlightedCandidate
                  ? "bg-primary/10 border-primary/30"
                  : "bg-background/50 border-border/30"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  candidate.status === "top-match" ? "bg-accent/20" : "bg-muted"
                }`}>
                  <User className={`h-4 w-4 ${
                    candidate.status === "top-match" ? "text-accent" : "text-muted-foreground"
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-medium">{candidate.name}</p>
                  <p className="text-xs text-muted-foreground">{candidate.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className={`h-3 w-3 ${candidate.score >= 90 ? "text-accent fill-accent" : "text-muted-foreground"}`} />
                  <span className={`text-sm font-semibold ${
                    candidate.score >= 90 ? "text-accent" : "text-foreground"
                  }`}>{candidate.score}</span>
                </div>
                {candidate.status === "top-match" && (
                  <motion.span
                    className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: prefersReducedMotion ? 0 : Infinity }}
                  >
                    Top Match
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action hint */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span>Automatically ranked & scored</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
