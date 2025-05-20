
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Users, Rocket, Code } from "lucide-react";

interface Activity {
  title: string;
  role: string;
  icon: React.ReactNode;
  points: string[];
}

export const Extracurricular = () => {
  const activities: Activity[] = [
    {
      title: "Hindi Literary Club – VIT Chennai",
      role: "Founder & President",
      icon: <Users className="w-6 h-6 text-primary" />,
      points: [
        "Founded the club, built community of 150+ students.",
        "Organized events: AARAMBH (400+ attendees), Holi Fest (800+ attendees)."
      ]
    },
    {
      title: "Debate Champion",
      role: "School President and Debate Team Head",
      icon: <Mic className="w-6 h-6 text-primary" />,
      points: [
        "Won all regional tournaments, started student leadership forums"
      ]
    },
    {
      title: "Team Aviators Internationals",
      role: "Core Member (2021-22)",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      points: [
        "Core member of autonomous medical drone team",
        "Engineered 5kg payload drone (5km range) — won national prize"
      ]
    },
    {
      title: "PALS & Rotaract VITC",
      role: "HR Manager & Division Head",
      icon: <Code className="w-6 h-6 text-primary" />,
      points: [
        "Managed HR operations (PALS 2022–23)",
        "Handled Professional Services Division (Rotaract VITC)"
      ]
    }
  ];

  return (
    <section id="extracurricular" className="py-20">
      <div className="section-padding">
        <h2 className="section-title">Extracurricular & Leadership</h2>
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {activities.map((activity, index) => (
            <Card key={index} className="border border-border hover:border-primary/30 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  {activity.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <p className="text-foreground/70 text-sm">{activity.role}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {activity.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
