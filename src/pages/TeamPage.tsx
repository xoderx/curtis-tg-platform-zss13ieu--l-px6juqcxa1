import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { NETWORK_CAPABILITIES } from '@shared/content';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Users, User, Layers, Brain, Cpu } from 'lucide-react';
import { useContentStore } from '@/hooks/use-content';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
export function TeamPage() {
  const team = useContentStore(s => s.content.team);
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-3xl mb-24 text-left">
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Our Narrative</h1>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-950 mb-8 tracking-tight leading-[1.1]">
              Elite Architectural <br />
              Collective.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Based in St. Louis, Curtis Technology Group merges institutional strategy with high-concurrency engineering. Our core leadership is reinforced by a vetted network of global specialists.
            </p>
          </div>
          {/* Core Leadership Roster */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 text-left">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Leadership</h2>
                <p className="text-3xl font-display font-bold text-slate-950">Foundational Personnel</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, idx) => (
                <motion.div
                  key={member.id}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-[2rem] group text-left">
                    <CardContent className="p-0">
                      <div className="p-8 pb-0">
                        <Avatar className="w-full aspect-square rounded-2xl h-auto mb-8 bg-slate-50 border border-slate-100 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                          <AvatarFallback className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-950 font-display font-bold tracking-tighter text-5xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="px-8 pb-10">
                        <h3 className="text-xl font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                          {member.role}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-4">
                          {member.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Network Capabilities Grid */}
          <div className="pt-24 border-t border-slate-100 text-left">
            <div className="mb-16">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Operational Philosophy</h2>
              <p className="text-3xl font-display font-bold text-slate-950">Network Sovereignty</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {NETWORK_CAPABILITIES.map((capability, idx) => (
                <motion.div
                  key={capability.title}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="mb-6 relative overflow-hidden rounded-3xl bg-slate-50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 border border-slate-100">
                    <AspectRatio ratio={1 / 1}>
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                          <User size={180} strokeWidth={1} className="text-slate-950" />
                        </div>
                        <div className="z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                          {capability.icon === 'Layers' && <Layers size={56} className="text-blue-600" />}
                          {capability.icon === 'Brain' && <Brain size={56} className="text-blue-600" />}
                          {capability.icon === 'Users' && <Users size={56} className="text-blue-600" />}
                          {capability.icon === 'Cpu' && <Cpu size={56} className="text-blue-600" />}
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">{capability.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Elastic Network Section */}
        <section className="py-20 md:py-32 bg-slate-950 rounded-[3.5rem] border border-white/5 mb-16 md:mb-32 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-50" />
          <div className="px-8 md:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">
              <motion.div {...fadeIn}>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 backdrop-blur-xl mb-8 border border-white/10">
                  <Globe size={28} />
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">The Elastic Model</h3>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Curtis TG activates its "Extended Network"—a pre-vetted collective of elite specialists across AI, destination marketing, and blockchain—to deliver surgical expertise without enterprise overhead.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white mb-3">Institutional Rigor</h4>
                    <p className="text-sm text-slate-500">Every project is spearheaded by our core leadership, ensuring absolute accountability and architectural standards.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white mb-3">Sovereign Scaling</h4>
                    <p className="text-sm text-slate-500">Access to elite independent engineers globally, solving complex regional concurrency and security challenges.</p>
                  </div>
                </div>
              </motion.div>
              <div className="relative p-14 bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users size={150} className="text-slate-950" />
                </div>
                <p className="text-3xl font-display font-medium text-slate-950 italic relative z-10 leading-tight tracking-tight">
                  "Strategy first means we lead with vision and institutional alignment before we deploy a single line of code."
                </p>
                <div className="mt-10 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-1 bg-blue-600 rounded-full" />
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Curtis Technology Group Collective</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Join the Network */}
        <section className="py-20 md:py-32 bg-white text-center">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-950 mb-8 tracking-tight">Join the Collective</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We are consistently seeking elite independent engineers, strategists, and designers for our high-impact project pools.
            </p>
            <a
              href="mailto:careers@curtis-tg.com"
              className="group inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-5 rounded-full font-bold hover:bg-blue-600 transition-all hover:scale-105"
            >
              Contact our Network Lead <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>
      </div>
    </MainLayout>
  );
}