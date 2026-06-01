"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Parallax mouse interaction for orbital paths
    const handleMouseMove = (e) => {
      const orbits = document.querySelectorAll(".orbital-path");
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
      {/* TopNavBar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
            Jovian Technologies
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-b-2 border-primary"
              href="/Services"
            >
              Services
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/Casestudy"
            >
              Case Studies
            </Link>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="#"
            >
              Solutions
            </a>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/Techstack"
            >
              Tech Stack
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/About"
            >
              Insights
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/Contact">
              <button className="bg-primary text-on-primary px-6 py-3 rounded font-body-md text-body-md font-semibold hover:bg-primary-container transition-all duration-300 cursor-pointer">
                Start a Project
              </button>
            </Link>
            {/* Mobile Hamburger menu */}
            <button 
              className="md:hidden flex items-center p-2 text-on-surface hover:text-primary transition-colors"
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
                className="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-l-2 border-primary pl-2 py-2"
                href="/Services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/Casestudy"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/Techstack"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tech Stack
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/About"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-section-padding-mobile md:pt-section-padding-desktop pb-24 bg-surface-container-lowest">
          <div className="orbital-path w-[600px] h-[600px] -top-40 -right-40 absolute rounded-full border border-primary/10 pointer-events-none"></div>
          <div className="orbital-path w-[400px] h-[400px] -top-20 -right-20 absolute rounded-full border border-primary/10 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Our Expertise</span>
              <h1 className="font-display-lg text-display-lg mb-8">Architecting the <span className="text-primary">Next Intelligence</span>.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                From custom RAG implementations to sophisticated WhatsApp automation flows, we build the technical infrastructure that scales human potential through Jovian-grade precision.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* AI Agents (Large Highlight) */}
              <div className="md:col-span-8 group bg-white border border-outline-variant/30 rounded-xl p-8 md:p-10 soft-celestial-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="material-symbols-outlined text-primary text-5xl">smart_toy</span>
                    <span className="text-secondary font-label-sm text-label-sm border border-secondary/20 px-3 py-1 rounded-full">FLAGSHIP</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg mb-4">Autonomous AI Agents</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">Sophisticated digital entities capable of reasoning, planning, and executing complex workflows across your existing tech stack without human intervention.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="font-label-sm text-label-sm text-on-surface font-bold uppercase mb-3">Problems Solved</h4>
                      <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Manual data entry fatigue</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Slow response times</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-label-sm text-label-sm text-on-surface font-bold uppercase mb-3">Use Cases</h4>
                      <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 24/7 Technical Support</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Automated Lead Prospecting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                  Get Started <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              {/* RAG Systems */}
              <div className="md:col-span-4 bg-white border border-outline-variant/30 rounded-xl p-8 md:p-10 soft-celestial-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-8">database</span>
                  <h3 className="font-headline-md text-headline-md mb-4">RAG Systems</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Retrieval-Augmented Generation to turn your company docs into an interactive knowledge base.</p>
                  <div className="border-t border-outline-variant/20 pt-6 mt-6">
                    <h4 className="font-label-sm text-label-sm text-on-surface font-bold uppercase mb-2">Problem Solved</h4>
                    <p className="text-sm text-on-surface-variant">Hallucinations in LLMs and outdated information silos.</p>
                  </div>
                </div>
                <button className="mt-8 text-primary font-bold inline-flex items-center gap-2 w-fit">
                  Configure <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              {/* AI App Dev */}
              <div className="md:col-span-4 bg-white border border-outline-variant/30 rounded-xl p-8 md:p-10 soft-celestial-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-8">developer_mode_tv</span>
                  <h3 className="font-headline-md text-headline-md mb-4">AI App Dev</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Custom-built applications with native AI integration from day one.</p>
                  <div className="flex gap-2 mb-6 flex-wrap">
                    <span className="bg-surface-container-low px-3 py-1 text-xs rounded-full">Python</span>
                    <span className="bg-surface-container-low px-3 py-1 text-xs rounded-full">OpenAI</span>
                    <span className="bg-surface-container-low px-3 py-1 text-xs rounded-full">LangChain</span>
                  </div>
                </div>
                <button className="text-primary font-bold inline-flex items-center gap-2 w-fit">
                  Learn More <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              {/* Enterprise Automation */}
              <div className="md:col-span-8 bg-surface-container-low border border-outline-variant/10 rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden">
                <div className="md:w-1/2">
                  <h3 className="font-headline-lg text-headline-lg mb-4">Enterprise Automation</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">We stitch together your CRM, Email, and Cloud infrastructure into a seamless, self-healing ecosystem.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary">hub</span>
                      <div>
                        <p className="font-bold">n8n &amp; Zapier Flows</p>
                        <p className="text-sm text-on-surface-variant">Complex multi-step logic triggers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary">chat</span>
                      <div>
                        <p className="font-bold">WhatsApp &amp; CRM Sync</p>
                        <p className="text-sm text-on-surface-variant">Instant lead injection and nurturing.</p>
                      </div>
                    </li>
                  </ul>
                  <button className="bg-primary text-on-primary px-6 py-3 rounded font-bold hover:brightness-110 transition-all duration-300">
                    Automate Workflows
                  </button>
                </div>
                <div className="md:w-1/2 relative min-h-[300px] w-full overflow-hidden rounded-lg">
                  <Image
                    alt="Automation Dashboard"
                    className="rounded-lg shadow-2xl absolute -right-20 top-0 object-cover w-[120%]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHDTvQigB3lTCBdp8pZF29xB4HiduR1D1DnQdnI2yZFW5CLzVopr5wdiO7It613xG2sD7XgeNGDEUOlNLMnChd0Ea_r8ENDrBOOipz8Ma6uOGlNTaidM1YlmaGzykqdpHjuOUiwJNkYsWjBEee13ZXciK-oXBKiuW-DDhEnaMMjkCM_f_B-HL1lfeZFeTcusFWRv0YnG9CfspjuCqFPHAxxIdfn1IoqKX1tYz7yIWclqzp_ZSNd1GOZdptnGBeRJKWeO4FrT-6zHk"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">Specialized Tech Solutions</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision engineering across every layer of your digital presence.</p>
          </div>
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp Automation */}
              <div className="bg-white p-8 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-all border-t-4 border-t-primary flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">campaign</span>
                  <h4 className="font-headline-md text-headline-md mb-2">WhatsApp Automation</h4>
                  <p className="text-on-surface-variant mb-6">Convert leads instantly on the world's most popular messaging app.</p>
                  <ul className="text-sm space-y-2 text-on-surface-variant mb-8">
                    <li>• Automated Appointment Booking</li>
                    <li>• Transactional Notifications</li>
                    <li>• AI-powered Chat Support</li>
                  </ul>
                </div>
                <button className="text-primary font-bold text-sm hover:underline w-fit">View Demo →</button>
              </div>

              {/* Custom Software */}
              <div className="bg-white p-8 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-all border-t-4 border-t-secondary flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-4 text-3xl">code_blocks</span>
                  <h4 className="font-headline-md text-headline-md mb-2">Custom Software</h4>
                  <p className="text-on-surface-variant mb-6">Bespoke platforms built with scalability and security at the core.</p>
                  <ul className="text-sm space-y-2 text-on-surface-variant mb-8">
                    <li>• Cloud-Native Architectures</li>
                    <li>• Legacy Migration</li>
                    <li>• High-Performance APIs</li>
                  </ul>
                </div>
                <button className="text-primary font-bold text-sm hover:underline w-fit">Case Studies →</button>
              </div>

              {/* CRM Automation */}
              <div className="bg-white p-8 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-all border-t-4 border-t-primary flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">groups</span>
                  <h4 className="font-headline-md text-headline-md mb-2">CRM Automation</h4>
                  <p className="text-on-surface-variant mb-6">Eliminate data silos between HubSpot, Salesforce, or custom CRMs.</p>
                  <ul className="text-sm space-y-2 text-on-surface-variant mb-8">
                    <li>• Bi-directional Syncing</li>
                    <li>• Predictive Lead Scoring</li>
                    <li>• Automated Sales Pipelines</li>
                  </ul>
                </div>
                <button className="text-primary font-bold text-sm hover:underline w-fit">Optimize CRM →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-primary p-8 md:p-16 rounded-3xl relative overflow-hidden text-center text-on-primary">
              <div className="orbital-path w-[800px] h-[800px] -bottom-[400px] -left-[400px] border-white/10 absolute rounded-full border pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display-lg text-4xl md:text-5xl text-on-primary mb-6">Ready to automate your excellence?</h2>
                <p className="text-on-primary/80 mb-10 text-lg">Join forward-thinking enterprises leveraging Jovian Technologies to reclaim their time and scale without friction.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold text-lg hover:shadow-gold transition-shadow">
                    Schedule Discovery Call
                  </button>
                  <button className="bg-transparent border border-on-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                    Download Service Pack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-high border-t border-outline-variant/50 full-width">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface tracking-tight mb-4 block">
              Jovian Technologies
            </span>
            <p className="text-on-surface-variant font-body-md text-body-md">Precision AI and automation consulting for the modern enterprise.</p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Services</h5>
            <ul className="space-y-4 font-body-md text-body-md">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Automation Strategy</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Machine Learning</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Cloud Infrastructure</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Stack</h5>
            <ul className="space-y-4 font-body-md text-body-md">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">PyTorch</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">TensorFlow</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Kubernetes</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 font-body-md text-body-md">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Contact Support</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
            </ul>
            <p className="mt-8 text-on-surface-variant text-sm">© 2024 Jovian Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
