import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Youtube, Mail , Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={30} />, href: "#", label: "YouTube" }
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px- sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >

            
            <h3 className="text-3xl font-semibold text-primary mb-1">DrillTech Industries</h3>
            <p className="text-xl text-muted-foreground text-center md:text-left pb-2 ">
               Leading manufacturer of mega-size industrial drilling machines.
            </p>
             <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>1234 Industrial Blvd, Houston, TX 77001</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@drilltech.com</span>
              </div>
            </div>
            
          </motion.div>

          <motion.div 
            className="grid grid-col md:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <nav className="flex space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              
              <div className="flex space-x-1">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-card hover:bg-primary border border-border hover:border-primary rounded flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-2 bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 text-xm text-muted-foreground">
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
