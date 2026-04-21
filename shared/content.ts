import type { TeamMember } from './types';
export const CLIENT_LOGOS = [
  { name: 'St. Louis NAACP', logo: 'https://img.logo.dev/github.com?token=pk_STp_S_vST_S_vST_S_vST' },
  { name: 'Ferguson Youth Initiative', logo: 'https://img.logo.dev/vercel.com?token=pk_STp_S_vST_S_vST_S_vST' },
  { name: 'Spirit of St. Louis', logo: 'https://img.logo.dev/stripe.com?token=pk_STp_S_vST_S_vST_S_vST' },
  { name: 'Moonrise Hotel', logo: 'https://img.logo.dev/airbnb.com?token=pk_STp_S_vST_S_vST_S_vST' },
  { name: 'City of St. Louis', logo: 'https://img.logo.dev/google.com?token=pk_STp_S_vST_S_vST_S_vST' },
];
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'courtney-curtis',
    name: 'Courtney Curtis',
    role: 'Founder & Strategic Lead',
    initials: 'CC',
    image: '',
    bio: 'Former legislator and institutional strategist focused on high-stakes digital transformations for regional governments and global movements.'
  },
  {
    id: 'nick-kampe',
    name: 'Nick Kampe',
    role: 'Lead Architect & Software Dev',
    initials: 'NK',
    image: '',
    bio: 'Specialist in high-concurrency cloud systems and elastic infrastructure design, leading the technical execution of the firm’s most complex builds.'
  },
  {
    id: 'thomas-quick',
    name: 'Thomas Quick',
    role: 'Head of Engineering',
    initials: 'TQ',
    image: '',
    bio: 'Driving engineering excellence through rigorous quality standards and scalable architecture, ensuring every deployment meets enterprise-grade SLAs.'
  },
  {
    id: 'anita-harding',
    name: 'Anita Harding, PMP',
    role: 'Project Manager',
    initials: 'AH',
    image: '',
    bio: 'Strategic project lead managing complex institutional roadmaps with a focus on timeline precision, budget integrity, and RFP compliance.'
  }
];
export const SERVICES = [
  {
    id: 'web-platform',
    title: 'Digital Infrastructure',
    description: 'Scalable, enterprise-grade platforms built for high-performance municipal and organizational needs. RFP-Ready documentation included.',
    icon: 'Layers',
    features: ['Elastic Cloud Architecture', 'High-Availability Database Design', 'Sovereign Identity Layers'],
    metric: '99.999% Uptime SLA',
    rfpReady: true
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Custom intelligent workflows powered by Noem.ai integration to reduce overhead and accelerate institutional decision-making.',
    icon: 'Cpu',
    features: ['LLM Integration', 'Predictive Resource Modeling', 'Automated Compliance'],
    metric: '40% Efficiency Increase',
    rfpReady: true
  },
  {
    id: 'tourism-destination',
    title: 'Experience Engines',
    description: 'Next-generation destination marketing platforms for regional hubs like The Delmar Loop. Built on Travel OS.',
    icon: 'Compass',
    features: ['Dynamic Itinerary Builders', 'Real-time Visitor Analytics', 'Geo-spatial Wayfinding'],
    metric: '2.5M+ Regional Interactions',
    rfpReady: true
  },
  {
    id: 'nonprofit-civic',
    title: 'Civic Technology',
    description: 'Strategic technology implementations designed for social impact and community mobilization in the St. Louis region.',
    icon: 'Users',
    features: ['Secure Donor Portals', 'Community Mobilization Tools', 'Public Data Dashboards'],
    metric: '50+ Regional Partners',
    rfpReady: true
  }
];
export const PORTFOLIO_DETAILS = [
  {
    id: 'st-louis-naacp',
    title: 'NAACP Digital Transformation',
    client: 'St. Louis NAACP',
    category: 'Civic',
    challenge: 'A fragmented digital presence hindered mobilization efforts and donor transparency in the St. Louis region.',
    solution: 'Unified infrastructure combining secure donor portals with community mobilization tools and local event tracking.',
    results: '25% increase in mobilization reach, 40% reduction in admin overhead.',
    tags: ['Civic Tech', 'Cloud Infrastructure', 'Security'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'travel-os-stl',
    title: 'Travel OS: St. Louis Districts',
    client: 'Regional Tourism Collective',
    category: 'Product Innovation',
    challenge: 'Local districts like The Delmar Loop lacked a unified digital layer for visitor engagement and merchant support.',
    solution: 'Deployment of the Travel OS core across The Delmar Loop and regional cultural districts with real-time analytics.',
    results: '240% increase in visitor engagement, 35% higher local business attribution.',
    tags: ['Travel OS', 'Real-time Analytics', 'Geospatial'],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ferguson-youth',
    title: 'Ferguson Youth Initiative Platform',
    client: 'FYI',
    category: 'Civic',
    challenge: 'Inefficient program registration and tracking systems limited service delivery to regional youth.',
    solution: 'Modernized intake and engagement platform with automated reporting and outcome tracking.',
    results: '100% data accuracy improvement, 3x faster intake processing.',
    tags: ['Nonprofit', 'Automation', 'Data Strategy'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'spirit-of-stl',
    title: 'Spirit of St. Louis Infrastructure',
    client: 'Spirit of St. Louis Taskforce',
    category: 'Infrastructure',
    challenge: 'Legacy data systems could not handle high-concurrency public reporting during peak periods.',
    solution: 'Elastic cloud architecture with API-first design for regional data resilience.',
    results: 'Zero downtime during 2024 peak periods, 0.01ms latency.',
    tags: ['Elastic Cloud', 'API-First', 'Resilience'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'moonrise-hotel-tech',
    title: 'Moonrise Hotel Experience Design',
    client: 'Moonrise Hotel',
    category: 'Experience Design',
    challenge: 'The need for a premium, tech-forward guest experience reflecting the hotel\'s unique brand.',
    solution: 'Immersive digital touchpoints and automated concierge integration via Noem.ai.',
    results: '15% increase in direct bookings, 4.8/5 guest tech rating.',
    tags: ['Hospitality', 'Experience Design', 'AI Concierge'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  }
];
export const TRAVEL_OS_FEATURES = [
  {
    title: 'Regional Data Engine',
    description: 'Ingest thousands of signals from St. Louis businesses, transit, and events to create a living map while maintaining absolute sovereign data ownership.',
    icon: 'Database'
  },
  {
    title: 'Visitor Sentiment Analysis',
    description: 'Real-time monitoring of visitor interactions to predict needs and optimize experience delivery via integrated Noem.ai intelligence.',
    icon: 'Brain'
  },
  {
    title: 'Integrated API Layer',
    description: 'A robust ecosystem allowing local developers to build apps directly on top of city infrastructure with high-availability reliability.',
    icon: 'Code'
  }
];
export const FAQ_CONTENT = [
  {
    question: "What is your minimum engagement?",
    answer: "We focus on $50K+ enterprise-grade infrastructure projects. To begin an audit of your regional requirements, please submit a formal inquiry via our Contact page."
  },
  {
    question: "Do you provide RFP-Ready documentation?",
    answer: "Yes, every architectural roadmap includes full institutional documentation and security audits. You can request our standard RFP package directly through our strategic intake form."
  },
  {
    question: "How do Dialora and Noem.ai integrate?",
    answer: "We use Dialora for AI voice concierges and Noem.ai for intelligent data automation, embedding them as core sovereign layers within your infrastructure for long-term scalability."
  },
  {
    question: "Do you handle local government contracts?",
    answer: "Our team has extensive experience navigating municipal procurement. Contact our architecture lead to discuss current St. Louis regional initiatives and compliance frameworks."
  }
];
export const NETWORK_CAPABILITIES = [
  {
    title: 'Lead Systems Architecture',
    description: 'Elite architecture for high-concurrency cloud environments and elastic data systems designed for regional scalability.',
    icon: 'Layers'
  },
  {
    title: 'Strategic Intelligence',
    description: 'Institutional-level strategy focusing on organizational roadmaps, data sovereignty, and AI-native automation.',
    icon: 'Brain'
  },
  {
    title: 'Regional Mobilization',
    description: 'Civic technology specialists focused on community engagement, secure donor layers, and movement-building infrastructure.',
    icon: 'Users'
  },
  {
    title: 'Interface Engineering',
    description: 'Premium UI/UX engineering for high-performance municipal platforms and immersive Travel OS district experiences.',
    icon: 'Cpu'
  }
];
export const CORE_VALUES = [
  {
    title: 'Strategy First',
    description: 'We never code without a roadmap. Every line of technology serves a calculated organizational objective.'
  },
  {
    title: 'Infrastructure Integrity',
    description: 'We build for decades, not days. Our systems are resilient, secure, and infinitely scalable.'
  },
  {
    title: 'Regional Impact',
    description: 'Technology should move movements. We prioritize projects that create tangible value for St. Louis and its communities.'
  }
];
export const PORTFOLIO_PREVIEWS = [
  {
    id: 'st-louis-naacp',
    title: 'NAACP Digital Transformation',
    category: 'Civic',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'travel-os-stl',
    title: 'Travel OS: District Engine',
    category: 'Product Innovation',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
  }
];