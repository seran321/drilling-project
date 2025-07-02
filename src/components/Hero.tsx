
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrillingMachine from './3D/DrillingMachine';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20 pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
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
              <span className="text-white">Industrial</span>
              <br />
              <span className="text-orange-500">Drilling</span>
              <br />
              <span className="text-white">Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge mega-size drilling machines engineered for the most demanding industrial applications. Power, precision, and reliability redefined.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg">
              <a href="#products" className="flex items-center">
                Explore Machines
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg">
              <Play className="mr-2" size={18} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">500+</h3>
              <p className="text-sm lg:text-base text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-sm lg:text-base text-gray-400">Countries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">25</h3>
              <p className="text-sm lg:text-base text-gray-400">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="h-64 sm:h-80 lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Environment preset="warehouse" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <DrillingMachine />
              </Float>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
