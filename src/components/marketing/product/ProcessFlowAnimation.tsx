import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const stages = [
  { name: "Nieuw", borderColor: "bg-blue-500" },
  { name: "Eerste gesprek", borderColor: "bg-cyan-500" },
  { name: "Tweede gesprek", borderColor: "bg-purple-500" },
  { name: "Aanbod", borderColor: "bg-amber-500" },
  { name: "Aangenomen", borderColor: "bg-emerald-500" },
  { name: "Afgewezen", borderColor: "bg-rose-500" },
];

const candidatePool = [
  { name: "Sophie van der Berg", initials: "SB", color: "bg-emerald-500", source: "LinkedIn" },
  { name: "Thomas Bakker", initials: "TB", color: "bg-blue-500", source: "Indeed" },
  { name: "Emma Jansen", initials: "EJ", color: "bg-purple-500", source: "Website" },
  { name: "Liam de Vries", initials: "LV", color: "bg-teal-500", source: "LinkedIn" },
  { name: "Noah Visser", initials: "NV", color: "bg-indigo-500", source: "Referral" },
  { name: "Julia Peters", initials: "JP", color: "bg-rose-400", source: "LinkedIn" },
  { name: "Milan Hendriks", initials: "MH", color: "bg-cyan-500", source: "Indeed" },
  { name: "Anna Mulder", initials: "AM", color: "bg-amber-500", source: "Website" },
  { name: "Lucas Smit", initials: "LS", color: "bg-blue-600", source: "LinkedIn" },
  { name: "Sara de Jong", initials: "SJ", color: "bg-emerald-600", source: "Referral" },
  { name: "Daan Bos", initials: "DB", color: "bg-violet-500", source: "Indeed" },
  { name: "Fleur Koning", initials: "FK", color: "bg-pink-500", source: "Website" },
];

interface Candidate {
  id: number;
  name: string;
  initials: string;
  color: string;
  source: string;
  stage: number;
  daysAgo: number;
}

const MAX_PER_STAGE = 3;
const CYCLE_DURATION = 28000; // Full reset every 28 seconds

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [nextId, setNextId] = useState(1);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  // Get a random candidate from pool that hasn't been used recently
  const getRandomCandidate = useCallback(() => {
    const availableIndices = candidatePool
      .map((_, i) => i)
      .filter(i => !usedIndices.has(i));
    
    const indices = availableIndices.length > 0 ? availableIndices : candidatePool.map((_, i) => i);
    const randomIndex = indices[Math.floor(Math.random() * indices.length)];
    
    setUsedIndices(prev => {
      const newSet = new Set(prev);
      newSet.add(randomIndex);
      if (newSet.size > 6) {
        const firstItem = Array.from(newSet)[0];
        newSet.delete(firstItem);
      }
      return newSet;
    });
    
    return candidatePool[randomIndex];
  }, [usedIndices]);

  // Initialize with a balanced set
  const initializeCandidates = useCallback(() => {
    const initial: Candidate[] = [
      { ...candidatePool[0], id: 1, stage: 0, daysAgo: 0 },
      { ...candidatePool[1], id: 2, stage: 0, daysAgo: 1 },
      { ...candidatePool[2], id: 3, stage: 1, daysAgo: 3 },
      { ...candidatePool[3], id: 4, stage: 1, daysAgo: 4 },
      { ...candidatePool[4], id: 5, stage: 2, daysAgo: 6 },
      { ...candidatePool[5], id: 6, stage: 3, daysAgo: 8 },
    ];
    setCandidates(initial);
    setNextId(7);
    setUsedIndices(new Set([0, 1, 2, 3, 4, 5]));
  }, []);

  // Initialize on mount
  useEffect(() => {
    initializeCandidates();
  }, [initializeCandidates]);

  // Full cycle reset
  useEffect(() => {
    const resetInterval = setInterval(() => {
      initializeCandidates();
    }, CYCLE_DURATION);

    return () => clearInterval(resetInterval);
  }, [initializeCandidates]);

  // Add new candidates periodically (only if New stage has room)
  useEffect(() => {
    const addInterval = setInterval(() => {
      setCandidates(prev => {
        const inNewStage = prev.filter(c => c.stage === 0).length;
        if (inNewStage >= 2) return prev;
        
        const template = getRandomCandidate();
        const newCandidate: Candidate = {
          ...template,
          id: nextId,
          stage: 0,
          daysAgo: 0,
        };
        setNextId(n => n + 1);
        return [...prev, newCandidate];
      });
    }, 4000);

    return () => clearInterval(addInterval);
  }, [getRandomCandidate, nextId]);

  // Move candidates through pipeline
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCandidates(prev => {
        // Find candidates that can move (not in Hired/Rejected, and next stage has room)
        const movable = prev.filter(c => {
          if (c.stage >= 4) return false;
          const nextStage = c.stage + 1;
          const inNextStage = prev.filter(x => x.stage === nextStage).length;
          return inNextStage < MAX_PER_STAGE;
        });

        if (movable.length === 0) return prev;

        // Prefer moving from fuller stages
        const stageCount = [0, 1, 2, 3].map(s => prev.filter(c => c.stage === s).length);
        const prioritized = movable.sort((a, b) => stageCount[b.stage] - stageCount[a.stage]);
        
        const toMove = prioritized[0];
        
        // Small chance to reject instead of moving forward
        const shouldReject = toMove.stage >= 1 && Math.random() < 0.15;
        
        return prev.map(c => {
          if (c.id !== toMove.id) return c;
          return {
            ...c,
            stage: shouldReject ? 5 : c.stage + 1,
            daysAgo: c.daysAgo + Math.floor(Math.random() * 3) + 1,
          };
        });
      });
    }, 2500);

    return () => clearInterval(moveInterval);
  }, []);

  // Remove old rejected/hired candidates to keep it clean
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setCandidates(prev => {
        const hired = prev.filter(c => c.stage === 4);
        const rejected = prev.filter(c => c.stage === 5);
        
        // Remove oldest hired if more than 2
        if (hired.length > 2) {
          const oldestHired = hired.sort((a, b) => a.id - b.id)[0];
          return prev.filter(c => c.id !== oldestHired.id);
        }
        
        // Remove oldest rejected if more than 1
        if (rejected.length > 1) {
          const oldestRejected = rejected.sort((a, b) => a.id - b.id)[0];
          return prev.filter(c => c.id !== oldestRejected.id);
        }
        
        return prev;
      });
    }, 3500);

    return () => clearInterval(cleanupInterval);
  }, []);

  const getCandidatesInStage = (stageIndex: number) => 
    candidates.filter(c => c.stage === stageIndex);

  // Dynamic bottleneck detection
  const getBottleneck = () => {
    const counts = [0, 1, 2, 3].map(i => ({
      index: i,
      count: getCandidatesInStage(i).length,
      name: stages[i].name,
    }));
    
    const max = counts.reduce((a, b) => (b.count > a.count ? b : a), counts[0]);
    
    if (max.count >= 2) {
      return { stage: max.name, count: max.count };
    }
    return null;
  };

  const bottleneck = getBottleneck();

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      {/* Dynamic bottleneck banner */}
      <AnimatePresence>
        {bottleneck && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-5"
          >
            <motion.div
              animate={{ 
                backgroundColor: ["rgba(245, 158, 11, 0.1)", "rgba(245, 158, 11, 0.15)", "rgba(245, 158, 11, 0.1)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-amber-500/30"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                  Bottleneck gedetecteerd
                </p>
                <p className="text-xs text-amber-600/80 dark:text-amber-500/80">
                  {bottleneck.stage} fase vertraagt · {bottleneck.count} kandidaten wachtend
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
          const isBottleneckStage = bottleneck && stage.name === bottleneck.stage;
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
                isBottleneckStage 
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
                    <span className={`text-xs font-medium ${isRejected ? 'text-rose-600' : 'text-foreground'}`}>
                      {stage.name}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {stageCandidates.length}
                    </span>
                  </div>
                </div>

                {/* Candidates - real cards */}
                <div className={`p-2 min-h-[180px] space-y-2 ${isRejected ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''}`}>
                  <AnimatePresence mode="popLayout">
                    {stageCandidates.map((candidate) => (
                      <motion.div
                        key={candidate.id}
                        layout
                        initial={{ scale: 0.8, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`bg-background rounded-lg border p-2.5 shadow-sm hover:shadow-md transition-shadow ${
                          isRejected ? 'border-rose-200/50 opacity-60' : 'border-border/40'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {/* Avatar */}
                          <div className={`w-7 h-7 rounded-full ${candidate.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-[10px] font-semibold">{candidate.initials}</span>
                          </div>
                          
                          {/* Info */}
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-foreground truncate leading-tight">
                              {candidate.name.split(' ')[0]}
                            </p>
                            <p className="text-[10px] text-muted-foreground truncate">
                              {candidate.source} · {candidate.daysAgo}d
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {stageCandidates.length === 0 && (
                    <div className="flex items-center justify-center h-20">
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
          <span className="text-sm font-medium text-foreground">Conversie Funnel</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-muted-foreground">12.5% aangenomen</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {[100, 58, 35, 18, 12.5].map((width, i) => (
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
