import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ContactOptions } from '@/components/conversion/ContactOptions';
import { Link } from 'react-router-dom';
import { useContentStore } from '@/hooks/use-content';
export function HomePage() {
  const clients = useContentStore(s => s.content.clients);
  const portfolio = useContentStore(s => s.content.portfolio);
  // Derive preview items (first 2)
  const portfolioPreviews = portfolio.slice(0, 2);
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-sm font-medium text-slate-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                Now Partnering for 2025 City Infrastructure
              </div>
              <Link to="/admin" className="text-[10px] uppercase tracking-widest font-bold text-slate-300 hover:text-blue-600 transition-colors flex items-center gap-1 group">
                Admin Access <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
              Elite Technology <br />
              <span className="text-blue-600">Infrastructure</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              Enterprise-scale digital architecture ($50K+ builds) for cities, global nonprofits, and high-impact regional movements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-slate-950 text-white rounded-full h-14 px-8 text-lg hover:scale-105 transition-transform font-bold">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full h-14 px-8 text-lg hover:bg-slate-50 transition-colors font-bold">
                <Link to="/portfolio">View Selected Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Credibility Strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Trusted Regional Partners</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-2">
                {client.logo && <img src={client.logo} alt={client.name} className="h-6 md:h-8 w-auto object-contain" />}
                <span className="text-xs font-bold text-slate-900 hidden sm:inline">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Featured Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Case Studies</h2>
              <p className="text-3xl md:text-4xl font-display font-bold text-slate-950">
                Selected Regional Impacts.
              </p>
            </div>
            <Link to="/portfolio" className="text-sm font-bold text-slate-950 flex items-center gap-2 hover:text-blue-600 transition-colors">
              Explore All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {portfolioPreviews.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              >
                <Link to={`/portfolio/${project.id}`} className="group block text-left">
                  <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 mb-6">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold text-slate-950 mt-2 flex items-center justify-between">
                    {project.title}
                    <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Path Choice Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 mb-4 tracking-tight">How shall we begin?</h2>
            <p className="text-slate-600">Access our elite brain trust through the channel that fits your urgency.</p>
          </div>
          <ContactOptions />
        </div>
      </section>
      {/* Travel OS Showcase */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Innovation Spotlight</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Introducing <span className="text-blue-500">Travel OS</span>
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                The definitive operating system for destination marketing. We've redefined how visitors interact with St. Louis districts like The Delmar Loop and surrounding regional hubs.
              </p>
              <ul className="space-y-4 mb-10">
                {['Hyper-local Data Integration', 'Real-time Experience Tracking', 'Predictive Regional Analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500" size={20} />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100 rounded-full h-14 px-8 font-bold">
                <Link to="/travel-os">Explore the Ecosystem</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200" alt="Travel OS Platform" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-8">Ready to architect <br /> the future?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Schedule a consultation with our St. Louis architecture team. Minimum engagement starts at $50,000 for full institutional infrastructure.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full h-16 px-10 text-xl font-bold shadow-xl">
              <Link to="/contact">Book $50K+ Strategy Audit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}