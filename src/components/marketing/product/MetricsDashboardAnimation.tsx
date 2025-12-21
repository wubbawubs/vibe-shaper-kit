import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Target, Users, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const baseMetrics = [
  { 
    label: "Process Efficiency", 
    baseValue: 87, 
    suffix: "%", 
    trend: "+12%",
    trendUp: true,
    icon: Target,
    color: "text-emerald-500"
  },
  { 
    label: "Avg. Time-to-Hire", 
    baseValue: 21, 
    suffix: " days", 
    trend: "vs 45 avg",
    trendUp: true,
    icon: Clock,
    color: "text-primary"
  },
  { 
    label: "Quality Score", 
    baseValue: 8.4, 
    suffix: "/10", 
    trend: "+0.6",
    trendUp: true,
    icon: BarChart3,
    color: "text-accent"
  },
  { 
    label: "Active Candidates", 
    baseValue: 156, 
    suffix: "", 
    trend: "+23 this week",
    trendUp: true,
    icon: Users,
    color: "text-purple-500"
  },
];

const sourceData = [
  { name: "LinkedIn", baseValue: 45, color: "bg-blue-500" },
  { name: "Referrals", baseValue: 28, color: "bg-emerald-500" },
  { name: "Job Boards", baseValue: 18, color: "bg-amber-500" },
  { name: "Direct", baseValue: 9, color: "bg-purple-500" },
];

export const MetricsDashboardAnimation = () => {
  const [metricValues, setMetricValues] = useState(baseMetrics.map(() => 0));
  const [sourceValues, setSourceValues] = useState(sourceData.map(s => s.baseValue));
  const [chartHeights, setChartHeights] = useState([35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 82, 87]);
  const [initialized, setInitialized] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Initial animation
  useEffect(() => {
    const timers = baseMetrics.map((metric, index) => {
      return setTimeout(() => {
        setMetricValues(prev => {
          const newValues = [...prev];
          newValues[index] = metric.baseValue;
          return newValues;
        });
      }, prefersReducedMotion ? 0 : 500 + index * 200);
    });

    setTimeout(() => setInitialized(true), prefersReducedMotion ? 0 : 1500);

    return () => timers.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  // Continuous metric fluctuation - clamped to ±2% of base
  useEffect(() => {
    if (!initialized || prefersReducedMotion) return;

    const fluctuateInterval = setInterval(() => {
      setMetricValues(prev => 
        prev.map((val, i) => {
          const base = baseMetrics[i].baseValue;
          const isDecimal = baseMetrics[i].suffix === "/10";
          // Clamped fluctuation: ±2% for decimals, ±2 for integers
          const maxFluctuation = isDecimal ? 0.1 : 2;
          const fluctuation = (Math.random() - 0.5) * 2 * maxFluctuation;
          const newValue = base + fluctuation;
          return isDecimal 
            ? Math.round(newValue * 10) / 10
            : Math.round(newValue);
        })
      );
    }, 2500);

    return () => clearInterval(fluctuateInterval);
  }, [initialized, prefersReducedMotion]);

  // Source bar fluctuation - clamped to ±2% of base
  useEffect(() => {
    if (!initialized || prefersReducedMotion) return;

    const sourceInterval = setInterval(() => {
      setSourceValues(prev => 
        prev.map((val, i) => {
          const base = sourceData[i].baseValue;
          // Clamp fluctuation to ±2% of base value
          const maxFluctuation = base * 0.02;
          const fluctuation = (Math.random() - 0.5) * 2 * maxFluctuation;
          return Math.round((base + fluctuation) * 10) / 10;
        })
      );
    }, 3000);

    return () => clearInterval(sourceInterval);
  }, [initialized, prefersReducedMotion]);

  // Chart animation
  useEffect(() => {
    if (!initialized || prefersReducedMotion) return;

    const chartInterval = setInterval(() => {
      setChartHeights(prev => {
        const newHeights = [...prev];
        newHeights.shift();
        const lastVal = newHeights[newHeights.length - 1];
        // More controlled chart movement
        const newVal = Math.max(35, Math.min(92, lastVal + (Math.random() - 0.5) * 10));
        newHeights.push(newVal);
        return newHeights;
      });
    }, 800);

    return () => clearInterval(chartInterval);
  }, [initialized, prefersReducedMotion]);

  return (
    <div className="w-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden p-6" aria-hidden="true">
      {/* Main metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {baseMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="bg-background/60 rounded-lg border border-border/50 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5 + index * 0.2 }}
                className="flex items-baseline gap-1"
              >
                <motion.span 
                  className="text-2xl font-semibold"
                  animate={prefersReducedMotion ? {} : { scale: initialized ? [1, 1.02, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                  key={metricValues[index]}
                >
                  {metricValues[index].toFixed(metric.suffix === "/10" ? 1 : 0)}
                </motion.span>
                <span className="text-sm text-muted-foreground">{metric.suffix}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.8 + index * 0.2 }}
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
        transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
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
                <motion.span 
                  className="font-medium"
                  key={Math.round(sourceValues[index])}
                >
                  {Math.round(sourceValues[index])}%
                </motion.span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${sourceValues[index]}%` }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
                  className={`h-full ${source.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mini chart - better spaced bars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.2 }}
        className="mt-4 flex items-end justify-between h-16 px-2 gap-1"
      >
        {chartHeights.map((height, i) => (
          <motion.div
            key={i}
            animate={{ height: `${height}%` }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
            className="flex-1 max-w-3 bg-primary/60 rounded-t"
          />
        ))}
      </motion.div>
      <p className="text-xs text-center text-muted-foreground mt-2">Process efficiency trend (12 months)</p>
    </div>
  );
};
