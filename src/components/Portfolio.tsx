"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { generatePdf } from "@/lib/generatePdf";
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
  Download,
  MessageCircle,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

const AbstractShape = ({ delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360]
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
    className={`absolute ${className}`}
  />
);

const AnimatedLine = ({ delay = 0, className = "" }) => (
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
      ease: "easeInOut"
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
    className="group relative cursor-pointer h-full flex flex-col"
  >
    <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className={`absolute inset-0 bg-${color}-500/10`} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/5 via-transparent to-${color}-500/5`} />
        </motion.div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/0 via-${color}-500/20 to-${color}-500/0 blur-sm`} />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col">
        <motion.div
          className={`inline-flex p-3 rounded-lg bg-${color}-500/10`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className={`h-6 w-6 text-${color}-400`} />
        </motion.div>
        <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-3 flex-1 overflow-y-auto max-h-32 pr-2">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className={`px-2 py-1 text-xs rounded-full bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 whitespace-nowrap`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `rgba(var(--${color}-500), 0.2)`
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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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

const ProjectCard = ({ title, description, image, tags, links, tech, featured }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group relative perspective ${featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Folder Container */}
      <motion.div
        className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-800 backdrop-blur-md shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-500/50"
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top Flap */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-blue-600/20 backdrop-blur-sm border-b border-blue-500/30 rounded-t-xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">{tags[0] || 'Project'}</span>
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
              <motion.a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Main Folder Content (Image and Details) */}
        <div className="absolute inset-0 pt-20 p-6 flex flex-col justify-between">
          {/* Image */}
          <div className="relative h-56 w-full rounded-lg overflow-hidden mb-4">
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
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tech.map((item, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
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
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Light pulse effect on hover */}
          <motion.div
            className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-950 cursor-pointer">
      {/* Abstract animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Abstract shapes */}
        <AbstractShape
          className="w-96 h-96 -top-48 -left-48 rounded-full border border-blue-500/10 bg-blue-500/5 blur-3xl"
          delay={0}
        />
        <AbstractShape
          className="w-72 h-72 top-1/4 -right-36 rounded-full border border-purple-500/10 bg-purple-500/5 blur-3xl"
          delay={2}
        />
        <AbstractShape
          className="w-64 h-64 bottom-1/4 left-1/4 rounded-full border border-cyan-500/10 bg-cyan-500/5 blur-3xl"
          delay={4}
        />

        {/* Animated lines */}
        <AnimatedLine className="top-1/4 left-0 w-1/3" delay={0} />
        <AnimatedLine className="top-1/2 right-0 w-1/4" delay={1} />
        <AnimatedLine className="bottom-1/3 left-1/4 w-1/2" delay={2} />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-500/30"
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
            className="absolute w-4 h-4 rounded-full bg-blue-500/20 blur-xl"
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
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400 ring-1 ring-inset ring-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              React & React Native Developer
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 relative group"
            >
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                <motion.span 
                  className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  JICK
                </motion.span>
                <motion.span 
                  className="mx-2 sm:mx-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  T.
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  LAMPAGO
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </motion.span>
              </h2>
            </motion.div>

            <h6 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="block">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
                Experiences
              </span>
              <span className="block text-2xl sm:text-3xl mt-2 text-gray-400">
                Web & Mobile
              </span>
            </h6>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Specializing in React and React Native development, I build cross-platform applications
              that deliver exceptional user experiences. From web applications to mobile experiences,
              I create seamless digital solutions that users love.
            </p>
            
           
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 px-8 text-base font-medium transition-all duration-300"
                onClick={() => generatePdf()}
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white py-6 px-8 text-base font-medium transition-all duration-300"
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
              <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-sm border border-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Globe className="h-8 w-8 text-blue-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">React Web</h3>
                  <p className="mt-2 text-sm text-gray-400">Next.js, TypeScript, Tailwind</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">React</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">Next.js</span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 backdrop-blur-sm border border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Smartphone className="h-8 w-8 text-purple-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">React Native</h3>
                  <p className="mt-2 text-sm text-gray-400">iOS & Android Development</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">React Native</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">Expo</span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6 backdrop-blur-sm border border-emerald-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Layers className="h-8 w-8 text-emerald-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">Full Stack</h3>
                  <p className="mt-2 text-sm text-gray-400">Modern Tech Stack</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">MongoDB</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Express.js</span>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 backdrop-blur-sm border border-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Zap className="h-8 w-8 text-orange-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">Performance</h3>
                  <p className="mt-2 text-sm text-gray-400">Optimized Solutions</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400">Optimized</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400">Scalable</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400">SEO</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tech stack floating badges */}
            <div className="absolute -right-4 -top-4 flex gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm backdrop-blur-sm border border-blue-500/20"
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm backdrop-blur-sm border border-purple-500/20"
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Mastering the tools and technologies that power modern applications
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            <SkillCard
              icon={Code}
              title="Frontend Development"
              color="blue"
              skills={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "React Query",
                "Shadcn/ui",
                "Material UI"
              ]}
            />
            <SkillCard
              icon={Mobile}
              title="Mobile Development"
              color="purple"
              skills={[
                "React Native",
                "Expo",
                "iOS",
                "Android",
                "Mobile UI/UX",
                "Native Modules"
              ]}
            />
            <SkillCard
              icon={Terminal}
              title="Backend Development"
              color="emerald"
              skills={[
                "Node.js",
                "Express",
                "REST APIs",
                "MongoDB",
              ]}
            />
            <SkillCard
              icon={GitBranch}
              title="DevOps & Ai Tools"
              color="orange"
              skills={[
                "Git",
                "CI/CD",
                "Chatgpt",
                "Github Copilot",
                "Windsurf",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900 print:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div id="resume" className="container mx-auto px-4 print:px-0 relative z-10">
          {/* Hidden resume header for print */}
          <div className="hidden print:block mb-8 border-b pb-4">
            <h1 className="text-3xl font-bold text-white print:text-2xl">JICK T. LAMPAGO</h1>
            <p className="text-blue-400 text-lg">Mid Frontend Developer</p>
            <div className="mt-2 text-gray-300 text-sm">
              <p>lampagojick5@gmail.com | 09206502183</p>
              <p>Sito Crosaan, Talisay, Cebu, Philippines</p>
            </div>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
                  Work Experience
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                My professional journey and key achievements
              </p>
            </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20" />
            
            {/* Timeline items */}
            <div className="space-y-10">
              {[
                {
                  role: 'Mid Frontend Developer',
                  company: 'Cas',
                  period: '2022 - Present',
                  description: 'Collaborating with the development team to implement new features, optimize performance, and maintain high-quality code for enterprise applications.',
                  skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'Chatgpt', 'Github Copilot', 'React-query',"Material UI","Redux"],
                  color: 'blue'
                },
                {
                  role: 'Frontend Developer',
                  company: 'Elearnified',
                  period: 'June 2022 to August 2022',
                  description: 'I work as a front-end developer at the company, I was responsible for revamping the existing Moodle design to align with the new UI/UX specifications. This involved implementing styles using SCSS and enhancing interactivity with JavaScript and jQuery. Working in Philippine Red Cross LMS project.',
                  skills: ['Css', 'JavaScript', 'jQuery', 'Html ', 'Bootsrap'],
                  color: 'purple'
                },
                {
                  role: 'Full Stack Developers',
                  company: 'Abakada Studios',
                  period: 'March 2021 to May 2022',
                  description: 'I am a javascript developer in this enterprise, working on a frontend using vanilla javascript, Vue.js,html5, bootstrap and jquery. At the same time, since we use an open source tool that is developed in Javascript and Python, I also used basic python on a back end. I have worked on a number of projects in this company with Paymongo payment integration.',
                  skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Moodle'],
                  color: 'emerald'
                },
                {
                  role: 'React.js Developer',
                  company: 'Codally Tech',
                  period: 'November 2020 to December 2020',
                  description: 'It is project based, My role on this project is for UI Development, Codally Tech is working on a project called A+ Learning platform which serves as an online school during pandemic. We work as a team and use Agile Methodology. The entire UI project is developed using Next.js and Material UI',
                  skills: ['React.js', 'Next.js', 'Material UI', 'JavaScript', 'jQuery'],
                  color: 'blue'
                }
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
                  <div className={`absolute left-0 top-1 h-8 w-8 rounded-full bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/50 flex items-center justify-center border border-${item.color}-500/30`}>
                    <div className={`h-3 w-3 rounded-full bg-${item.color}-400`} />
                  </div>
                  
                  <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm p-6 hover:border-gray-700 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <p className="text-blue-400">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-300">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 text-xs rounded-full bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20`}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
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
              tags={["Featured", "Web", "Full Stack"]}
              tech={["React", "Node.js", "Next.js", "Tailwind CSS", "shadcn/ui"]}
              links={{
                demo: "https://scale-web-company.vercel.app",
                github: "https://github.com/username/task-manager"
              }}
              featured
            />
            <ProjectCard
              title="iSolar"
              description="A modern installer application that simplifies software installation with a clean, user-friendly interface and advanced package management features."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1747894145/i-solar.vercel.app__tmcydn.png"
              tags={["Featured", "Web", "Full Stack"]}
              tech={["React", "Node.js", "Next.js", "Tailwind CSS", "shadcn/ui"]}
              links={{
                demo: "https://res.cloudinary.com/dlax3esau/image/upload/v1747894145/i-solar.vercel.app__tmcydn.png",
                github: "https://github.com/username/fitness-app"
              }}
            />
            <ProjectCard
              title="Capture Studio"
              description="A modern photography platform that showcases stunning visual stories with a seamless user experience and advanced image management features."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1748314371/Screenshot_3_hs3kah.png"
              tags={["Featured", "Web", "Full Stack"]}
              tech={["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"]}
              links={{
                demo: "https://swt-004-photography.vercel.app/",
                github: "https://github.com/username/ecommerce"
              }}
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website showcasing creative work with smooth animations and interactions."
              image="https://res.cloudinary.com/dlax3esau/image/upload/v1748314474/Screenshot_4_i0au0a.png"
              tags={["Web", "Design"]}
              tech={["Next.js", "Tailwind CSS", "Framer Motion"]}
              links={{
                demo: "https://swt-002-company-brand.vercel.app/",
                github: "https://github.com/username/portfolio"
              }}
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
