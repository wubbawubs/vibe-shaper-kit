import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  source: string;
  days: number;
  score: number;
  stage: number;
  status: 'active' | 'hired' | 'rejected';
  colorIndex: number;
}

const stages = ['Nieuw', 'Screening', 'Interview', 'Aanbieding', 'Hired'];

const names = ['Emma V.', 'Daan M.', 'Sophie B.', 'Lucas K.', 'Julia R.', 'Max W.', 'Lisa D.', 'Tom H.'];
const sources = ['LinkedIn', 'Indeed', 'Referral', 'Website'];
const avatarColors = [
  'bg-primary/15 text-primary',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export function HiringFunnelAnimation() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [stats, setStats] = useState({ total: 0, screened: 0, interviewed: 0, hired: 0 });

  const addCandidate = useCallback(() => {
    const newCandidate: Candidate = {
      id: Date.now() + Math.random(),
      name: names[Math.floor(Math.random() * names.length)],
      source: sources[Math.floor(Math.random() * sources.length)],
      days: Math.floor(Math.random() * 5) + 1,
      score: Math.round((7 + Math.random() * 3) * 10) / 10,
      stage: 0,
      status: 'active',
      colorIndex: Math.floor(Math.random() * avatarColors.length),
    };
    setCandidates(prev => [...prev.slice(-11), newCandidate]);
    setStats(prev => ({ ...prev, total: prev.total + 1 }));
  }, []);

  const moveCandidates = useCallback(() => {
    setCandidates(prev => {
      return prev.map(candidate => {
        if (candidate.status !== 'active') return candidate;
        
        const advanceChance = candidate.score > 8 ? 0.35 : 0.2;
        const rejectChance = candidate.score < 7.5 ? 0.12 : 0.04;
        
        if (Math.random() < rejectChance && candidate.stage > 0) {
          return { ...candidate, status: 'rejected' as const };
        }
        
        if (Math.random() < advanceChance && candidate.stage < 4) {
          const newStage = candidate.stage + 1;
          
          if (newStage === 1) setStats(s => ({ ...s, screened: s.screened + 1 }));
          if (newStage === 2) setStats(s => ({ ...s, interviewed: s.interviewed + 1 }));
          if (newStage === 4) {
            setStats(s => ({ ...s, hired: s.hired + 1 }));
            return { ...candidate, stage: newStage, status: 'hired' as const };
          }
          
          return { ...candidate, stage: newStage, days: Math.floor(Math.random() * 3) + 1 };
        }
        
        return candidate;
      }).filter(c => c.status !== 'rejected');
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => addCandidate(), i * 200);
    }
    
    const addInterval = setInterval(addCandidate, 2800);
    const moveInterval = setInterval(moveCandidates, 2000);
    
    return () => {
      clearInterval(addInterval);
      clearInterval(moveInterval);
    };
  }, [addCandidate, moveCandidates]);

  const getCandidatesInStage = (stageIndex: number) => {
    return candidates.filter(c => c.stage === stageIndex).slice(0, 3);
  };

  return (
    <div className="w-full h-full flex flex-col p-5 gap-4">
      {/* Stage Headers */}
      <div className="flex items-center">
        {stages.map((stage, index) => (
          <React.Fragment key={stage}>
            <div className="flex-1">
              <div className={`text-xs font-medium px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 ${
                index === stages.length - 1 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                  : 'bg-muted/60 text-muted-foreground border border-border/40'
              }`}>
                <span>{stage}</span>
                <span className="text-[10px] opacity-70">({getCandidatesInStage(index).length})</span>
              </div>
            </div>
            {index < stages.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-border mx-1 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Pipeline Grid */}
      <div className="flex-1 flex gap-3 min-h-0">
        {stages.map((stage, stageIndex) => (
          <div key={stage} className="flex-1 flex flex-col gap-2">
            <AnimatePresence mode="popLayout">
              {getCandidatesInStage(stageIndex).map((candidate) => (
                <motion.div
                  key={candidate.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`bg-card border rounded-lg p-2.5 shadow-sm ${
                    candidate.status === 'hired'
                      ? 'border-emerald-300 bg-emerald-50/30'
                      : 'border-border/50'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {/* Avatar */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 ${avatarColors[candidate.colorIndex]}`}>
                      {getInitials(candidate.name)}
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-medium text-foreground truncate">
                          {candidate.name}
                        </span>
                        {candidate.status === 'hired' && (
                          <span className="flex items-center gap-0.5 text-[9px] font-semibold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <div className="text-[9px] text-muted-foreground">
                        {candidate.source} · {candidate.days}d
                      </div>
                      <div className="text-[9px] text-muted-foreground">
                        Score: <span className={candidate.score >= 8.5 ? 'text-emerald-600 font-medium' : candidate.score >= 7.5 ? 'text-foreground font-medium' : 'text-muted-foreground'}>{candidate.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty state placeholder */}
            {getCandidatesInStage(stageIndex).length === 0 && (
              <div className="flex-1 border border-dashed border-border/30 rounded-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Stats Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-border/30">
        {/* Mini Funnel */}
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className="font-semibold text-foreground">{stats.total}</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span>{stats.screened}</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span>{stats.interviewed}</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span className="font-semibold text-emerald-600">{stats.hired}</span>
        </div>
        
        {/* Live Indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-muted-foreground">Live</span>
        </div>
      </div>
    </div>
  );
}

export default HiringFunnelAnimation;
