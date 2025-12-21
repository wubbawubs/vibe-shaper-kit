import { motion } from "framer-motion";
import { Award, TrendingUp, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const initialCandidates = [
  { id: 1, name: "Sarah M.", initials: "SM", color: "bg-blue-500", skills: 94, experience: 88, fit: 96, total: 0 },
  { id: 2, name: "Emma L.", initials: "EL", color: "bg-purple-500", skills: 91, experience: 92, fit: 89, total: 0 },
  { id: 3, name: "James K.", initials: "JK", color: "bg-emerald-500", skills: 85, experience: 79, fit: 82, total: 0 },
  { id: 4, name: "David R.", initials: "DR", color: "bg-amber-500", skills: 72, experience: 65, fit: 70, total: 0 },
];

export const RankingSystemVisualization = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [phase, setPhase] = useState<"initial" | "scoring" | "ranked">("initial");
  const [activeCandidate, setActiveCandidate] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const runScoringAnimation = useCallback(() => {
    setCandidates(initialCandidates);
    setPhase("initial");
    setActiveCandidate(0);
    
    // Phase 1: Start scoring (1.5s - faster)
    setTimeout(() => setPhase("scoring"), 1500);
    
    // Phase 2: Score each candidate (2.5s per candidate - faster)
    initialCandidates.forEach((_, index) => {
      setTimeout(() => {
        setActiveCandidate(index);
      }, 1500 + index * 2500);
    });
    
    // Phase 3: Show ranked results (wait 1.5s after last candidate)
    setTimeout(() => {
      setCandidates(prev => {
        const scored = prev.map(c => ({
          ...c,
          total: Math.round((c.skills * 0.4 + c.experience * 0.3 + c.fit * 0.3))
        }));
        return scored.sort((a, b) => b.total - a.total);
      });
      setPhase("ranked");
    }, 1500 + initialCandidates.length * 2500 + 1500);
  }, []);

  useEffect(() => {
    runScoringAnimation();
    
    // Loop every 20 seconds (faster loop)
    const loopInterval = setInterval(() => {
      runScoringAnimation();
    }, 20000);

    return () => clearInterval(loopInterval);
  }, [runScoringAnimation]);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-8" aria-hidden="true">
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Candidate list - 3 columns */}
        <div className="lg:col-span-3 space-y-4">
          {candidates.map((candidate, index) => {
            const isActive = phase === "scoring" && activeCandidate === index;
            const isScored = phase === "scoring" && activeCandidate > index;
            const isRanked = phase === "ranked";
            const showScore = isScored || isRanked;
            const isTopCandidate = isRanked && index === 0;
            
            return (
              <motion.div
                key={candidate.id}
                layout={!prefersReducedMotion}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeInOut" }}
                className={`relative bg-background rounded-xl border-2 p-5 transition-all duration-500 ${
                  isActive 
                    ? 'border-primary/50 shadow-lg shadow-primary/10' 
                    : isTopCandidate 
                      ? 'border-accent/50 shadow-lg shadow-accent/20'
                      : 'border-border/30'
                }`}
              >
                {/* Pulse animation for active candidate */}
                {isActive && !prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary/30"
                    animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    {/* Rank badge */}
                    {isRanked && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: prefersReducedMotion ? 0 : 0.2, duration: 0.4 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 
                            ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {index === 0 ? <Award className="w-4 h-4" /> : index + 1}
                      </motion.div>
                    )}
                    
                    {/* Avatar */}
                    <motion.div 
                      className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center`}
                      animate={isActive && !prefersReducedMotion ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <span className="text-white font-semibold">{candidate.initials}</span>
                    </motion.div>
                    
                    {/* Name and status */}
                    <div>
                      <p className="font-semibold text-foreground">{candidate.name}</p>
                      <p className={`text-sm ${isTopCandidate ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
                        {isActive && "Evaluating..."}
                        {isScored && !isRanked && "Scored"}
                        {isRanked && index === 0 && (
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Top Match
                          </span>
                        )}
                        {isRanked && index !== 0 && `Rank #${index + 1}`}
                        {!isActive && !isScored && !isRanked && "Pending"}
                      </p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    {showScore && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <TrendingUp className={`w-4 h-4 ${isTopCandidate ? 'text-accent' : 'text-muted-foreground'}`} />
                        <span className={`text-2xl font-bold ${isTopCandidate ? 'text-accent' : 'text-foreground'}`}>
                          {candidate.total || Math.round((candidate.skills * 0.4 + candidate.experience * 0.3 + candidate.fit * 0.3))}%
                        </span>
                      </motion.div>
                    )}
                    {isActive && (
                      <motion.div
                        animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-xl font-bold text-primary"
                      >
                        ...
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Score breakdown - only show for active candidate */}
                {isActive && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                    className="mt-5 pt-4 border-t border-border/30"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <ScoreBar label="Skills" value={candidate.skills} delay={prefersReducedMotion ? 0 : 0} />
                      <ScoreBar label="Experience" value={candidate.experience} delay={prefersReducedMotion ? 0 : 0.3} />
                      <ScoreBar label="Culture Fit" value={candidate.fit} delay={prefersReducedMotion ? 0 : 0.6} />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Scoring criteria - 2 columns */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
            className="bg-background/60 rounded-xl border border-border/30 p-6"
          >
            <h4 className="font-semibold text-foreground mb-4">Scoring Criteria</h4>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Same criteria. Every candidate. Consistent evaluation 
              removes guesswork from decisions.
            </p>

            <div className="space-y-4">
              {[
                { label: "Skills Match", weight: "40%", desc: "Technical requirements" },
                { label: "Experience", weight: "30%", desc: "Relevant background" },
                { label: "Culture Fit", weight: "30%", desc: "Team alignment" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.7 + i * 0.15 }}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-lg font-bold text-primary">{item.weight}</span>
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
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        className="font-semibold text-foreground"
      >
        {value}
      </motion.span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className="h-full bg-primary/40 rounded-full"
      />
    </div>
  </div>
);
