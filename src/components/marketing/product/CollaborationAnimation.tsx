import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const users = [
  { name: "Anna", role: "Recruiter", initials: "AN", color: "bg-blue-500" },
  { name: "Mark", role: "Hiring Manager", initials: "MK", color: "bg-purple-500" },
  { name: "Partner", role: "Bureau", initials: "PA", color: "bg-amber-500" },
];

const allActivities = [
  { user: 0, action: "verplaatste", target: "Sarah M.", time: "2m" },
  { user: 1, action: "beoordeelde", target: "James K.", time: "5m" },
  { user: 2, action: "stuurde", target: "3 kandidaten", time: "12m" },
  { user: 0, action: "reageerde op", target: "Emma L.", time: "15m" },
  { user: 1, action: "keurde goed", target: "David R.", time: "23m" },
  { user: 2, action: "uploade CV", target: "Lisa B.", time: "28m" },
  { user: 0, action: "plande gesprek", target: "Mark V.", time: "31m" },
  { user: 1, action: "gaf feedback", target: "Anna K.", time: "35m" },
];

export const CollaborationAnimation = () => {
  const [visibleActivities, setVisibleActivities] = useState<number[]>([]);
  const [typingUser, setTypingUser] = useState<number | null>(null);
  const [activityWindow, setActivityWindow] = useState({ start: 0, count: 5 });

  // Initial activity reveal
  useEffect(() => {
    const initialCount = 5;
    for (let i = 0; i < initialCount; i++) {
      setTimeout(() => {
        setVisibleActivities(prev => [...prev, i]);
      }, 500 + i * 400);
    }
  }, []);

  // Continuous activity cycling
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setActivityWindow(prev => {
        const newStart = (prev.start + 1) % allActivities.length;
        return { ...prev, start: newStart };
      });
      
      // Add new activity to visible list
      setVisibleActivities(prev => {
        const newIndex = (prev[prev.length - 1] + 1) % allActivities.length;
        const updated = [...prev.slice(-4), newIndex];
        return updated;
      });
    }, 3000);

    return () => clearInterval(cycleInterval);
  }, []);

  // Typing indicator
  useEffect(() => {
    const typingInterval = setInterval(() => {
      const shouldShow = Math.random() > 0.5;
      if (shouldShow) {
        const randomUser = Math.floor(Math.random() * users.length);
        setTypingUser(randomUser);
        setTimeout(() => setTypingUser(null), 2000);
      }
    }, 4000);

    return () => clearInterval(typingInterval);
  }, []);

  const getVisibleActivityIndices = () => {
    return visibleActivities.slice(-5);
  };

  return (
    <div className="w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Users online */}
        <div>
          <p className="text-xs text-muted-foreground/70 mb-4">Online</p>
          
          <div className="space-y-3">
            {users.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-3 bg-background/60 rounded-lg border border-border/50 p-3"
              >
                <div className="relative">
                  <div className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-medium">{user.initials}</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground/70">{user.role}</p>
                </div>
                {typingUser === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1"
                  >
                    <span className="text-xs text-muted-foreground">typing</span>
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="text-muted-foreground"
                    >
                      ...
                    </motion.span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <p className="text-xs text-muted-foreground/70 mb-4">Activiteit</p>
          
          <div className="space-y-2 max-h-[250px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              {getVisibleActivityIndices().map((activityIndex) => {
                const activity = allActivities[activityIndex];
                const user = users[activity.user];
                
                return (
                  <motion.div
                    key={`${activityIndex}-${activity.target}`}
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    layout
                    className="bg-background/60 rounded-lg border border-border/50 p-3"
                  >
                    <div className="flex items-start gap-2">
                      <div className={`w-6 h-6 ${user.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-medium">
                          {user.initials.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs">
                          <span className="font-medium">{user.name}</span>
                          {" "}{activity.action}{" "}
                          <span className="text-muted-foreground">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground/50 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Shared context indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-6 pt-4 border-t border-border/20 text-center"
      >
        <p className="text-xs text-muted-foreground/60">
          Één systeem. Alle stakeholders. Real-time.
        </p>
      </motion.div>
    </div>
  );
};
