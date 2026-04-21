import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUIStore } from '@/hooks/use-ui-store';
import { toast } from 'sonner';
export function ContactOptions() {
  const setChatOpen = useUIStore((s) => s.setChatOpen);
  const handleVoiceCall = useCallback(() => {
    if (window.Dialora) {
      toast.info("Connecting to AI Voice Architect...");
      window.Dialora.show();
    } else {
      window.location.href = 'tel:+13143140511';
    }
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <Card className="h-full border-slate-200 overflow-hidden relative group bg-slate-50/950 rounded-[2.5rem]">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Phone size={100} />
          </div>
          <CardHeader className="p-8 md:p-10 pb-4">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-primary">
              <Phone size={28} />
            </div>
            <CardTitle className="text-2xl font-display font-bold">Immediate AI Call</CardTitle>
            <CardDescription className="text-slate-600 text-base leading-relaxed mt-2">
              Speak with our Dialora-powered voice concierge instantly for a preliminary technical brief.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-10 pt-0">
            <Button
              onClick={handleVoiceCall}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-14 font-bold transition-all shadow-lg text-lg"
            >
              Talk to AI Architect <ArrowRight size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <Card className="h-full border-slate-200 overflow-hidden relative group bg-slate-950 text-white rounded-[2.5rem]">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <MessageSquare size={100} />
          </div>
          <CardHeader className="p-8 md:p-10 pb-4">
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-white/10">
              <MessageSquare size={28} />
            </div>
            <CardTitle className="text-2xl font-display font-bold">Instant Q&A</CardTitle>
            <CardDescription className="text-slate-400 text-base leading-relaxed mt-2">
              Get technical specs and portfolio details from Noem.ai intelligence engine.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-10 pt-0">
            <Button
              variant="outline"
              onClick={() => setChatOpen(true)}
              className="w-full bg-transparent border-white/20 text-white rounded-2xl h-14 font-bold hover:bg-white hover:text-slate-950 transition-all text-lg"
            >
              Open Chat Interface
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <Card className="h-full border-slate-200 overflow-hidden relative group rounded-[2.5rem]">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText size={100} />
          </div>
          <CardHeader className="p-8 md:p-10 pb-4">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-950 mb-6 border border-slate-200">
              <FileText size={28} />
            </div>
            <CardTitle className="text-2xl font-display font-bold">Formal RFP</CardTitle>
            <CardDescription className="text-slate-500 text-base leading-relaxed mt-2">
              Submit detailed project requirements for a $50k+ architecture audit and roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-10 pt-0">
            <Button asChild variant="outline" className="w-full border-slate-200 text-slate-950 rounded-2xl h-14 font-bold hover:bg-slate-50 transition-all text-lg">
              <Link to="/contact">Start Formal Inquiry <ArrowRight size={20} className="ml-2" /></Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}