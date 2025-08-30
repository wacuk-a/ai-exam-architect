import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: "primary" | "success" | "card";
}

export const FeatureCard = ({ icon: Icon, title, description, gradient = "card" }: FeatureCardProps) => {
  return (
    <Card className={`p-6 h-full bg-gradient-${gradient} border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};