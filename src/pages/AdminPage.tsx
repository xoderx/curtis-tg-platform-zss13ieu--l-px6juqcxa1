import React, { useState, useEffect } from 'react';
import { useContentStore } from '@/hooks/use-content';
import { MainLayout } from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Shield, Save, RotateCcw, Bot, Users, Layers, Briefcase, Plus, Trash2, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TeamMember, Project, Service, ClientLogo } from '@shared/types';
export function AdminPage() {
  const content = useContentStore(s => s.content);
  const loading = useContentStore(s => s.loading);
  const updateContent = useContentStore(s => s.updateContent);
  const fetchContent = useContentStore(s => s.fetchContent);
  const [localContent, setLocalContent] = useState(content);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);
  useEffect(() => {
    setLocalContent(content);
  }, [content]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin2025') {
      setIsAuthenticated(true);
    } else {
      toast.error('Invalid administrative credentials');
    }
  };
  const handlePublish = async () => {
    try {
      await updateContent(localContent);
      toast.success('Enterprise infrastructure updated successfully');
    } catch (error) {
      toast.error('Failed to sync content with persistence layer');
    }
  };
  const addItem = (type: 'team' | 'portfolio' | 'services' | 'clients') => {
    const id = crypto.randomUUID();
    if (type === 'team') {
      const newItem: TeamMember = { id, name: 'New Leader', role: 'Strategic Consultant', initials: 'NL', bio: 'Strategic bio...', image: '' };
      setLocalContent({ ...localContent, team: [newItem, ...localContent.team] });
    } else if (type === 'portfolio') {
      const newItem: Project = { 
        id, 
        title: 'New Case Study', 
        client: 'Global Entity', 
        category: 'Infrastructure', 
        challenge: 'A complex organizational challenge...', 
        solution: 'Our strategic technical solution...', 
        results: 'Quantifiable result (e.g. 20% growth)', 
        tags: ['Cloud', 'Strategy'], 
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' 
      };
      setLocalContent({ ...localContent, portfolio: [newItem, ...localContent.portfolio] });
    } else if (type === 'services') {
      const newItem: Service = { 
        id, 
        title: 'New Offering', 
        description: 'High-fidelity service description...', 
        icon: 'Layers', 
        features: ['Enterprise Support', 'SLA Guarantee'], 
        metric: '99.9% Reliable', 
        rfpReady: true 
      };
      setLocalContent({ ...localContent, services: [newItem, ...localContent.services] });
    } else if (type === 'clients') {
      const newItem: ClientLogo = { name: 'New Partner', logo: '' };
      setLocalContent({ ...localContent, clients: [newItem, ...localContent.clients] });
    }
    toast.info(`Draft ${type} item added locally`);
  };
  const deleteItem = (type: 'team' | 'portfolio' | 'services' | 'clients', index: number) => {
    const newArray = [...localContent[type]];
    newArray.splice(index, 1);
    setLocalContent({ ...localContent, [type]: newArray });
    toast.warning(`Item removed from local draft`);
  };
  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
          <Card className="w-full max-w-md shadow-2xl rounded-3xl border-slate-200">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <CardTitle className="text-2xl font-display font-bold">Admin Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2 text-left">
                  <Label>Enterprise Token</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-xl"
                    placeholder="Enter institutional management key..."
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-950 h-12 rounded-xl font-bold">
                  Authenticate Access
                </Button>
                <div className="pt-4 text-center">
                  <Link to="/" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                    Return to Public Site
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="text-left">
              <div className="flex items-center gap-4 mb-4">
                <Button asChild variant="outline" size="sm" className="rounded-full h-8 px-4 border-slate-200 text-slate-500">
                  <Link to="/"><ArrowLeft className="mr-2 h-3 w-3" /> Back to Site</Link>
                </Button>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-widest">Master Node</span>
              </div>
              <h1 className="text-4xl font-display font-bold text-slate-950">Strategic Intelligence Dashboard</h1>
              <p className="text-slate-500 mt-2">Manage the Curtis Technology Group digital infrastructure.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setLocalContent(content)} disabled={loading} className="rounded-full h-12 px-6">
                <RotateCcw className="mr-2 h-4 w-4" /> Reset
              </Button>
              <Button onClick={handlePublish} disabled={loading} className="bg-blue-600 hover:bg-blue-700 rounded-full h-12 px-8 font-bold shadow-lg shadow-blue-500/20">
                <Save className="mr-2 h-4 w-4" /> {loading ? 'Syncing...' : 'Publish Changes'}
              </Button>
            </div>
          </div>
          <Tabs defaultValue="ai" className="space-y-8">
            <TabsList className="bg-slate-100 p-1 rounded-2xl w-full md:w-auto overflow-x-auto h-auto">
              <TabsTrigger value="ai" className="rounded-xl px-6 py-3 data-[state=active]:bg-white">
                <Bot className="mr-2 h-4 w-4" /> AI Architecture
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-xl px-6 py-3 data-[state=active]:bg-white">
                <Users className="mr-2 h-4 w-4" /> Leadership
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="rounded-xl px-6 py-3 data-[state=active]:bg-white">
                <Briefcase className="mr-2 h-4 w-4" /> Portfolio
              </TabsTrigger>
              <TabsTrigger value="services" className="rounded-xl px-6 py-3 data-[state=active]:bg-white">
                <Layers className="mr-2 h-4 w-4" /> Services
              </TabsTrigger>
              <TabsTrigger value="clients" className="rounded-xl px-6 py-3 data-[state=active]:bg-white">
                <Globe className="mr-2 h-4 w-4" /> Clients
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="space-y-6">
              <Card className="rounded-[2rem] border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Bot className="text-blue-600" /> Dialora & Noem.ai Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label className="font-bold">Dialora Client Key</Label>
                      <Input
                        value={localContent.aiConfig.dialoraClientKey}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          aiConfig: { ...localContent.aiConfig, dialoraClientKey: e.target.value }
                        })}
                        placeholder="wdgt_..."
                        className="font-mono bg-slate-50"
                      />
                    </div>
                    <div className="space-y-4">
                      <Label className="font-bold">Regional Hotline Number</Label>
                      <Input
                        value={localContent.aiConfig.dialoraPhone}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          aiConfig: { ...localContent.aiConfig, dialoraPhone: e.target.value }
                        })}
                        className="bg-slate-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="font-bold">Noem.ai Intelligence Prompt</Label>
                    <Textarea
                      rows={6}
                      value={localContent.aiConfig.noemChatPrompt}
                      onChange={(e) => setLocalContent({
                        ...localContent,
                        aiConfig: { ...localContent.aiConfig, noemChatPrompt: e.target.value }
                      })}
                      className="bg-slate-50 resize-none leading-relaxed"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team" className="space-y-6">
              <div className="flex justify-end mb-4">
                <Button onClick={() => addItem('team')} className="bg-slate-900 rounded-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Leader
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                {localContent.team?.map((member, idx) => (
                  <Card key={member.id} className="rounded-3xl border-slate-200 relative">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 text-destructive hover:bg-destructive/10"
                      onClick={() => deleteItem('team', idx)}
                    >
                      <Trash2 size={18} />
                    </Button>
                    <CardContent className="p-8 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                          <Label className="text-[10px] font-bold uppercase text-slate-400">Full Name</Label>
                          <Input
                            value={member.name}
                            onChange={(e) => {
                              const newTeam = [...localContent.team];
                              newTeam[idx] = { ...member, name: e.target.value };
                              setLocalContent({ ...localContent, team: newTeam });
                            }}
                            className="font-bold text-lg"
                          />
                        </div>
                        <div className="w-24 space-y-2">
                          <Label className="text-[10px] font-bold uppercase text-slate-400">Initials</Label>
                          <Input
                            value={member.initials}
                            onChange={(e) => {
                              const newTeam = [...localContent.team];
                              newTeam[idx] = { ...member, initials: e.target.value };
                              setLocalContent({ ...localContent, team: newTeam });
                            }}
                            className="text-center uppercase"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">Strategic Role</Label>
                        <Input
                          value={member.role}
                          onChange={(e) => {
                            const newTeam = [...localContent.team];
                            newTeam[idx] = { ...member, role: e.target.value };
                            setLocalContent({ ...localContent, team: newTeam });
                          }}
                          className="text-blue-600 font-bold uppercase text-xs"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">Institutional Biography</Label>
                        <Textarea
                          value={member.bio}
                          onChange={(e) => {
                            const newTeam = [...localContent.team];
                            newTeam[idx] = { ...member, bio: e.target.value };
                            setLocalContent({ ...localContent, team: newTeam });
                          }}
                          className="text-sm h-24"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="portfolio" className="space-y-6">
              <div className="flex justify-end mb-4">
                <Button onClick={() => addItem('portfolio')} className="bg-slate-900 rounded-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Case Study
                </Button>
              </div>
              <div className="space-y-8">
                {localContent.portfolio?.map((proj, idx) => (
                  <Card key={proj.id} className="rounded-3xl border-slate-200 text-left relative">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 text-destructive hover:bg-destructive/10"
                      onClick={() => deleteItem('portfolio', idx)}
                    >
                      <Trash2 size={18} />
                    </Button>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase text-slate-400">Project Title</Label>
                              <Input
                                value={proj.title}
                                onChange={(e) => {
                                  const newP = [...localContent.portfolio];
                                  newP[idx] = { ...proj, title: e.target.value };
                                  setLocalContent({ ...localContent, portfolio: newP });
                                }}
                                className="text-xl font-bold"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase text-slate-400">Impact Metric</Label>
                              <Input
                                value={proj.results}
                                onChange={(e) => {
                                  const newP = [...localContent.portfolio];
                                  newP[idx] = { ...proj, results: e.target.value };
                                  setLocalContent({ ...localContent, portfolio: newP });
                                }}
                                className="font-bold text-blue-600"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase text-slate-400">Client</Label>
                              <Input
                                value={proj.client}
                                onChange={(e) => {
                                  const newP = [...localContent.portfolio];
                                  newP[idx] = { ...proj, client: e.target.value };
                                  setLocalContent({ ...localContent, portfolio: newP });
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase text-slate-400">Category</Label>
                              <Input
                                value={proj.category}
                                onChange={(e) => {
                                  const newP = [...localContent.portfolio];
                                  newP[idx] = { ...proj, category: e.target.value };
                                  setLocalContent({ ...localContent, portfolio: newP });
                                }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold uppercase text-slate-400">Challenge Narrative</Label>
                            <Textarea
                              value={proj.challenge}
                              onChange={(e) => {
                                const newP = [...localContent.portfolio];
                                newP[idx] = { ...proj, challenge: e.target.value };
                                setLocalContent({ ...localContent, portfolio: newP });
                              }}
                              className="text-sm h-20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold uppercase text-slate-400">Strategic Solution</Label>
                            <Textarea
                              value={proj.solution}
                              onChange={(e) => {
                                const newP = [...localContent.portfolio];
                                newP[idx] = { ...proj, solution: e.target.value };
                                setLocalContent({ ...localContent, portfolio: newP });
                              }}
                              className="text-sm h-20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold uppercase text-slate-400">Infrastructure Tags (comma-separated)</Label>
                            <Input
                              value={proj.tags.join(', ')}
                              onChange={(e) => {
                                const newP = [...localContent.portfolio];
                                newP[idx] = { ...proj, tags: e.target.value.split(',').map(t => t.trim()) };
                                setLocalContent({ ...localContent, portfolio: newP });
                              }}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold uppercase text-slate-400">Architectural Visual (URL)</Label>
                            <Input
                              value={proj.image}
                              onChange={(e) => {
                                const newP = [...localContent.portfolio];
                                newP[idx] = { ...proj, image: e.target.value };
                                setLocalContent({ ...localContent, portfolio: newP });
                              }}
                              className="text-xs font-mono"
                            />
                          </div>
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                            {proj.image ? (
                              <img src={proj.image} className="object-cover w-full h-full" alt="" />
                            ) : (
                              <div className="h-full flex items-center justify-center text-slate-300">
                                <Briefcase size={40} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="services" className="space-y-6">
              <div className="flex justify-end mb-4">
                <Button onClick={() => addItem('services')} className="bg-slate-900 rounded-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Service
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {localContent.services?.map((svc, idx) => (
                  <Card key={svc.id} className="rounded-3xl border-slate-200 relative">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 text-destructive hover:bg-destructive/10"
                      onClick={() => deleteItem('services', idx)}
                    >
                      <Trash2 size={18} />
                    </Button>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 space-y-2">
                          <Label className="text-[10px] font-bold uppercase text-slate-400">Service Pillar</Label>
                          <Input
                            value={svc.title}
                            onChange={(e) => {
                              const newS = [...localContent.services];
                              newS[idx] = { ...svc, title: e.target.value };
                              setLocalContent({ ...localContent, services: newS });
                            }}
                            className="font-bold text-lg"
                          />
                        </div>
                        <div className="flex flex-col items-center gap-2 pt-6">
                          <Checkbox
                            id={`rfp-${svc.id}`}
                            checked={svc.rfpReady}
                            onCheckedChange={(checked) => {
                              const newS = [...localContent.services];
                              newS[idx] = { ...svc, rfpReady: !!checked };
                              setLocalContent({ ...localContent, services: newS });
                            }}
                          />
                          <Label htmlFor={`rfp-${svc.id}`} className="text-[10px] font-bold uppercase">RFP READY</Label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">Description</Label>
                        <Textarea
                          value={svc.description}
                          onChange={(e) => {
                            const newS = [...localContent.services];
                            newS[idx] = { ...svc, description: e.target.value };
                            setLocalContent({ ...localContent, services: newS });
                          }}
                          className="text-sm h-20"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold uppercase text-slate-400">Metric Output</Label>
                          <Input
                            value={svc.metric}
                            onChange={(e) => {
                              const newS = [...localContent.services];
                              newS[idx] = { ...svc, metric: e.target.value };
                              setLocalContent({ ...localContent, services: newS });
                            }}
                            className="font-bold text-blue-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold uppercase text-slate-400">Icon Type (Lucide)</Label>
                          <Input
                            value={svc.icon}
                            onChange={(e) => {
                              const newS = [...localContent.services];
                              newS[idx] = { ...svc, icon: e.target.value };
                              setLocalContent({ ...localContent, services: newS });
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">Strategic Capabilities (One per line)</Label>
                        <Textarea
                          value={svc.features.join('\n')}
                          onChange={(e) => {
                            const newS = [...localContent.services];
                            newS[idx] = { ...svc, features: e.target.value.split('\n').filter(f => f.trim()) };
                            setLocalContent({ ...localContent, services: newS });
                          }}
                          className="text-sm h-24"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="clients" className="space-y-6">
              <Card className="rounded-[2rem] border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Globe className="text-blue-600" /> Regional Partner Logos
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => addItem('clients')}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Partner
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {localContent.clients?.map((client, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-4 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group">
                      <div className="flex-1 w-full text-left space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">Partner Name</Label>
                        <Input
                          value={client.name}
                          onChange={(e) => {
                            const newC = [...localContent.clients];
                            newC[idx] = { ...client, name: e.target.value };
                            setLocalContent({ ...localContent, clients: newC });
                          }}
                        />
                      </div>
                      <div className="flex-[2] w-full text-left space-y-2">
                        <Label className="text-[10px] font-bold uppercase text-slate-400">SVG/PNG Logo URL</Label>
                        <Input
                          value={client.logo}
                          onChange={(e) => {
                            const newC = [...localContent.clients];
                            newC[idx] = { ...client, logo: e.target.value };
                            setLocalContent({ ...localContent, clients: newC });
                          }}
                          className="font-mono text-xs"
                        />
                      </div>
                      <div className="w-16 h-12 bg-white rounded border border-slate-200 flex items-center justify-center p-2 mt-6">
                        {client.logo && <img src={client.logo} alt="" className="max-h-full max-w-full object-contain grayscale" />}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:bg-destructive/10 mt-6"
                        onClick={() => deleteItem('clients', idx)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}