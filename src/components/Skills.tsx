
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillCategory {
  name: string;
  skills: string[];
}

export const Skills = () => {
  const skillCategories: { [key: string]: SkillCategory[] } = {
    technical: [
      {
        name: "Languages",
        skills: ["Python", "R", "Java", "JavaScript"]
      },
      {
        name: "Frameworks / Tools",
        skills: ["React.js", "Node.js", "Express.js", "Git", "CI/CD", "REST APIs"]
      },
      {
        name: "AI/ML Expertise",
        skills: [
          "Computer Vision", 
          "NLP", 
          "Speech Processing", 
          "Chatbots", 
          "Generative AI", 
          "Transfer Learning", 
          "Predictive Modeling", 
          "Recommender Systems"
        ]
      },
      {
        name: "Cloud & DevOps",
        skills: ["AWS (Lambda, S3)", "Apache Spark", "Kafka", "Flink", "GitLab CI/CD"]
      }
    ],
    databases: [
      {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "Hadoop"]
      }
    ],
    other: [
      {
        name: "Other Tools",
        skills: ["Web Scraping (Bright Data)", "Tableau", "Matplotlib", "Seaborn"]
      },
      {
        name: "Paradigms & Methods",
        skills: ["Deep Learning", "Transfer Learning", "RAG pipelines", "Quantitative Analysis", "LLMs"]
      }
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-padding">
        <h2 className="section-title">Skills & Tech Stack</h2>
        
        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="databases">Data & Databases</TabsTrigger>
            <TabsTrigger value="other">Other Expertise</TabsTrigger>
          </TabsList>
          
          {Object.keys(skillCategories).map((tabKey) => (
            <TabsContent key={tabKey} value={tabKey} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[tabKey].map((category, idx) => (
                  <Card key={idx} className="overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-3">My Development Philosophy</h3>
            <p className="text-foreground/80">
              I believe in creating technology that's not just technically sound, but also ethically responsible and 
              human-centered. Every line of code I write aims to make systems more intuitive, accessible, and beneficial 
              for the people who use them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
