
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import DrillingMachine from './3D/DrillingMachine';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
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
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge mega-size drilling machines engineered for the most demanding industrial applications. Power, precision, and reliability redefined.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
              Explore Machines
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-500">500+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-500">25</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="h-96 lg:h-[600px]"
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
