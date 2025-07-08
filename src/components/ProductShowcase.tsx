
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Gauge, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrillingMachine from './3D/DrillingMachine';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "HeavyDrill Pro X1",
      category: "Tunnel Boring",
      description: "Precision tunnel construction",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      specs: {
        power: "2500 HP",
        diameter: "15.5m",
        depth: "200m+",
        weight: "450 tons",
        speed: "8m/day"
      },
      features: ["GPS Navigation", "Real-time Monitoring", "Auto-Stabilization"],
      applications: ["Metro Tunnels", "Highway Tunnels", "Water Tunnels"],
      price: "$12.5M - $15.2M"
    },
    {
      id: 2,
      name: "DeepReach 5000",
      category: "Oil & Gas",
      description: "Extreme depth drilling",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      specs: {
        power: "3200 HP",
        diameter: "12.2m",
        depth: "5000m+",
        weight: "600 tons",
        speed: "5m/day"
      },
      features: ["Pressure Management", "Multi-Layer Detection", "Remote Operation"],
      applications: ["Offshore Drilling", "Onshore Drilling", "Deepwater Exploration"],
      price: "$18.0M - $22.5M"
    },
    {
      id: 3,
      name: "MegaBore Industrial",
      category: "Mining Equipment",
      description: "Heavy-duty mining solutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      specs: {
        power: "2800 HP",
        diameter: "18.0m",
        depth: "300m+",
        weight: "520 tons",
        speed: "6m/day"
      },
      features: ["Dust Suppression", "Vibration Control", "24/7 Operation"],
      applications: ["Open-Pit Mining", "Underground Mining", "Quarrying"],
      price: "$14.8M - $17.5M"
    }
  ];

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 bg-blue-50 dark:bg-slate-800">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for extreme conditions, built for maximum performance.
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
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-card rounded-lg border">
                <Zap className="text-primary mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">3200</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Max HP</p>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-card rounded-lg border">
                <Gauge className="text-primary mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">18m</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Max Diameter</p>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-card rounded-lg border">
                <Shield className="text-primary mx-auto mb-1 sm:mb-2" size={20} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">5000m</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Max Depth</p>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Interactive 3D Preview</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Explore our drilling machines in 3D. Precision engineering for demanding projects.
              </p>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base">
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
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2 sm:pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{product.price}</span>
                  </div>
                  <CardTitle className="text-primary text-base sm:text-lg lg:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-xs sm:text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.power}</p>
                      <p className="text-muted-foreground">Power</p>
                    </div>
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.diameter}</p>
                      <p className="text-muted-foreground">Diameter</p>
                    </div>
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.depth}</p>
                      <p className="text-muted-foreground">Depth</p>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm lg:text-base">
                        <Eye className="mr-1 sm:mr-2" size={14} />
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border text-foreground max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl text-primary">{product.name}</DialogTitle>
                        <DialogDescription className="text-muted-foreground text-sm sm:text-base">
                          {product.category}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                        <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Specifications</h3>
                          <div className="grid grid-cols-2 gap-2 sm:gap-4">
                            <div className="bg-muted p-2 sm:p-3 rounded">
                              <p className="text-muted-foreground text-xs sm:text-sm">Power</p>
                              <p className="text-primary font-bold text-sm sm:text-base">{product.specs.power}</p>
                            </div>
                            <div className="bg-muted p-2 sm:p-3 rounded">
                              <p className="text-muted-foreground text-xs sm:text-sm">Diameter</p>
                              <p className="text-primary font-bold text-sm sm:text-base">{product.specs.diameter}</p>
                            </div>
                            <div className="bg-muted p-2 sm:p-3 rounded">
                              <p className="text-muted-foreground text-xs sm:text-sm">Depth</p>
                              <p className="text-primary font-bold text-sm sm:text-base">{product.specs.depth}</p>
                            </div>
                            <div className="bg-muted p-2 sm:p-3 rounded">
                              <p className="text-muted-foreground text-xs sm:text-sm">Weight</p>
                              <p className="text-primary font-bold text-sm sm:text-base">{product.specs.weight}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Features</h3>
                          <div className="grid grid-cols-1 gap-1 sm:gap-2">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Applications</h3>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {product.applications.map((app, i) => (
                              <Badge key={i} variant="outline" className="border-primary text-primary text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-muted p-3 sm:p-4 rounded-lg">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Contact Us</h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">
                            Get specifications and pricing information.
                          </p>
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
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
