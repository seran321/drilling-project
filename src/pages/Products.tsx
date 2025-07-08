
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/hooks/useTheme';
import { 
  ArrowRight, 
  Eye, 
  MessageSquare, 
  Zap, 
  Shield, 
  Wrench, 
  Download,
  X
} from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProductTitle, setQuoteProductTitle] = useState('');

  const products = [
    {
      id: 1,
      title: "Mega Tunnel Borer X1",
      category: "Tunnel Boring",
      price: "From $2.5M",
      image: "/placeholder.svg",
      description: "Advanced tunnel boring machine for large-scale infrastructure projects.",
      features: ["18m diameter capacity", "Advanced guidance system", "Real-time monitoring"],
      specs: {
        power: "3,200 HP",
        diameter: "18m max",
        speed: "50m/hour",
        weight: "145 tons"
      }
    },
    {
      id: 2,
      title: "Oil Rig Driller Pro",
      category: "Oil & Gas",
      price: "From $1.8M", 
      image: "/placeholder.svg",
      description: "High-performance drilling system for oil and gas exploration.",
      features: ["5,000m depth capability", "Automated drilling", "Safety systems"],
      specs: {
        power: "2,800 HP",
        depth: "5,000m max",
        speed: "40m/hour", 
        weight: "120 tons"
      }
    },
    {
      id: 3,
      title: "Mining Beast 3000",
      category: "Mining",
      price: "From $3.2M",
      image: "/placeholder.svg",
      description: "Heavy-duty mining drilling equipment for extreme conditions.",
      features: ["Rock drilling", "Dust suppression", "Remote operation"],
      specs: {
        power: "3,500 HP",
        diameter: "15m max",
        speed: "35m/hour",
        weight: "180 tons"
      }
    }
  ];

  const handleQuoteRequest = (productTitle) => {
    setQuoteProductTitle(productTitle);
    setShowQuoteModal(true);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industrial drilling machines for tough projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 2,
                    z: 20,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-2xl">
                    {/* Image First */}
                    <div className="aspect-video bg-muted/30 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                      </div>
                      <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                      
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              onClick={() => setSelectedProduct(product)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
                            {selectedProduct && (
                              <>
                                <DialogHeader>
                                  <DialogTitle className="text-2xl text-primary">
                                    {selectedProduct.title}
                                  </DialogTitle>
                                </DialogHeader>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                  {/* Image First in Modal */}
                                  <div className="space-y-4">
                                    <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                                      <img 
                                        src={selectedProduct.image} 
                                        alt={selectedProduct.title}
                                        className="w-full h-full object-cover rounded-lg"
                                      />
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-6">
                                    <div>
                                      <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                                      <p className="text-muted-foreground">{selectedProduct.description}</p>
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-lg font-semibold text-foreground mb-3">Features</h3>
                                      <ul className="space-y-2">
                                        {selectedProduct.features.map((feature: string, i: number) => (
                                          <li key={i} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            {feature}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-lg font-semibold text-foreground mb-3">Specifications</h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                                          <div key={key} className="bg-muted/30 p-3 rounded-lg">
                                            <p className="text-xs text-muted-foreground capitalize">{key}</p>
                                            <p className="font-semibold text-foreground">{value as string}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div className="flex gap-3 pt-4">
                                      <Button 
                                        className="flex-1 bg-primary hover:bg-primary/90"
                                        onClick={() => {
                                          handleQuoteRequest(selectedProduct.title);
                                        }}
                                      >
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Quote
                                      </Button>
                                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                        <Download className="w-4 h-4 mr-2" />
                                        Brochure
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => handleQuoteRequest(product.title)}
                        >
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Request Modal */}
        <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
          <DialogContent className="max-w-md bg-card">
            <DialogHeader>
              <DialogTitle className="text-primary">Request Quote</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Product: {quoteProductTitle}
              </p>
            </DialogHeader>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input className="bg-background border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" className="bg-background border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input className="bg-background border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="bg-background border-border"
                  rows={3}
                />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowQuoteModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                  Send Request
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Products;
