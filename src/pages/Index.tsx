import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCard } from "@/components/StatsCard";
import { QuizCard } from "@/components/QuizCard";
import { 
  Upload, 
  Brain, 
  FileText, 
  BarChart3, 
  BookOpen, 
  Zap,
  GraduationCap,
  Award,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AI Exam Architect</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="outline">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Transform Your Notes Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
                Interactive Quizzes
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Upload your study materials and let AI generate personalized quizzes, flashcards, and study guides. 
              Make learning engaging and track your progress effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="premium" size="lg" className="text-lg px-8 py-3">
                <Upload className="w-5 h-5 mr-2" />
                Upload Your First PDF
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform transforms your study materials into comprehensive learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI Quiz Generation"
              description="Advanced AI analyzes your PDFs and creates targeted quizzes that test your understanding of key concepts"
            />
            <FeatureCard
              icon={FileText}
              title="Smart Flashcards"
              description="Automatically extract key terms and definitions to create interactive flashcards for efficient memorization"
            />
            <FeatureCard
              icon={BookOpen}
              title="Study Guides"
              description="Generate comprehensive study guides and summaries from your uploaded materials"
            />
            <FeatureCard
              icon={BarChart3}
              title="Progress Tracking"
              description="Monitor your learning progress with detailed analytics and performance insights"
            />
            <FeatureCard
              icon={Zap}
              title="Instant Feedback"
              description="Get immediate explanations for incorrect answers to reinforce learning"
            />
            <FeatureCard
              icon={Award}
              title="Achievement System"
              description="Stay motivated with achievements and streaks as you complete quizzes and reach milestones"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Your Learning Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your progress and access all your study materials in one place
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Quizzes Completed"
              value="24"
              description="+12% from last week"
              trend="up"
            />
            <StatsCard
              title="Average Score"
              value="87%"
              description="+5% improvement"
              trend="up"
            />
            <StatsCard
              title="Study Streak"
              value="7 days"
              description="Keep it up!"
              trend="neutral"
            />
            <StatsCard
              title="Hours Studied"
              value="18.5"
              description="This week"
              trend="neutral"
            />
          </div>

          {/* Recent Quizzes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Recent Quizzes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <QuizCard
                title="Introduction to Psychology"
                description="Chapter 1-3: Foundations and Research Methods"
                questionCount={15}
                timeEstimate="12 min"
                completed={true}
              />
              <QuizCard
                title="Organic Chemistry Basics"
                description="Molecular structures and bonding principles"
                questionCount={20}
                timeEstimate="18 min"
                completed={false}
              />
              <QuizCard
                title="World History: Renaissance"
                description="Art, culture, and political changes in Europe"
                questionCount={12}
                timeEstimate="10 min"
                completed={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Revolutionize Your Study Experience?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of students and educators who are already using AI to make learning more effective and engaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="premium" size="lg" className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90">
                <Upload className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6" />
                <span className="text-lg font-bold">AI Exam Architect</span>
              </div>
              <p className="text-background/70">
                Transforming education through AI-powered learning tools.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li>Features</li>
                <li>Pricing</li>
                <li>Demo</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 AI Exam Architect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;