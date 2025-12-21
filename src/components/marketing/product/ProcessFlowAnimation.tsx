import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const stages = [
  { name: "New", borderColor: "bg-blue-500" },
  { name: "Screening", borderColor: "bg-cyan-500" },
  { name: "Interview", borderColor: "bg-purple-500" },
  { name: "Offer", borderColor: "bg-amber-500" },
  { name: "Hired", borderColor: "bg-emerald-500" },
];

const candidatePool = [
  { name: "Sophie van der Berg", initials: "SB", color: "bg-emerald-500", source: "LinkedIn", score: 94 },
  { name: "Thomas Bakker", initials: "TB", color: "bg-blue-500", source: "Indeed", score: 87 },
  { name: "Emma Jansen", initials: "EJ", color: "bg-purple-500", source: "Website", score: 91 },
  { name: "Liam de Vries", initials: "LV", color: "bg-teal-500", source: "LinkedIn", score: 85 },
  { name: "Noah Visser", initials: "NV", color: "bg-indigo-500", source: "Referral", score: 92 },
  { name: "Julia Peters", initials: "JP", color: "bg-rose-400", source: "LinkedIn", score: 78 },
  { name: "Milan Hendriks", initials: "MH", color: "bg-cyan-500", source: "Indeed", score: 83 },
  { name: "Anna Mulder", initials: "AM", color: "bg-amber-500", source: "Website", score: 89 },
  { name: "Lucas Smit", initials: "LS", color: "bg-blue-600", source: "LinkedIn", score: 76 },
  { name: "Sara de Jong", initials: "SJ", color: "bg-emerald-600", source: "Referral", score: 95 },
  { name: "Daan Bos", initials: "DB", color: "bg-violet-500", source: "Indeed", score: 81 },
  { name: "Fleur Koning", initials: "FK", color: "bg-pink-500", source: "Website", score: 88 },
];

interface Candidate {
  id: number;
  name: string;
  initials: string;
  color: string;
  source: string;
  score: number;
  stage: number;
  daysAgo: number;
}

const MAX_PER_STAGE = 3;
const CYCLE_DURATION = 28000;

export const ProcessFlowAnimation = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [nextId, setNextId] = useState(1);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [bottleneckVisible, setBottleneckVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

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
    setBottleneckVisible(false);
  }, []);

  useEffect(() => {
    initializeCandidates();
  }, [initializeCandidates]);

  useEffect(() => {
    const resetInterval = setInterval(() => {
      initializeCandidates();
    }, CYCLE_DURATION);

    return () => clearInterval(resetInterval);
  }, [initializeCandidates]);

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

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCandidates(prev => {
        const movable = prev.filter(c => {
          if (c.stage >= 4) return false;
          const nextStage = c.stage + 1;
          const inNextStage = prev.filter(x => x.stage === nextStage).length;
          return inNextStage < MAX_PER_STAGE;
        });

        if (movable.length === 0) return prev;

        const stageCount = [0, 1, 2, 3].map(s => prev.filter(c => c.stage === s).length);
        const prioritized = movable.sort((a, b) => stageCount[b.stage] - stageCount[a.stage]);
        
        const toMove = prioritized[0];
        
        return prev.map(c => {
          if (c.id !== toMove.id) return c;
          return {
            ...c,
            stage: c.stage + 1,
            daysAgo: c.daysAgo + Math.floor(Math.random() * 3) + 1,
          };
        });
      });
    }, 2500);

    return () => clearInterval(moveInterval);
  }, []);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setCandidates(prev => {
        const hired = prev.filter(c => c.stage === 4);
        if (hired.length > 2) {
          const oldestHired = hired.sort((a, b) => a.id - b.id)[0];
          return prev.filter(c => c.id !== oldestHired.id);
        }
        return prev;
      });
    }, 3500);

    return () => clearInterval(cleanupInterval);
  }, []);

  const getCandidatesInStage = (stageIndex: number) => 
    candidates.filter(c => c.stage === stageIndex);

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

  // Delayed bottleneck visibility to prevent jarring transitions
  useEffect(() => {
    if (bottleneck) {
      const timer = setTimeout(() => setBottleneckVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      setBottleneckVisible(false);
    }
  }, [bottleneck?.stage]);

  // Funnel data calculation
  const funnelData = [
    { stage: "Applied", value: 100, color: "bg-blue-500" },
    { stage: "Screened", value: 58, color: "bg-cyan-500" },
    { stage: "Interview", value: 35, color: "bg-purple-500" },
    { stage: "Offer", value: 18, color: "bg-amber-500" },
    { stage: "Hired", value: 12.5, color: "bg-emerald-500" },
  ];

  return (
    <div 
      className="relative w-full bg-gradient-to-br from-background via-muted/20 to-background rounded-xl md:rounded-2xl border border-border/50 overflow-hidden p-4 md:p-6 shadow-lg"
      aria-hidden="true"
    >
      {/* Subtle glow orb */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden md:block" />
      
      {/* Dynamic bottleneck banner with delay */}
      <AnimatePresence>
        {bottleneck && bottleneckVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="mb-4 md:mb-5"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { 
                backgroundColor: ["rgba(245, 158, 11, 0.1)", "rgba(245, 158, 11, 0.15)", "rgba(245, 158, 11, 0.1)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-amber-500/30 bg-amber-500/10"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="w-4 md:w-5 h-4 md:h-5 text-amber-500" />
              </motion.div>
              <div>
                <p className="text-xs md:text-sm font-medium text-amber-700 dark:text-amber-400">
                  Bottleneck detected
                </p>
                <p className="text-[10px] md:text-xs text-amber-600/80 dark:text-amber-500/80">
                  {bottleneck.count} candidates waiting in {bottleneck.stage}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pipeline columns - 5 stage Kanban, horizontal scroll on mobile */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
        {stages.map((stage, index) => {
          const stageCandidates = getCandidatesInStage(index);
          const isBottleneckStage = bottleneck && bottleneckVisible && stage.name === bottleneck.stage;
          const isHired = index === 4;
          
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.08 }}
            >
              <div className={`rounded-xl overflow-hidden bg-background border ${
                isBottleneckStage 
                  ? 'border-amber-400/60 ring-2 ring-amber-200/30' 
                  : isHired
                    ? 'border-emerald-200/50'
                    : 'border-border/40'
              }`}>
                <div className={`h-1 ${stage.borderColor}`} />
                
                <div className="px-2 md:px-3 py-2 md:py-2.5 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] md:text-xs font-medium ${isHired ? 'text-emerald-600' : 'text-foreground'}`}>
                      {stage.name}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground">
                      {stageCandidates.length}
                    </span>
                  </div>
                </div>

                <div className={`p-1.5 md:p-2 min-h-[140px] md:min-h-[180px] space-y-1.5 md:space-y-2 ${isHired ? 'bg-emerald-50/30 dark:bg-emerald-950/10' : ''}`}>
                  <AnimatePresence mode="popLayout">
                    {stageCandidates.map((candidate) => (
                      <motion.div
                        key={candidate.id}
                        layout={!prefersReducedMotion}
                        initial={{ scale: 0.8, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, x: 20 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
                        whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                        className={`bg-background rounded-lg border p-1.5 md:p-2.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                          isHired ? 'border-emerald-200/50' : 'border-border/40'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <div className={`w-5 md:w-7 h-5 md:h-7 rounded-full ${candidate.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-[8px] md:text-[10px] font-semibold">{candidate.initials}</span>
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <p className="text-[9px] md:text-xs font-medium text-foreground truncate leading-tight">
                              {candidate.name.split(' ')[0]}
                            </p>
                            <div className="flex items-center gap-1">
                              <p className="text-[8px] md:text-[10px] text-muted-foreground truncate">
                                <span className="hidden md:inline">{candidate.source} · </span>{candidate.daysAgo}d
                              </p>
                            </div>
                          </div>
                          
                          {/* Score indicator dot - hidden on mobile */}
                          {candidate.score >= 90 && (
                            <motion.div
                              animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2, delay: candidate.id * 0.3 }}
                              className="hidden md:block"
                            >
                              <Sparkles className="w-3 h-3 text-accent" />
                            </motion.div>
                          )}
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

      {/* Improved Conversion funnel - simplified on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
        className="mt-4 md:mt-6 bg-background rounded-lg md:rounded-xl border border-border/30 p-3 md:p-4"
      >
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <span className="text-xs md:text-sm font-medium text-foreground">Conversion</span>
          <div className="flex items-center gap-1.5 md:gap-2">
            <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-emerald-500" />
            <span className="text-[10px] md:text-xs text-muted-foreground">12.5% hired</span>
          </div>
        </div>
        
        {/* Stacked funnel bars - simplified on mobile */}
        <div className="space-y-1.5 md:space-y-2">
          {funnelData.map((item, i) => (
            <div key={item.stage} className="flex items-center gap-2 md:gap-3">
              <span className="text-[10px] md:text-xs text-muted-foreground w-12 md:w-16 text-right truncate">{item.stage}</span>
              <div className="flex-1 h-2 md:h-3 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ delay: prefersReducedMotion ? 0 : 1 + i * 0.1, duration: 0.5 }}
                  className={`h-full ${item.color} rounded-full`}
                />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-foreground w-8 md:w-10">{item.value}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
