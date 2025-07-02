
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
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Headquarters",
      details: ["1234 Industrial Blvd", "Houston, TX 77001", "United States"]
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency Line"]
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email",
      details: ["sales@drilltech.com", "support@drilltech.com", "info@drilltech.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "24/7 Emergency Support"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
          >
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500 text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Company</label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Project Type</label>
                  <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-orange-500 focus:outline-none">
                    <option>Select project type</option>
                    <option>Tunnel Construction</option>
                    <option>Oil & Gas Drilling</option>
                    <option>Mining Operations</option>
                    <option>Infrastructure Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white focus:border-orange-500"
                  />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
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
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h4 className="text-white font-bold mb-4">Global Service Network</h4>
                <p className="text-gray-300 mb-4">
                  With service centers across 50+ countries, we provide local support 
                  for maintenance, repairs, and technical assistance worldwide.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Find Service Center
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
