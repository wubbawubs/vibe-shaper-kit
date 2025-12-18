import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Heart, Target, Zap, Users, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Thomas van der Berg",
    role: "Co-Founder & CEO",
    bio: "Former Head of Talent at scale-ups. Obsessed with fixing broken hiring processes.",
    linkedin: "#",
  },
  {
    name: "Lisa de Vries",
    role: "Co-Founder & CPO",
    bio: "Product leader with 10+ years building HR tech. Believes hiring should feel human.",
    linkedin: "#",
  },
  {
    name: "Mark Janssen",
    role: "CTO",
    bio: "Engineering veteran. Previously built infrastructure at multiple unicorns.",
    linkedin: "#",
  },
  {
    name: "Sophie Bakker",
    role: "Head of Customer Success",
    bio: "Passionate about helping teams achieve hiring excellence. Always one step ahead.",
    linkedin: "#",
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    bio: "Full-stack wizard. Turns complex problems into elegant solutions.",
    linkedin: "#",
  },
  {
    name: "Anna Müller",
    role: "Head of Design",
    bio: "Design thinking advocate. Makes the complex feel simple and beautiful.",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Heart,
    title: "Human-first",
    description: "Technology should amplify human connection, not replace it.",
  },
  {
    icon: Target,
    title: "Outcome-obsessed",
    description: "We measure success by the quality of hires, not features shipped.",
  },
  {
    icon: Zap,
    title: "Radically transparent",
    description: "No hidden agendas. Clear communication always.",
  },
  {
    icon: Users,
    title: "Collaborative by design",
    description: "The best decisions come from diverse perspectives working together.",
  },
];

const Team = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm font-medium text-primary mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Meet the team
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              Building the future of{" "}
              <span className="text-primary">hiring together</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate team of builders, recruiters, and dreamers on a mission to make hiring work for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-refined group h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center">
                      <span className="text-2xl font-medium text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                        <p className="text-sm text-primary mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </div>
                      
                      <a 
                        href={member.linkedin}
                        className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Our values</p>
            <h2 className="text-3xl md:text-4xl font-medium">What drives us</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 mx-auto mb-5 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Part of One-Time Group */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Our story</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Part of the One-Time Group</h2>
            <p className="text-lg text-muted-foreground mb-8">
              OneRooted was born from the One-Time Group's mission to transform how organizations 
              find and nurture talent. With deep roots in recruitment and HR technology, we bring 
              decades of combined experience to every feature we build.
            </p>
            <p className="text-muted-foreground">
              Based in the Netherlands, we're building a global product for teams everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-refined overflow-hidden relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-50" />
              <div className="absolute inset-[1px] bg-card rounded-xl" />
              
              <CardContent className="relative py-12 px-8 md:px-12 text-center">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  Want to join us?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  We're always looking for talented people who share our mission. Check out our 
                  open positions or reach out directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-accent">
                    <Link to="/demo" className="flex items-center gap-2">
                      View open positions
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/demo">Get in touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full mb-8">
              <Users className="h-4 w-4" />
              <span>Trusted by 100+ hiring teams</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to transform your hiring?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the teams that have already upgraded from fragmented tools to a unified Hiring OS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo" className="flex items-center gap-2">
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/product">Learn more</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Team;