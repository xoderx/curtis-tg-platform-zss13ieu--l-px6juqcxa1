export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}
export interface Lead {
  id: string;
  name: string;
  email: string;
  organization: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  source: string; // 'direct', 'chatbot', 'voice'
  createdAt: number;
}
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  image: string;
}
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  image: string;
}
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  metric: string;
  rfpReady: boolean;
}
export interface ClientLogo {
  name: string;
  logo: string;
}
export interface AIConfig {
  dialoraClientKey: string;
  dialoraPhone: string;
  noemChatPrompt: string;
  noemEmbedCode: string;
}
export interface SiteContent {
  team: TeamMember[];
  services: Service[];
  portfolio: Project[];
  clients: ClientLogo[];
  aiConfig: AIConfig;
}