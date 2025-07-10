
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Globe, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Expert Engineers" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Wrench, number: "1000+", label: "Projects Completed" }
  ];

  const milestones = [
    { year: "1998", title: "Company Founded", description: "Started as a small engineering firm specializing in industrial drilling solutions." },
    { year: "2005", title: "First Mega Drill", description: "Developed the first mega-size drilling machine for tunnel construction projects." },
    { year: "2012", title: "Global Expansion", description: "Expanded operations to serve clients across 25 countries worldwide." },
    { year: "2018", title: "Technology Innovation", description: "Introduced AI-powered drilling systems and remote monitoring capabilities." },
    { year: "2023", title: "Industry Leader", description: "Recognized as the leading manufacturer of industrial drilling equipment globally." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bakground via-muted/20 to-primary/5">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">DrillTech Industries</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                For over 25 years, we've been at the forefront of industrial drilling technology, 
                engineering solutions that power the world's most ambitious infrastructure projects.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16 lg:mb-20 ">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 lg:p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 h-full hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                   whileHover={{
                             scale: 1.02,
                             y: -2,
                             transition: { 
                             duration: 0.0,
                             ease: "easeOut"
                      }
                    }}
                >
                  
                  <stat.icon className="text-primary mx-auto mb-3 lg:mb-4" size={32} />
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-sm lg:text-base text-gray-500">{stat.label}</p>
                  
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 lg:space-y-6 text-foreground">
                  <p className="text-base lg:text-lg leading-relaxed">
                    Founded in 1998 by a team of visionary engineers, DrillTech Industries emerged from a simple 
                    belief: that the world's most challenging drilling projects deserve the most advanced, 
                    reliable, and powerful equipment available.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed">
                    What started as a small engineering firm has grown into a global leader in industrial 
                    drilling technology. Our journey has been marked by continuous innovation, unwavering 
                    commitment to quality, and an obsession with pushing the boundaries of what's possible 
                    in heavy machinery.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed">
                    Today, our machines operate in some of the world's most demanding environments - from 
                    deep-sea oil platforms to high-altitude mining operations, from urban tunnel systems 
                    to remote infrastructure projects across six continents.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-muted p-6 lg:p-8 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 lg:mb-6">Our Mission</h3>
                <p className="text-foreground mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">
                  "To engineer and manufacture the world's most advanced drilling equipment, enabling 
                  our clients to tackle impossible projects and build the infrastructure that shapes 
                  our future."
                </p>
                
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 lg:mb-6">Our Values</h3>
                <ul className="space-y-3 lg:space-y-4 text-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base lg:text-lg"><strong>Innovation:</strong> Constantly pushing technological boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base lg:text-lg"><strong>Reliability:</strong> Building equipment that performs under extreme conditions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base lg:text-lg"><strong>Excellence:</strong> Maintaining the highest standards in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base lg:text-lg"><strong>Partnership:</strong> Working closely with clients to solve their unique challenges</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-20 bg-background  border border-gray-400">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Journey</h2>
              <p className="text-lg sm:text-xl text-gray-500">
                Key milestones that shaped DrillTech Industries
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg lg:text-xl">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-muted p-4 lg:p-6 rounded-lg border border-primery">
                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 lg:mb-3">{milestone.title}</h3>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
