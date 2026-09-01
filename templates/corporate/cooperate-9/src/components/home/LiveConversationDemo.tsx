import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Phone, Mail, CheckCircle2, ShieldAlert, Cpu, Database, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  sender: 'agent' | 'borrower' | 'system';
  text: string;
  timestamp: string;
  metadata?: {
    intent?: string;
    losAction?: string;
    complianceCheck?: string;
    confidenceScore?: number;
  };
}

interface Scenario {
  id: string;
  channel: 'SMS' | 'Voice' | 'Email';
  borrowerName: string;
  loanType: string;
  loanAmount: string;
  topic: string;
  status: string;
  initialMessages: Message[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'mortgage-preapproval',
    channel: 'SMS',
    borrowerName: 'Sarah Jenkins',
    loanType: '30-Yr Conventional Fixed',
    loanAmount: '$685,000',
    topic: 'W-2 & Asset Verification',
    status: 'LOS Synced (Encompass)',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        text: "Hi Sarah, this is Boomerang reaching out from Meridian Bank. We received your pre-approval application for the $685,000 property in Austin. To complete underwriter review, could you upload your 2025 W-2 or confirm if you'd prefer an automated payroll link?",
        timestamp: '10:14 AM',
        metadata: {
          intent: 'DOCUMENT_COLLECTION_W2',
          losAction: 'Queried Encompass 1003 Loan ID #84920',
          complianceCheck: 'TCPA Consent Verified / 100% Reg B Compliant',
          confidenceScore: 99.4,
        },
      },
      {
        id: '2',
        sender: 'borrower',
        text: "Hey! An automated payroll link would be way faster. Does it support ADP?",
        timestamp: '10:15 AM',
      },
      {
        id: '3',
        sender: 'agent',
        text: "Yes, ADP is fully supported. I've just generated a secure 256-bit encrypted link to your phone. Once you log in, your VOE will automatically attach to your loan file within 60 seconds.",
        timestamp: '10:15 AM',
        metadata: {
          intent: 'VOE_PAYROLL_API_DISPATCH',
          losAction: 'Triggered Argyle / Plaid Payroll Verification Token',
          complianceCheck: 'GLBA PII Safeguard Passed',
          confidenceScore: 98.9,
        },
      },
      {
        id: '4',
        sender: 'borrower',
        text: "Done! Just authorized ADP. When will I hear back on the rate lock options?",
        timestamp: '10:17 AM',
      },
      {
        id: '5',
        sender: 'agent',
        text: "Received! Your verified income of $164,000/yr is now posted to your 1003 file. Your Loan Officer, David Mitchell, has been notified to present your 6.125% 60-day rate lock options today by 2:00 PM CT.",
        timestamp: '10:17 AM',
        metadata: {
          intent: 'INCOME_POSTED_LO_ESCALATION',
          losAction: 'Updated Encompass DTI to 31.4% • Alerted LO David Mitchell',
          complianceCheck: 'CFPB TRID Timing Rule Satisfied',
          confidenceScore: 99.7,
        },
      },
    ],
  },
  {
    id: 'rate-refinance',
    channel: 'Voice',
    borrowerName: 'Marcus Vance',
    loanType: 'Jumbo Refinance',
    loanAmount: '$1,250,000',
    topic: 'Cash-Out Equity & Rate Assessment',
    status: 'Call Completed • Transcript Audited',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        text: "[Voice Inbound Call Initiated] Good afternoon Mr. Vance, thank you for calling Pacific Horizon Lending. I see your existing 30-year jumbo note originated in 2023 at 7.15%. Are you looking to explore a rate reduction or cash-out refinance today?",
        timestamp: '02:30 PM',
        metadata: {
          intent: 'INBOUND_BORROWER_IDENTIFICATION',
          losAction: 'Retrieved Core Servicing File #J-99201',
          complianceCheck: 'Authentication Passed: Voice Biometric + 2FA SMS',
          confidenceScore: 99.2,
        },
      },
      {
        id: '2',
        sender: 'borrower',
        text: "I'd like to look at lowering the rate and pulling out about $100k for home remodeling if the numbers make sense.",
        timestamp: '02:31 PM',
      },
      {
        id: '3',
        sender: 'agent',
        text: "Based on current automated valuation of $1.85M, a cash-out refinance to 6.25% would yield an LTV of 72.9%, keeping you well below the 80% jumbo threshold. This would lower your effective monthly interest payment while freeing $100,000 net proceeds.",
        timestamp: '02:31 PM',
        metadata: {
          intent: 'REALTIME_PRODUCT_PRICING_ENGINE',
          losAction: 'Queried Optimal Blue PPE & CoreLogic AVM',
          complianceCheck: 'Reg Z Loan Estimate Calculation Verified',
          confidenceScore: 99.5,
        },
      },
    ],
  },
  {
    id: 'closing-checklist',
    channel: 'Email',
    borrowerName: 'Elena Rostova',
    loanType: 'FHA Purchase Loan',
    loanAmount: '$420,000',
    topic: 'Clear-to-Close & Wire Instructions',
    status: 'Clear-to-Close Issued',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        text: "Subject: Congratulations Elena — Clear to Close Issued for 742 Evergreen Terrace\n\nDear Elena,\n\nGreat news! The underwriting committee has officially issued Clear-to-Close for your loan (#FHA-44182). Your Closing Disclosure (CD) is ready for e-signature in your portal.",
        timestamp: '09:00 AM',
        metadata: {
          intent: 'CLEAR_TO_CLOSE_NOTIFICATION',
          losAction: 'Encompass Milestone updated: Underwriting Clear',
          complianceCheck: 'TRID 3-Day Mandatory Waiting Period Timer Initiated',
          confidenceScore: 99.9,
        },
      },
      {
        id: '2',
        sender: 'borrower',
        text: "Thank you so much! Should I wire the closing funds today or wait until the signing date?",
        timestamp: '09:12 AM',
      },
      {
        id: '3',
        sender: 'agent',
        text: "Please verify wire instructions exclusively through our secure portal or via live phone verification at our published closing desk number (555-019-8230). Never rely on wire details sent via unencrypted email. We recommend initiating the wire 24 hours prior to your Thursday 10:00 AM closing.",
        timestamp: '09:14 AM',
        metadata: {
          intent: 'WIRE_FRAUD_PREVENTION_PROTOCOL',
          losAction: 'Logged Security Protocol Acknowledgment',
          complianceCheck: 'FinCEN / Wire Fraud Warning Mandatory Notice Sent',
          confidenceScore: 100.0,
        },
      },
    ],
  },
];

export const LiveConversationDemo: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [messages, setMessages] = useState<Message[]>(SCENARIOS[0].initialMessages);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<'conversation' | 'los' | 'compliance'>('conversation');

  useEffect(() => {
    setMessages(selectedScenario.initialMessages);
    setCustomInput('');
  }, [selectedScenario]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'borrower',
      text: customInput.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setCustomInput('');
    setIsTyping(true);

    // Simulate intelligent agent response with LOS integration and compliance reasoning
    setTimeout(() => {
      let agentResponseText = "Thank you for the update. I have recorded this in your borrower portal and notified your assigned underwriter to expedite processing.";
      let intent = "GENERAL_BORROWER_QUERY_RESOLVED";
      let losAction = "Updated LOS Borrower Activity Log";
      let complianceCheck = "Fair Lending & Non-Discrimination Guardrail Active";

      const lower = userMsg.text.toLowerCase();
      if (lower.includes('rate') || lower.includes('interest') || lower.includes('lock')) {
        agentResponseText = "Our pricing engine shows current benchmark 30-year fixed conforming rates at 6.125% (APR 6.210%) with zero discount points. Would you like me to send the official Loan Estimate breakdown to your email?";
        intent = "INTEREST_RATE_QUOTE_DELIVERY";
        losAction = "Queried Real-Time Secondary Pricing Matrix";
        complianceCheck = "TILA-RESPA Integrated Disclosure (TRID) Rule Adhered";
      } else if (lower.includes('tax') || lower.includes('document') || lower.includes('upload') || lower.includes('paystub')) {
        agentResponseText = "I've sent a secure one-time upload link directly to your mobile phone. As soon as you upload the PDF or photo, our OCR pipeline will extract and cross-verify with your 1003 application.";
        intent = "OCR_DOCUMENT_INTAKE_REQUEST";
        losAction = "Created Secure AWS S3 Encrypted Document Bucket";
        complianceCheck = "GLBA Safeguards Rule & SOC2 Type II Encryption";
      } else if (lower.includes('timeline') || lower.includes('close') || lower.includes('when')) {
        agentResponseText = "Your loan is currently at Step 3 of 4: Final Underwriter Sign-off. Estimated conditional approval is scheduled for tomorrow by 4:00 PM.";
        intent = "LOAN_STATUS_MILESTONE_QUERY";
        losAction = "Queried Pipeline Milestone Status #Stage-Underwriting";
        complianceCheck = "Reg B Equal Credit Opportunity Act Notification Clock OK";
      }

      const newAgentMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: agentResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        metadata: {
          intent,
          losAction,
          complianceCheck,
          confidenceScore: 99.6,
        },
      };

      setMessages((prev) => [...prev, newAgentMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleReset = () => {
    setMessages(selectedScenario.initialMessages);
  };

  return (
    <section id="product" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-semibold block mb-3">
          INTERACTIVE AGENT WORKSPACE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
          Experience conversational AI that handles the full borrower lifecycle
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#191919]/70 leading-relaxed">
          Test real multi-turn borrower interactions across SMS, Voice, and Email with live core banking, LOS sync, and automated regulatory compliance.
        </p>
      </div>

      {/* INTERACTIVE DEMO CONTAINER */}
      <div className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: SCENARIO SELECTOR & BORROWER PROFILE */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-white border-b lg:border-b-0 lg:border-r border-gray-200/80 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-2">
                SELECT BORROWER JOURNEY
              </span>
              <div className="space-y-2">
                {SCENARIOS.map((sc) => {
                  const isActive = sc.id === selectedScenario.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setSelectedScenario(sc)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                        isActive
                          ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                          : 'bg-[#F7F7F7] hover:bg-gray-100 text-[#191919] border-transparent'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {sc.channel}
                          </span>
                          <span className="font-medium text-sm">{sc.borrowerName}</span>
                        </div>
                        <p className={`text-xs mt-1 ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                          {sc.topic}
                        </p>
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 ml-2 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BORROWER FILE SUMMARY CARD */}
            <div className="bg-[#F8F9FA] rounded-xl p-4 border border-gray-200/70 space-y-2.5">
              <div className="flex items-center justify-between text-xs border-b border-gray-200/70 pb-2">
                <span className="text-gray-500">Loan Facility</span>
                <span className="font-mono font-medium text-[#191919]">{selectedScenario.loanType}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-gray-200/70 pb-2">
                <span className="text-gray-500">Requested Amount</span>
                <span className="font-mono font-semibold text-[#191919]">{selectedScenario.loanAmount}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">System Status</span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedScenario.status}
                </span>
              </div>
            </div>
          </div>

          {/* RESET BUTTON */}
          <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="text-xs text-gray-500 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Conversation
            </button>
            <span className="text-[10px] font-mono text-gray-400">SOC2 Type II • CFPB Guardrails</span>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE CONVERSATION & INSPECTOR */}
        <div className="lg:col-span-8 flex flex-col h-[600px] sm:h-[640px] bg-white">
          {/* TOP BAR / TABS */}
          <div className="px-6 py-3.5 border-b border-gray-200/80 flex items-center justify-between bg-[#FCFCFC]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#191919]">
                Boomerang Agent — {selectedScenario.borrowerName} ({selectedScenario.channel})
              </span>
            </div>

            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('conversation')}
                className={`text-xs px-3 py-1 rounded-md transition-all font-medium ${
                  activeTab === 'conversation' ? 'bg-white text-black shadow-xs' : 'text-gray-500 hover:text-black'
                }`}
              >
                Chat Thread
              </button>
              <button
                onClick={() => setActiveTab('los')}
                className={`text-xs px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                  activeTab === 'los' ? 'bg-white text-black shadow-xs' : 'text-gray-500 hover:text-black'
                }`}
              >
                <Database className="w-3 h-3" />
                LOS Audit
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`text-xs px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                  activeTab === 'compliance' ? 'bg-white text-black shadow-xs' : 'text-gray-500 hover:text-black'
                }`}
              >
                <ShieldAlert className="w-3 h-3" />
                Reg Guardrails
              </button>
            </div>
          </div>

          {/* TAB 1: CONVERSATION THREAD */}
          {activeTab === 'conversation' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* MESSAGES SCROLL AREA */}
              <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4">
                {messages.map((msg) => {
                  const isAgent = msg.sender === 'agent';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                    >
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span className="text-[11px] font-medium text-gray-500">
                          {isAgent ? 'Boomerang AI Agent' : selectedScenario.borrowerName}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">{msg.timestamp}</span>
                      </div>

                      <div
                        className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                          isAgent
                            ? 'bg-[#F4F4F4] text-[#191919] rounded-tl-sm border border-gray-200/60 shadow-xs'
                            : 'bg-[#191919] text-white rounded-tr-sm shadow-xs'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </div>

                      {/* INLINE AGENT EXPLAINABILITY BADGE */}
                      {isAgent && msg.metadata && (
                        <div className="mt-1.5 ml-1 flex flex-wrap items-center gap-2 text-[10px] text-gray-500 font-mono">
                          <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200/60">
                            Confidence: {msg.metadata.confidenceScore}%
                          </span>
                          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200/60">
                            Intent: {msg.metadata.intent}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-gray-400 italic p-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    Boomerang Agent is reasoning and verifying LOS policy...
                  </div>
                )}
              </div>

              {/* INPUT BAR */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-[#FAFAFA] flex items-center gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Type a borrower reply (e.g. 'Can I lock 6.125% today?' or 'I uploaded my tax returns')..."
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 text-[#191919]"
                />
                <button
                  type="submit"
                  disabled={!customInput.trim()}
                  className="px-5 py-2.5 bg-[#191919] hover:bg-black text-white text-sm font-medium rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
                >
                  Send
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: LIVE LOS & CRM DATA STREAM */}
          {activeTab === 'los' && (
            <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-[#0F1115] text-gray-200 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <span className="text-emerald-400 font-semibold">● LOS SYNC ACTIVE (ICE ENCOMPASS V24.2)</span>
                <span className="text-gray-500">LATENCY: 42ms</span>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-900/80 p-3.5 rounded-lg border border-gray-800 space-y-1.5">
                  <div className="text-gray-400 font-semibold text-[11px]">1003 LOAN APPLICATION SNAPSHOT</div>
                  <div className="text-gray-300">Borrower: {selectedScenario.borrowerName}</div>
                  <div className="text-gray-300">Loan Product: {selectedScenario.loanType}</div>
                  <div className="text-gray-300">Loan Amount: {selectedScenario.loanAmount}</div>
                  <div className="text-emerald-400">Verified DTI: 31.4% (Below 43.0% Max Cap)</div>
                </div>

                <div className="bg-gray-900/80 p-3.5 rounded-lg border border-gray-800 space-y-1.5">
                  <div className="text-gray-400 font-semibold text-[11px]">AUTOMATED AUDIT LOGS</div>
                  {messages.map((m, i) => m.metadata ? (
                    <div key={i} className="text-gray-400 border-l-2 border-emerald-500 pl-2.5 py-0.5">
                      <span className="text-gray-500">[{m.timestamp}]</span> {m.metadata.losAction}
                    </div>
                  ) : null)}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REGULATORY & COMPLIANCE GUARDRAILS */}
          {activeTab === 'compliance' && (
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-white">
              <div className="border border-emerald-200 bg-emerald-50/70 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  CFPB & Fair Lending Verification: 100% Passed
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Every borrower response is evaluated through deterministic compliance rules. Zero unapproved rate quotes, discriminatory language, or unauthenticated PII disclosures.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-semibold text-xs text-[#191919]">TCPA & Consent Architecture</div>
                  <div className="text-xs text-gray-600">Opt-in verified via digital signature. Autonomous quiet-hours enforcement based on borrower area code.</div>
                </div>
                <div className="p-3.5 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-semibold text-xs text-[#191919]">GLBA & PII Masking</div>
                  <div className="text-xs text-gray-600">SSNs, bank account routing, and tax identifiers are automatically tokenized before vector embeddings.</div>
                </div>
                <div className="p-3.5 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-semibold text-xs text-[#191919]">Human-in-the-Loop Escalation</div>
                  <div className="text-xs text-gray-600">Complex hardship adjustments or rate renegotiations trigger seamless real-time handoff to licensed loan officers.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
