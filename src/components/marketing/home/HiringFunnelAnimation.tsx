import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const activeAlerts = [
    { text: 'Screening bottleneck detected', type: 'warning' },
    { text: '2 high-potential candidates ready', type: 'success' },
  ];

  return (
    <div className="w-full h-full flex gap-4 p-4">
      {/* Pipeline Section - 65% */}
      <div className="flex-[0.65] flex flex-col gap-3 min-w-0">
        {/* Stage Headers */}
        <div className="flex items-center">
          {stages.map((stage, index) => (
            <React.Fragment key={stage}>
              <div className="flex-1">
                <div className={`text-[10px] font-medium px-2 py-1 rounded inline-flex items-center gap-1 ${
                  index === stages.length - 1 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                    : 'bg-muted/50 text-muted-foreground border border-border/30'
                }`}>
                  <span>{stage}</span>
                  <span className="opacity-60">({getCandidatesInStage(index).length})</span>
                </div>
              </div>
              {index < stages.length - 1 && (
                <ChevronRight className="w-3 h-3 text-border/60 mx-0.5 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Pipeline Grid */}
        <div className="flex-1 flex gap-2 min-h-0">
          {stages.map((stage, stageIndex) => (
            <div key={stage} className="flex-1 flex flex-col gap-1.5">
              <AnimatePresence mode="popLayout">
                {getCandidatesInStage(stageIndex).map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    layout
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className={`bg-card border rounded-md p-2 shadow-sm relative ${
                      candidate.status === 'hired'
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-border/40'
                    }`}
                  >
                    {/* AI Annotation */}
                    <AnimatePresence>
                      {candidate.annotation && (
                        <motion.div
                          initial={{ opacity: 0, y: 4, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[8px] px-1.5 py-0.5 rounded whitespace-nowrap shadow-sm z-10"
                        >
                          {candidate.annotation}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-start gap-1.5">
                      {/* Avatar with indicator */}
                      <div className="relative">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold ${avatarColors[candidate.colorIndex]}`}>
                          {getInitials(candidate.name)}
                        </div>
                        {candidate.indicator === 'high-potential' && (
                          <Star className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                        )}
                        {candidate.indicator === 'at-risk' && (
                          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-500 rounded-full" />
                        )}
                        {candidate.indicator === 'needs-attention' && (
                          <Clock className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-medium text-foreground truncate">
                            {candidate.name}
                          </span>
                          {candidate.status === 'hired' && (
                            <Check className="w-2.5 h-2.5 text-emerald-600" />
                          )}
                        </div>
                        <div className="text-[8px] text-muted-foreground">
                          {candidate.source} · {candidate.days}d · <span className={candidate.score >= 8.5 ? 'text-emerald-600 font-medium' : ''}>{candidate.score}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {getCandidatesInStage(stageIndex).length === 0 && (
                <div className="flex-1 border border-dashed border-border/20 rounded-md" />
              )}
            </div>
          ))}
        </div>

        {/* Business Impact Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/20">
          <div className="flex items-center gap-4">
            <div className="text-[9px]">
              <span className="text-muted-foreground">Cost per Hire</span>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-foreground">€{metrics.costPerHire.toLocaleString()}</span>
                <span className="flex items-center text-emerald-600">
                  <ArrowDown className="w-2 h-2" />
                  <span>12%</span>
                </span>
              </div>
            </div>
            <div className="text-[9px]">
              <span className="text-muted-foreground">Time Saved</span>
              <div className="flex items-center gap-1.5">
                <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(metrics.timeToHire / 45) * 100}%` }} />
                </div>
                <span className="font-medium text-foreground">{metrics.timeToHire}d</span>
                <span className="text-muted-foreground/60">/ 45d</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] text-muted-foreground">Live</span>
          </div>
        </div>
      </div>

      {/* Intelligence Panel - 35% */}
      <div className="flex-[0.35] flex flex-col gap-3 min-w-0">
        {/* Panel Header */}
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-semibold text-foreground">Recruitment Intelligence</span>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Process Efficiency */}
          <div className="bg-card border border-border/40 rounded-md p-2">
            <span className="text-[8px] text-muted-foreground uppercase tracking-wide">Efficiency</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="relative w-8 h-8">
                <svg className="w-8 h-8 -rotate-90">
                  <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle 
                    cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="3"
                    strokeDasharray={`${(metrics.efficiency / 100) * 75.4} 75.4`}
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold text-foreground">{Math.round(metrics.efficiency)}%</span>
            </div>
          </div>

          {/* Time-to-Hire */}
          <div className="bg-card border border-border/40 rounded-md p-2">
            <span className="text-[8px] text-muted-foreground uppercase tracking-wide">Time-to-Hire</span>
            <div className="mt-1">
              <span className="text-sm font-bold text-foreground">{metrics.timeToHire}d</span>
              <div className="flex items-center gap-1 text-[8px] text-emerald-600">
                <ArrowDown className="w-2 h-2" />
                <span>vs 45d avg</span>
              </div>
            </div>
          </div>

          {/* Quality Score */}
          <div className="bg-card border border-border/40 rounded-md p-2">
            <span className="text-[8px] text-muted-foreground uppercase tracking-wide">Quality</span>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-sm font-bold text-foreground">{metrics.qualityScore.toFixed(1)}</span>
              <span className="text-[9px] text-muted-foreground">/10</span>
              <ArrowUp className="w-2 h-2 text-emerald-600 ml-1" />
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-card border border-border/40 rounded-md p-2">
            <span className="text-[8px] text-muted-foreground uppercase tracking-wide">Conversion</span>
            <div className="mt-1">
              <span className="text-sm font-bold text-foreground">
                {stats.total > 0 ? Math.round((stats.hired / stats.total) * 100) : 0}%
              </span>
              <div className="text-[8px] text-muted-foreground">{stats.hired}/{stats.total}</div>
            </div>
          </div>
        </div>

        {/* Active Insights */}
        <div className="flex-1 flex flex-col gap-1.5">
          <span className="text-[8px] text-muted-foreground uppercase tracking-wide">Active Insights</span>
          {activeAlerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-start gap-1.5 p-1.5 rounded border text-[9px] ${
                alert.type === 'warning' 
                  ? 'bg-amber-50/50 border-amber-200/50 text-amber-800'
                  : 'bg-emerald-50/50 border-emerald-200/50 text-emerald-800'
              }`}
            >
              <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
              <span>{alert.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Funnel Summary */}
        <div className="pt-2 border-t border-border/20">
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-muted-foreground">Pipeline</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-foreground">{stats.total}</span>
              <ChevronRight className="w-2 h-2 opacity-40" />
              <span>{stats.screened}</span>
              <ChevronRight className="w-2 h-2 opacity-40" />
              <span>{stats.interviewed}</span>
              <ChevronRight className="w-2 h-2 opacity-40" />
              <span className="font-semibold text-emerald-600">{stats.hired}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringFunnelAnimation;
