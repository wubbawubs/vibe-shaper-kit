import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const stages = [
  { name: "Nieuw", count: 24, borderColor: "border-t-blue-500" },
  { name: "Eerste gesprek", count: 12, borderColor: "border-t-purple-500" },
  { name: "Tweede gesprek", count: 8, borderColor: "border-t-amber-500" },
  { name: "Aanbod", count: 3, borderColor: "border-t-emerald-500" },
  { name: "Aangenomen", count: 2, borderColor: "border-t-primary" },
];

const candidatePool = [
  { id: 1, initials: "SM", color: "bg-blue-500", stage: 0 },
  { id: 2, initials: "JK", color: "bg-emerald-500", stage: 0 },
  { id: 3, initials: "EL", color: "bg-purple-500", stage: 1 },
  { id: 4, initials: "DR", color: "bg-amber-500", stage: 1 },
  { id: 5, initials: "MV", color: "bg-pink-500", stage: 2 },
  { id: 6, initials: "LB", color: "bg-cyan-500", stage: 2 },
  { id: 7, initials: "AK", color: "bg-orange-500", stage: 3 },
  { id: 8, initials: "RH", color: "bg-indigo-500", stage: 4 },
];

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState(candidatePool);
  const [showBottleneck, setShowBottleneck] = useState(false);
  const [bottleneckPulse, setBottleneckPulse] = useState(false);
  const [funnelValues, setFunnelValues] = useState([100, 50, 33, 12.5, 8.3]);

  // Candidate movement loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates(prev => 
        prev.map(c => ({
          ...c,
          stage: Math.random() > 0.7 ? Math.min(c.stage + 1, 4) : c.stage
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Bottleneck appearance and pulse
  useEffect(() => {
    const showTimer = setTimeout(() => setShowBottleneck(true), 2000);
    
    const pulseInterval = setInterval(() => {
      setBottleneckPulse(prev => !prev);
    }, 1500);

    return () => {
      clearTimeout(showTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  // Funnel value fluctuation
  useEffect(() => {
    const fluctuateInterval = setInterval(() => {
      setFunnelValues(prev => 
        prev.map((val, i) => {
          if (i === 0) return 100;
          const fluctuation = (Math.random() - 0.5) * 3;
          return Math.max(5, Math.min(100, val + fluctuation));
        })
      );
    }, 2000);

    return () => clearInterval(fluctuateInterval);
  }, []);

  const getCandidatesInStage = (stageIndex: number) => 
    candidates.filter(c => c.stage === stageIndex);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      {/* Amber bottleneck banner at top - like real software */}
      <AnimatePresence>
        {showBottleneck && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4"
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
                  Bottleneck gedetecteerd
                </p>
                <p className="text-xs text-amber-600/80 dark:text-amber-500/80">
                  Tweede gesprek fase vertraagt · 8 kandidaten wachten
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pipeline visualization - styled like real Kanban */}
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4">
        {stages.map((stage, index) => {
          const stageCandidates = getCandidatesInStage(index);
          const isBottleneck = index === 2 && showBottleneck;
          
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-[100px]"
            >
              {/* Stage column with colored top border */}
              <div className={`rounded-lg bg-background/50 border ${stage.borderColor} border-t-2 ${isBottleneck ? 'ring-2 ring-amber-500/50' : ''}`}>
                {/* Stage header */}
                <div className="p-3 border-b border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium truncate">{stage.name}</span>
                    <motion.span 
                      className="text-xs font-semibold bg-muted px-1.5 py-0.5 rounded"
                      animate={isBottleneck ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      {stage.count}
                    </motion.span>
                  </div>
                </div>

                {/* Candidates */}
                <div className="p-2 min-h-[100px] space-y-2">
                  {stageCandidates.slice(0, 3).map((candidate) => (
                    <motion.div
                      key={candidate.id}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`w-8 h-8 rounded-full ${candidate.color} flex items-center justify-center mx-auto`}
                    >
                      <span className="text-white text-xs font-medium">{candidate.initials}</span>
                    </motion.div>
                  ))}
                  {stageCandidates.length > 3 && (
                    <p className="text-xs text-center text-muted-foreground">
                      +{stageCandidates.length - 3}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Conversion funnel with animated bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-background/60 rounded-lg border border-border/50 p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Conversie funnel</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-muted-foreground">8.3% hire rate</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {funnelValues.map((width, i) => (
            <motion.div
              key={i}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
