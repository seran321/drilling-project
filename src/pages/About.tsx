
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-orange-500 mb-6">About DrillTech Industries</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading the industry in mega-size drilling technology for over 25 years
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-gray-300">
                  Founded in 1999, DrillTech Industries has been at the forefront of industrial drilling innovation. 
                  We specialize in designing and manufacturing mega-size drilling machines that tackle the world's 
                  most challenging projects.
                </p>
                <p className="text-gray-300">
                  Our commitment to excellence, precision engineering, and cutting-edge technology has made us 
                  the trusted partner for major infrastructure projects across 50+ countries worldwide.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    <span className="text-gray-300">Innovation in every design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    <span className="text-gray-300">Uncompromising quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    <span className="text-gray-300">Environmental responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    <span className="text-gray-300">Customer success focus</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <a href="/" className="flex items-center">
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Home
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
