import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle } from "lucide-react";

interface QuizCardProps {
  title: string;
  description: string;
  questionCount: number;
  timeEstimate: string;
  completed?: boolean;
  onStart?: () => void;
  onView?: () => void;
}

export const QuizCard = ({ 
  title, 
  description, 
  questionCount, 
  timeEstimate, 
  completed = false,
  onStart,
  onView 
}: QuizCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
          {completed && (
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
          )}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <FileText className="w-4 h-4" />
            <span>{questionCount} questions</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{timeEstimate}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          {completed ? (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onView}
              className="flex-1"
            >
              View Results
            </Button>
          ) : (
            <Button 
              variant="hero" 
              size="sm" 
              onClick={onStart}
              className="flex-1"
            >
              Start Quiz
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};