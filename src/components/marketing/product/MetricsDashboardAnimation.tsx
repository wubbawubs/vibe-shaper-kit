import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Target, Users, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const metrics = [
  { 
    label: "Process Efficiency", 
    value: 87, 
    suffix: "%", 
    trend: "+12%",
    trendUp: true,
    icon: Target,
    color: "text-emerald-500"
  },
  { 
    label: "Avg. Time-to-Hire", 
    value: 21, 
    suffix: " days", 
    trend: "vs 45 avg",
    trendUp: true,
    icon: Clock,
    color: "text-primary"
  },
  { 
    label: "Quality Score", 
    value: 8.4, 
    suffix: "/10", 
    trend: "+0.6",
    trendUp: true,
    icon: BarChart3,
    color: "text-accent"
  },
  { 
    label: "Active Candidates", 
    value: 156, 
    suffix: "", 
    trend: "+23 this week",
    trendUp: true,
    icon: Users,
    color: "text-purple-500"
  },
];

const sourceData = [
  { name: "LinkedIn", value: 45, color: "bg-blue-500" },
  { name: "Referrals", value: 28, color: "bg-emerald-500" },
  { name: "Job Boards", value: 18, color: "bg-amber-500" },
  { name: "Direct", value: 9, color: "bg-purple-500" },
];

export const MetricsDashboardAnimation = () => {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const timers = metrics.map((metric, index) => {
      return setTimeout(() => {
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = metric.value;
          return newValues;
        });
      }, 500 + index * 200);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6">
      {/* Main metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/60 rounded-lg border border-border/50 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-baseline gap-1"
              >
                <span className="text-2xl font-semibold">
                  {animatedValues[index].toFixed(metric.suffix === "/10" ? 1 : 0)}
                </span>
                <span className="text-sm text-muted-foreground">{metric.suffix}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="flex items-center gap-1 mt-1"
              >
                {metric.trendUp ? (
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                )}
                <span className="text-xs text-emerald-500">{metric.trend}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Source breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-background/60 rounded-lg border border-border/50 p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Source Effectiveness</span>
          <span className="text-xs text-muted-foreground">Last 30 days</span>
        </div>

        <div className="space-y-3">
          {sourceData.map((source, index) => (
            <div key={source.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{source.name}</span>
                <span className="font-medium">{source.value}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${source.value}%` }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  className={`h-full ${source.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mini chart simulation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 flex items-end justify-between h-16 px-4"
      >
        {[35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 82, 87].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: 1.4 + i * 0.05, duration: 0.3 }}
            className="w-2 bg-primary/60 rounded-t"
          />
        ))}
      </motion.div>
      <p className="text-xs text-center text-muted-foreground mt-2">Process efficiency trend (12 months)</p>
    </div>
  );
};
