'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onRequestResume: () => void;
}

export function Header({ onRequestResume }: HeaderProps) {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Name Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center sm:justify-start"
          >
            <div className="inline-flex items-center rounded-full bg-white px-6 py-2 text-lg font-semibold text-slate-700 ring-1 ring-slate-200 shadow-sm">
              <span className="relative mr-4 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-400 opacity-50"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-700"></span>
              </span>
              <span className="text-xl font-bold">Jick T. Lampago</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              className="flex items-center justify-center bg-slate-900 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-slate-800"
              onClick={onRequestResume}
            >
              <span>Request Resume</span>
              <Send className="ml-2 h-5 w-5 flex-shrink-0" />
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-900 transition-all duration-300 hover:bg-slate-50 hover:text-slate-900"
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
