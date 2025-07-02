
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Zap, Shield, Wrench, Settings, Drill, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "MegaDrill X1000",
      category: "Tunnel Boring Machine",
      description: "Our flagship mega-size drilling machine for large-scale industrial projects",
      detailedDescription: "The MegaDrill X1000 represents the pinnacle of tunnel boring technology. Engineered for the most demanding underground construction projects, this machine combines raw power with precision control. Its advanced hydraulic system delivers consistent performance even in the harshest geological conditions.",
      features: ["1000m drilling depth", "Advanced hydraulic system", "GPS positioning", "Real-time monitoring", "Auto-stabilization", "Dust suppression system"],
      specs: {
        power: "2500 HP",
        diameter: "15.5m",
        depth: "1000m+",
        weight: "450 tons",
        length: "120m"
      },
      icon: Zap,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "PowerDrill Pro 500",
      category: "Oil & Gas Drilling",
      description: "High-performance drilling solution for demanding applications",
      detailedDescription: "The PowerDrill Pro 500 is specifically designed for oil and gas exploration. With its enhanced safety features and remote monitoring capabilities, it ensures efficient and secure drilling operations in both onshore and offshore environments.",
      features: ["500m drilling depth", "Enhanced safety features", "Remote monitoring", "Pressure management", "Multi-layer detection", "Emergency shutdown system"],
      specs: {
        power: "1800 HP",
        diameter: "12.2m",
        depth: "500m+",
        weight: "320 tons",
        length: "85m"
      },
      icon: Shield,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "IndustrialDrill HD",
      category: "Mining Equipment",
      description: "Heavy-duty drilling machine for extreme conditions",
      detailedDescription: "Built for the mining industry's toughest challenges, the IndustrialDrill HD operates reliably in extreme weather conditions. Its modular design allows for easy maintenance and customization based on specific mining requirements.",
      features: ["All-weather operation", "Modular design", "24/7 support", "Vibration control", "Automated drilling", "Environmental monitoring"],
      specs: {
        power: "2200 HP",
        diameter: "18.0m",
        depth: "300m+",
        weight: "380 tons",
        length: "95m"
      },
      icon: Wrench,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "DeepReach 5000",
      category: "Deep Drilling",
      description: "Extreme depth drilling for offshore and onshore operations",
      detailedDescription: "The DeepReach 5000 pushes the boundaries of deep drilling technology. Capable of reaching unprecedented depths, this machine is equipped with advanced geological sensors and adaptive drilling systems that adjust to changing rock formations automatically.",
      features: ["5000m drilling depth", "Geological sensors", "Adaptive drilling", "Automated systems", "Deep sea capability", "Advanced telemetry"],
      specs: {
        power: "3200 HP",
        diameter: "14.5m",
        depth: "5000m+",
        weight: "520 tons",
        length: "140m"
      },
      icon: Settings,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      name: "CompactDrill 200",
      category: "Urban Construction",
      description: "Compact drilling solution for urban environments",
      detailedDescription: "Designed for urban construction projects where space is limited, the CompactDrill 200 delivers impressive performance in a smaller footprint. Perfect for subway construction, utility installations, and urban infrastructure projects.",
      features: ["Compact design", "Low noise operation", "Precision control", "Urban-friendly", "Quick setup", "Minimal footprint"],
      specs: {
        power: "800 HP",
        diameter: "8.0m",
        depth: "200m+",
        weight: "150 tons",
        length: "45m"
      },
      icon: Drill,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      name: "MobileDrill Max",
      category: "Mobile Drilling",
      description: "Highly mobile drilling unit for rapid deployment",
      detailedDescription: "The MobileDrill Max combines mobility with power, allowing for rapid deployment to remote locations. Its self-contained design includes all necessary support systems, making it ideal for emergency drilling operations and remote site development.",
      features: ["Rapid deployment", "Self-contained", "All-terrain capability", "Emergency response", "Remote operation", "Satellite communication"],
      specs: {
        power: "1500 HP",
        diameter: "10.0m",
        depth: "400m+",
        weight: "200 tons",
        length: "60m"
      },
      icon: Truck,
      image: "/api/placeholder/600/400"
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
            className="space-y-12"
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-orange-500 mb-6">Our Product Range</h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our comprehensive range of cutting-edge drilling machines designed for 
                industrial excellence across various applications and environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="bg-slate-800 border-slate-600 hover:border-orange-500 transition-all duration-300 h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <product.icon className="text-orange-500 mr-3" size={32} />
                        <div>
                          <CardTitle className="text-orange-500">{product.name}</CardTitle>
                          <CardDescription className="text-gray-400">{product.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <p className="text-gray-300 mb-4">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div className="text-center bg-slate-700 p-2 rounded">
                            <p className="text-orange-500 font-semibold">{product.specs.power}</p>
                            <p className="text-gray-400">Power</p>
                          </div>
                          <div className="text-center bg-slate-700 p-2 rounded">
                            <p className="text-orange-500 font-semibold">{product.specs.depth}</p>
                            <p className="text-gray-400">Max Depth</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">Key Features:</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {product.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-screen overflow-y-auto bg-slate-800 border-slate-600">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-orange-500 flex items-center">
                              <product.icon className="mr-3" size={32} />
                              {product.name}
                            </DialogTitle>
                            <DialogDescription className="text-gray-400">
                              {product.category}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <div className="w-full h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <product.icon className="text-orange-500 mx-auto mb-4" size={64} />
                                <p className="text-gray-400">Machine Image Placeholder</p>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                              <p className="text-gray-300">{product.detailedDescription}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-xl font-bold text-white mb-3">Technical Specifications</h3>
                                <div className="space-y-2">
                                  {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                      <span className="text-gray-400 capitalize">{key}:</span>
                                      <span className="text-orange-500 font-semibold">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-xl font-bold text-white mb-3">Features & Capabilities</h3>
                                <ul className="space-y-2">
                                  {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                              <Link to="/contact" className="flex-1">
                                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                  Request Quote
                                </Button>
                              </Link>
                              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                                Download Specs
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

export default Products;
