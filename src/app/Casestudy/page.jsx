"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Subtle Mouse Orbit Effect
    const handleMouseMove = (e) => {
      const orbits = document.querySelectorAll(".celestial-orbit");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      orbits.forEach((orbit, index) => {
        const speed = (index + 1) * 10;
        if (orbit instanceof HTMLElement) {
          orbit.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 dark:border-outline/20 shadow-sm dark:shadow-none transition-all duration-300 ease-in-out">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface tracking-tighter">
            Jovian Technologies
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors duration-300 hover:translate-x-1"
              href="/Services"
            >
              Services
            </Link>
            <Link
              className="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-b-2 border-primary transition-colors duration-300 hover:translate-x-1"
              href="/Casestudy"
            >
              Case Studies
            </Link>
            <a
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors duration-300 hover:translate-x-1"
              href="#"
            >
              Solutions
            </a>
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors duration-300 hover:translate-x-1"
              href="/Techstack"
            >
              Tech Stack
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors duration-300 hover:translate-x-1"
              href="/About"
            >
              Insights
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/Contact">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-colors duration-300 cursor-pointer shadow-sm">
                Start a Project
              </button>
            </Link>
            {/* Mobile Hamburger menu */}
            <button 
              className="md:hidden flex items-center p-2 text-on-surface dark:text-inverse-on-surface hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant/30 bg-surface dark:bg-surface-dim transition-all duration-300">
            <div className="flex flex-col p-6 gap-4">
              <Link
                className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-2"
                href="/Services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-l-2 border-primary pl-2 py-2"
                href="/Casestudy"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <Link
                className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-2"
                href="/Techstack"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tech Stack
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-2"
                href="/About"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        {/* Background Parallax Orbits */}
        <div className="celestial-orbit absolute rounded-full border border-primary/10 pointer-events-none w-[800px] h-[800px] -top-[400px] -right-[200px] -z-10 transition-transform duration-300 ease-out"></div>
        <div className="celestial-orbit absolute rounded-full border border-primary/10 pointer-events-none w-[400px] h-[400px] top-1/2 -left-[100px] -z-10 transition-transform duration-300 ease-out"></div>

        {/* Hero Section */}
        <section className="pt-section-padding-desktop pb-16 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block font-label-sm text-label-sm text-primary mb-4 tracking-widest uppercase">PROVEN IMPACT</span>
              <h1 className="font-display-lg text-display-lg mb-8 tracking-tight leading-tight">
                Engineering efficiency through <span className="text-primary">intelligent automation.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                Discover how we leverage Large Language Models, RAG architectures, and custom cloud infrastructure to solve complex business bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-section-padding-mobile md:pb-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Case Study 1: AI Customer Support Agent */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col border-t-2 border-t-primary">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      support_agent
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">CUSTOMER EXPERIENCE</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">AI Customer Support Agent</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Scaling support for 50k+ monthly users with a 12-hour response lag during peak loads.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Deployed an autonomous LLM-powered agent with multi-turn reasoning and tool-calling capabilities.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">GPT-4o</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Python</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">FastAPI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">85% Automated</p>
                  <p className="text-sm text-on-surface-variant mt-1">Reduction in human-handled tickets within 30 days.</p>
                </div>
              </div>

              {/* Case Study 2: RAG Knowledge Assistant */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      psychology
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">KNOWLEDGE MANAGEMENT</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">RAG Knowledge Assistant</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Engineers spending 20% of their time searching for technical specs across fragmented internal docs.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Built a semantic search engine using Vector DBs to retrieve context for LLM generation.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Pinecone</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">LangChain</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Azure AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">3.2min Average</p>
                  <p className="text-sm text-on-surface-variant mt-1">Saved per information request across 200+ employees.</p>
                </div>
              </div>

              {/* Case Study 3: WhatsApp Lead Automation System */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat_bubble
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">SALES AUTOMATION</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">WhatsApp Lead Automation</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Lead qualification process was manual and suffered from high drop-off rates on mobile messaging.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Real-time conversational qualifier with CRM sync and instant appointment booking.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Twilio API</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Node.js</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Make.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">400% ROI</p>
                  <p className="text-sm text-on-surface-variant mt-1">Increase in qualified sales appointments within 60 days.</p>
                </div>
              </div>

              {/* Case Study 4: CRM Workflow Automation */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      rebase_edit
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">OPERATIONS</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">CRM Workflow Automation</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Inconsistent data entry and manual follow-ups led to a 15% loss in potential renewals.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        End-to-end event-driven architecture to automate lead distribution and nurturing cycles.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Salesforce</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Zapier</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">SQL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">Zero Leaks</p>
                  <p className="text-sm text-on-surface-variant mt-1">100% lead follow-up compliance achieved through automation.</p>
                </div>
              </div>

              {/* Case Study 5: AI Email Processing System */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      mail
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">DATA PROCESSING</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">AI Email Processing System</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Financial firm receiving 10k+ invoices/forms via email needing manual OCR and entry.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Vision-LLM pipeline for unstructured data extraction and automated ledger reconciliation.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Claude 3.5 Sonnet</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">AWS Lambda</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">React</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">99.8% Accuracy</p>
                  <p className="text-sm text-on-surface-variant mt-1">Extraction precision, exceeding human manual entry standards.</p>
                </div>
              </div>

              {/* Case Study 6: Business Dashboard & Admin Panel */}
              <div className="bg-white/70 backdrop-blur-xl border border-outline-variant/50 rounded-xl soft-celestial-shadow hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col border-b-2 border-b-primary/40">
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      dashboard_customize
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">DATA VISUALIZATION</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface font-semibold">Business Dashboard &amp; Admin</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Problem</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Leadership lacked real-time visibility into AI performance and operational efficiency.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Solution</p>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">
                        Custom multi-tenant analytics platform with predictive forecasting and cost tracking.
                      </p>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Next.js 14</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">D3.js</span>
                        <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded tracking-wider">Supabase</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 border-t border-outline-variant/30 rounded-b-xl">
                  <p className="font-label-sm text-label-sm text-primary uppercase mb-1 tracking-wider">Outcome</p>
                  <p className="font-headline-md text-primary font-bold tracking-tight">14ms Latency</p>
                  <p className="text-sm text-on-surface-variant mt-1">Real-time data synchronization across globally distributed teams.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-y border-outline-variant/30 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Ready to automate your excellence?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the league of forward-thinking enterprises leveraging our high-precision AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/Contact" className="w-full sm:w-auto">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-sm text-label-sm hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:bg-primary-container transition-all cursor-pointer w-full">
                  BOOK A DISCOVERY CALL
                </button>
              </Link>
              <Link href="/Services" className="w-full sm:w-auto">
                <button className="border border-outline-variant text-on-surface px-10 py-4 rounded-lg font-label-sm text-label-sm hover:border-primary hover:bg-surface transition-all cursor-pointer w-full">
                  EXPLORE SOLUTIONS
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="full-width bg-surface-container-lowest dark:bg-surface-container-high border-t border-outline-variant/50 transition-opacity duration-500">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface tracking-tight mb-4 block hover:text-primary transition-colors">
              Jovian Technologies
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant leading-relaxed">
              Architecting the future of corporate intelligence with precision-engineered AI systems.
            </p>
          </div>
          <div>
            <h4 className="font-label-sm text-label-sm text-primary mb-6 tracking-widest">SERVICES</h4>
            <ul className="space-y-4">
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Services">
                  Automation Strategy
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Services">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Services">
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-sm text-label-sm text-primary mb-6 tracking-widest">TECH STACK</h4>
            <ul className="space-y-4">
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Techstack">
                  PyTorch
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Techstack">
                  TensorFlow
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Techstack">
                  Kubernetes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-sm text-label-sm text-primary mb-6 tracking-widest">RESOURCES</h4>
            <ul className="space-y-4">
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="/Contact">
                  Contact Support
                </Link>
              </li>
              <li>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant pt-4">
                © 2024 Jovian Technologies. All rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
