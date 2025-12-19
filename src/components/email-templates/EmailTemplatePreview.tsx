import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { InvitationEmailTemplate } from "./InvitationEmailTemplate";
import { WelcomeEmailTemplate } from "./WelcomeEmailTemplate";
import { PasswordResetEmailTemplate } from "./PasswordResetEmailTemplate";

export const EmailTemplatePreview = () => {
  const [activeTemplate, setActiveTemplate] = useState("invitation");
  const [language, setLanguage] = useState<"nl" | "en">("nl");

  return (
    <div className="space-y-6">
      {/* Language toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Taal:</span>
        <div className="flex gap-1">
          <Button 
            variant={language === "nl" ? "default" : "outline"} 
            size="sm"
            onClick={() => setLanguage("nl")}
          >
            NL
          </Button>
          <Button 
            variant={language === "en" ? "default" : "outline"} 
            size="sm"
            onClick={() => setLanguage("en")}
          >
            EN
          </Button>
        </div>
      </div>

      <Tabs value={activeTemplate} onValueChange={setActiveTemplate}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invitation">Uitnodiging</TabsTrigger>
          <TabsTrigger value="welcome">Welkom</TabsTrigger>
          <TabsTrigger value="password-reset">Wachtwoord Reset</TabsTrigger>
        </TabsList>
        
        <TabsContent value="invitation" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                {language === "nl" 
                  ? "Subject: Lisa Bakker heeft je uitgenodigd in OneRooted"
                  : "Subject: Lisa Bakker invited you to OneRooted"
                }
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border-t">
                <InvitationEmailTemplate
                  recipientName="Jan"
                  inviterName="Lisa Bakker"
                  organizationName="TechCorp B.V."
                  role="Recruiter"
                  inviteLink="https://app.onerooted.nl/invite/abc123"
                  language={language}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="welcome" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                {language === "nl" 
                  ? "Subject: Welkom bij OneRooted – je account is klaar"
                  : "Subject: Welcome to OneRooted — your account is ready"
                }
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border-t">
                <WelcomeEmailTemplate
                  userName="Jan"
                  organizationName="TechCorp B.V."
                  loginLink="https://app.onerooted.nl/login"
                  language={language}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="password-reset" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                {language === "nl" 
                  ? "Subject: Wachtwoord resetten voor OneRooted"
                  : "Subject: Reset your OneRooted password"
                }
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border-t">
                <PasswordResetEmailTemplate
                  userName="Jan"
                  resetLink="https://app.onerooted.nl/reset/xyz789"
                  language={language}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
