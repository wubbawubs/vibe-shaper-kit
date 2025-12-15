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
          title: "Al geregistreerd",
          description: "Dit e-mailadres staat al op onze lijst.",
        });
      } else {
        toast({
          title: "Er ging iets mis",
          description: "Probeer het later opnieuw.",
          variant: "destructive",
        });
      }
    } else {
      setIsSubmitted(true);
      toast({
        title: "Bedankt!",
        description: "Je ontvangt binnenkort de eerste updates.",
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
          <CardTitle className="text-2xl font-semibold">Welkom terug</CardTitle>
          <CardDescription>
            Log in op je One Rooted account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Wachtwoord</Label>
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
              Inloggen
            </Button>
          </form>

          {/* Marketing tagline */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              Een nieuwe standaard
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lead Capture Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold leading-relaxed">
              Dit is de toekomst van Talent Acquisition.
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-4 pt-4 text-base text-foreground/80">
                <p>
                  Wij lanceren het enige platform dat de wrijving uit het end-to-end hiring-proces elimineert. Dit is geen ATS-upgrade; dit is een strategische asset die uw tijd tot hire meetbaar reduceert en de kwaliteit van aannames garandeert.
                </p>
                <p className="font-medium text-foreground">
                  Wilt u toegang tot de meest geavanceerde wervingsarchitectuur in de markt?
                </p>
                <p className="text-muted-foreground">
                  Laat uw e-mailadres achter. Ontvang de eerste strategische updates.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-3">
              <CheckCircle className="h-12 w-12 text-primary" />
              <p className="text-lg font-medium">Bedankt voor uw interesse!</p>
              <p className="text-muted-foreground text-center">
                U ontvangt binnenkort de eerste strategische updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lead-email">E-mailadres</Label>
                <Input
                  id="lead-email"
                  type="email"
                  placeholder="uw@email.nl"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  required
                  className="input-glow"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  "Ontvang updates"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
