import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContentStore } from '@/hooks/use-content';
export function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');
  const portfolio = useContentStore(s => s.content.portfolio);
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(portfolio.map(p => p.category))];
    return cats;
  }, [portfolio]);
  const filteredProjects = useMemo(() => {
    return activeTab === 'All'
      ? portfolio
      : portfolio.filter(p => p.category === activeTab);
  }, [portfolio, activeTab]);
  return (
    <MainLayout>
      <section className="pt-32 pb-20 md:pt-48 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-left">
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Selected Work</h1>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-950 mb-8 tracking-tight">
              Institutional Impact.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From civic mobilization to high-performance regional infrastructure, we build the systems that define the St. Louis landscape.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-16 border-b border-slate-100 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat
                  ? 'bg-slate-950 text-white shadow-lg'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col text-left"
                >
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 mb-8 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/90 text-slate-950 backdrop-blur-sm border-none font-bold">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-display font-bold text-slate-950">{project.title}</h3>
                      </div>
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all shadow-sm"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed line-clamp-2">
                      {project.solution}
                    </p>
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Impact Metric</p>
                        <p className="text-slate-950 font-bold">{project.results}</p>
                      </div>
                      <div className="flex items-end justify-end">
                        <Link to={`/portfolio/${project.id}`} className="text-slate-950 font-bold group-hover:text-blue-600 inline-flex items-center text-sm transition-colors">
                          Full Case Study <ExternalLink className="ml-2 h-4 w-4 shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {/* RFP CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 text-left">
            <div className="max-w-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Need an RFP Package?</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                We provide full institutional documentation, technical roadmaps, and security compliance frameworks for municipal and enterprise bids.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100 rounded-full h-16 px-10 text-xl font-bold shrink-0">
              <Link to="/contact?ref=portfolio-rfp">Request RFP Kit</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}