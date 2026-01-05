import { Building2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { partners, Partner } from '@/data/mockPartnersData';

interface PartnerFilterProps {
  value: string;
  onValueChange: (value: string) => void;
  showAllOption?: boolean;
  className?: string;
}

export function PartnerFilter({ 
  value, 
  onValueChange, 
  showAllOption = true,
  className = ''
}: PartnerFilterProps) {
  const visiblePartners = partners;

  // Don't show filter if there are no partners
  if (visiblePartners.length === 0) {
    return null;
  }

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`w-full sm:w-[200px] ${className}`}>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <SelectValue placeholder="Selecteer partner" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {showAllOption && (
          <SelectItem value="all">Alle partners</SelectItem>
        )}
        {visiblePartners.map((partner) => (
          <SelectItem key={partner.id} value={partner.id}>
            <div className="flex items-center gap-2">
              <span>{partner.name}</span>
              {partner.type === 'client' && (
                <span className="text-xs text-muted-foreground">(Klant)</span>
              )}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
