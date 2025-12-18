import { motion } from "framer-motion";
import { User, AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const stages = [
  { name: "Applied", count: 24, color: "bg-blue-500" },
  { name: "Screening", count: 12, color: "bg-purple-500" },
  { name: "Interview", count: 8, color: "bg-amber-500" },
  { name: "Offer", count: 3, color: "bg-emerald-500" },
  { name: "Hired", count: 2, color: "bg-primary" },
];

const miniCandidates = [
  { id: 1, stage: 0 },
  { id: 2, stage: 0 },
  { id: 3, stage: 1 },
  { id: 4, stage: 1 },
  { id: 5, stage: 2 },
  { id: 6, stage: 2 },
  { id: 7, stage: 3 },
  { id: 8, stage: 4 },
];

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState(miniCandidates);
  const [showBottleneck, setShowBottleneck] = useState(false);

  useEffect(() => {
    // Simulate candidate movement
    const interval = setInterval(() => {
      setCandidates(prev => 
        prev.map(c => ({
          ...c,
          stage: Math.random() > 0.7 ? Math.min(c.stage + 1, 4) : c.stage
        }))
      );
    }, 3000);

    const bottleneckTimer = setTimeout(() => setShowBottleneck(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(bottleneckTimer);
    };
  }, []);

  const getCandidatesInStage = (stageIndex: number) => 
    candidates.filter(c => c.stage === stageIndex);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      {/* Pipeline visualization */}
      <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4">
        {stages.map((stage, index) => {
          const stagesCandidates = getCandidatesInStage(index);
          const isBottleneck = index === 2 && showBottleneck;
          
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-[100px]"
            >
              {/* Stage header */}
              <div className={`rounded-t-lg p-3 ${stage.color} bg-opacity-20 border border-b-0 border-border/50`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">{stage.name}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold">{stage.count}</span>
                    {isBottleneck && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Stage content */}
              <div className={`rounded-b-lg bg-background/50 border border-t-0 border-border/50 p-2 min-h-[120px] ${isBottleneck ? 'ring-2 ring-amber-500/50' : ''}`}>
                <div className="space-y-2">
                  {stagesCandidates.slice(0, 3).map((candidate, i) => (
                    <motion.div
                      key={candidate.id}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto"
                    >
                      <User className="w-4 h-4 text-primary" />
                    </motion.div>
                  ))}
                  {stagesCandidates.length > 3 && (
                    <p className="text-xs text-center text-muted-foreground">
                      +{stagesCandidates.length - 3} more
                    </p>
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
        className="mt-6 bg-background/60 rounded-lg border border-border/50 p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Conversion Funnel</span>
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
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
              style={{ width: `${width}%` }}
              className="h-2 bg-primary rounded-full origin-left"
            />
          ))}
        </div>
      </motion.div>

      {/* Bottleneck alert */}
      {showBottleneck && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-medium">Interview stage slowing</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
