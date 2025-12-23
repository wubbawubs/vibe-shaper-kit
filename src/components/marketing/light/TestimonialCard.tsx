import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const rating = testimonial.rating || 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <CardContent className="pt-6 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
          
          {/* Quote icon */}
          <div className="relative">
            <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors" />
          </div>

          {/* Rating stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-accent fill-accent" : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-muted-foreground mb-6 italic leading-relaxed">
            "{testimonial.quote}"
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
