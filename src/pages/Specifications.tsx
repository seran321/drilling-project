
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Specifications = () => {
  const specs = [
    {
      category: "Performance",
      items: [
        { label: "Maximum Drilling Depth", value: "1000m" },
        { label: "Drilling Speed", value: "15m/hour" },
        { label: "Power Output", value: "500kW" },
        { label: "Operating Pressure", value: "350 bar" }
      ]
    },
    {
      category: "Dimensions",
      items: [
        { label: "Length", value: "18m" },
        { label: "Width", value: "3.5m" },
        { label: "Height", value: "4.2m" },
        { label: "Weight", value: "45 tons" }
      ]
    },
    {
      category: "Technical Features",
      items: [
        { label: "Engine Type", value: "Diesel Turbo" },
        { label: "Hydraulic System", value: "Load-sensing" },
        { label: "Control System", value: "Digital PLC" },
        { label: "Safety Rating", value: "IP65" }
      ]
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
              <h1 className="text-5xl font-bold text-orange-500 mb-6">Technical Specifications</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed specifications for our flagship MegaDrill X1000 series
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {specs.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-orange-500 mb-6">{section.category}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Information</h3>
              <p className="text-gray-300 mb-4">
                All specifications are subject to configuration and operating conditions. 
                Custom modifications available upon request.
              </p>
              <p className="text-gray-300">
                For detailed technical documentation and custom specifications, 
                please contact our engineering team.
              </p>
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

export default Specifications;
