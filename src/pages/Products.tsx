
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Shield, Wrench } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "MegaDrill X1000",
      description: "Our flagship mega-size drilling machine for large-scale industrial projects",
      features: ["1000m drilling depth", "Advanced hydraulic system", "GPS positioning"],
      icon: Zap
    },
    {
      name: "PowerDrill Pro 500",
      description: "High-performance drilling solution for demanding applications",
      features: ["500m drilling depth", "Enhanced safety features", "Remote monitoring"],
      icon: Shield
    },
    {
      name: "IndustrialDrill HD",
      description: "Heavy-duty drilling machine for extreme conditions",
      features: ["All-weather operation", "Modular design", "24/7 support"],
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-orange-500 mb-6">Our Products</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our range of cutting-edge drilling machines designed for industrial excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="text-orange-500 mr-3" size={32} />
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <a href="/" className="flex items-center">
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Home
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
