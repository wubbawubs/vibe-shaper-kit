import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const stages = [
  { name: "New", count: 24, borderColor: "border-t-blue-500" },
  { name: "Screening", count: 12, borderColor: "border-t-purple-500" },
  { name: "Interview", count: 8, borderColor: "border-t-amber-500" },
  { name: "Offer", count: 3, borderColor: "border-t-emerald-500" },
  { name: "Hired", count: 2, borderColor: "border-t-primary" },
];

// Candidates distributed across all stages
const candidatePool = [
  { id: 1, initials: "SM", color: "bg-blue-500", stage: 0 },
  { id: 2, initials: "JK", color: "bg-emerald-500", stage: 0 },
  { id: 3, initials: "TM", color: "bg-rose-500", stage: 0 },
  { id: 4, initials: "EL", color: "bg-purple-500", stage: 1 },
  { id: 5, initials: "DR", color: "bg-amber-500", stage: 1 },
  { id: 6, initials: "MV", color: "bg-pink-500", stage: 2 },
  { id: 7, initials: "LB", color: "bg-cyan-500", stage: 2 },
  { id: 8, initials: "AK", color: "bg-orange-500", stage: 3 },
  { id: 9, initials: "RH", color: "bg-indigo-500", stage: 4 },
  { id: 10, initials: "KP", color: "bg-teal-500", stage: 4 },
];

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState(candidatePool);
  const [showBottleneck, setShowBottleneck] = useState(false);
  const [bottleneckPulse, setBottleneckPulse] = useState(false);

  // Candidate movement loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates(prev => 
        prev.map(c => ({
          ...c,
          stage: Math.random() > 0.75 ? Math.min(c.stage + 1, 4) : c.stage
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Bottleneck appearance and pulse
  useEffect(() => {
    const showTimer = setTimeout(() => setShowBottleneck(true), 2500);
    
    const pulseInterval = setInterval(() => {
      setBottleneckPulse(prev => !prev);
    }, 1500);

    return () => {
      clearTimeout(showTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  const getCandidatesInStage = (stageIndex: number) => 
    candidates.filter(c => c.stage === stageIndex);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      {/* Bottleneck banner */}
      <AnimatePresence>
        {showBottleneck && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-5"
          >
            <motion.div
              animate={{ 
                backgroundColor: bottleneckPulse 
                  ? "rgba(245, 158, 11, 0.15)" 
                  : "rgba(245, 158, 11, 0.1)" 
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-amber-500/30"
            >
              <motion.div
                animate={{ scale: bottleneckPulse ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                  Bottleneck detected
                </p>
                <p className="text-xs text-amber-600/80 dark:text-amber-500/80">
                  Interview stage slowing down · 8 candidates waiting
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pipeline columns */}
      <div className="grid grid-cols-5 gap-3">
        {stages.map((stage, index) => {
          const stageCandidates = getCandidatesInStage(index);
          const isBottleneck = index === 2 && showBottleneck;
          
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Column with colored top border */}
              <div className={`rounded-xl bg-background border-2 ${stage.borderColor} border-t-4 ${
                isBottleneck ? 'ring-2 ring-amber-500/40' : 'border-border/30'
              }`}>
                {/* Header */}
                <div className="p-3 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{stage.name}</span>
                    <span className="text-xs font-bold bg-muted px-2 py-1 rounded-full">
                      {stage.count}
                    </span>
                  </div>
                </div>

                {/* Candidates */}
                <div className="p-3 min-h-[140px] space-y-2">
                  <AnimatePresence mode="popLayout">
                    {stageCandidates.slice(0, 4).map((candidate) => (
                      <motion.div
                        key={candidate.id}
                        layout
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center mx-auto shadow-sm`}
                      >
                        <span className="text-white text-xs font-semibold">{candidate.initials}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {stageCandidates.length > 4 && (
                    <p className="text-xs text-center text-muted-foreground pt-1">
                      +{stageCandidates.length - 4} more
                    </p>
                  )}
                  {stageCandidates.length === 0 && (
                    <div className="flex items-center justify-center h-20">
                      <p className="text-xs text-muted-foreground/50">—</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Conversion funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-background rounded-xl border border-border/30 p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Conversion Funnel</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-muted-foreground">8.3% hire rate</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {[100, 50, 33, 12.5, 8.3].map((width, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              style={{ width: `${width}%` }}
              className="h-2 bg-primary rounded-full origin-left"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
