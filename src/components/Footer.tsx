import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500 text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-base font-medium transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <a href="mailto:hello@example.com" className="text-white hover:text-blue-400 transition-colors">
                      lampagojick5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-500/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">
                      09206502183 
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-cyan-500/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Location</h4>
                    <p className="text-white">Sito Crosaan,Talisay, Cebu,Philippines</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                {/* <h4 className="text-sm font-medium text-gray-400 mb-4">Follow Me</h4> */}
                <div className="flex space-x-4">
                  {/* {[
                    { icon: Github, href: 'https://github.com', color: 'hover:bg-gray-700' },
                    { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-blue-500/10' },
                    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700/10' },
                    { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-500/10' },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 ${item.color} hover:text-white transition-all duration-300`}
                      whileHover={{ y: -3 }}
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.a>
                  ))} */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jick Lampago. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
