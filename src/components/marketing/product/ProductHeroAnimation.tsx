import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const stages = ["Nieuw", "Screening", "Gesprek", "Aanbod"];

const allCandidates = [
  { name: "Sarah M.", initials: "SM", score: 94, stage: "Gesprek", source: "LinkedIn", color: "bg-blue-500" },
  { name: "James K.", initials: "JK", score: 88, stage: "Screening", source: "Website", color: "bg-emerald-500" },
  { name: "Emma L.", initials: "EL", score: 91, stage: "Aanbod", source: "Referral", color: "bg-purple-500" },
  { name: "David R.", initials: "DR", score: 85, stage: "Nieuw", source: "LinkedIn", color: "bg-amber-500" },
];

const notifications = [
  { candidate: "Sarah M.", message: "Klaar voor fast-track", type: "match" },
  { candidate: "Emma L.", message: "Aanbod verzonden", type: "offer" },
  { candidate: "James K.", message: "Hoge match score", type: "match" },
];

export const ProductHeroAnimation = () => {
  const [candidates, setCandidates] = useState(allCandidates.slice(0, 3));
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [scoreFluctuation, setScoreFluctuation] = useState<Record<string, number>>({});

  // Looping notification
  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 2000);
    
    const cycleInterval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 300);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  // Score fluctuation
  useEffect(() => {
    const fluctuateInterval = setInterval(() => {
      setScoreFluctuation(prev => {
        const newFluc: Record<string, number> = {};
        candidates.forEach(c => {
          newFluc[c.name] = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        });
        return newFluc;
      });
    }, 2500);

    return () => clearInterval(fluctuateInterval);
  }, [candidates]);

  // Candidate stage movement
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCandidates(prev => {
        const updated = [...prev];
        const randomIndex = Math.floor(Math.random() * updated.length);
        const currentStageIndex = stages.indexOf(updated[randomIndex].stage);
        if (currentStageIndex < stages.length - 1 && Math.random() > 0.6) {
          updated[randomIndex] = {
            ...updated[randomIndex],
            stage: stages[currentStageIndex + 1]
          };
        }
        return updated;
      });
    }, 5000);

    return () => clearInterval(moveInterval);
  }, []);

  const notification = notifications[currentNotification];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-muted/30 rounded-2xl border border-border/50 overflow-hidden">
      <div className="absolute inset-0 p-6">
        {/* Pipeline stages - styled like real software */}
        <div className="flex items-center justify-between mb-8 px-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="bg-background/80 border border-border/50 rounded-lg px-3 py-2">
                <span className="text-sm font-medium">{stage}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {candidates.filter(c => c.stage === stage).length}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Candidate cards */}
        <div className="space-y-3">
          {candidates.map((candidate, i) => {
            const fluctuation = scoreFluctuation[candidate.name] || 0;
            const displayScore = candidate.score + fluctuation;
            
            return (
              <motion.div
                key={candidate.name}
                layout
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.5 + i * 0.2, 
                  duration: 0.5,
                  layout: { duration: 0.3 }
                }}
                className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {/* Initials avatar like real software */}
                  <div className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center`}>
                    <span className="text-white text-sm font-medium">{candidate.initials}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{candidate.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{candidate.stage}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {candidate.source}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ scale: fluctuation !== 0 ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{displayScore}%</span>
                  </motion.div>
                  
                  {displayScore > 90 && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Looping notification */}
        <AnimatePresence mode="wait">
          {showNotification && (
            <motion.div
              key={currentNotification}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 right-6 bg-primary text-primary-foreground rounded-lg px-4 py-3 shadow-lg max-w-[220px]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <p className="text-xs font-medium">High-potential match</p>
              </div>
              <p className="text-xs opacity-80 mt-1">
                {notification.candidate} · {notification.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
