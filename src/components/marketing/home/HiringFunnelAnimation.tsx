import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Candidate {
  id: number;
  name: string;
  score: number;
  stage: number;
  x: number;
  y: number;
  avatar: string;
  status: "entering" | "evaluating" | "moving" | "rejected" | "hired";
}

const stages = [
  { name: "Applied", x: 12 },
  { name: "Screening", x: 32 },
  { name: "Interview", x: 52 },
  { name: "Offer", x: 72 },
  { name: "Hired", x: 90 },
];

const avatarColors = ["#168A7A", "#1A9D8B", "#D4A84B", "#C49A3C", "#2A7A6B", "#E8B84A"];
const firstNames = ["Alex", "Sam", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn", "Avery", "Blake"];
const lastInitials = ["M.", "K.", "S.", "R.", "T.", "B.", "L.", "W.", "P.", "N."];

export function HiringFunnelAnimation() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [stats, setStats] = useState({ total: 0, screened: 0, interviewed: 0, hired: 0 });
  const candidateIdRef = useRef(0);

  const addCandidate = useCallback(() => {
    const id = candidateIdRef.current++;
    const score = Math.floor(Math.random() * 30) + 70; // 70-100 score
    
    // Position candidates in rows
    const yPositions = [25, 42, 58, 75];
    const yIndex = id % yPositions.length;
    
    const newCandidate: Candidate = {
      id,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastInitials[Math.floor(Math.random() * lastInitials.length)]}`,
      score,
      stage: 0,
      x: stages[0].x,
      y: yPositions[yIndex],
      avatar: avatarColors[Math.floor(Math.random() * avatarColors.length)],
      status: "entering",
    };

    setCandidates(prev => {
      // Remove old candidates to keep performance
      const active = prev.filter(c => c.status !== "rejected" && c.stage < 5);
      return [...active.slice(-8), newCandidate];
    });
    setStats(prev => ({ ...prev, total: prev.total + 1 }));
  }, []);

  const moveCandidates = useCallback(() => {
    setCandidates(prev => prev.map(candidate => {
      if (candidate.status === "rejected" || candidate.status === "hired") {
        return candidate;
      }

      // Move to evaluating after entering
      if (candidate.status === "entering") {
        return { ...candidate, status: "evaluating" as const };
      }

      // Random chance to advance
      const shouldMove = Math.random() < 0.12;
      
      if (shouldMove && candidate.stage < stages.length - 1) {
        const nextStage = candidate.stage + 1;
        const passThreshold = 72 + (nextStage * 4);
        
        if (candidate.score >= passThreshold || Math.random() < 0.35) {
          // Advance to next stage
          if (nextStage === 1) setStats(prev => ({ ...prev, screened: prev.screened + 1 }));
          if (nextStage === 2) setStats(prev => ({ ...prev, interviewed: prev.interviewed + 1 }));
          if (nextStage === 4) setStats(prev => ({ ...prev, hired: prev.hired + 1 }));

          return {
            ...candidate,
            stage: nextStage,
            x: stages[nextStage].x,
            status: (nextStage === 4 ? "hired" : "moving") as Candidate["status"],
          };
        } else if (Math.random() < 0.15 && candidate.stage > 0) {
          // Rejected (fade out)
          return { ...candidate, status: "rejected" as const };
        }
      }

      return { ...candidate, status: "evaluating" as const };
    }).filter(c => c.status !== "rejected" || Math.random() > 0.1));
  }, []);

  useEffect(() => {
    // Start with some candidates
    const initTimeout = setTimeout(() => {
      addCandidate();
      setTimeout(addCandidate, 400);
      setTimeout(addCandidate, 800);
    }, 300);

    const addInterval = setInterval(addCandidate, 2500);
    const moveInterval = setInterval(moveCandidates, 900);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(addInterval);
      clearInterval(moveInterval);
    };
  }, [addCandidate, moveCandidates]);

  return (
    <div className="relative w-full h-full min-h-[350px]">
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Stage Labels & Lines */}
      {stages.map((stage, index) => (
        <div
          key={stage.name}
          className="absolute top-4"
          style={{ left: `${stage.x}%`, transform: 'translateX(-50%)' }}
        >
          {/* Stage label */}
          <div className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${
            index === stages.length - 1 
              ? 'bg-accent/20 text-accent border border-accent/30' 
              : 'bg-muted text-muted-foreground border border-border/50'
          }`}>
            {stage.name}
          </div>
          
          {/* Vertical guide line */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-px top-10 opacity-20"
            style={{ 
              height: 'calc(100vh * 0.25)',
              background: index === stages.length - 1 
                ? 'linear-gradient(to bottom, hsl(var(--accent)), transparent)' 
                : 'linear-gradient(to bottom, hsl(var(--border)), transparent)'
            }}
          />
        </div>
      ))}

      {/* Flow arrows between stages */}
      {stages.slice(0, -1).map((stage, index) => (
        <motion.div
          key={`arrow-${index}`}
          className="absolute top-6"
          style={{ left: `${(stage.x + stages[index + 1].x) / 2}%`, transform: 'translateX(-50%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: index * 0.2 }}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" className="text-primary">
            <path d="M0 6 L18 6 M14 2 L20 6 L14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      ))}

      {/* Candidate Cards */}
      <AnimatePresence mode="popLayout">
        {candidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            layout
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            animate={{ 
              opacity: candidate.status === "rejected" ? 0 : 1,
              scale: candidate.status === "rejected" ? 0.6 : 1,
              x: '-50%',
              y: '-50%',
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            className="absolute z-10"
            style={{ 
              left: `${candidate.x}%`,
              top: `${candidate.y}%`,
            }}
          >
            <div 
              className={`relative bg-card rounded-xl shadow-lg border overflow-hidden transition-all duration-300 ${
                candidate.status === "hired" 
                  ? "border-accent shadow-xl shadow-accent/30 ring-2 ring-accent/40" 
                  : "border-border/60 hover:border-border"
              }`}
              style={{ width: '130px' }}
            >
              {/* Color bar */}
              <div 
                className="h-1.5 w-full"
                style={{ 
                  background: candidate.status === "hired" 
                    ? 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.7))' 
                    : candidate.avatar 
                }}
              />
              
              <div className="p-3">
                {/* Avatar + Name */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 shadow-sm"
                    style={{ backgroundColor: candidate.avatar }}
                  >
                    {candidate.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm font-medium text-foreground truncate">{candidate.name}</div>
                    <div className="text-[10px] text-muted-foreground">Candidate</div>
                  </div>
                </div>

                {/* Match Score */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Match</span>
                    <span className={`text-xs font-bold ${
                      candidate.score >= 90 ? 'text-accent' : 
                      candidate.score >= 80 ? 'text-success' : 'text-primary'
                    }`}>
                      {candidate.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.score}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: candidate.score >= 90 
                          ? 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.8))' 
                          : candidate.score >= 80 
                            ? 'linear-gradient(90deg, hsl(var(--success)), hsl(var(--success) / 0.8))' 
                            : 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))'
                      }}
                    />
                  </div>
                </div>

                {/* Hired Badge */}
                {candidate.status === "hired" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 flex items-center justify-center gap-1.5 bg-accent/15 rounded-lg py-1.5"
                  >
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[11px] font-bold text-accent tracking-wide">HIRED</span>
                  </motion.div>
                )}
              </div>

              {/* Evaluating indicator */}
              {candidate.status === "evaluating" && candidate.stage < 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Live Stats Panel */}
      <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl border border-border/60 p-4 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Live Pipeline</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <span className="text-muted-foreground">Applied</span>
          <span className="text-right font-bold tabular-nums">{stats.total}</span>
          <span className="text-muted-foreground">Screened</span>
          <span className="text-right font-bold text-primary tabular-nums">{stats.screened}</span>
          <span className="text-muted-foreground">Interviewed</span>
          <span className="text-right font-bold text-success tabular-nums">{stats.interviewed}</span>
          <span className="text-muted-foreground">Hired</span>
          <span className="text-right font-bold text-accent tabular-nums">{stats.hired}</span>
        </div>
      </div>

      {/* AI Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/50 shadow-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
        </span>
        <span className="text-[11px] font-semibold text-muted-foreground">AI Ranking Active</span>
      </div>
    </div>
  );
}
