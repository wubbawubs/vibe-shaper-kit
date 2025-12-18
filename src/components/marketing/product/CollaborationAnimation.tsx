import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const users = [
  { name: "Anna (HR)", role: "Recruiter", avatar: "A", color: "bg-blue-500" },
  { name: "Mark", role: "Hiring Manager", avatar: "M", color: "bg-purple-500" },
  { name: "External", role: "Partner", avatar: "E", color: "bg-amber-500" },
];

const activities = [
  { user: 0, action: "moved", target: "Sarah M.", time: "2m ago" },
  { user: 1, action: "rated", target: "James K.", time: "5m ago" },
  { user: 2, action: "submitted", target: "3 candidates", time: "12m ago" },
  { user: 0, action: "commented on", target: "Emma L.", time: "15m ago" },
  { user: 1, action: "approved", target: "David R.", time: "23m ago" },
];

export const CollaborationAnimation = () => {
  const [visibleActivities, setVisibleActivities] = useState<number[]>([]);

  useEffect(() => {
    activities.forEach((_, index) => {
      setTimeout(() => {
        setVisibleActivities(prev => [...prev, index]);
      }, 500 + index * 600);
    });
  }, []);

  return (
    <div className="w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Users online */}
        <div>
          <p className="text-xs text-muted-foreground mb-4">Active now</p>
          
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
                  <div className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                    {user.avatar}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <p className="text-xs text-muted-foreground mb-4">Recent activity</p>
          
          <div className="space-y-2 max-h-[250px] overflow-hidden">
            {activities.map((activity, index) => {
              const user = users[activity.user];
              const isVisible = visibleActivities.includes(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={isVisible ? { opacity: 1, y: 0, height: "auto" } : {}}
                  transition={{ duration: 0.3 }}
                  className="bg-background/60 rounded-lg border border-border/50 p-3"
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-6 h-6 ${user.color} rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}>
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs">
                        <span className="font-medium">{user.name.split(' ')[0]}</span>
                        {" "}{activity.action}{" "}
                        <span className="text-muted-foreground">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shared context indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-6 pt-4 border-t border-border/30 text-center"
      >
        <p className="text-xs text-muted-foreground">
          Same data. Every stakeholder. Real-time.
        </p>
      </motion.div>
    </div>
  );
};
