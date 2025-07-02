
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrillingMachine from './3D/DrillingMachine';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "HeavyDrill Pro X1",
      category: "Tunnel Boring Machine",
      description: "Ultimate precision for large-scale tunnel construction projects",
      specs: {
        power: "2500 HP",
        diameter: "15.5m",
        depth: "200m+"
      },
      features: ["Advanced GPS Navigation", "Real-time Monitoring", "Auto-Stabilization"]
    },
    {
      id: 2,
      name: "DeepReach 5000",
      category: "Oil & Gas Drilling",
      description: "Extreme depth drilling for offshore and onshore operations",
      specs: {
        power: "3200 HP",
        diameter: "12.2m",
        depth: "5000m+"
      },
      features: ["Pressure Management", "Multi-Layer Detection", "Remote Operation"]
    },
    {
      id: 3,
      name: "MegaBore Industrial",
      category: "Mining Equipment",
      description: "Heavy-duty drilling for mining and excavation projects",
      specs: {
        power: "2800 HP",
        diameter: "18.0m",
        depth: "300m+"
      },
      features: ["Dust Suppression", "Vibration Control", "24/7 Operation"]
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-20 bg-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Drilling Machines</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered for extreme conditions, built for maximum performance. 
            Discover our range of industrial-grade drilling solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-20">
          <motion.div 
            className="h-64 sm:h-80 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
              <Suspense fallback={null}>
                <Environment preset="warehouse" />
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <DrillingMachine />
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
              </Suspense>
            </Canvas>
          </motion.div>

          <motion.div 
            className="space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              <div className="text-center p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Zap className="text-orange-500 mx-auto mb-2" size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-white">3200</h3>
                <p className="text-xs lg:text-sm text-gray-400">Max HP</p>
              </div>
              <div className="text-center p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Gauge className="text-orange-500 mx-auto mb-2" size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-white">18m</h3>
                <p className="text-xs lg:text-sm text-gray-400">Max Diameter</p>
              </div>
              <div className="text-center p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Shield className="text-orange-500 mx-auto mb-2" size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-white">5000m</h3>
                <p className="text-xs lg:text-sm text-gray-400">Max Depth</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white">Interactive 3D Preview</h3>
              <p className="text-sm lg:text-base text-gray-300">
                Explore our drilling machines in stunning 3D detail. Rotate, zoom, and examine 
                every component of our industrial-grade equipment. Experience the precision 
                engineering that powers the world's most demanding projects.
              </p>
              <Link to="/products">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  View All Models
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700 border-slate-600 hover:border-orange-500 transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-orange-500 text-lg lg:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{product.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 lg:space-y-4">
                  <p className="text-gray-300 text-sm lg:text-base">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm">
                    <div className="text-center">
                      <p className="text-orange-500 font-semibold">{product.specs.power}</p>
                      <p className="text-gray-400">Power</p>
                    </div>
                    <div className="text-center">
                      <p className="text-orange-500 font-semibold">{product.specs.diameter}</p>
                      <p className="text-gray-400">Diameter</p>
                    </div>
                    <div className="text-center">
                      <p className="text-orange-500 font-semibold">{product.specs.depth}</p>
                      <p className="text-gray-400">Max Depth</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm lg:text-base">Key Features:</h4>
                    <ul className="text-xs lg:text-sm text-gray-300 space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-sm lg:text-base">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
