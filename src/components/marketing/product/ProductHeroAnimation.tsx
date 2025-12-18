import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const stages = [
  { name: "New", count: 24, color: "border-t-cyan-400" },
  { name: "Screening", count: 12, color: "border-t-violet-400" },
  { name: "Interview", count: 8, color: "border-t-amber-400", hasBottleneck: true },
  { name: "Offer", count: 3, color: "border-t-emerald-400" },
  { name: "Hired", count: 2, color: "border-t-slate-700" },
];

const candidatesInStages: { [key: string]: { initials: string; color: string }[] } = {
  "New": [
    { initials: "MR", color: "bg-rose-500" },
    { initials: "AL", color: "bg-blue-500" },
  ],
  "Screening": [
    { initials: "JK", color: "bg-emerald-500" },
  ],
  "Interview": [
    { initials: "EL", color: "bg-purple-500" },
    { initials: "DR", color: "bg-amber-500" },
  ],
  "Offer": [
    { initials: "TM", color: "bg-pink-500" },
  ],
  "Hired": [
    { initials: "SM", color: "bg-emerald-500" },
    { initials: "JK", color: "bg-teal-500" },
  ],
};

const notifications = [
  { title: "High-potential match", message: "Sarah M. ready for fast-track" },
  { title: "Interview scheduled", message: "James K. confirmed for tomorrow" },
  { title: "Offer accepted", message: "Emma L. signed the contract" },
];

export const ProductHeroAnimation = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showBottleneck, setShowBottleneck] = useState(true);

  // Notification cycle
  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 2000);
    
    const cycleInterval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 400);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  // Bottleneck pulse
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setShowBottleneck(prev => !prev);
    }, 3000);
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="relative w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6 md:p-8">
      {/* Bottleneck Alert Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: showBottleneck ? 1 : 0.7, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-center gap-3"
      >
        <AlertTriangle className="w-5 h-5 text-amber-500" />
        <div>
          <p className="text-sm font-medium text-amber-700">Bottleneck detected</p>
          <p className="text-xs text-amber-600">Interview stage slowing down · 8 candidates waiting</p>
        </div>
      </motion.div>

      {/* Pipeline Kanban View */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            className={`bg-background rounded-lg border-2 border-border/40 ${stage.color} border-t-4 overflow-hidden ${
              stage.hasBottleneck ? 'ring-2 ring-amber-300/50' : ''
            }`}
          >
            {/* Stage Header */}
            <div className="flex items-center justify-between p-3 border-b border-border/30">
              <span className="text-sm font-medium text-foreground">{stage.name}</span>
              <span className="text-sm font-semibold text-muted-foreground">{stage.count}</span>
            </div>

            {/* Candidates */}
            <div className="p-3 min-h-[100px] space-y-2">
              {candidatesInStages[stage.name]?.map((candidate, j) => (
                <motion.div
                  key={j}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 + j * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center shadow-sm cursor-pointer`}
                >
                  <span className="text-white text-xs font-semibold">{candidate.initials}</span>
                </motion.div>
              ))}
              {(candidatesInStages[stage.name]?.length || 0) > 0 && stage.count > (candidatesInStages[stage.name]?.length || 0) && (
                <p className="text-xs text-muted-foreground mt-2">
                  +{stage.count - (candidatesInStages[stage.name]?.length || 0)} more
                </p>
              )}
              {!candidatesInStages[stage.name]?.length && (
                <span className="text-muted-foreground/40">—</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-background/60 rounded-xl border border-border/30 p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Conversion Funnel</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-600">8.3% hire rate</span>
          </div>
        </div>
        <div className="flex gap-1 h-2">
          <motion.div 
            className="bg-cyan-400 rounded-full flex-[24]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div 
            className="bg-violet-400 rounded-full flex-[12]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div 
            className="bg-amber-400 rounded-full flex-[8]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div 
            className="bg-emerald-400 rounded-full flex-[3]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div 
            className="bg-slate-600 rounded-full flex-[2]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </motion.div>

      {/* Notification */}
      <AnimatePresence mode="wait">
        {showNotification && (
          <motion.div
            key={currentNotification}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="absolute bottom-6 right-6 bg-primary text-primary-foreground rounded-xl px-5 py-4 shadow-xl max-w-[240px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4" />
              <p className="text-sm font-semibold">{notifications[currentNotification].title}</p>
            </div>
            <p className="text-xs opacity-85">
              {notifications[currentNotification].message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
