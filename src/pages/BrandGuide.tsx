import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import onerootedLogo from "@/assets/onerooted-logo.png";

const BrandGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-8">
          <div className="flex items-center gap-5">
            <img src={onerootedLogo} alt="One Rooted" className="h-14 w-auto" />
            <div>
              <h1 className="text-2xl font-semibold text-foreground">One Rooted</h1>
              <p className="text-muted-foreground text-sm">Brand & Design System Guide</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-16">
        {/* Logo Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Logo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-refined">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Light Background</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-10 bg-background rounded-lg border">
                <img src={onerootedLogo} alt="One Rooted Logo" className="h-20 w-auto" />
              </CardContent>
            </Card>
            <Card className="card-refined">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Dark Background</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-10 bg-foreground rounded-lg">
                <img src={onerootedLogo} alt="One Rooted Logo" className="h-20 w-auto brightness-0 invert" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Kleurenpalet</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Primary" variable="primary" className="bg-primary" textClass="text-primary-foreground" />
            <ColorSwatch name="Accent" variable="accent" className="bg-accent" textClass="text-accent-foreground" />
            <ColorSwatch name="Success" variable="success" className="bg-success" textClass="text-success-foreground" />
            <ColorSwatch name="Warning" variable="warning" className="bg-warning" textClass="text-warning-foreground" />
            <ColorSwatch name="Destructive" variable="destructive" className="bg-destructive" textClass="text-destructive-foreground" />
            <ColorSwatch name="Muted" variable="muted" className="bg-muted" textClass="text-muted-foreground" />
          </div>

          <h3 className="text-base font-medium mt-10 mb-4">Neutrale Kleuren</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch name="Background" variable="background" className="bg-background border" textClass="text-foreground" />
            <ColorSwatch name="Card" variable="card" className="bg-card border" textClass="text-card-foreground" />
            <ColorSwatch name="Secondary" variable="secondary" className="bg-secondary" textClass="text-secondary-foreground" />
            <ColorSwatch name="Border" variable="border" className="bg-border" textClass="text-foreground" />
          </div>

          <h3 className="text-base font-medium mt-10 mb-4">Sidebar Kleuren</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch name="Sidebar BG" variable="sidebar" className="bg-sidebar" textClass="text-sidebar-foreground" />
            <ColorSwatch name="Sidebar Primary" variable="sidebar-primary" className="bg-sidebar-primary" textClass="text-sidebar-primary-foreground" />
            <ColorSwatch name="Sidebar Accent" variable="sidebar-accent" className="bg-sidebar-accent" textClass="text-sidebar-accent-foreground" />
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Typografie</h2>
          <Card className="card-refined">
            <CardContent className="pt-8 space-y-8">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Font Family</p>
                <p className="text-lg">Plus Jakarta Sans</p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">H1 - 36px Medium</p>
                  <h1 className="text-4xl font-medium">Heading One</h1>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">H2 - 28px Medium</p>
                  <h2 className="text-3xl font-medium">Heading Two</h2>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">H3 - 22px Medium</p>
                  <h3 className="text-2xl font-medium">Heading Three</h3>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Body - 16px Regular</p>
                  <p className="text-base">Dit is een voorbeeld van body tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Small - 14px Regular</p>
                  <p className="text-sm">Dit is een voorbeeld van kleine tekst.</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Muted - 14px</p>
                  <p className="text-sm text-muted-foreground">Dit is een voorbeeld van muted tekst.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Buttons</h2>
          <Card className="card-refined">
            <CardContent className="pt-8">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Variants</p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-subtle">Primary</Button>
                <Button variant="secondary" className="btn-subtle">Secondary</Button>
                <Button variant="outline" className="btn-subtle">Outline</Button>
                <Button variant="ghost" className="btn-subtle">Ghost</Button>
                <Button variant="destructive" className="btn-subtle">Destructive</Button>
                <Button className="btn-accent">Accent CTA</Button>
              </div>
              <p className="text-xs text-muted-foreground mb-4 mt-8 uppercase tracking-wider">Sizes</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" className="btn-subtle">Small</Button>
                <Button size="default" className="btn-subtle">Default</Button>
                <Button size="lg" className="btn-subtle">Large</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Badges</h2>
          <Card className="card-refined">
            <CardContent className="pt-8">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-success text-success-foreground">Actief</Badge>
                <Badge className="bg-warning text-warning-foreground">In Review</Badge>
                <Badge className="bg-accent text-accent-foreground">Premium</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-lg font-medium mb-6">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-refined">
              <CardHeader>
                <CardTitle className="text-base">Default Card</CardTitle>
                <CardDescription>Dit is een standaard card component.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card content komt hier.</p>
              </CardContent>
            </Card>
            <Card className="card-refined shadow-subtle">
              <CardHeader>
                <CardTitle className="text-base">Subtle Shadow</CardTitle>
                <CardDescription>Een card met subtiele schaduw.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Minimale diepte door shadow-subtle.</p>
              </CardContent>
            </Card>
            <Card className="card-refined shadow-card">
              <CardHeader>
                <CardTitle className="text-base">Card Shadow</CardTitle>
                <CardDescription>Een card met standaard schaduw.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Verfijnde schaduw door shadow-card.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-lg font-medium mb-6">Form Elements</h2>
          <Card className="card-refined">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                <div className="space-y-3">
                  <Label htmlFor="example-input" className="text-sm">Input Label</Label>
                  <Input id="example-input" placeholder="Placeholder tekst..." className="input-refined" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="disabled-input" className="text-sm">Disabled Input</Label>
                  <Input id="disabled-input" placeholder="Disabled..." disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spacing Guide */}
        <section>
          <h2 className="text-lg font-medium mb-6">Spacing & Border Radius</h2>
          <Card className="card-refined">
            <CardContent className="pt-8 space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Border Radius</p>
                <div className="flex flex-wrap gap-4">
                  <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-xs">sm</div>
                  <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">md</div>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">lg</div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">full</div>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Spacing Scale</p>
                <p className="text-sm text-muted-foreground">Base unit: 4px (Tailwind spacing scale). Gebruik: p-1 (4px), p-2 (8px), p-4 (16px), p-6 (24px), p-8 (32px).</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Radius</p>
                <p className="text-sm text-muted-foreground">Default radius: 0.5rem (8px) - strakker en moderner dan standaard.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Effects Guide */}
        <section>
          <h2 className="text-lg font-medium mb-6">Effecten & Animaties</h2>
          <Card className="card-refined">
            <CardContent className="pt-8 space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Hover Effecten</p>
                <p className="text-sm text-muted-foreground mb-4">Subtiele opacity en translate transities (150-200ms). Geen glow of lift effecten.</p>
                <div className="flex gap-4">
                  <Button className="btn-subtle">Hover mij</Button>
                  <Card className="card-refined p-4 cursor-pointer">
                    <span className="text-sm">Hover card</span>
                  </Card>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Stagger Animatie</p>
                <p className="text-sm text-muted-foreground">Gebruik .animate-stagger op parent voor gestaffelde fade-in effecten.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

const ColorSwatch = ({ 
  name, 
  variable, 
  className, 
  textClass 
}: { 
  name: string; 
  variable: string; 
  className: string; 
  textClass: string;
}) => (
  <div className="space-y-2">
    <div className={`h-20 rounded-lg ${className} flex items-end p-3`}>
      <span className={`text-xs font-medium ${textClass}`}>{name}</span>
    </div>
    <p className="text-xs text-muted-foreground">--{variable}</p>
  </div>
);

export default BrandGuide;