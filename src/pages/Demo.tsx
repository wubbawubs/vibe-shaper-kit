import { useState } from "react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Calendar, MessageCircle } from "lucide-react";

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! We'll be in touch within 24 hours.");
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Request a demo
            </h1>
            <p className="text-xl text-muted-foreground">
              See OneRooted in action. No sales theatrics. Just clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="card-refined">
              <CardHeader>
                <CardTitle className="text-xl">Tell us about your hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What are you looking to solve?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your current hiring challenges..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Request demo
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* What to expect */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium mb-6">What to expect</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">30-minute walkthrough</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll show you how OneRooted works for your specific situation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Honest conversation</h3>
                      <p className="text-sm text-muted-foreground">
                        No pressure. We'll tell you if we're the right fit—and if we're not.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/50 border-border/50">
                <CardContent className="pt-6 pb-6">
                  <p className="text-sm text-muted-foreground italic">
                    "The demo was refreshingly direct. They understood our challenges 
                    immediately and showed exactly how OneRooted would help."
                  </p>
                  <p className="text-sm font-medium mt-4">— Head of Talent, Tech Company</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Demo;
