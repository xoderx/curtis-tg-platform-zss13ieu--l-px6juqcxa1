import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { TRAVEL_OS_FEATURES } from '@shared/content';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Database, Brain, Code, Globe, Navigation, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
export function TravelOSPage() {
  return (
    <MainLayout>
      {/* Dark Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-blue-400 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              v2.4 LTS Deployment Available
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight leading-none mb-8">
              The City <span className="text-blue-500">Operating</span> System
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Travel OS is the unified digital layer for modern destinations. Integrated infrastructure for cities that value visitor experience and data sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full h-16 px-10 text-xl font-bold">
                <Link to="/contact">Request Technical Docs</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl font-bold">
                <Link to="/portfolio">Watch Live Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* The Architecture Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">The Architecture</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-8">
                Elastic. Modular. <br /> Sovereign.
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Most platforms are siloed black boxes. Travel OS is a modular ecosystem built on open standards, allowing city planners and tourism boards to own their data and extend functionality as their needs evolve.
              </p>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    <Database className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 mb-1">Unified Data Lake</h4>
                    <p className="text-sm text-slate-500">Ingest real-time signals from transit, IoT, and commerce into a single source of truth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 mb-1">Sovereign Identity</h4>
                    <p className="text-sm text-slate-500">Privacy-first visitor profiles that give users control over their digital footprint.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-3xl border border-slate-100 p-8 flex flex-col justify-between ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white shadow-soft'}`}>
                  <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center">
                    {i === 1 && <Navigation className="text-white w-5 h-5" />}
                    {i === 2 && <Globe className="text-white w-5 h-5" />}
                    {i === 3 && <Brain className="text-white w-5 h-5" />}
                    {i === 4 && <Code className="text-white w-5 h-5" />}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-1/2 bg-slate-200 rounded" />
                    <div className="h-2 w-full bg-slate-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Deep Dive - Dark */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Engineered to handle the complexity of modern destination management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAVEL_OS_FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-4xl bg-white/5 border border-white/10 hover:border-blue-500 transition-colors group"
              >
                <div className="mb-8 text-blue-500">
                  {feature.icon === 'Database' && <Database size={40} />}
                  {feature.icon === 'Brain' && <Brain size={40} />}
                  {feature.icon === 'Code' && <Code size={40} />}
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8">{feature.description}</p>
                <Link to="/contact" className="text-sm font-bold flex items-center gap-2 text-white group-hover:text-blue-400 transition-colors">
                  Read Technical Specs <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Real-time Performance Mockup */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-12">Performance Benchmarks</h3>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Data Ingestion Latency</span>
                  <span className="text-blue-400">&lt; 150ms</span>
                </div>
                <Progress value={95} className="h-2 bg-slate-800" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Concurrency (Peak Traffic)</span>
                  <span className="text-blue-400">125k req/sec</span>
                </div>
                <Progress value={88} className="h-2 bg-slate-800" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-slate-400">SLA Availability</span>
                  <span className="text-blue-400">99.999%</span>
                </div>
                <Progress value={99} className="h-2 bg-slate-800" />
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-8 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full" /> Global Edge Distribution Active
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full" /> Threat Detection Operational
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for the v2.4 Upgrade?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Contact our architecture team to discuss how Travel OS can transform your destination's digital footprint.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full h-16 px-12 text-xl font-bold shadow-xl">
            <Link to="/contact">Schedule Technical Briefing</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}