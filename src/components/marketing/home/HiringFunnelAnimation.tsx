import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, ChevronRight, AlertCircle, Star, Clock, TrendingUp, ArrowDown, ArrowUp, Activity } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  source: string;
  days: number;
  score: number;
  stage: number;
  status: 'active' | 'hired' | 'rejected';
  colorIndex: number;
  indicator?: 'high-potential' | 'at-risk' | 'needs-attention';
  annotation?: string;
}

const stages = ['New', 'Screen', 'Interview', 'Offer', 'Hired'];

const names = ['Emma V.', 'Daan M.', 'Sophie B.', 'Lucas K.', 'Julia R.', 'Max W.', 'Lisa D.', 'Tom H.'];
const sources = ['LinkedIn', 'Indeed', 'Referral', 'Website'];
const avatarColors = [
  'bg-primary/15 text-primary',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
];

const annotations = [
  'Skills: 94% match',
  'Fast-track ready',
  'Strong referral',
  'Top performer',
  'Culture fit: A+',
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export function HiringFunnelAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [stats, setStats] = useState({ total: 0, screened: 0, interviewed: 0, hired: 0 });
  const [metrics, setMetrics] = useState({
    efficiency: 87,
    timeToHire: 21,
    qualityScore: 8.4,
    costPerHire: 2100,
  });

  const addCandidate = useCallback(() => {
    const score = Math.round((7 + Math.random() * 3) * 10) / 10;
    let indicator: Candidate['indicator'] = undefined;
    
    if (score >= 9) indicator = 'high-potential';
    else if (score < 7.3 && Math.random() > 0.5) indicator = 'at-risk';
    else if (Math.random() > 0.7) indicator = 'needs-attention';

    const newCandidate: Candidate = {
      id: Date.now() + Math.random(),
      name: names[Math.floor(Math.random() * names.length)],
      source: sources[Math.floor(Math.random() * sources.length)],
      days: Math.floor(Math.random() * 5) + 1,
      score,
      stage: 0,
      status: 'active',
      colorIndex: Math.floor(Math.random() * avatarColors.length),
      indicator,
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
          const showAnnotation = Math.random() > 0.6;
          
          if (newStage === 1) setStats(s => ({ ...s, screened: s.screened + 1 }));
          if (newStage === 2) setStats(s => ({ ...s, interviewed: s.interviewed + 1 }));
          if (newStage === 4) {
            setStats(s => ({ ...s, hired: s.hired + 1 }));
            setMetrics(m => ({
              ...m,
              efficiency: Math.min(95, m.efficiency + Math.random() * 0.5),
              qualityScore: Math.min(9.5, m.qualityScore + Math.random() * 0.05),
            }));
            return { ...candidate, stage: newStage, status: 'hired' as const };
          }
          
          return { 
            ...candidate, 
            stage: newStage, 
            days: Math.floor(Math.random() * 3) + 1,
            annotation: showAnnotation ? annotations[Math.floor(Math.random() * annotations.length)] : undefined,
          };
        }
        
        // Clear annotation after a while
        if (candidate.annotation && Math.random() > 0.7) {
          return { ...candidate, annotation: undefined };
        }
        
        return candidate;
      }).filter(c => c.status !== 'rejected');
    });
  }, []);

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      // Add static initial candidates
      for (let i = 0; i < 4; i++) {
        addCandidate();
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      setTimeout(() => addCandidate(), i * 200);
    }
    
    const addInterval = setInterval(addCandidate, 2400);
    const moveInterval = setInterval(moveCandidates, 2000);
    
    return () => {
      clearInterval(addInterval);
      clearInterval(moveInterval);
    };
  }, [addCandidate, moveCandidates, prefersReducedMotion]);

  const getCandidatesInStage = (stageIndex: number) => {
    return candidates.filter(c => c.stage === stageIndex).slice(0, 2);
  };

  const activeAlerts = [
    { text: 'Screening bottleneck detected', type: 'warning' },
    { text: '2 high-potential candidates ready', type: 'success' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-3 md:p-4 overflow-hidden" aria-hidden="true" role="presentation">
      {/* Pipeline Grid - all 5 stages */}
      <div className="flex-1 grid grid-cols-5 gap-1 md:gap-2">
        {stages.map((stage, stageIndex) => {
          const stageCandidates = getCandidatesInStage(stageIndex);
          const isHired = stageIndex === 4;
          
          return (
            <div key={stage} className="min-w-0 flex flex-col">
              {/* Stage header */}
              <div className={`text-[7px] md:text-[9px] font-medium mb-1 md:mb-2 px-1 py-0.5 rounded text-center truncate ${
                isHired 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-muted-foreground'
              }`}>
                {stage}
              </div>
              
              {/* Candidates */}
              <div className="flex-1 flex flex-col gap-1">
                {stageCandidates.map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-card border rounded p-1 md:p-2 shadow-sm ${
                      candidate.status === 'hired'
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-border/40'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <div className={`w-5 md:w-6 h-5 md:h-6 rounded-full flex items-center justify-center text-[7px] md:text-[9px] font-semibold flex-shrink-0 ${avatarColors[candidate.colorIndex]}`}>
                        {getInitials(candidate.name)}
                      </div>
                      <div className="flex-1 min-w-0 hidden md:block">
                        <div className="text-[9px] font-medium text-foreground truncate">
                          {candidate.name}
                        </div>
                        <div className="text-[7px] text-muted-foreground truncate">
                          {candidate.source}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between pt-2 mt-2 border-t border-border/20">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="text-[7px] md:text-[9px]">
            <span className="text-muted-foreground">Cost/Hire</span>
            <div className="font-semibold text-foreground">€{metrics.costPerHire.toLocaleString()}</div>
          </div>
          <div className="text-[7px] md:text-[9px]">
            <span className="text-muted-foreground">Time</span>
            <div className="font-semibold text-foreground">{metrics.timeToHire}d</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[7px] md:text-[9px] text-muted-foreground">Live</span>
        </div>
      </div>
    </div>
  );
}

export default HiringFunnelAnimation;
