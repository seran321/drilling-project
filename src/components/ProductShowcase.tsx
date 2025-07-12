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
import tunnel from '@/assets/tunnel.jpg';
import oil from '@/assets/oil.jpg';
import mining from '@/assets/mining.jpg';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "HeavyDrill Pro X1",
      category: "Tunnel Boring",
      description: "Precision tunnel construction",
      image: tunnel,
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
      image: oil,
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
      name: "Mega Mining Industrial",
      category: "Mining Equipment",
      description: "Heavy-duty mining solutions",
      image: mining,
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
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for extreme conditions, built for maximum performance.
          </p>
        </motion.div>

        {/* 3D Model Canvas (Immediately after heading) */}
        <motion.div 
          className="mb-12 sm:mb-16 h-64 sm:h-80 lg:h-96"
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
              <OrbitControls enableZoom autoRotate autoRotateSpeed={1} />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Features and CTA */}
        <motion.div 
          className="space-y-6 sm:space-y-8 mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Zap className="text-primary mx-auto mb-3" size={24} />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">3200</h3>
              <p className="text-sm text-muted-foreground">Max HP</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Gauge className="text-primary mx-auto mb-3" size={24} />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">18m</h3>
              <p className="text-sm text-muted-foreground">Max Diameter</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Shield className="text-primary mx-auto mb-3" size={24} />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">5000m</h3>
              <p className="text-sm text-muted-foreground">Max Depth</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Explore Our Machines</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Discover the next generation of drilling equipment for your toughest challenges.
            </p>
            <Link to="/products">
              <Button className="w-full sm:w-auto px-8 py-3 text-base">
                View All Models
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="transform-gpu"
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-xl h-full">
                <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">{product.price}</span>
                  </div>
                  <CardTitle className="text-primary text-lg sm:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.power}</p>
                      <p className="text-muted-foreground text-xs">Power</p>
                    </div>
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.diameter}</p>
                      <p className="text-muted-foreground text-xs">Diameter</p>
                    </div>
                    <div className="text-center">
                      <p className="text-primary font-semibold">{product.specs.depth}</p>
                      <p className="text-muted-foreground text-xs">Depth</p>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full py-3 text-sm sm:text-base">
                        <Eye className="mr-2" size={16} />
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card text-foreground max-w-4xl max-h-[90vh] overflow-y-auto mx-4">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl text-primary">{product.name}</DialogTitle>
                        <DialogDescription className="text-muted-foreground">{product.category}</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6 mt-6">
                        <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(product.specs).map(([label, value], i) => (
                              <div key={i} className="bg-muted p-4 rounded-lg">
                                <p className="text-muted-foreground text-sm capitalize">{label}</p>
                                <p className="text-primary font-bold text-base">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Features</h3>
                          <div className="space-y-2">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Applications</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, i) => (
                              <Badge key={i} variant="outline" className="border-primary text-primary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-muted p-4 sm:p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            Get specifications and pricing information.
                          </p>
                          <Button className="w-full sm:w-auto px-6 py-2">
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
