import { motion } from "framer-motion";
import { User, Zap, CheckCircle, ArrowRight } from "lucide-react";

const candidates = [
  { name: "Sarah M.", score: 94, stage: "Interview" },
  { name: "James K.", score: 88, stage: "Screening" },
  { name: "Emma L.", score: 91, stage: "Offer" },
];

export const ProductHeroAnimation = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-muted/30 rounded-2xl border border-border/50 overflow-hidden">
      {/* Flow visualization */}
      <div className="absolute inset-0 p-6">
        {/* Pipeline stages */}
        <div className="flex items-center justify-between mb-8 px-4">
          {["Intake", "Score", "Review", "Decide"].map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-medium text-primary">{i + 1}</span>
              </div>
              <span className="text-sm text-muted-foreground hidden sm:block">{stage}</span>
              {i < 3 && (
                <ArrowRight className="w-4 h-4 text-border ml-2 hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated candidates flowing through */}
        <div className="space-y-4">
          {candidates.map((candidate, i) => (
            <motion.div
              key={candidate.name}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.5 + i * 0.3, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{candidate.name}</p>
                  <p className="text-xs text-muted-foreground">Stage: {candidate.stage}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.3, duration: 0.3 }}
                  className="flex items-center gap-1"
                >
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{candidate.score}%</span>
                </motion.div>
                
                {candidate.score > 90 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.3, duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert notification */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.4 }}
          className="absolute bottom-6 right-6 bg-primary text-primary-foreground rounded-lg px-4 py-3 shadow-lg max-w-[200px]"
        >
          <p className="text-xs font-medium">🎯 High-potential match</p>
          <p className="text-xs opacity-80 mt-1">Sarah M. ready for fast-track</p>
        </motion.div>
      </div>
    </div>
  );
};
