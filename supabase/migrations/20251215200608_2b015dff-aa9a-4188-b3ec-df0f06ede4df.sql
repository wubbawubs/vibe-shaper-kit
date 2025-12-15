-- Create table for email leads
CREATE TABLE public.email_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (no auth required for landing page)
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public landing page)
CREATE POLICY "Anyone can submit email" 
ON public.email_leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins could read (for later admin dashboard)
CREATE POLICY "No public reads" 
ON public.email_leads 
FOR SELECT 
USING (false);