import { nexoraImages } from './nexoraImages';

export const nexoraData = {
  hero: {
    headline: 'Technology That Moves Business Forward.',
    paragraph: 'We design and construct digital products, high-throughput APIs, cloud infrastructure, and AI engines that power modern digital economies.',
    ctaPrimary: 'GET STARTED',
    ctaSecondary: 'DOCUMENTATION',
    image: nexoraImages.hero,
    floatingWidget1: { title: 'Uptime SLA', value: '99.99%' },
    floatingWidget2: { title: 'Avg Latency', value: '12ms' }
  },
  platform: {
    title: 'Nexora Platform Core',
    desc: 'Our engine is built on modern distributed ledger models, multi-region database clusters, and sub-millisecond network routers.'
  },
  features: [
    {
      title: 'AI Pipeline Integrations',
      desc: 'Inject proprietary LLMs and neural models directly into your databases via serverless interfaces.'
    },
    {
      title: 'Global Multi-Region Cloud',
      desc: 'Kubernetes orchestration systems configured with automated regional failovers and load balancing.'
    },
    {
      title: 'SOC2 Compliant Security',
      desc: 'End-to-end envelope encryption, continuous security vulnerability auditing, and auto-scans.'
    }
  ],
  architecture: {
    title: 'Scalable Microservices Architecture',
    steps: [
      { name: '01 Edge Router', desc: 'Global CDN distribution caching static assets and executing edge functions.' },
      { name: '02 Event Gateway', desc: 'Asynchronous event handler buffering API traffic spikes securely.' },
      { name: '03 Database Shards', desc: 'Distributed cluster separating read/write transactions seamlessly.' }
    ]
  },
  stats: [
    { value: '120+', label: 'Deployments/Day' },
    { value: '99.99%', label: 'SLA Guaranteed' },
    { value: '12ms', label: 'Average Latency' },
    { value: '50M+', label: 'Concurrent Users' }
  ],
  products: [
    { name: 'Nexora Core DB', desc: 'Distributed SQL sharded dynamically for high-scale enterprise operations.', image: nexoraImages.projects[0] },
    { name: 'Vector AI Engine', desc: 'Fast, secure nearest-neighbor search models matching dataset items.', image: nexoraImages.projects[1] },
    { name: 'Shield Gateway', desc: 'Automated DDoS protection, credentials caching, and edge rate limiting.', image: nexoraImages.projects[2] }
  ],
  techStack: ['React', 'Node.js', 'Go', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'PostgreSQL', 'Redis'],
  stories: [
    {
      quote: "Nexora reorganized our cloud setup in under three weeks. Our API latencies dropped by 65%, and hosting costs were cut in half.",
      author: "Aris Thorne",
      role: "VP of Engineering",
      company: "SentryData Inc"
    },
    {
      quote: "Their machine learning integrations enabled our platform to predict customer churn with 91% accuracy.",
      author: "Lia Sterling",
      role: "Chief Product Officer",
      company: "AuraHQ"
    }
  ]
};
