
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Zap, Shield, Gauge, Eye, Send } from 'lucide-react';

const Products = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuoteRequest = (product) => {
    setSelectedProduct(product);
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', {
      product: selectedProduct?.name,
      ...quoteForm
    });
    alert(`Thank you for your interest in ${selectedProduct?.name}! We will contact you soon.`);
    setQuoteForm({ name: '', email: '', company: '', message: '' });
    setShowQuoteForm(false);
  };

  const handleQuoteFormChange = (e) => {
    setQuoteForm({
      ...quoteForm,
      [e.target.name]: e.target.value
    });
  };

  const products = [
    {
      id: 1,
      name: "HeavyDrill Pro X1",
      category: "Tunnel Boring Machine",
      description: "Precision tunnel construction with GPS navigation.",
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
      category: "Oil & Gas Drilling",
      description: "Extreme depth drilling for offshore operations.",
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
      description: "Heavy-duty drilling for mining projects.",
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
    },
    {
      id: 4,
      name: "TerraDrill 3000",
      category: "Geothermal Drilling",
      description: "Specialized drilling for geothermal energy.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      specs: {
        power: "2600 HP",
        diameter: "10.5m",
        depth: "3000m+",
        weight: "480 tons",
        speed: "4m/day"
      },
      features: ["High-Temperature Tolerance", "Advanced Cooling", "Temperature Monitoring"],
      applications: ["Geothermal Power Plants", "Heat Extraction", "Research"],
      price: "$16.2M - $19.0M"
    },
    {
      id: 5,
      name: "AquaDrill Explorer",
      category: "Underwater Drilling",
      description: "Submersible drilling for underwater projects.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      specs: {
        power: "2400 HP",
        diameter: "8.0m",
        depth: "2000m+",
        weight: "550 tons",
        speed: "3m/day"
      },
      features: ["Remote Operation", "Pressure Compensation", "Underwater Navigation"],
      applications: ["Offshore Construction", "Cable Installation", "Underwater Mining"],
      price: "$20.0M - $24.0M"
    },
    {
      id: 6,
      name: "PolarDrill 1000",
      category: "Arctic Drilling",
      description: "Drilling equipment for extreme cold environments.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      specs: {
        power: "2200 HP",
        diameter: "9.0m",
        depth: "1000m+",
        weight: "500 tons",
        speed: "3.5m/day"
      },
      features: ["Insulated Components", "Ice-Penetrating Technology", "Cold-Start System"],
      applications: ["Arctic Exploration", "Ice Core Sampling", "Cold Climate Construction"],
      price: "$17.5M - $21.0M"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-primary/10 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Product Range</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
                Complete lineup of industrial drilling machines for specific applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full">
                    <div className="w-full h-48 sm:h-56 lg:h-64 rounded-t-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {product.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{product.price}</span>
                      </div>
                      <CardTitle className="text-primary text-lg lg:text-xl">{product.name}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 lg:space-y-4">
                      {/* Quick Specs */}
                      <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm">
                        <div className="text-center p-2 bg-muted rounded">
                          <Zap size={16} className="text-primary mx-auto mb-1" />
                          <p className="text-primary font-semibold">{product.specs.power}</p>
                          <p className="text-muted-foreground">Power</p>
                        </div>
                        <div className="text-center p-2 bg-muted rounded">
                          <Gauge size={16} className="text-primary mx-auto mb-1" />
                          <p className="text-primary font-semibold">{product.specs.diameter}</p>
                          <p className="text-muted-foreground">Diameter</p>
                        </div>
                        <div className="text-center p-2 bg-muted rounded">
                          <Shield size={16} className="text-primary mx-auto mb-1" />
                          <p className="text-primary font-semibold">{product.specs.depth}</p>
                          <p className="text-muted-foreground">Max Depth</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-sm">
                              <Eye className="mr-1" size={14} />
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card border-border text-foreground max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-primary">{product.name}</DialogTitle>
                              <DialogDescription className="text-muted-foreground text-base">
                                {product.description}
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-6 mt-6">
                              {/* Product Image */}
                              <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              {/* Detailed Specs */}
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Technical Specifications</h3>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-muted p-3 rounded">
                                    <p className="text-muted-foreground text-sm">Power Output</p>
                                    <p className="text-primary font-bold">{product.specs.power}</p>
                                  </div>
                                  <div className="bg-muted p-3 rounded">
                                    <p className="text-muted-foreground text-sm">Bore Diameter</p>
                                    <p className="text-primary font-bold">{product.specs.diameter}</p>
                                  </div>
                                  <div className="bg-muted p-3 rounded">
                                    <p className="text-muted-foreground text-sm">Max Depth</p>
                                    <p className="text-primary font-bold">{product.specs.depth}</p>
                                  </div>
                                  <div className="bg-muted p-3 rounded">
                                    <p className="text-muted-foreground text-sm">Total Weight</p>
                                    <p className="text-primary font-bold">{product.specs.weight}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Features */}
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-sm">
                                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Applications */}
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                  {product.applications.map((app, i) => (
                                    <Badge key={i} variant="outline" className="border-primary text-primary">
                                      {app}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Contact CTA */}
                              <div className="bg-muted p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-2">Interested?</h3>
                                <p className="text-muted-foreground text-sm mb-3">
                                  Contact our team for specifications and pricing.
                                </p>
                                <Button 
                                  className="bg-primary hover:bg-primary/90"
                                  onClick={() => handleQuoteRequest(product)}
                                >
                                  Request Quote
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Quote Request Modal */}
      <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
        <DialogContent className="bg-card border-border text-foreground max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-primary">Request Quote</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProduct && `Get a quote for ${selectedProduct.name}`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-foreground mb-2 text-sm">Name *</label>
              <Input
                name="name"
                value={quoteForm.name}
                onChange={handleQuoteFormChange}
                required
                className="bg-muted border-border text-foreground focus:border-primary"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-foreground mb-2 text-sm">Email *</label>
              <Input
                type="email"
                name="email"
                value={quoteForm.email}
                onChange={handleQuoteFormChange}
                required
                className="bg-muted border-border text-foreground focus:border-primary"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-foreground mb-2 text-sm">Company</label>
              <Input
                name="company"
                value={quoteForm.company}
                onChange={handleQuoteFormChange}
                className="bg-muted border-border text-foreground focus:border-primary"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label className="block text-foreground mb-2 text-sm">Project Details</label>
              <Textarea
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteFormChange}
                rows={3}
                className="bg-muted border-border text-foreground focus:border-primary"
                placeholder="Tell us about your project requirements..."
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowQuoteForm(false)}
                className="flex-1 border-border text-muted-foreground hover:bg-muted"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                <Send className="mr-2" size={16} />
                Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
