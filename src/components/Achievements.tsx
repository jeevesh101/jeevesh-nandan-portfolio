
import { Trophy, Award, Users, Rocket, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "1st Rank – VIT Smart India Hackathon 2023",
      description: "Competed against 350+ teams nationwide",
      icon: <Trophy className="w-10 h-10 text-primary" />
    },
    {
      title: "1st Place – Maria Phillip Future Leaders Debate",
      description: "Chennai regional debate competition",
      icon: <Award className="w-10 h-10 text-primary" />
    },
    {
      title: "Patent Filed – AI-Powered Recycling System",
      description: "EcoNet waste management solution",
      icon: <Database className="w-10 h-10 text-primary" />
    },
    {
      title: "Winner – Robozar DRONE+ 2021",
      description: "5km medical aid drone project",
      icon: <Rocket className="w-10 h-10 text-primary" />
    },
    {
      title: "Founded Hindi Literary Club",
      description: "Built community of 150+ active members",
      icon: <Users className="w-10 h-10 text-primary" />
    },
    {
      title: "3rd Place – Tamil Nadu State Debate Championship",
      description: "State-level competition with 50+ teams",
      icon: <Award className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="section-padding">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-foreground/70">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
