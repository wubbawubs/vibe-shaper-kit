import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvitationEmailTemplate } from "./InvitationEmailTemplate";
import { WelcomeEmailTemplate } from "./WelcomeEmailTemplate";
import { PasswordResetEmailTemplate } from "./PasswordResetEmailTemplate";

export const EmailTemplatePreview = () => {
  const [activeTemplate, setActiveTemplate] = useState("invitation");

  return (
    <div className="space-y-6">
      <Tabs value={activeTemplate} onValueChange={setActiveTemplate}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invitation">Uitnodiging</TabsTrigger>
          <TabsTrigger value="welcome">Welkom</TabsTrigger>
          <TabsTrigger value="password-reset">Wachtwoord Reset</TabsTrigger>
        </TabsList>
        
        <TabsContent value="invitation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Uitnodiging nieuwe gebruiker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <InvitationEmailTemplate
                  recipientName="Jan de Vries"
                  inviterName="Lisa Bakker"
                  organizationName="TechCorp B.V."
                  role="Recruiter"
                  inviteLink="https://app.onerooted.nl/invite/abc123"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="welcome" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Welkom na registratie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <WelcomeEmailTemplate
                  userName="Jan de Vries"
                  organizationName="TechCorp B.V."
                  loginLink="https://app.onerooted.nl/login"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="password-reset" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Wachtwoord reset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <PasswordResetEmailTemplate
                  userName="Jan de Vries"
                  resetLink="https://app.onerooted.nl/reset/xyz789"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
