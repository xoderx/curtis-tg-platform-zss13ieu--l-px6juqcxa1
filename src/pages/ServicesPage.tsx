import React from 'react';
import { motion, Transition } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactOptions } from '@/components/conversion/ContactOptions';
import { Server, Cpu, Navigation, Globe, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContentStore } from '@/hooks/use-content';
const eliteTransition: Transition = {
  duration: 0.6,
  ease: "easeInOut"
};
export function ServicesPage() {
  const services = useContentStore(s => s.content.services);
  return (
    <MainLayout>
      <section className="pt-32 pb-20 md:pt-48 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Expertise & Offerings</h1>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-950 mb-6 tracking-tight">
              Foundational Tech for <br /> High-Impact Groups
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in deep-infrastructure projects ($50k+) that require precision, scalability, and an obsession with reliability. RFP-Ready documentation available for all pillars.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...eliteTransition, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card className="border-slate-100 shadow-soft hover:shadow-md transition-shadow h-full overflow-hidden flex flex-col group relative text-left">
                  {service.rfpReady && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-blue-600 text-white border-none px-3 py-1 flex items-center gap-1.5">
                        <ShieldCheck size={12} /> RFP READY
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="p-10 pb-6">
                    <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {service.icon === 'Layers' && <Server className="text-white" />}
                      {service.icon === 'Cpu' && <Cpu className="text-white" />}
                      {service.icon === 'Compass' && <Navigation className="text-white" />}
                      {service.icon === 'Users' && <Globe className="text-white" />}
                      {!['Layers', 'Cpu', 'Compass', 'Users'].includes(service.icon) && <ShieldCheck className="text-white" />}
                    </div>
                    <CardTitle className="text-3xl font-display font-bold mb-4">{service.title}</CardTitle>
                    <p className="text-slate-500 leading-relaxed text-lg">{service.description}</p>
                    <p className="text-xs font-bold text-blue-600 uppercase mt-4">Full institutional documentation provided.</p>
                  </CardHeader>
                  <CardContent className="p-10 pt-0 flex-1 flex flex-col justify-between">
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest mb-6">Core Offerings</h4>
                      <ul className="space-y-4">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3 text-slate-600">
                            <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">RFP Performance</span>
                        <span className="text-lg font-display font-bold text-blue-600">{service.metric}</span>
                      </div>
                      <Link to="/portfolio" className="text-slate-950 hover:text-blue-600 font-bold text-sm flex items-center gap-2 group">
                        Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 mb-4 tracking-tight">Begin Your Transformation</h2>
            <p className="text-slate-600">Our senior architects are available through multiple high-fidelity channels.</p>
          </div>
          <ContactOptions />
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent" />
            <div className="relative z-10 max-w-2xl text-left">
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Need a custom enterprise roadmap?</h3>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Sometimes off-the-shelf needs are replaced by complex, specific requirements. Our architects specialize in solving unique organizational challenges with $50k-$500k budgets.
              </p>
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100 rounded-full h-14 px-10 text-lg font-bold">
                <Link to="/contact">Request RFP Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}