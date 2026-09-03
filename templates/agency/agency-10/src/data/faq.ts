import { FAQItem } from '../types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing & Scoping',
    question: 'How does KRAFT structure project pricing and engagements?',
    answer: 'We offer two primary engagement models: Fixed-Scope Milestones (ideal for well-defined MVPs, architecture blueprints, and bounded product releases) and Dedicated Product Pods (monthly dedicated senior engineering squads for ongoing feature evolution, scaling, and MLOps). Project sizes typically range from $35k for targeted AI feasibility sprints to $150k+ for comprehensive enterprise platforms.'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Scoping',
    question: 'What is your standard payment structure?',
    answer: 'For milestone-based projects, invoicing is structured against concrete, verifiable deliverables: typically 30% upon kickoff and discovery sign-off, 30% upon mid-sprint architecture validation, 30% upon passing staging QA acceptance, and 10% upon successful production cutover and handover. For dedicated squads, engagements are billed bi-weekly or monthly in advance.'
  },
  {
    id: 'faq-3',
    category: 'Timelines & Process',
    question: 'What does a typical project development timeline look like?',
    answer: 'A focused AI prototype or MVP typically takes 6 to 10 weeks from discovery to production launch. Complex enterprise platforms involving legacy migrations, custom model training, or multi-tenant architectures typically span 12 to 20 weeks, delivered in incremental 2-week deployable increments.'
  },
  {
    id: 'faq-4',
    category: 'Timelines & Process',
    question: 'How do you ensure projects stay on schedule and within budget?',
    answer: 'We employ rigorous agile sprint rhythms with bi-weekly live staging demos, continuous burn-rate telemetry, and transparent Jira/Linear boards. We prioritize contract-first architecture during discovery, which uncovers 90%+ of technical integration risks before active development begins.'
  },
  {
    id: 'faq-5',
    category: 'AI & Technology',
    question: 'How do you safeguard proprietary company data when building AI & LLM systems?',
    answer: 'Data sovereignty is paramount. We sign strict mutual NDAs prior to discovery. We deploy private models inside your dedicated AWS, GCP, or on-premises VPC with zero external logging or data telemetry. We also implement client-side PII redactors and utilize enterprise zero-data-retention API contracts.'
  },
  {
    id: 'faq-6',
    category: 'AI & Technology',
    question: 'Do you work with our existing engineering team or build standalone systems?',
    answer: 'Both. We often serve as an elite force-multiplier embedded directly alongside internal tech teams, establishing architecture standards and pair-programming on complex modules. Alternatively, we can take full turn-key ownership from blank canvas to production launch, followed by structured knowledge transfer.'
  },
  {
    id: 'faq-7',
    category: 'Security & NDA',
    question: 'Who owns the intellectual property and source code?',
    answer: 'You do, 100%. All custom code, algorithms, trained model weights, database schemas, and documentation are the exclusive property of your organization upon milestone completion. We do not charge ongoing royalty licenses for code we build for you.'
  },
  {
    id: 'faq-8',
    category: 'Security & NDA',
    question: 'Are your systems compliant with industry standards like SOC2, HIPAA, and GDPR?',
    answer: 'Yes. Our senior architects have deep experience implementing end-to-end encryption at rest and in transit, role-based access control (RBAC), immutable audit logging, and automated compliance policies required for SOC2 Type II, HIPAA, and GDPR certifications.'
  },
  {
    id: 'faq-9',
    category: 'Support & SLA',
    question: 'What happens after launch? Do you provide ongoing maintenance and support?',
    answer: 'Yes. We provide SLA-backed maintenance and optimization tiers covering 24/7 infrastructure monitoring, emergency security patching, cloud cost governance, and model drift telemetry. Clients also have the option to transition code ownership seamlessly to internal teams via our comprehensive handover documentation.'
  },
  {
    id: 'faq-10',
    category: 'Support & SLA',
    question: 'How do communication and daily collaboration work with remote clients?',
    answer: 'We work across North American, European, and Asian time zones with guaranteed daily overlap. We utilize dedicated shared Slack/Teams channels, asynchronous Loom video updates, weekly executive checkpoints, and open GitHub/GitLab repositories for real-time visibility into every commit.'
  }
];

export const FAQ_ITEMS_DATA = FAQ_DATA;
