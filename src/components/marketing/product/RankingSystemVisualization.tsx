import { motion } from "framer-motion";
import { User, Star, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from "react";

const initialCandidates = [
  { id: 1, name: "David R.", skills: 72, experience: 65, fit: 70, total: 0 },
  { id: 2, name: "Sarah M.", skills: 94, experience: 88, fit: 96, total: 0 },
  { id: 3, name: "James K.", skills: 85, experience: 79, fit: 82, total: 0 },
  { id: 4, name: "Emma L.", skills: 91, experience: 92, fit: 89, total: 0 },
];

export const RankingSystemVisualization = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [phase, setPhase] = useState<"initial" | "scoring" | "ranked">("initial");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("scoring"), 800);
    const timer2 = setTimeout(() => {
      setCandidates(prev => {
        const scored = prev.map(c => ({
          ...c,
          total: Math.round((c.skills * 0.4 + c.experience * 0.3 + c.fit * 0.3))
        }));
        return scored.sort((a, b) => b.total - a.total);
      });
      setPhase("ranked");
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Candidate cards */}
        <div className="space-y-3">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {phase === "ranked" && index === 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Award className="w-5 h-5 text-accent" />
                    </motion.div>
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{candidate.name}</p>
                    {phase === "ranked" && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-muted-foreground"
                      >
                        Rank #{index + 1}
                      </motion.p>
                    )}
                  </div>
                </div>

                {phase !== "initial" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <div className="text-right">
                      <motion.p 
                        className="text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {phase === "ranked" ? `${candidate.total}%` : "..."}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Score breakdown */}
              {phase === "scoring" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 grid grid-cols-3 gap-2"
                >
                  <ScoreBar label="Skills" value={candidate.skills} delay={0.4} />
                  <ScoreBar label="Experience" value={candidate.experience} delay={0.6} />
                  <ScoreBar label="Fit" value={candidate.fit} delay={0.8} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scoring explanation */}
        <div className="flex flex-col justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-accent">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Scoring</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Each candidate is automatically analyzed across multiple dimensions—skills match, 
              experience relevance, and cultural fit—to surface the best matches first.
            </p>

            <div className="space-y-2">
              {[
                { label: "Skills Match", weight: "40%" },
                { label: "Experience", weight: "30%" },
                { label: "Culture Fit", weight: "30%" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium">{item.weight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ScoreBar = ({ label, value, delay }: { label: string; value: number; delay: number }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  </div>
);
