import { Building2, Users, TrendingUp } from "lucide-react";

export function SocialProofSection() {
  const proofs = [
    {
      icon: Users,
      text: "Built with recruiting teams and partners",
    },
    {
      icon: Building2,
      text: "Used in real hiring environments",
    },
    {
      icon: TrendingUp,
      text: "Designed to scale with growing organizations",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground">
              <proof.icon className="h-5 w-5 text-primary" />
              <span className="text-sm">{proof.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
