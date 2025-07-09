
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={12} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={12} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={12} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={12} />, href: "#", label: "YouTube" }
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-muted/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-primary mb-1">DrillTech Industries</h3>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Industrial drilling solutions
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center gap-4"
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
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Mail size={10} className="text-primary" />
                <span>info@drilltech.com</span>
              </div>
              <div className="flex space-x-1">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-5 h-5 bg-card hover:bg-primary border border-border hover:border-primary rounded flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 text-xs text-muted-foreground">
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
