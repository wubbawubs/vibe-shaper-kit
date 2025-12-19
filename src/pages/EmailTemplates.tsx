import { EmailTemplatePreview } from "@/components/email-templates/EmailTemplatePreview";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EmailTemplates = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Email Templates</h1>
              <p className="text-muted-foreground">
                Preview van de email templates in One Rooted branding
              </p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug
            </Link>
          </Button>
        </div>
        
        <EmailTemplatePreview />
      </div>
    </div>
  );
};

export default EmailTemplates;
