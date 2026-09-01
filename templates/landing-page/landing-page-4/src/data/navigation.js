export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { 
    label: 'Resources', 
    href: '#resources',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Documentation', desc: 'Comprehensive API & workflow guides', href: '#faq' },
      { label: 'Changelog', desc: 'New releases, updates & patches', href: '#news' },
      { label: 'Community', desc: 'Join 14,000+ automation builders', href: '#testimonials' },
      { label: 'Security Whitepaper', desc: 'SOC2 Type II & end-to-end encryption', href: '#trust' }
    ]
  },
  { label: 'Contact', href: '#newsletter' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Workflow Engine', href: '#features' },
      { label: 'AI Copilot', href: '#solutions' },
      { label: 'Integrations (200+)', href: '#features' },
      { label: 'Real-Time Insights', href: '#solutions' },
      { label: 'Pricing & Tiers', href: '#pricing' },
      { label: 'Product Roadmap', href: '#news' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Engineering Teams', href: '#solutions' },
      { label: 'For Product Managers', href: '#solutions' },
      { label: 'For Fast-Growth Startups', href: '#solutions' },
      { label: 'Enterprise Orchestration', href: '#pricing' },
      { label: 'Security & Compliance', href: '#trust' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Interactive Docs', href: '#faq' },
      { label: 'API Reference', href: '#faq' },
      { label: 'Customer Stories', href: '#testimonials' },
      { label: 'Workflow Templates', href: '#features' },
      { label: 'System Status (99.99%)', href: '#trust' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Flowzen', href: '#about' },
      { label: 'Careers (We’re Hiring!)', href: '#newsletter' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact Sales', href: '#pricing' }
    ]
  }
];
