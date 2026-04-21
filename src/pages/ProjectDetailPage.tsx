import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { useContentStore } from '@/hooks/use-content';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const portfolio = useContentStore(s => s.content.portfolio);
  const project = useMemo(() => {
    return portfolio.find((p) => p.id === projectId);
  }, [portfolio, projectId]);
  if (!project) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-display font-bold mb-8 text-slate-950">Project Not Found</h1>
          <p className="text-slate-600 mb-12">The case study you are looking for does not exist or has been archived.</p>
          <Button asChild className="rounded-full">
            <Link to="/portfolio"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <motion.div initial="initial" animate="animate" variants={fadeIn} className="max-w-3xl">
            <Link to="/portfolio" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold text-sm uppercase tracking-widest mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
            </Link>
            <div className="flex gap-2 mb-6">
              {project.tags.map(tag => (
                <Badge key={tag} className="bg-blue-600 text-white border-none font-bold">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 font-medium">
              Institutional Case Study for <span className="text-white">{project.client}</span>
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-8 space-y-16">
              <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">01. The Challenge</h2>
                <p className="text-2xl md:text-3xl text-slate-950 font-display font-medium leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
              <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">02. The Solution</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {project.solution}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        Strategic Alignment
                      </h4>
                      <p className="text-sm text-slate-500">Every architectural decision was mapped directly to the organization's regional mobilization goals.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                        <Globe size={18} className="text-blue-600" />
                        Infrastructure Security
                      </h4>
                      <p className="text-sm text-slate-500">Implemented zero-trust data layers to ensure absolute security for community and donor records.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-slate-950 rounded-[2.5rem] p-10 text-white sticky top-32"
              >
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-8">
                  <ShieldCheck size={16} /> Verified Impact
                </div>
                <div className="space-y-12">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Key Result</p>
                    <p className="text-3xl font-display font-bold leading-tight">{project.results}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Category</p>
                    <p className="text-xl font-bold">{project.category}</p>
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/10">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 font-bold cursor-pointer">
                      <Link to={`/contact?ref=case-study-${project.id}`}>Request Similar Build <ExternalLink size={16} className="ml-2" /></Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-950 mb-8">Ready to architect your <br /> regional impact?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="bg-slate-950 text-white rounded-full h-16 px-10 text-xl font-bold">
              <Link to="/contact">Inquire for $50K+ Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-xl font-bold border-slate-200">
              <Link to="/portfolio">Explore Other Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}