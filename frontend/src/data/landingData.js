export const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Solutions', href: '#interactive-demo' },
  { name: 'Architecture', href: '#metrics' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const heroData = {
  badge: "⚡ Aether Engine 2.0 is Live",
  badgeLink: "#features",
  headline: "Build Without Friction. Accelerate to Hyperspeed.",
  subtitle: "Aether turns infrastructure complexity into pure velocity. Deploy multi-cloud workloads, automate intelligent pipelines, and achieve sub-millisecond edge execution with zero configuration.",
  primaryCTA: "Start Building Free",
  secondaryCTA: "Watch Demo",
  trustHeading: "Powering velocity for 1,200+ high-growth tech teams",
  partners: [
    { name: "HyperScale", role: "Cloud Scale" },
    { name: "Synthetix", role: "AI Infrastructure" },
    { name: "PulseCloud", role: "Edge Computing" },
    { name: "Nebula Core", role: "FinTech Systems" },
    { name: "Vortex Data", role: "Data Mesh" },
    { name: "QuantumOps", role: "Autonomous CI/CD" },
  ]
};

export const bentoFeatures = [
  {
    id: "edge-mesh",
    title: "Global Real-Time Edge Sync",
    description: "Multi-region state synchronizes across 320+ edge nodes in under 12ms using CRDT-powered active-active replication.",
    tag: "Core Fabric",
    badgeColor: "cyan",
    colSpan: "col-span-1 md:col-span-2",
    icon: "Globe",
    stats: "320+ Edge POPs",
    highlight: "Sub-12ms Replication"
  },
  {
    id: "autonomous-pipelines",
    title: "Autonomous CI/CD Engine",
    description: "Self-healing deployment pipelines that detect regressions via ML, canary test automatically, and roll back in 200ms.",
    tag: "Automated",
    badgeColor: "violet",
    colSpan: "col-span-1",
    icon: "GitBranch",
    stats: "0.2s Rollback",
    highlight: "ML Canary Analysis"
  },
  {
    id: "zero-config",
    title: "Zero-Config Multi-Cloud Deploy",
    description: "Drop your Dockerfile, Next.js, or Go service. Aether inspects, builds, and distributes across AWS, GCP, and bare metal with zero YAML.",
    tag: "Frictionless",
    badgeColor: "emerald",
    colSpan: "col-span-1",
    icon: "Cpu",
    stats: "Zero YAML Needed",
    highlight: "Instant Spin-Up"
  },
  {
    id: "zero-trust",
    title: "Enterprise Zero-Trust Shield",
    description: "Built-in mTLS, quantum-resistant envelope encryption, and automated SOC2 / HIPAA compliance audits generated on every push.",
    tag: "Security",
    badgeColor: "pink",
    colSpan: "col-span-1 md:col-span-2",
    icon: "ShieldCheck",
    stats: "SOC2 Type II",
    highlight: "Automated Compliance"
  },
  {
    id: "intelligent-cache",
    title: "Predictive Warm Caching",
    description: "Predictive AI models preload compute assets and cache hot database queries before incoming peak traffic surges.",
    tag: "Performance",
    badgeColor: "cyan",
    colSpan: "col-span-1",
    icon: "Zap",
    stats: "99.4% Cache Hit",
    highlight: "Smart Pre-warming"
  },
  {
    id: "live-telemetry",
    title: "Deep Real-Time Observability",
    description: "Distributed tracing, flamegraphs, and log aggregation with zero instrumentation overhead. Millisecond-level drill-down.",
    tag: "Visibility",
    badgeColor: "violet",
    colSpan: "col-span-1 md:col-span-2",
    icon: "Activity",
    stats: "100% Trace Coverage",
    highlight: "Zero Overhead"
  }
];

export const tabData = [
  {
    id: 'developer-apis',
    name: 'Developer APIs',
    badge: 'SDK & CLI',
    title: 'Code at the speed of thought with declarative simplicity',
    description: 'Use our native TypeScript, Python, or Go SDKs to provision environments, trigger rollouts, and shard workloads directly from your codebase.',
    codeSnippets: {
      typescript: `import { Aether, EdgeCluster } from '@aether/sdk';

// Initialize zero-latency edge deployment
const cluster = new EdgeCluster({
  region: 'global-anycast',
  autoScale: { minNodes: 3, maxNodes: 50 },
  zeroDowntime: true
});

export default cluster.deploy({
  name: 'payment-service',
  runtime: 'node-20-edge',
  env: {
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    CACHE_POLICY: 'predictive-warm'
  },
  onCanaryPass: async (metric) => {
    console.log(\`✅ Rollout verified at p99: \${metric.latency}ms\`);
  }
});`,
      python: `from aether import EdgeCluster, WorkloadPolicy

# Provision self-healing autonomous pipeline
cluster = EdgeCluster(
    cluster_id="ml-infer-prod",
    routing_strategy="latency_optimized",
    gpu_acceleration=True
)

@cluster.pipeline(canary_threshold=0.001)
def deploy_inference_worker():
    return {
        "replicas": "auto",
        "fallback_region": "us-east-edge",
        "telemetry_level": "deep_flamegraph"
    }`,
      go: `package main

import (
	"context"
	"github.com/aether-cloud/go-sdk/core"
)

func main() {
	client := core.NewClient(core.WithHyperspeed())
	
	// Deploy edge microservice in 3 lines
	deployment, _ := client.Deploy(context.Background(), core.DeployOpts{
		Service:     "auth-gateway",
		MultiCloud:  true,
		MaxLatencyMs: 5,
	})
	
	deployment.WatchLiveTelemetry()
}`
    }
  },
  {
    id: 'continuous-ops',
    name: 'Continuous Ops',
    badge: 'Autonomous CI/CD',
    title: 'Autonomous delivery pipelines with instantaneous rollback',
    description: 'Say goodbye to flaky staging environments. Run end-to-end ephemeral preview environments per PR with instant automated canary verification.',
    pipelineStages: [
      { step: '01', name: 'Trigger & Ephemeral Build', time: '1.2s', status: 'completed', desc: 'Lightweight containerized compilation with warm cache' },
      { step: '02', name: 'Global Asset Sharding', time: '0.8s', status: 'completed', desc: 'Pushed to 320+ edge locations worldwide' },
      { step: '03', name: 'AI Canary Verification', time: '2.1s', status: 'completed', desc: '10,000 synthetic requests tested with 0 anomalies' },
      { step: '04', name: 'Instant 100% Switchover', time: '0.1s', status: 'active', desc: 'Atomic DNS & Edge routing shift with 0 dropped packets' }
    ]
  },
  {
    id: 'observability',
    name: 'Real-Time Observability',
    badge: 'Live Telemetry',
    title: 'Full-fidelity distributed telemetry with zero performance tax',
    description: 'Instant flamegraphs, real-time error clustering, and edge packet analytics updated every 500 milliseconds.',
    telemetryStats: [
      { label: 'Global p99 Latency', value: '1.8 ms', change: '-42%', isPositive: true },
      { label: 'Throughput', value: '48.2k req/s', change: '+128%', isPositive: true },
      { label: 'Edge Cache Hit Rate', value: '99.82%', change: '+4.1%', isPositive: true },
      { label: 'Compute Cost Efficiency', value: '$0.00012/1k', change: '-65%', isPositive: true }
    ],
    liveLogs: [
      { time: '17:21:04.102', event: '[EDGE-IAD-04] Anycast route optimized -> Latency 1.2ms', type: 'info' },
      { time: '17:21:04.218', event: '[CANARY-VERIFY] ML detector: 0 anomalies across 50k reqs', type: 'success' },
      { time: '17:21:04.590', event: '[AUTO-SCALE] Spawned 12 edge instances in ap-southeast-1', type: 'warn' },
      { time: '17:21:04.912', event: '[TLS-1.3] Quantum-safe key exchange completed', type: 'info' }
    ]
  }
];

export const metricsData = [
  {
    value: "99.999%",
    label: "Uptime SLA Guarantee",
    subtext: "Backed by multi-cloud active failover",
    accent: "text-brand-violet"
  },
  {
    value: "10x",
    label: "Faster CI/CD Cycles",
    subtext: "From git push to live edge in seconds",
    accent: "text-brand-cyan"
  },
  {
    value: "45M+",
    label: "Daily Edge Invocations",
    subtext: "Handled seamlessly without cold starts",
    accent: "text-brand-emerald"
  },
  {
    value: "< 2ms",
    label: "Global p99 Edge Latency",
    subtext: "Reaching 92% of global users within 10ms",
    accent: "text-brand-pink"
  }
];

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Free Forever',
    description: 'Perfect for indie hackers, open-source projects, and early MVPs building for speed.',
    monthlyPrice: 0,
    annualPrice: 0,
    popular: false,
    ctaText: 'Start Free Trial',
    ctaLink: '#',
    features: [
      'Up to 3 Active Projects',
      '1 Million Edge Invocations/mo',
      '10 Global Edge Locations',
      'Automated SSL & Custom Domains',
      'Community Discord Support',
      '1-Day Log Retention',
      'Standard GitHub Integrations'
    ],
    highlightFeatures: ['1 Million Edge Invocations/mo']
  },
  {
    id: 'pro',
    name: 'Pro Velocity',
    badge: 'Most Popular',
    description: 'Designed for scaling startups and fast teams that need automated pipelines and deep telemetry.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    ctaText: 'Upgrade to Pro',
    ctaLink: '#',
    features: [
      'Unlimited Active Projects',
      '25 Million Edge Invocations/mo',
      '320+ Global Edge POPs',
      'AI Canary Auto-Rollback Engine',
      'Predictive Warm Caching',
      '30-Day Deep Telemetry & Traces',
      'Priority 24/7 Slack & Email Support',
      'Role-based Access & Team Workspaces',
      'Multi-cloud Failover Routing'
    ],
    highlightFeatures: ['AI Canary Auto-Rollback Engine', '320+ Global Edge POPs', 'Priority 24/7 Slack Support']
  },
  {
    id: 'enterprise',
    name: 'Enterprise Scale',
    badge: 'Dedicated Scale',
    description: 'Custom architecture, dedicated edge clusters, compliance guardrails, and tailored enterprise SLAs.',
    monthlyPrice: 199,
    annualPrice: 159,
    popular: false,
    ctaText: 'Talk to Enterprise',
    ctaLink: '#',
    features: [
      'Custom Invocations & Petabyte Storage',
      'Dedicated Bare-Metal Edge Clusters',
      'Custom 99.999% SLA Guarantee',
      'SOC2 Type II & HIPAA Compliance Pack',
      'Dedicated Solutions Architect & Slack Channel',
      'Custom VPC Peering & On-Prem Hybrid',
      'Unlimited Log Retention & Cold Storage',
      'Quarterly Architecture & Performance Audits'
    ],
    highlightFeatures: ['Dedicated Bare-Metal Clusters', 'Custom 99.999% SLA', 'Dedicated Solutions Architect']
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "VP of Engineering at FinPulse",
    avatar: "ER",
    color: "from-violet-500 to-indigo-600",
    rating: 5,
    quote: "Aether reduced our global transaction latency from 140ms to 8ms within 48 hours of migration. The automated canary rollbacks alone saved our team countless on-call weekends.",
    metrics: "94% Latency Drop"
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Co-founder & CTO at Synthetix AI",
    avatar: "MV",
    color: "from-cyan-500 to-blue-600",
    rating: 5,
    quote: "We ship ML inference models directly to edge nodes without touching Kubernetes YAML. The velocity is unbelievable—it feels like cheating compared to our previous AWS setup.",
    metrics: "12x Faster Deploys"
  },
  {
    id: 3,
    name: "Aria Takahashi",
    role: "Head of Infrastructure at HyperCloud",
    avatar: "AT",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
    quote: "The zero-latency multi-region sync is genuinely magical. Our developers just write standard TypeScript SDK code and Aether handles the multi-cloud distribution seamlessly.",
    metrics: "Zero Downtime across 40M reqs"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Lead Platform Architect at NovaPay",
    avatar: "DC",
    color: "from-pink-500 to-rose-600",
    rating: 5,
    quote: "We cut our cloud computing bills by 60% while simultaneously boosting our p99 response times. The predictive warm caching handles unpredictable Black Friday traffic spikes like a breeze.",
    metrics: "$120k/yr Cloud Savings"
  },
  {
    id: 5,
    name: "Sarah Lindqvist",
    role: "Director of Product at StreamLine",
    avatar: "SL",
    color: "from-amber-500 to-orange-600",
    rating: 5,
    quote: "The developer experience is unmatched. From PR preview environments to instant global rollbacks, Aether has transformed how quickly our 45-person engineering team ships.",
    metrics: "3.5x Feature Velocity"
  },
  {
    id: 6,
    name: "Julian Thorne",
    role: "Founder at OrbitSec",
    avatar: "JT",
    color: "from-purple-500 to-cyan-500",
    rating: 5,
    quote: "Automated quantum-safe mTLS and instant SOC2 evidence collection turned our security review from a 3-month nightmare into an afternoon checklist. Simply remarkable.",
    metrics: "SOC2 in 2 Days"
  }
];

export const faqs = [
  {
    question: "How does Aether differ from traditional cloud platforms like AWS or GCP?",
    answer: "Traditional hyperscalers require extensive manual configuration, complex Kubernetes clusters, VPC peering, and DevOps teams to maintain. Aether abstracts this entire operational burden into a zero-configuration developer platform with native multi-cloud routing, sub-millisecond edge caching, and automated AI canary deployments."
  },
  {
    question: "Can I migrate existing Docker containers, Next.js, or microservices?",
    answer: "Yes! Aether supports native OCI Docker containers, Next.js, Node.js, Go, Python, Rust, and Static frontends. You can deploy with our 1-click GitHub integration or run 'aether deploy' directly from your CLI without rewriting your code."
  },
  {
    question: "What happens if a major cloud provider experiences an outage?",
    answer: "Aether operates a resilient Anycast Multi-Cloud Mesh. If an AWS or GCP data center experiences packet loss or downtime, our edge routers automatically reroute all incoming user traffic to healthy regions across our redundant cloud partners in under 50 milliseconds with 0 dropped sessions."
  },
  {
    question: "How does the AI Canary Auto-Rollback mechanism work?",
    answer: "During every deployment, Aether provisions a parallel canary slice receiving 1-5% of live traffic. Our real-time observability engine monitors p99 latency, HTTP 5xx error anomalies, and memory saturation. If any metric crosses your defined safety threshold, the rollout is aborted in 200ms before it affects all users."
  },
  {
    question: "Is Aether compliant with enterprise security standards?",
    answer: "Yes. All Aether environments are certified SOC2 Type II, ISO 27001, HIPAA ready, and GDPR compliant. Traffic is encrypted in-transit using quantum-resistant TLS 1.3 and at-rest using AES-256 with customer-managed keys (BYOK) available on Enterprise tiers."
  },
  {
    question: "Can I try Aether before committing to a paid plan?",
    answer: "Absolutely. Our Starter tier is free forever with 1 Million monthly invocations. We also offer a 14-day fully-featured trial of Pro Velocity with no credit card required."
  }
];

export const footerLinks = {
  product: [
    { name: "Edge Network", href: "#features" },
    { name: "Autonomous CI/CD", href: "#features" },
    { name: "Multi-Cloud Routing", href: "#features" },
    { name: "Predictive Caching", href: "#features" },
    { name: "Live Observability", href: "#interactive-demo" },
    { name: "CLI & SDKs", href: "#interactive-demo" },
  ],
  solutions: [
    { name: "For High-Growth Startups", href: "#pricing" },
    { name: "For Enterprise Scale", href: "#pricing" },
    { name: "AI Inference at Edge", href: "#features" },
    { name: "E-commerce & Retail", href: "#features" },
    { name: "Fintech & High-Frequency", href: "#features" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Architecture Guide", href: "#" },
    { name: "Status Dashboard", href: "#" },
    { name: "Community Discord", href: "#" },
    { name: "Changelog & Roadmap", href: "#" },
  ],
  company: [
    { name: "About Aether", href: "#" },
    { name: "Engineering Blog", href: "#" },
    { name: "Careers (We're Hiring!)", href: "#" },
    { name: "Security & Trust", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ]
};
