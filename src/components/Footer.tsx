
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      "Tunnel Boring Machines",
      "Oil & Gas Drilling",
      "Mining Equipment",
      "Construction Drilling",
      "Custom Solutions"
    ],
    services: [
      "Installation & Setup",
      "Maintenance & Repair",
      "Technical Support",
      "Training Programs",
      "Parts & Accessories"
    ],
    company: [
      "About Us",
      "Our History",
      "Leadership Team",
      "Careers",
      "News & Press"
    ],
    resources: [
      "Technical Documentation",
      "Safety Guidelines",
      "Case Studies",
      "Video Library",
      "Support Center"
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-4">DrillTech Industries</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Leading manufacturer of mega-size industrial drilling machines. 
                Engineering excellence, innovation, and reliability for the world's 
                most demanding projects.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-orange-500" />
                <span>1234 Industrial Blvd, Houston, TX 77001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-orange-500" />
                <span>info@drilltech.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-600 border border-slate-700 hover:border-orange-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 DrillTech Industries. All rights reserved.
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              Cookie Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
