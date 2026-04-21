import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X, Send, Bot, Sparkles, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { FAQ_CONTENT } from '@shared/content';
import { useUIStore } from '@/hooks/use-ui-store';
declare global {
  interface Window {
    Dialora?: {
      show: () => void;
    };
  }
}
export function AIWidgets() {
  const chatOpen = useUIStore((s) => s.chatOpen);
  const setChatOpen = useUIStore((s) => s.setChatOpen);
  const [showTooltip, setShowTooltip] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);
  const handleVoiceTrigger = useCallback(() => {
    if (window.Dialora && typeof window.Dialora.show === 'function') {
      window.Dialora.show();
    } else {
      toast.info("Connecting to secure voice gateway...");
      window.location.href = 'tel:+13143140511';
    }
  }, []);
  const handleSuggestedQuestion = useCallback((question: string) => {
    setChatInput(question);
    toast.info("Analyzing regional roadmap data...", {
      description: `Querying Noem.ai: "${question}"`,
      duration: 3000,
    });
  }, []);
  const handleSendMessage = useCallback(() => {
    if (!chatInput.trim()) return;
    setChatInput('');
    setIsTyping(true);
    toast.success("Intelligence engine engaged", {
      description: "Noem.ai is processing your architectural query.",
    });
    setTimeout(() => {
      setIsTyping(false);
      toast("Strategy Update", {
        description: "Our current modeling suggests prioritizing the 2025 City Infrastructure initiative for $100k+ budgets.",
      });
    }, 2500);
  }, [chatInput]);
  return (
    <>
      {/* Primary Floating Interface: Elite Native Voice Trigger */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="bg-slate-950 text-white px-5 py-3 rounded-2xl text-sm font-medium shadow-2xl border border-white/10 mb-2 relative group"
            >
              Consult with our AI Architects
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-slate-800 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-glow">
            <Sparkles size={10} className="mr-1 inline" /> Regional Gateway Active
          </Badge>
          <button
            onClick={handleVoiceTrigger}
            className="group flex flex-col items-end gap-1 outline-none"
          >
            <div className="flex items-center gap-4 bg-slate-950 hover:bg-slate-900 text-white px-7 py-5 rounded-[2rem] shadow-2xl transition-all hover:scale-105 active:scale-95 border border-white/10">
              <div className="flex flex-col items-end leading-tight pr-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-blue-400">Instant AI Voice</span>
                <span className="text-lg font-display font-bold">(314) 314-0511</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors shadow-primary">
                  <Phone size={18} />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 border border-white/5 group-hover:bg-slate-700 transition-colors">
                  <Mic size={18} />
                </div>
              </div>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold pr-4">
              Powered by <span className="text-slate-300">Dialora</span>
            </span>
          </button>
        </div>
      </div>
      {/* Secondary Interface: Knowledge Base Chat */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <Sheet open={chatOpen} onOpenChange={setChatOpen}>
          <SheetTrigger asChild>
            <Button className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-2xl text-slate-950 hover:bg-slate-50 hover:scale-105 transition-all">
              <MessageSquare size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[400px] p-0 flex flex-col bg-slate-50 border-r-slate-200">
            <SheetHeader className="p-6 bg-slate-950 text-white rounded-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div className="text-left">
                  <SheetTitle className="text-white text-lg font-display">Noem.ai Assistant</SheetTitle>
                  <SheetDescription className="text-xs text-blue-400 font-medium">
                    St. Louis Infrastructure Intelligence Engine
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 leading-relaxed text-left">
                    Welcome to the Curtis TG intelligence portal. I am Noem.ai. I can provide technical specs on Travel OS, regional data roadmaps, and $50k+ institutional engagement models.
                  </div>
                </div>
                {isTyping && (
                  <div className="flex gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <Bot size={14} />
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl rounded-tl-none text-xs text-blue-600">
                      Processing architectural signals...
                    </div>
                  </div>
                )}
                <div className="space-y-3 pl-11 text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Knowledge Base</p>
                  {FAQ_CONTENT.slice(0, 4).map((faq) => (
                    <button
                      key={faq.question}
                      onClick={() => handleSuggestedQuestion(faq.question)}
                      className="w-full text-left p-3 text-xs font-medium bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollArea>
            <div className="p-6 bg-white border-t border-slate-200">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about St. Louis roadmaps..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 active:scale-95 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
                Sovereign Intelligence by <span className="font-bold text-slate-600">Noem.ai</span>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}