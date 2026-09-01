export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Fast Launch',
    tagline: 'For individuals, indie builders & agile micro-teams.',
    monthlyPrice: 19,
    annualPrice: 15,
    popular: false,
    ctaText: 'Start Free Trial',
    ctaVariant: 'secondary',
    features: [
      'Up to 5 team members',
      'Basic workflow automation (1,000 runs/mo)',
      'Smart task management & sprint boards',
      'Standard analytics & velocity tracking',
      'Community & email support',
      '10 GB encrypted cloud storage',
      '3 active webhook integrations'
    ],
    highlightFeature: 'Perfect for initial MVP validation'
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    tagline: 'For high-velocity organizations scaling execution.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    ctaText: 'Choose Growth Plan',
    ctaVariant: 'primary',
    features: [
      'Unlimited projects & workflows',
      'Advanced autonomous triggers (25,000 runs/mo)',
      'Real-time team analytics & custom dashboards',
      '200+ pre-built integrations (GitHub, Slack, etc.)',
      'Priority 24/7 chat & video support',
      'Unlimited encrypted cloud storage',
      'Custom roles, RBAC & audit log export',
      'AI Workflow Copilot generator'
    ],
    highlightFeature: 'Saves an estimated 18 hrs/week per team'
  },
  {
    id: 'scale',
    name: 'Scale',
    badge: 'Enterprise Grade',
    tagline: 'For multi-team enterprises requiring bespoke control.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    popular: false,
    ctaText: 'Talk to Sales',
    ctaVariant: 'secondary',
    features: [
      'Unlimited team members & seats',
      'Unlimited automated execution runs',
      'Custom on-prem or private VPC deployment',
      'Dedicated Customer Success Architect',
      '99.99% Uptime SLA with financial guarantee',
      'SOC2 Type II, HIPAA & GDPR compliance pack',
      'Single Sign-On (SSO / SAML / Okta)',
      'Custom webhook engineering & SLA routing'
    ],
    highlightFeature: 'Dedicated engineering and custom SLAs'
  }
];
