import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EmailTemplatePreview } from "@/components/email-templates/EmailTemplatePreview";
import { Mail } from "lucide-react";

const EmailTemplates = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
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
        
        <EmailTemplatePreview />
      </div>
    </DashboardLayout>
  );
};

export default EmailTemplates;
