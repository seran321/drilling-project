
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={14} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={14} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={14} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={14} />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-primary mb-1">DrillTech Industries</h3>
            <p className="text-xs text-muted-foreground text-center md:text-left max-w-xs">
              Leading manufacturer of mega-size industrial drilling machines.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Mail size={12} className="text-primary" />
              <span>info@drilltech.com</span>
            </div>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-6 h-6 bg-card hover:bg-primary border border-border hover:border-primary rounded flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-3 bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© 2024 DrillTech Industries. All rights reserved.</span>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
