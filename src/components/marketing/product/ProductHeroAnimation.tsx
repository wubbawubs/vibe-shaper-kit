import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const stages = ["New", "Screen", "Interview", "Offer"];

const candidates = [
  { name: "Sarah M.", initials: "SM", score: 94, color: "bg-blue-500", source: "LinkedIn" },
  { name: "James K.", initials: "JK", score: 88, color: "bg-emerald-500", source: "Referral" },
  { name: "Emma L.", initials: "EL", score: 91, color: "bg-purple-500", source: "Website" },
];

const notifications = [
  { title: "High-potential match", message: "Sarah M. ready for fast-track" },
  { title: "Interview scheduled", message: "James K. confirmed for tomorrow" },
  { title: "Offer accepted", message: "Emma L. signed the contract" },
];

export const ProductHeroAnimation = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  // Stage flow animation
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 3000);

    return () => clearInterval(stageInterval);
  }, []);

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

  return (
    <div className="relative w-full h-[420px] md:h-[480px] bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl border border-border/50 overflow-hidden">
      <div className="absolute inset-0 p-6 md:p-8">
        {/* Pipeline flow header */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{
                  scale: activeStage === i ? 1.05 : 1,
                  backgroundColor: activeStage === i 
                    ? "hsl(var(--primary))" 
                    : "hsl(var(--background))"
                }}
                transition={{ duration: 0.3 }}
                className="px-4 py-2 rounded-lg border border-border/50 flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    backgroundColor: activeStage >= i 
                      ? "hsl(var(--primary))" 
                      : "hsl(var(--muted))"
                  }}
                  className="w-2 h-2 rounded-full"
                />
                <span className={`text-sm font-medium transition-colors ${
                  activeStage === i ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {stage}
                </span>
              </motion.div>
              {i < stages.length - 1 && (
                <motion.div
                  animate={{ opacity: activeStage > i ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Candidate cards */}
        <div className="space-y-3 max-w-2xl mx-auto">
          {candidates.map((candidate, i) => (
            <motion.div
              key={candidate.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.01, x: 4 }}
              className="bg-background/90 backdrop-blur-sm rounded-xl border border-border/50 p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <motion.div 
                  className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center shadow-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white font-semibold">{candidate.initials}</span>
                </motion.div>
                
                {/* Info */}
                <div>
                  <p className="font-semibold text-foreground">{candidate.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-muted-foreground">{stages[activeStage]}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {candidate.source}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Score */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-lg font-bold text-foreground">{candidate.score}%</span>
                </div>
                
                {candidate.score > 90 && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

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

        {/* Subtle flow indicator */}
        <motion.div 
          className="absolute bottom-6 left-6 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <ArrowRight className="w-3 h-3 text-primary" />
          </motion.div>
          <span className="text-xs text-muted-foreground">Candidates flow through stages</span>
        </motion.div>
      </div>
    </div>
  );
};
