import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  trend?: "up" | "down" | "neutral";
}

export const StatsCard = ({ title, value, description, trend = "neutral" }: StatsCardProps) => {
  const trendColors = {
    up: "text-success",
    down: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className={`text-sm ${trendColors[trend]}`}>{description}</p>
      </div>
    </Card>
  );
};