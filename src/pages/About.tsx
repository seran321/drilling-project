
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, Users, Globe, Wrench, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    { year: "1999", event: "DrillTech Industries founded with a vision to revolutionize industrial drilling" },
    { year: "2005", event: "First mega-size drilling machine delivered to international client" },
    { year: "2010", event: "Expanded operations to 25 countries worldwide" },
    { year: "2015", event: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2020", event: "Launched smart drilling technology with IoT integration" },
    { year: "2024", event: "Serving 50+ countries with 500+ successful projects completed" }
  ];

  const leadership = [
    {
      name: "Dr. Michael Chen",
      position: "CEO & Founder",
      experience: "25+ years in industrial engineering",
      description: "Visionary leader with expertise in mechanical engineering and business strategy"
    },
    {
      name: "Sarah Rodriguez",
      position: "Chief Technology Officer",
      experience: "20+ years in drilling technology",
      description: "Leading innovation in smart drilling systems and automation"
    },
    {
      name: "James Thompson",
      position: "Head of Operations",
      experience: "18+ years in global manufacturing",
      description: "Ensuring world-class quality and efficient delivery worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-orange-500 mb-6">About DrillTech Industries</h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Leading the industry in mega-size drilling technology for over 25 years, 
                transforming how the world approaches large-scale industrial drilling projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-gray-300">
                  Founded in 1999, DrillTech Industries emerged from a simple yet powerful vision: 
                  to create drilling machines that could handle the world's most demanding projects 
                  with unprecedented precision and reliability.
                </p>
                <p className="text-gray-300">
                  What started as a small engineering firm has grown into a global leader, 
                  serving clients across 50+ countries. Our commitment to innovation, quality, 
                  and customer success has driven us to develop cutting-edge technologies that 
                  set new industry standards.
                </p>
                <p className="text-gray-300">
                  Today, we're not just manufacturers – we're partners in progress, helping 
                  build the infrastructure that powers modern civilization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Globe className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-white">50+</h3>
                  <p className="text-gray-400">Countries Served</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Award className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Users className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-white">200+</h3>
                  <p className="text-gray-400">Expert Engineers</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Wrench className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-white">25</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-500 mb-8 text-center">Company Timeline</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-orange-500 text-slate-900 px-3 py-1 rounded-full font-bold text-sm min-w-fit">
                      {milestone.year}
                    </div>
                    <p className="text-gray-300 pt-1">{milestone.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Target className="text-orange-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
                  <p className="text-gray-300">Continuously pushing boundaries with cutting-edge technology and creative solutions.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Award className="text-orange-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold text-white mb-3">Quality</h4>
                  <p className="text-gray-300">Uncompromising standards in every aspect of design, manufacturing, and service.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <Heart className="text-orange-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold text-white mb-3">Responsibility</h4>
                  <p className="text-gray-300">Environmental stewardship and sustainable practices in all our operations.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {leadership.map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 p-6 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-slate-900" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white text-center mb-2">{leader.name}</h4>
                    <p className="text-orange-500 text-center mb-2">{leader.position}</p>
                    <p className="text-gray-400 text-center mb-3 text-sm">{leader.experience}</p>
                    <p className="text-gray-300 text-sm text-center">{leader.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
