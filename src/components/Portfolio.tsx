'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useState } from 'react';
import {
  Smartphone,
  Globe,
  Layers,
  Zap,
  Code,
  Terminal,
  GitBranch,
  Smartphone as Mobile,
  ExternalLink,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

const AbstractShape = ({ delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay,
      ease: 'linear',
    }}
    className={`absolute ${className}`}
  />
);

const AnimatedLine = ({ delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scaleX: [0, 1, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
    className={`absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent ${className}`}
  />
);

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color: string;
}

const SkillCard = ({ icon: Icon, title, skills, color }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex h-full cursor-pointer flex-col"
  >
    <Card className="relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <div className={`absolute inset-0 bg-${color}-500/5`} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-${color}-500/3 via-transparent to-${color}-500/3`}
          />
        </motion.div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-${color}-500/0 via-${color}-500/20 to-${color}-500/0 blur-sm`}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col">
        <motion.div
          className={`inline-flex rounded-lg p-3 bg-${color}-500/10`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </motion.div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-900/90">
          {title}
        </h3>
        <div className="mt-3 max-h-32 flex-1 overflow-y-auto pr-2">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className={`rounded-full px-2 py-1 text-xs bg-${color}-500/10 text-${color}-700 border border-${color}-500/20 whitespace-nowrap`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `rgba(var(--${color}-500), 0.2)`,
                }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover shine effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
    </Card>
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  tech: string[];
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  links,
  tech,
  featured,
}: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      onClick={e => {
        e.stopPropagation();
        window.open(links.demo, '_blank', 'noopener,noreferrer');
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group perspective relative ${featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Folder Container */}
      <motion.div
        className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-xl"
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top Flap */}
        <div className="absolute top-0 right-0 left-0 flex h-20 items-center justify-between rounded-t-xl border-b border-blue-500/30 bg-blue-600/20 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-pulse rounded-full bg-blue-400" />
            <span className="text-sm font-medium tracking-wider text-blue-300 uppercase">
              {tags[0] || 'Project'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* {links.github && (
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )} */}
            {links.demo && (
              <motion.button
                type="button"
                className="text-blue-200 transition-colors hover:text-white"
                whileHover={{ scale: 1.1 }}
                aria-label="Open Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Main Folder Content (Image and Details) */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 pt-20">
          {/* Image */}
          <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Details */}
          <div className="flex-grow space-y-3">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">{description}</p>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tech.map((item, index) => (
                <motion.span
                  key={index}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Futuristic Elements & Hover Effects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Light pulse effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleRequestResume = () => {
    setShowEmailModal(true);
    setEmail('');
    setEmailError('');
  };

  const handleSubmitEmail = async () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setIsSendingEmail(true);
    setEmailError('');

    try {
      // Send email via API with server-side PDF generation
      const response = await fetch('/api/send-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowEmailModal(false);
        setEmail('');
        setEmailError('');
        
        // Show success modal instead of alert
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        setEmailError(errorData.error || 'Failed to send resume');
      }
    } catch (error) {
      console.error('Error sending resume:', error);
      setEmailError('Network error. Please try again.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleCloseModal = () => {
    setShowEmailModal(false);
    setEmail('');
    setEmailError('');
  };

  return (
    <div className="[::-webkit-scrollbar-track:background:rgba(241,245,249,1)] [::-webkit-scrollbar-thumb:background:rgba(148,163,184,0.8)] [::-webkit-scrollbar-thumb:hover:background:rgba(100,116,139,0.9)] [::-webkit-scrollbar:width:8px] [::-webkit-scrollbar-thumb:rounded-lg] [::-webkit-scrollbar-track:rounded-lg] relative min-h-screen w-full cursor-pointer overflow-hidden bg-slate-50 text-slate-900">
      {/* Abstract animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200/70 via-transparent to-transparent" />
          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:18px_28px] opacity-60" />
        </div>

        {/* Abstract shapes */}
        <AbstractShape
          className="-top-48 -left-48 h-96 w-96 rounded-full border border-slate-300/40 bg-slate-200/40 blur-3xl"
          delay={0}
        />
        <AbstractShape
          className="top-1/4 -right-36 h-72 w-72 rounded-full border border-slate-300/40 bg-slate-200/30 blur-3xl"
          delay={2}
        />
        <AbstractShape
          className="bottom-1/4 left-1/4 h-64 w-64 rounded-full border border-slate-300/40 bg-slate-200/30 blur-3xl"
          delay={4}
        />

        {/* Animated lines */}
        <AnimatedLine className="top-1/4 left-0 w-1/3" delay={0} />
        <AnimatedLine className="top-1/2 right-0 w-1/4" delay={1} />
        <AnimatedLine className="bottom-1/3 left-1/4 w-1/2" delay={2} />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-slate-400/30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute h-4 w-4 rounded-full bg-slate-400/20 blur-xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <Header onRequestResume={handleRequestResume} />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h6 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block">5+</span>
              <span className="block text-slate-900">
                Years of experience
              </span>
              <span className="mt-2 block text-2xl text-slate-600 sm:text-3xl">Web & Mobile</span>
            </h6>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Specializing in React and React Native development, I build cross-platform
              applications that deliver exceptional user experiences. From web applications to
              mobile experiences, I create seamless digital solutions that users love.
            </p>

            {/* <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm">
                Contact Me
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                Available for freelance & full-time
              </div>
            </div> */}
          </motion.div>

          {/* Right column - Tech stack cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <Card className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Globe className="h-8 w-8 text-slate-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">React Web</h3>
                  <p className="mt-2 text-sm text-slate-600">Next.js, TypeScript, Tailwind</p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      React
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      Next.js
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Smartphone className="h-8 w-8 text-slate-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">React Native</h3>
                  <p className="mt-2 text-sm text-slate-600">iOS & Android Development</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                      React Native
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                      Expo
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Layers className="h-8 w-8 text-slate-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Full Stack</h3>
                  <p className="mt-2 text-sm text-slate-600">Modern Tech Stack</p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      Node.js
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      MongoDB
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      Express.js
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Zap className="h-8 w-8 text-slate-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Performance</h3>
                  <p className="mt-2 text-sm text-slate-600">Optimized Solutions</p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      Optimized
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      Scalable
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                      SEO
                    </span>
                  </div>
                </div>
              </Card>
              <Card className="group relative col-span-2 h-40 overflow-hidden border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative flex h-full items-center">
                  <div className="flex-shrink-0">
                    <Zap className="h-12 w-12 text-slate-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900">Progressive Web Apps</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Fast, reliable, and engaging web experiences that work offline
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        PWA
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        Offline-First
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        Installable
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        Push Notifications
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tech stack floating badges */}
            <div className="absolute -top-4 -right-4 flex gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
              >
                Redux
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="text-slate-900">
                Technical Expertise
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Mastering the tools and technologies that power modern applications
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <SkillCard
              icon={Code}
              title="Frontend Development"
              color="blue"
              skills={[
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Redux',
                'React Query',
                'Shadcn/ui',
                'Material UI',
              ]}
            />
            <SkillCard
              icon={Mobile}
              title="Mobile Development"
              color="purple"
              skills={['React Native', 'Expo', 'iOS', 'Android', 'Mobile UI/UX', 'Native Modules']}
            />
            <SkillCard
              icon={Terminal}
              title="Backend Development"
              color="emerald"
              skills={['Node.js', 'Express', 'REST APIs', 'MongoDB']}
            />
            <SkillCard
              icon={GitBranch}
              title="DevOps & Ai Tools"
              color="orange"
              skills={['Git', 'CI/CD', 'Chatgpt', 'Github Copilot', 'Windsurf']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative bg-white py-20 print:py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div id="resume" className="relative z-10 container mx-auto px-4 print:px-0">
          {/* Hidden resume header for print */}
          <div className="mb-8 hidden border-b pb-4 print:block">
            <h1 className="text-3xl font-bold text-white print:text-2xl">JICK T. LAMPAGO</h1>
            <p className="text-lg text-blue-400">Mid Frontend Developer</p>
            <div className="mt-2 text-sm text-gray-300">
              <p>lampagojick5@gmail.com |     09490390624</p>
              <p>Sito Crosaan, Talisay, Cebu, Philippines</p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <span className="text-slate-900">
                  Work Experience
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                My professional journey and key achievements
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200" />

              {/* Timeline items */}
              <div className="space-y-10">
                {[
                  {
                    role: 'Mid Frontend Developer',
                    company: 'Commerce Acceptance Solutions',
                    period: '2022 - Present',
                    description:
                      'Collaborating with the development team to implement new features, optimize performance, and maintain high-quality code for enterprise applications.',
                    skills: [
                      'React',
                      'TypeScript',
                      'Next.js',
                      'Redux',
                      'Chatgpt',
                      'Github Copilot',
                      'React-query',
                      'Material UI',
                      'Redux',
                    ],
                    color: 'blue',
                  },
                  {
                    role: 'Frontend Developer',
                    company: 'Elearnified',
                    period: 'June 2022 to August 2022',
                    description:
                      'I work as a front-end developer at the company, I was responsible for revamping the existing Moodle design to align with the new UI/UX specifications. This involved implementing styles using SCSS and enhancing interactivity with JavaScript and jQuery. Working in Philippine Red Cross LMS project.',
                    skills: ['Css', 'JavaScript', 'jQuery', 'Html ', 'Bootsrap'],
                    color: 'purple',
                  },
                  {
                    role: 'Full Stack Developers',
                    company: 'Abakada Studios',
                    period: 'March 2021 to May 2022',
                    description:
                      'I am a javascript developer in this enterprise, working on a frontend using vanilla javascript, Vue.js,html5, bootstrap and jquery. At the same time, since we use an open source tool that is developed in Javascript and Python, I also used basic python on a back end. I have worked on a number of projects in this company with Paymongo payment integration.',
                    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Moodle'],
                    color: 'emerald',
                  },
                  {
                    role: 'React.js Developer',
                    company: 'Codally Tech',
                    period: 'November 2020 to December 2020',
                    description:
                      'It is project based, My role on this project is for UI Development, Codally Tech is working on a project called A+ Learning platform which serves as an online school during pandemic. We work as a team and use Agile Methodology. The entire UI project is developed using Next.js and Material UI',
                    skills: ['React.js', 'Next.js', 'Material UI', 'JavaScript', 'jQuery'],
                    color: 'blue',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-1 left-0 h-8 w-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm`}
                    >
                      <div className={`h-2.5 w-2.5 rounded-full bg-${item.color}-500`} />
                    </div>

                    <Card className="border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:shadow-md">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                          <p className="text-slate-700">{item.company}</p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm whitespace-nowrap text-slate-700">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-3 text-slate-700">{item.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`rounded-full px-3 py-1 text-xs bg-${item.color}-500/10 text-${item.color}-700 border border-${item.color}-500/20`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-gray-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="text-white">
                Featured Projects
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="ScaleWeb"
              description="A modern website company platform that showcases a collection of AI-powered web templates and design solutions, featuring a sleek template gallery and responsive design."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1748313695/Screenshot_1_k3ozfl.png"
              tags={['Featured', 'Web', 'Full Stack']}
              tech={['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui']}
              links={{
                demo: 'https://scale-web-company.vercel.app',
                github: 'https://github.com/username/task-manager',
              }}
              featured
            />
            <ProjectCard
              title="iSolar"
              description="A modern installer application that simplifies software installation with a clean, user-friendly interface and advanced package management features."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1747894145/i-solar.vercel.app__tmcydn.png"
              tags={['Featured', 'Web', 'Full Stack']}
              tech={['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui']}
              links={{
                demo: 'https://i-solar.vercel.app/',
                github: 'https://github.com/username/fitness-app',
              }}
            />
            <ProjectCard
              title="Capture Studio"
              description="A modern photography platform that showcases stunning visual stories with a seamless user experience and advanced image management features."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1748314371/Screenshot_3_hs3kah.png"
              tags={['Featured', 'Web', 'Full Stack']}
              tech={['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS']}
              links={{
                demo: 'https://swt-004-photography.vercel.app/',
                github: 'https://github.com/username/ecommerce',
              }}
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website showcasing creative work with smooth animations and interactions."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1748314474/Screenshot_4_i0au0a.png"
              tags={['Web', 'Design']}
              tech={['Next.js', 'Tailwind CSS', 'Framer Motion']}
              links={{
                demo: 'https://swt-002-company-brand.vercel.app/',
                github: 'https://github.com/username/portfolio',
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Request Resume</h3>
            <p className="mb-6 text-sm text-slate-600">
              Please enter your email address to receive the resume.
            </p>
            
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmitEmail();
                    }
                  }}
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-400">{emailError}</p>
                )}
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleSubmitEmail}
                  disabled={isSendingEmail}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSendingEmail ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Resume'
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCloseModal}
                  disabled={isSendingEmail}
                  className="flex-1 border-slate-300 bg-white text-slate-900 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mx-4 max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center shadow-xl"
          >
            {/* Success Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <svg
                className="h-8 w-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Message */}
            <h3 className="mb-2 text-xl font-semibold text-slate-900">Resume Sent Successfully!</h3>
            <p className="mb-6 text-sm text-slate-600">
             Resume has been sent to your email with the PDF attachment.
            </p>

            {/* Close Button */}
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-slate-900 hover:bg-slate-800"
            >
              Got it
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
