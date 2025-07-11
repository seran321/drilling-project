import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Headquarters",
      details: ["1234 Industrial Blvd", "Houston, TX 77001", "United States"]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency Line"]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: ["sales@drilltech.com", "support@drilltech.com", "info@drilltech.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "24/7 Emergency Support"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next drilling project? Our experts are here to provide 
            customized solutions for your industrial needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
             whileHover={{
                             scale: 1.02,
                             y: -2,
                             transition: { 
                             duration: 0.0,
                             ease: "easeOut"
                      }
                    }}
          >
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-background border-border text-foreground focus:border-primary"
                    />
                  </div>
                  
                

                <div className="space-y-2">
                  <label className="text-foreground text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-background border-border text-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground text-sm font-medium">Subject</label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="bg-background border-border text-foreground focus:border-primary"
                  />
                </div>

               
                <div className="space-y-2">
                  <label className="text-foreground text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="bg-background border-border text-foreground focus:border-primary"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-white hover:text-primary border-primary border text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 transform-gpu"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                     whileHover={{
                             scale: 1.02,
                             y: -2,
                             transition: { 
                             duration: 0.0,
                             ease: "easeOut"
                      }
                    }}
                  >
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{
                             scale: 1.02,
                             y: -2,
                             transition: { 
                             duration: 0.0,
                             ease: "easeOut"
                      }
                    }}
            >
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-foreground font-bold mb-4">Global Service Network</h4>
                  <p className="text-muted-foreground mb-4">
                    With service centers across 50+ countries, we provide local support 
                    for maintenance, repairs, and technical assistance worldwide.
                  </p>
                  <Button variant="outline" className="border-primary  bg-primary text-white hover:bg-white hover:text-primary">
                    Find Service Center
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
