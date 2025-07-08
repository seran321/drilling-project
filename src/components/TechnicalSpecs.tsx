
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, Zap, Gauge, Shield, Thermometer, Settings } from 'lucide-react';

const TechnicalSpecs = () => {
  const [activeSpec, setActiveSpec] = useState('performance');

  const specifications = {
    performance: {
      title: "Performance Specs",
      icon: <Zap className="w-6 h-6" />,
      data: [
        { label: "Maximum Power Output", value: "3,200 HP", unit: "Horsepower" },
        { label: "Torque Rating", value: "15,000 Nm", unit: "Newton-meters" },
        { label: "Maximum RPM", value: "120 RPM", unit: "Revolutions/min" },
        { label: "Drilling Speed", value: "50 m/hr", unit: "Meters per hour" },
        { label: "Penetration Rate", value: "2.5 m/min", unit: "Meters per minute" }
      ]
    },
    dimensions: {
      title: "Physical Dimensions",
      icon: <Gauge className="w-6 h-6" />,
      data: [
        { label: "Overall Length", value: "28.5 m", unit: "Meters" },
        { label: "Overall Width", value: "4.2 m", unit: "Meters" },
        { label: "Overall Height", value: "6.8 m", unit: "Meters" },
        { label: "Operating Weight", value: "145 tons", unit: "Metric tons" },
        { label: "Ground Pressure", value: "0.85 kg/cm²", unit: "Pressure" }
      ]
    },
    capacity: {
      title: "Drilling Capacity",
      icon: <Shield className="w-6 h-6" />,
      data: [
        { label: "Maximum Diameter", value: "18.0 m", unit: "Meters" },
        { label: "Maximum Depth", value: "5,000 m", unit: "Meters" },
        { label: "Minimum Diameter", value: "2.5 m", unit: "Meters" },
        { label: "Angle Range", value: "0° - 30°", unit: "Degrees" },
        { label: "Bore Tolerance", value: "±25 mm", unit: "Millimeters" }
      ]
    },
    environmental: {
      title: "Environmental",
      icon: <Thermometer className="w-6 h-6" />,
      data: [
        { label: "Operating Temperature", value: "-40°C to +55°C", unit: "Celsius" },
        { label: "Noise Level", value: "75 dB(A)", unit: "Decibels" },
        { label: "Emission Standard", value: "Stage V / Tier 4", unit: "Compliance" },
        { label: "Dust Collection", value: "99.5%", unit: "Efficiency" },
        { label: "Vibration Level", value: "<2.5 m/s²", unit: "Acceleration" }
      ]
    }
  };

  const certifications = [
    "ISO 9001:2015", "CE Marking", "ATEX Certification", 
    "EPA Tier 4 Final", "OSHA Compliant", "FCC Class A"
  ];

  return (
    <section id="specs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed technical specifications and performance metrics for our 
            industrial drilling machines.
          </p>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeSpec} onValueChange={setActiveSpec}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card p-1">
              {Object.entries(specifications).map(([key, spec]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {spec.icon}
                  <span className="hidden sm:inline">{spec.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(specifications).map(([key, spec]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                      {spec.icon}
                      {spec.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {spec.data.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-muted/50 p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.02, 
                            rotateX: 5,
                            z: 20,
                            transition: { duration: 0.2 }
                          }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <h4 className="text-foreground font-semibold mb-2">{item.label}</h4>
                          <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                          <p className="text-muted-foreground text-sm">{item.unit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: -5,
              z: 30,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Settings className="w-6 h-6" />
                  Certifications & Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our drilling machines meet and exceed international safety, 
                  environmental, and quality standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-primary text-primary">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              z: 30,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Download className="w-6 h-6" />
                  Technical Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access comprehensive technical documentation, CAD files, 
                  and operational manuals.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Technical Specifications PDF
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    CAD Files & 3D Models
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Operation Manual
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
