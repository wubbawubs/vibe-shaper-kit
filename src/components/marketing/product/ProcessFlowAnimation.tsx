import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const stages = [
  { name: "New", borderColor: "bg-blue-500" },
  { name: "Screening", borderColor: "bg-cyan-500" },
  { name: "Interview", borderColor: "bg-purple-500" },
  { name: "Offer", borderColor: "bg-amber-500" },
  { name: "Hired", borderColor: "bg-emerald-500" },
  { name: "Rejected", borderColor: "bg-rose-500" },
];

const initialCandidates = [
  { id: 1, name: "Update Test", initials: "UT", color: "bg-emerald-500", source: "Website", stage: 0 },
  { id: 2, name: "Luuk Wubs", initials: "LW", color: "bg-blue-500", source: "LinkedIn", stage: 1 },
  { id: 3, name: "Jan Jansen", initials: "JJ", color: "bg-blue-500", source: "LinkedIn", stage: 1 },
  { id: 4, name: "Emma Meijer", initials: "EM", color: "bg-emerald-500", source: "LinkedIn", stage: 2 },
  { id: 5, name: "Lucas de Boer", initials: "LD", color: "bg-teal-500", source: "Website", stage: 2 },
  { id: 6, name: "Test Candidate", initials: "TC", color: "bg-emerald-500", source: "LinkedIn", stage: 3 },
  { id: 7, name: "Huub Rood", initials: "HR", color: "bg-blue-500", source: "LinkedIn", stage: 4 },
  { id: 8, name: "Anna Mulder", initials: "AM", color: "bg-gray-400", source: "LinkedIn", stage: 4 },
  { id: 9, name: "Test Test", initials: "TT", color: "bg-rose-400", source: "Website", stage: 5 },
];

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [showBottleneck, setShowBottleneck] = useState(false);
  const [bottleneckPulse, setBottleneckPulse] = useState(false);

  // Candidate movement loop - occasionally move a candidate forward
  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates(prev => {
        const movableCandidates = prev.filter(c => c.stage < 4);
        if (movableCandidates.length === 0) return prev;
        
        const toMove = movableCandidates[Math.floor(Math.random() * movableCandidates.length)];
        return prev.map(c => 
          c.id === toMove.id ? { ...c, stage: Math.min(c.stage + 1, 4) } : c
        );
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Bottleneck appearance and pulse
  useEffect(() => {
    const showTimer = setTimeout(() => setShowBottleneck(true), 2000);
    
    const pulseInterval = setInterval(() => {
      setBottleneckPulse(prev => !prev);
    }, 2000);

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
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-amber-500/30"
            >
              <motion.div
                animate={{ scale: bottleneckPulse ? 1.1 : 1 }}
                transition={{ duration: 0.5 }}
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

      {/* Pipeline columns - Kanban style */}
      <div className="grid grid-cols-6 gap-3">
        {stages.map((stage, index) => {
          const stageCandidates = getCandidatesInStage(index);
          const isBottleneck = index === 2 && showBottleneck;
          const isRejected = index === 5;
          
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Column header with colored top border */}
              <div className={`rounded-xl overflow-hidden bg-background border ${
                isBottleneck 
                  ? 'border-amber-400/60 ring-2 ring-amber-200/30' 
                  : isRejected
                    ? 'border-rose-200/50'
                    : 'border-border/40'
              }`}>
                {/* Colored top bar */}
                <div className={`h-1 ${stage.borderColor}`} />
                
                {/* Header */}
                <div className="px-3 py-2.5 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${isRejected ? 'text-rose-600' : 'text-foreground'}`}>
                      {stage.name}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {stageCandidates.length}
                    </span>
                  </div>
                </div>

                {/* Candidates - real cards */}
                <div className={`p-2 min-h-[200px] space-y-2 ${isRejected ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''}`}>
                  <AnimatePresence mode="popLayout">
                    {stageCandidates.map((candidate) => (
                      <motion.div
                        key={candidate.id}
                        layout
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className={`bg-background rounded-lg border p-3 shadow-sm hover:shadow-md transition-shadow ${
                          isRejected ? 'border-rose-200/50' : 'border-border/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Avatar */}
                          <div className={`w-8 h-8 rounded-full ${candidate.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs font-semibold">{candidate.initials}</span>
                          </div>
                          
                          {/* Info */}
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-foreground truncate leading-tight">
                              {candidate.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {candidate.source} · 0d
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {stageCandidates.length === 0 && (
                    <div className="flex items-center justify-center h-24">
                      <p className="text-xs text-muted-foreground/40">—</p>
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
