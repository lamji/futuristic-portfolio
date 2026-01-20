import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:18px_28px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            <span className="text-slate-900">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-slate-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-slate-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-slate-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-slate-200"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-900 py-6 text-base font-medium text-white transition-all duration-300 hover:bg-slate-800"
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
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                    <Mail className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-600">Email</h4>
                    <a href="mailto:hello@example.com" className="text-slate-900 transition-colors hover:text-slate-700">
                      lampagojick5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                    <Phone className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-600">Phone</h4>
                    <a href="tel:+1234567890" className="text-slate-900 transition-colors hover:text-slate-700">
                      09490390624
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                    <MapPin className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-600">Location</h4>
                    <p className="text-slate-900">Sito Crosaan,Talisay, Cebu,Philippines</p>
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
        <div className="mt-16 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-600">
            © {currentYear} Jick Lampago. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
