import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Target, Zap, ArrowRight, Bot, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContentStore } from '@/hooks/use-content';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
export function AboutPage() {
  const services = useContentStore(s => s.content.services);
  const clients = useContentStore(s => s.content.clients);
  return (
    <MainLayout>
      {/* McKinsey-style Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Our Narrative</h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-10">
              Strategy First. <br />
              <span className="text-slate-400">Infrastructure Second.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Curtis Technology Group was founded on a singular premise: elite technology is useless without elite strategy. We architect the digital backbone for cities, organizations, and global movements.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Core Capabilities Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Capabilities</h2>
            <p className="text-3xl font-display font-bold text-slate-950">Architectural Pillars</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{service.description}</p>
                </div>
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{service.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Selected Experience: Regional Partners */}
      <section className="py-24 bg-slate-950 text-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">Selected Experience</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Regional Institutional Leadership.</h3>
            <p className="text-lg text-slate-400">Our expertise is rooted in the St. Louis region, serving the organizations that define the cultural and civic landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-t border-white/10 pt-16">
            {clients.map((client) => (
              <div key={client.name} className="group">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{client.name}</h4>
                <p className="text-slate-500">Collaborative digital strategy and infrastructure execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Approach */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Elite Engineering</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Bot className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Integrated Intelligence</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">We embed Noem.ai directly into organizational workflows to automate complex data analysis.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Conversational Layers</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Deploy high-fidelity AI voice concierges for regional tourism via Dialora.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <ShieldCheck className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Zero-Trust Infrastructure</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Designing for absolute security before deployment. Infrastructure Second.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Elastic Performance</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Systems designed to scale instantly for city-wide traffic peaks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Options */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-display font-bold text-slate-950 mb-6">Partnership Models</h2>
            <p className="text-slate-600">Access our elite brain trust through multiple high-fidelity channels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { t: 'Full Builds', d: 'End-to-end digital infrastructure architected for $50k-$500k deployments.' },
              { t: 'AI Automation', d: 'Strategic integration of Noem.ai and Dialora into existing workflows.' },
              { t: 'Strategic Consulting', d: 'RFP-Ready audit and digital roadmap planning for municipal leaders.' }
            ].map((opt) => (
              <div key={opt.t} className="p-10 rounded-4xl border border-slate-100 bg-slate-50 text-center">
                <h4 className="text-xl font-bold text-slate-950 mb-4">{opt.t}</h4>
                <p className="text-sm text-slate-500 mb-8">{opt.d}</p>
                <Button asChild variant="outline" className="rounded-full border-slate-200">
                  <Link to="/contact">Inquire Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Positioning Statement */}
      <section className="py-24 md:py-32 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-10 leading-tight">
              Elite Technology Infrastructure. <br /> Built for Impact.
            </h2>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100 rounded-full h-16 px-12 text-xl font-bold">
              <Link to="/contact">Start Project Audit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}