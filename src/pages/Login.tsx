import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Lock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import onerootedLogo from "@/assets/onerooted-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim()) return;

    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('email_leads')
      .insert({ email: leadEmail.trim() });

    if (error) {
      if (error.code === '23505') {
        toast({
          title: "Already registered",
          description: "This email address is already on our list.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } else {
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "You'll receive updates soon.",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Login Preview Card */}
      <Card className="w-full max-w-md relative z-10 shadow-xl border-border/50">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <img 
              src={onerootedLogo} 
              alt="One Rooted" 
              className="h-16 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
          <CardDescription>
            Log in to your One Rooted account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
            >
              Stay informed
            </Button>
          </form>

          {/* Marketing tagline */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              A new standard
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lead Capture Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-xl p-8 animate-scale-in">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl font-bold leading-tight">
              Ready to transform your hiring strategy?
            </DialogTitle>
          </DialogHeader>
          
          <DialogDescription asChild>
            <div className="space-y-5 pt-4">
              <p className="text-base text-foreground/80 leading-relaxed">
                We are building a platform set to redefine the future of talent acquisition.
              </p>
              
              <p className="text-lg font-semibold text-foreground">
                Want to be the first to receive updates?
              </p>
              
              <p className="text-sm text-muted-foreground">
                Leave your email below to stay informed on our progress and launch.
              </p>
            </div>
          </DialogDescription>
          
          <div className="my-4 border-t border-border" />
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-3 animate-fade-in">
              <CheckCircle className="h-14 w-14 text-primary" />
              <p className="text-xl font-semibold">Thank you for your interest!</p>
              <p className="text-muted-foreground text-center">
                You'll receive updates on our progress soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="lead-email" className="text-sm font-medium">Email address</Label>
                <Input
                  id="lead-email"
                  type="email"
                  placeholder="your@email.com"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  required
                  className="input-glow h-11"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-glow h-11 text-base font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get updates"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
