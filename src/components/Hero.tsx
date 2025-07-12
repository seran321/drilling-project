import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

import hero1 from '@/assets/hero1.jpg'
import hero2 from '@/assets/hero2.jpg'
import hero3 from '@/assets/hero3.jpg'

const images = [
  hero1,
  hero2,
  hero3,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Images Slideshow */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Background ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10 text-white">
        <motion.div
          className="space-y-6 lg:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-3 lg:space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Industrial</span>
              <br />
              <span className="text-primary">Drilling</span>
              <br />
              <span>Solutions</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl max-w-lg text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advanced drilling technology for demanding projects.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg">
              <a href="#products" className="flex items-center">
                View Products
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white/10 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
            >
              <Play className="mr-2" size={18} />
              Demo
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">500+</h3>
              <p className="text-sm lg:text-base">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">50+</h3>
              <p className="text-sm lg:text-base">Countries</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">25</h3>
              <p className="text-sm lg:text-base">Years</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
