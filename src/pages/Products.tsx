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
import { Zap, Shield, Gauge, Settings, MapPin, Eye, Send } from 'lucide-react';

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
    // Handle quote submission
    console.log('Quote request submitted:', {
      product: selectedProduct?.name,
      ...quoteForm
    });
    alert(`Thank you for your interest in ${selectedProduct?.name}! We will contact you soon with a detailed quote.`);
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
      description: "Ultimate precision for large-scale tunnel construction projects with advanced GPS navigation and real-time monitoring systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
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
      description: "Extreme depth drilling for offshore and onshore operations, featuring pressure management and multi-layer detection.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
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
      description: "Heavy-duty drilling for mining and excavation projects, designed for 24/7 operation with vibration control.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
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
    },
    {
      id: 4,
      name: "TerraDrill 3000",
      category: "Geothermal Drilling",
      description: "Specialized drilling for geothermal energy extraction, with high-temperature tolerance and advanced cooling systems.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      specs: {
        power: "2600 HP",
        diameter: "10.5m",
        depth: "3000m+",
        weight: "480 tons",
        speed: "4m/day"
      },
      features: ["High-Temperature Tolerance", "Advanced Cooling Systems", "Real-time Temperature Monitoring", "Corrosion Resistance", "Automated Control"],
      applications: ["Geothermal Power Plants", "Enhanced Geothermal Systems", "Heat Extraction", "Geothermal Research"],
      price: "$16.2M - $19.0M"
    },
    {
      id: 5,
      name: "AquaDrill Explorer",
      category: "Underwater Drilling",
      description: "Submersible drilling equipment for underwater exploration and construction, with remote operation and pressure compensation.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      specs: {
        power: "2400 HP",
        diameter: "8.0m",
        depth: "2000m+",
        weight: "550 tons",
        speed: "3m/day"
      },
      features: ["Remote Operation", "Pressure Compensation", "Underwater Navigation", "Corrosion Protection", "Sonar Imaging"],
      applications: ["Offshore Construction", "Submarine Cable Installation", "Underwater Mining", "Oceanographic Research"],
      price: "$20.0M - $24.0M"
    },
    {
      id: 6,
      name: "PolarDrill 1000",
      category: "Arctic Drilling",
      description: "Drilling equipment designed for extreme cold environments, with insulated components and ice-penetrating technology.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      specs: {
        power: "2200 HP",
        diameter: "9.0m",
        depth: "1000m+",
        weight: "500 tons",
        speed: "3.5m/day"
      },
      features: ["Insulated Components", "Ice-Penetrating Technology", "Cold-Start System", "Heated Enclosures", "Remote Monitoring"],
      applications: ["Arctic Exploration", "Ice Core Sampling", "Permafrost Drilling", "Cold Climate Construction"],
      price: "$17.5M - $21.0M"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-orange-500">Product Range</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our complete lineup of industrial drilling machines, each engineered 
                for specific applications and designed to exceed the most demanding requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-20 bg-slate-800">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-700 border-slate-600 hover:border-orange-500 transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-orange-600 text-white">
                          {product.category}
                        </Badge>
                        <span className="text-sm text-gray-400">{product.price}</span>
                      </div>
                      <CardTitle className="text-orange-500 text-lg lg:text-xl">{product.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 lg:space-y-4">
                      {/* Quick Specs */}
                      <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm">
                        <div className="text-center p-2 bg-slate-600 rounded">
                          <Zap size={16} className="text-orange-500 mx-auto mb-1" />
                          <p className="text-orange-500 font-semibold">{product.specs.power}</p>
                          <p className="text-gray-400">Power</p>
                        </div>
                        <div className="text-center p-2 bg-slate-600 rounded">
                          <Gauge size={16} className="text-orange-500 mx-auto mb-1" />
                          <p className="text-orange-500 font-semibold">{product.specs.diameter}</p>
                          <p className="text-gray-400">Diameter</p>
                        </div>
                        <div className="text-center p-2 bg-slate-600 rounded">
                          <Shield size={16} className="text-orange-500 mx-auto mb-1" />
                          <p className="text-orange-500 font-semibold">{product.specs.depth}</p>
                          <p className="text-gray-400">Max Depth</p>
                        </div>
                      </div>

                      {/* Key Features Preview */}
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm lg:text-base">Key Features:</h4>
                        <ul className="text-xs lg:text-sm text-gray-300 space-y-1">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                          {product.features.length > 3 && (
                            <li className="text-orange-500 text-xs">+{product.features.length - 3} more features</li>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-sm">
                              <Eye className="mr-1" size={14} />
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-slate-800 border-slate-600 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-orange-500">{product.name}</DialogTitle>
                              <DialogDescription className="text-gray-300 text-base">
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
                                <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-slate-700 p-3 rounded">
                                    <p className="text-gray-400 text-sm">Power Output</p>
                                    <p className="text-orange-500 font-bold">{product.specs.power}</p>
                                  </div>
                                  <div className="bg-slate-700 p-3 rounded">
                                    <p className="text-gray-400 text-sm">Bore Diameter</p>
                                    <p className="text-orange-500 font-bold">{product.specs.diameter}</p>
                                  </div>
                                  <div className="bg-slate-700 p-3 rounded">
                                    <p className="text-gray-400 text-sm">Max Depth</p>
                                    <p className="text-orange-500 font-bold">{product.specs.depth}</p>
                                  </div>
                                  <div className="bg-slate-700 p-3 rounded">
                                    <p className="text-gray-400 text-sm">Total Weight</p>
                                    <p className="text-orange-500 font-bold">{product.specs.weight}</p>
                                  </div>
                                </div>
                              </div>

                              {/* All Features */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Complete Feature Set</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-sm">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Applications */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Ideal Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                  {product.applications.map((app, i) => (
                                    <Badge key={i} variant="outline" className="border-orange-500 text-orange-500">
                                      {app}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Contact CTA */}
                              <div className="bg-slate-700 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-2">Interested in this machine?</h3>
                                <p className="text-gray-300 text-sm mb-3">
                                  Contact our team for detailed specifications, customization options, and pricing information.
                                </p>
                                <Button 
                                  className="bg-orange-600 hover:bg-orange-700"
                                  onClick={() => handleQuoteRequest(product)}
                                >
                                  Request Quote
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm" className="border-slate-500 text-slate-300 hover:bg-slate-700">
                          <MapPin size={14} />
                        </Button>
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
        <DialogContent className="bg-slate-800 border-slate-600 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-orange-500">Request Quote</DialogTitle>
            <DialogDescription className="text-gray-300">
              {selectedProduct && `Get a personalized quote for ${selectedProduct.name}`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Name *</label>
              <Input
                name="name"
                value={quoteForm.name}
                onChange={handleQuoteFormChange}
                required
                className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Email *</label>
              <Input
                type="email"
                name="email"
                value={quoteForm.email}
                onChange={handleQuoteFormChange}
                required
                className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Company</label>
              <Input
                name="company"
                value={quoteForm.company}
                onChange={handleQuoteFormChange}
                className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Project Details</label>
              <Textarea
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteFormChange}
                rows={3}
                className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                placeholder="Tell us about your project requirements..."
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowQuoteForm(false)}
                className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-orange-600 hover:bg-orange-700"
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
