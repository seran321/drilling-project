
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Gauge, Eye, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrillingMachine from './3D/DrillingMachine';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "HeavyDrill Pro X1",
      category: "Tunnel Boring Machine",
      description: "Ultimate precision for large-scale tunnel construction projects",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      detailedDescription: "The HeavyDrill Pro X1 represents the pinnacle of tunnel boring technology. Engineered for the most challenging underground construction projects, this machine combines raw power with precision control. Its advanced GPS navigation system ensures accurate tunnel alignment, while real-time monitoring capabilities provide instant feedback on drilling conditions and machine performance.",
      specs: {
        power: "2500 HP",
        diameter: "15.5m",
        depth: "200m+",
        weight: "450 tons",
        speed: "8m/day"
      },
      features: ["Advanced GPS Navigation", "Real-time Monitoring", "Auto-Stabilization", "Dust Control System", "Emergency Safety Protocols"],
      applications: ["Metro Tunnels", "Highway Tunnels", "Water Tunnels", "Utility Tunnels"],
      price: "$12.5M - $15.2M"
    },
    {
      id: 2,
      name: "DeepReach 5000",
      category: "Oil & Gas Drilling",
      description: "Extreme depth drilling for offshore and onshore operations",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      detailedDescription: "The DeepReach 5000 is engineered for the most demanding drilling operations in the oil and gas industry. Capable of reaching depths exceeding 5000 meters, this powerhouse features advanced pressure management systems and multi-layer detection capabilities. Its remote operation feature allows for safe drilling in hazardous environments.",
      specs: {
        power: "3200 HP",
        diameter: "12.2m",
        depth: "5000m+",
        weight: "600 tons",
        speed: "5m/day"
      },
      features: ["Pressure Management", "Multi-Layer Detection", "Remote Operation", "Blowout Prevention", "Seismic Sensors"],
      applications: ["Offshore Drilling", "Onshore Drilling", "Deepwater Exploration", "Fracking Operations"],
      price: "$18.0M - $22.5M"
    },
    {
      id: 3,
      name: "MegaBore Industrial",
      category: "Mining Equipment",
      description: "Heavy-duty drilling for mining and excavation projects",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      detailedDescription: "Built for continuous operation in the harshest mining environments, the MegaBore Industrial delivers unmatched reliability and performance. Its robust construction and advanced vibration control systems ensure smooth operation even in the most challenging geological conditions. The integrated dust suppression system maintains a clean working environment.",
      specs: {
        power: "2800 HP",
        diameter: "18.0m",
        depth: "300m+",
        weight: "520 tons",
        speed: "6m/day"
      },
      features: ["Dust Suppression", "Vibration Control", "24/7 Operation", "Automated Drilling Sequences", "Real-time Data Analysis"],
      applications: ["Open-Pit Mining", "Underground Mining", "Quarrying", "Excavation Projects"],
      price: "$14.8M - $17.5M"
    }
  ];

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 bg-slate-800">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our <span className="text-orange-500">Drilling Machines</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered for extreme conditions, built for maximum performance. 
            Discover our range of industrial-grade drilling solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center mb-12 sm:mb-16 lg:mb-18">
          <motion.div 
            className="h-48 sm:h-64 lg:h-80"
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
            className="space-y-3 sm:space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Zap className="text-orange-500 mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">3200</h3>
                <p className="text-xs sm:text-sm text-gray-400">Max HP</p>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Gauge className="text-orange-500 mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">18m</h3>
                <p className="text-xs sm:text-sm text-gray-400">Max Diameter</p>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-slate-700 rounded-lg">
                <Shield className="text-orange-500 mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">5000m</h3>
                <p className="text-xs sm:text-sm text-gray-400">Max Depth</p>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Interactive 3D Preview</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Explore our drilling machines in stunning 3D detail. Rotate, zoom, and examine 
                every component of our industrial-grade equipment. Experience the precision 
                engineering that powers the world's most demanding projects.
              </p>
              <Link to="/products">
                <Button className="bg-orange-600 hover:bg-orange-700 text-sm sm:text-base">
                  View All Models
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700 border-slate-600 hover:border-orange-500 transition-all duration-300 h-full">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-orange-500 text-base sm:text-lg lg:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-xs sm:text-sm">{product.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
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

                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-white font-semibold text-xs sm:text-sm lg:text-base">Key Features:</h4>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm lg:text-base">
                        <Eye className="mr-1 sm:mr-2" size={14} />
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-slate-600 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl text-orange-500">{product.name}</DialogTitle>
                        <DialogDescription className="text-gray-300 text-sm sm:text-base">
                          {product.category}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                        {/* Product Image */}
                        <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Detailed Description */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">About This Machine</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {product.detailedDescription}
                          </p>
                        </div>

                        {/* Detailed Specs */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technical Specifications</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Power Output</p>
                              <p className="text-orange-500 font-bold text-sm sm:text-base">{product.specs.power}</p>
                            </div>
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Bore Diameter</p>
                              <p className="text-orange-500 font-bold text-sm sm:text-base">{product.specs.diameter}</p>
                            </div>
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Max Depth</p>
                              <p className="text-orange-500 font-bold text-sm sm:text-base">{product.specs.depth}</p>
                            </div>
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Total Weight</p>
                              <p className="text-orange-500 font-bold text-sm sm:text-base">{product.specs.weight}</p>
                            </div>
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Drilling Speed</p>
                              <p className="text-orange-500 font-bold text-sm sm:text-base">{product.specs.speed}</p>
                            </div>
                            <div className="bg-slate-700 p-2 sm:p-3 rounded">
                              <p className="text-gray-400 text-xs sm:text-sm">Price Range</p>
                              <p className="text-orange-500 font-bold text-xs sm:text-sm">{product.price}</p>
                            </div>
                          </div>
                        </div>

                        {/* All Features */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Complete Feature Set</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Applications */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Ideal Applications</h3>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {product.applications.map((app, i) => (
                              <Badge key={i} variant="outline" className="border-orange-500 text-orange-500 text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-slate-700 p-3 sm:p-4 rounded-lg">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Interested in this machine?</h3>
                          <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                            Contact our team for detailed specifications, customization options, and pricing information.
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-sm">
                            Request Quote
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
