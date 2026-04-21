import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { ContactOptions } from '@/components/conversion/ContactOptions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Clock, Landmark, ArrowLeft } from 'lucide-react';
import { useCallback } from 'react';
const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(2, 'Organization is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Please provide more details (min 10 chars)'),
});
export function ContactPage() {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('ref') || 'direct';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
    },
  });
  const resetSuccess = useCallback(() => {
    setIsSuccess(false);
    form.reset();
  }, [form]);
  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        toast.success('Inquiry submitted successfully. Our lead architect will contact you shortly.');
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, [source]);
  return (
    <MainLayout>
      <section className="pt-32 pb-20 md:pt-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Partnership Intake</h1>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-950 mb-8 tracking-tight">
                  Architecting Your Future.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  We specialize in high-stakes infrastructure for institutional partners. Every project starts with a rigorous strategic audit.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 mb-1">RFP Excellence</h4>
                    <p className="text-sm text-slate-500">Full institutional documentation provided for all municipal and corporate bids.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 mb-1">Scale Capacity</h4>
                    <p className="text-sm text-slate-500">Infrastructure designed for 100k+ concurrent users and city-wide data sets.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 mb-1">Precision Timelines</h4>
                    <p className="text-sm text-slate-500">Transparent roadmaps with rigorous milestone tracking and 99.9% uptime targets.</p>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Immediate Assistance</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+13143140511" className="text-lg font-display font-bold text-slate-950 hover:text-blue-600 transition-colors">
                    (314) 314-0511
                  </a>
                  <span className="text-slate-200">|</span>
                  <a href="mailto:inquire@curtis-tg.com" className="text-lg font-display font-bold text-slate-950 hover:text-blue-600 transition-colors">
                    inquire@curtis-tg.com
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-soft"
            >
              {isSuccess ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-950">Inquiry Received</h3>
                  <p className="text-slate-600 max-w-sm mx-auto">Our senior architecture team has been notified. You can expect a response within 4-6 business hours.</p>
                  <div className="flex flex-col gap-4 pt-6">
                    <Button variant="outline" className="rounded-full border-slate-950 text-slate-950 h-12" onClick={resetSuccess}>
                      Send Another Message
                    </Button>
                    <Button asChild variant="ghost" className="rounded-full text-slate-500">
                      <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Return to Home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-white border-slate-200" />
                            </FormControl>
                            <FormMessage className="text-destructive font-medium" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Professional Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@org.com" {...field} className="bg-white border-slate-200" />
                            </FormControl>
                            <FormMessage className="text-destructive font-medium" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="City / Company / Foundation" {...field} className="bg-white border-slate-200" />
                          </FormControl>
                          <FormMessage className="text-destructive font-medium" />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white border-slate-200">
                                  <SelectValue placeholder="Select expertise" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Infrastructure">Digital Infrastructure</SelectItem>
                                <SelectItem value="Travel OS">Travel OS / Tourism</SelectItem>
                                <SelectItem value="AI">AI & Automation</SelectItem>
                                <SelectItem value="Civic">Civic Tech / Movement</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-destructive font-medium" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Target Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white border-slate-200">
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="$50k-$100k">$50,000 — $100,000</SelectItem>
                                <SelectItem value="$100k-$250k">$100,000 — $250,000</SelectItem>
                                <SelectItem value="$250k+">$250,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-destructive font-medium" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Desired Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-slate-200">
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Immediate">Immediate / RFP Active</SelectItem>
                              <SelectItem value="3months">Next 3 Months</SelectItem>
                              <SelectItem value="6months+">Future Roadmap Planning</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-destructive font-medium" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Project Brief</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your mission and technical requirements..."
                              className="bg-white border-slate-200 min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive font-medium" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-950 text-white py-8 text-xl rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-colors">
                      {isSubmitting ? 'Processing RFP...' : 'Submit Institutional Inquiry'}
                    </Button>
                    <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                      Encrypted Submission • 256-bit Secure Layer
                    </p>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-bold text-slate-950">Alternate Channels</h3>
            <p className="text-slate-600">Immediate access via our AI concierge network.</p>
          </div>
          <ContactOptions />
        </div>
      </section>
    </MainLayout>
  );
}