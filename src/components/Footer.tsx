
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
      "Construction Drilling"
    ],
    company: [
      "About Us",
      "Careers",
      "News & Press",
      "Support Center"
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-3">DrillTech Industries</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading manufacturer of mega-size industrial drilling machines. 
              Engineering excellence for the world's most demanding projects.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                <span>1234 Industrial Blvd, Houston, TX 77001</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={14} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={14} className="text-primary" />
                <span>info@drilltech.com</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-card hover:bg-primary border border-border hover:border-primary rounded-md flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-foreground font-semibold text-base mb-3 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-6 bg-border" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <motion.div 
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 DrillTech Industries. All rights reserved.
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
