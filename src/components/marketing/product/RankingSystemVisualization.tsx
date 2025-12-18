import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const initialCandidates = [
  { id: 1, name: "David R.", initials: "DR", color: "bg-amber-500", skills: 72, experience: 65, fit: 70, total: 0 },
  { id: 2, name: "Sarah M.", initials: "SM", color: "bg-blue-500", skills: 94, experience: 88, fit: 96, total: 0 },
  { id: 3, name: "James K.", initials: "JK", color: "bg-emerald-500", skills: 85, experience: 79, fit: 82, total: 0 },
  { id: 4, name: "Emma L.", initials: "EL", color: "bg-purple-500", skills: 91, experience: 92, fit: 89, total: 0 },
];

export const RankingSystemVisualization = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [phase, setPhase] = useState<"initial" | "scoring" | "ranked">("initial");
  const [cycleCount, setCycleCount] = useState(0);
  const [topCandidateGlow, setTopCandidateGlow] = useState(false);

  const runScoringAnimation = useCallback(() => {
    setCandidates(initialCandidates);
    setPhase("initial");
    
    setTimeout(() => setPhase("scoring"), 800);
    setTimeout(() => {
      setCandidates(prev => {
        const scored = prev.map(c => ({
          ...c,
          total: Math.round((c.skills * 0.4 + c.experience * 0.3 + c.fit * 0.3))
        }));
        return scored.sort((a, b) => b.total - a.total);
      });
      setPhase("ranked");
    }, 2500);
  }, []);

  // Initial run and loop
  useEffect(() => {
    runScoringAnimation();
    
    const loopInterval = setInterval(() => {
      setCycleCount(prev => prev + 1);
      runScoringAnimation();
    }, 8000);

    return () => clearInterval(loopInterval);
  }, [runScoringAnimation]);

  // Top candidate glow effect
  useEffect(() => {
    if (phase === "ranked") {
      const glowInterval = setInterval(() => {
        setTopCandidateGlow(prev => !prev);
      }, 1500);
      return () => clearInterval(glowInterval);
    }
  }, [phase]);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Candidate cards */}
        <div className="space-y-3">
          {candidates.map((candidate, index) => {
            const isTopCandidate = phase === "ranked" && index === 0;
            
            return (
              <motion.div
                key={candidate.id}
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-background/80 backdrop-blur-sm rounded-lg border p-4 transition-all duration-300 ${
                  isTopCandidate && topCandidateGlow 
                    ? 'border-accent/50 shadow-[0_0_15px_rgba(var(--accent),0.15)]' 
                    : 'border-border/50'
                }`}
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
                    {/* Initials avatar */}
                    <div className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center`}>
                      <span className="text-white text-sm font-medium">{candidate.initials}</span>
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
                    >
                      <motion.p 
                        className="text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {phase === "ranked" ? `${candidate.total}%` : "..."}
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                {/* Score breakdown - subtler */}
                {phase === "scoring" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 grid grid-cols-3 gap-2"
                  >
                    <ScoreBar label="Skills" value={candidate.skills} delay={0.4} />
                    <ScoreBar label="Ervaring" value={candidate.experience} delay={0.6} />
                    <ScoreBar label="Fit" value={candidate.fit} delay={0.8} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Scoring explanation */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dezelfde criteria. Elke kandidaat. Consistente evaluatie 
              verwijdert giswerk uit beslissingen.
            </p>

            <div className="space-y-3">
              {[
                { label: "Skills", weight: "40%" },
                { label: "Ervaring", weight: "30%" },
                { label: "Fit", weight: "30%" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center justify-between text-xs text-muted-foreground"
                >
                  <span>{item.label}</span>
                  <span>{item.weight}</span>
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
    <div className="flex justify-between text-xs text-muted-foreground/70">
      <span>{label}</span>
      <span className="opacity-60">{value}</span>
    </div>
    <div className="h-1 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        className="h-full bg-foreground/15 rounded-full"
      />
    </div>
  </div>
);
