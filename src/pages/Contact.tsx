
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-primary">
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
              <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Get in touch with our team for inquiries, quotes, and support
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>
                  <p className="text-gray-500">
                    Ready to discuss your drilling needs? Our expert team is here to help you 
                    find the perfect solution for your project.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="text-primary font-semibold">Phone</h3>
                      <p className="text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="text-primary font-semibold">Email</h3>
                      <p className="text-gray-500">info@drilltechindustries.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="text-primary font-semibold">Address</h3>
                      <p className="text-gray-500">
                        123 Industrial Drive<br />
                        Manufacturing District<br />
                        Houston, TX 77001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="bg-card border-border hover:shadow-2xl transition-all duration-300 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-500 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-500 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-500 mb-2">Subject</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Enter Subject"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-primary rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-500 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-primary rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-white hover:text-primary border border-primary text-white py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-primary hover:bg-white hover:text-primary border border-primary text-white py-3 text-lg">
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

export default Contact;
