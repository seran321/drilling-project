
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Wrench } from 'lucide-react';

const CompanyOverview = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Industry Leader",
      description: "25+ years of excellence"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "500+ engineers worldwide"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Operations in 50+ countries"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "15% annual R&D investment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Powering the World's 
                <span className="text-primary"> Toughest Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over two decades, DrillTech Industries has been at the forefront 
                of industrial drilling innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver cutting-edge drilling solutions that exceed expectations 
                  in performance, reliability, and safety.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in industrial drilling technology, 
                  setting new standards for innovation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-2xl">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">CATERPILLAR</div>
              <div className="text-2xl font-bold text-muted-foreground">KOMATSU</div>
              <div className="text-2xl font-bold text-muted-foreground">LIEBHERR</div>
              <div className="text-2xl font-bold text-muted-foreground">SANDVIK</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;
