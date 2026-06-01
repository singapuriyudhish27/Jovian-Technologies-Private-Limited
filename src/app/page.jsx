"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Atmosphere effects - continuous subtle orbital rotation
    const orbits = document.querySelectorAll(".orbital-path");
    let angle = 0;
    let animationFrameId;

    const animate = () => {
      angle += 0.05;
      orbits.forEach((orbit, i) => {
        if (orbit instanceof HTMLElement) {
          orbit.style.transform = `rotate(${angle * (i + 1) * 0.2}deg)`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/10 overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
            Jovian Technologies
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-300 hover:translate-x-1"
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
              <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-label-sm text-label-sm hover:brightness-110 transition-all duration-300 cursor-pointer">
                Start a Project
              </button>
            </Link>
            {/* Mobile Hamburger Menu */}
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
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
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

      <main className="celestial-glow">
        {/* Hero Section */}
        <section className="relative pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile md:pb-section-padding-desktop overflow-hidden">
          <div className="orbital-path w-[800px] h-[800px] -top-1/4 -right-1/4 absolute rounded-full border border-outline-variant/10 pointer-events-none"></div>
          <div className="orbital-path w-[1200px] h-[1200px] -top-1/2 -right-1/3 absolute rounded-full border border-outline-variant/10 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-gutter grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-label-sm text-label-sm mb-6">
                AI-DRIVEN AUTOMATION
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-8">
                AI, Automation &amp; Software Solutions for Modern Businesses
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Jovian Technologies builds AI agents, RAG systems, workflow automations, web apps, mobile apps, and custom software that help businesses work faster with smarter operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-sm font-label-sm text-label-sm hover:brightness-110 transition-all uppercase tracking-widest">
                  Start a Project
                </button>
                <button className="border border-outline-variant bg-transparent text-on-surface px-8 py-4 rounded-sm font-label-sm text-label-sm hover:border-primary transition-all uppercase tracking-widest">
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden soft-celestial-shadow min-h-[300px] md:min-h-[400px]">
                <Image
                  alt="AI Command Center Illustration"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBagH5kLtPgmm4aOwZChZM0DwoNOWdaIJcd9a93cQldlczD2qzN5UNvdD2Vy5qYYwIdig2fjcEnC8ew-wpp2IwdfSJGWO95neeyTyYvH68ZQ3KxbCCF167S7vtaYNrlLP0D9i1_KgXUnZ7oyq0fdADprCxmjthjDBKTb3xkeHIfxPqU2Yqc_TpuTslVqIF5y1hCyYnzcLifbQ9SKBAcBhzvwH4DsQC760srbP0_cq6GiOz-5nJrm_sPQjbpjZKXOqsrOiI10fP38ao"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Blocks (Metrics) */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-1">200+</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">AI Systems</p>
              </div>
              <div className="text-center">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-1">5k+</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Workflow Automation</p>
              </div>
              <div className="text-center">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-1">150+</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Custom Software</p>
              </div>
              <div className="text-center">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-1">300+</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Web &amp; Mobile Apps</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">THE CHALLENGE</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Efficiency isn't just a goal; it's a competitive necessity.</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mb-2">
                We bridge the gap between complex manual workflows and intelligent, autonomous execution.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 bg-surface border-l-4 border-primary soft-celestial-shadow rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">automation</span>
                <h4 className="font-headline-md text-headline-md mb-4">Manual Burnout</h4>
                <p className="font-body-md text-on-surface-variant">Stop wasting human talent on repetitive tasks. We automate the mundane so your team can focus on creative strategy.</p>
              </div>
              <div className="p-10 bg-surface border-l-4 border-primary soft-celestial-shadow rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">database</span>
                <h4 className="font-headline-md text-headline-md mb-4">Fragmented Data</h4>
                <p className="font-body-md text-on-surface-variant">Centralize your institutional knowledge with RAG systems that turn scattered documents into an intelligent oracle.</p>
              </div>
              <div className="p-10 bg-surface border-l-4 border-primary soft-celestial-shadow rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">speed</span>
                <h4 className="font-headline-md text-headline-md mb-4">Lagging Operations</h4>
                <p className="font-body-md text-on-surface-variant">Modern businesses require instant response times. Our AI agents handle inquiries and lead qualifying in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Preview Bento Grid */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Our Core Expertise</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-12 gap-6 h-auto md:min-h-[600px] items-stretch">
              <div className="md:col-span-8 bg-surface border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden group hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                    <h3 className="font-headline-md text-headline-md mb-4">AI Agents &amp; RAG Systems</h3>
                    <p className="font-body-md text-on-surface-variant max-w-md">Deploy custom-trained LLMs integrated with your proprietary data. We build assistants that don't just chat—they act.</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    <li className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Knowledge Retrieval
                    </li>
                    <li className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Autonomous Decisioning
                    </li>
                    <li className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Multi-Model Integration
                    </li>
                    <li className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Data Privacy &amp; Security
                    </li>
                  </ul>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
              </div>
              <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-on-primary text-3xl mb-4">account_tree</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Workflow Automation</h3>
                  <p className="font-body-md text-on-primary/80">Connecting your stack (Salesforce, Hubspot, Slack) into a seamless, automated ecosystem.</p>
                </div>
                <button className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest mt-8 border-b border-on-primary w-fit pb-1 hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="md:col-span-4 bg-surface border border-outline-variant/30 rounded-xl p-8 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">web</span>
                <h3 className="font-headline-md text-headline-md mb-4">Web Dev</h3>
                <p className="font-body-md text-on-surface-variant">High-performance React/Next.js applications that scale with your growth.</p>
              </div>
              <div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 flex flex-col md:flex-row gap-8 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 items-center justify-between">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">devices</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Mobile &amp; Custom Software</h3>
                  <p className="font-body-md text-on-surface-variant">Native and hybrid mobile experiences built for engagement and operational utility.</p>
                </div>
                <div className="md:w-1/2 bg-surface-container-lowest rounded-lg p-6 flex items-center justify-center w-full">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-primary/10 rounded-full"></div>
                    <div className="h-2 w-full bg-primary/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-20">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-4">OUR BLUEPRINT</span>
              <h2 className="font-headline-lg text-headline-lg">How We Build the Future</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-outline-variant/50 -z-0"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center mb-6 soft-celestial-shadow">
                  <span className="font-display-lg text-3xl text-primary">01</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-3">Consult</h4>
                <p className="font-body-md text-on-surface-variant px-4">Deep dive into your operations to find high-impact AI opportunities.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center mb-6 soft-celestial-shadow">
                  <span className="font-display-lg text-3xl text-primary">02</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-3">Design</h4>
                <p className="font-body-md text-on-surface-variant px-4">Architecting custom AI agents and unified data structures.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center mb-6 soft-celestial-shadow">
                  <span className="font-display-lg text-3xl text-primary">03</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-3">Automate</h4>
                <p className="font-body-md text-on-surface-variant px-4">Engineered deployment of smart workflows and RAG systems.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center mb-6 soft-celestial-shadow">
                  <span className="font-display-lg text-3xl text-primary">04</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-3">Scale</h4>
                <p className="font-body-md text-on-surface-variant px-4">Continuous monitoring and optimization for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Proven Impacts</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl">Real solutions delivered for ambitious enterprises looking to lead their industry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                <div className="h-56 relative w-full overflow-hidden">
                  <Image
                    alt="RAG Knowledge Assistant"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMbCkDCNR-EsonNtI_88-CAFszg0HwKzST-O0pHcdT7PsCsC_DckTqhrFxWnOeW5EYe1LIC9KgoSy61DB_gMZXSGc0v0zjCpRwDLLr8CTlSohNctx8JqZisGyRJ8O53SkDyBTrNkKfk0ZF7QJnHZynHojkUbK8Ok59ggC-M7xjeqroMJkJWQSYcp5rFzxfuLIDrAS0hnKAQdjQ5TcOHOTBSByJM1bkXYDlvQDOFcDBCYRYo3wNFSEsgNJ6BTrFGhVKLF2m5elK738"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">AI &amp; KNOWLEDGE</span>
                    <h3 className="font-headline-md text-headline-md mb-4">RAG Knowledge Assistant</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">Reduced internal query response time by 85% for a global logistics firm using an intelligent data oracle.</p>
                  </div>
                  <a className="font-label-sm text-label-sm text-primary uppercase border-b-2 border-primary pb-1 w-fit" href="#">
                    Read Case Study
                  </a>
                </div>
              </div>
              {/* Case Study 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                <div className="h-56 relative w-full overflow-hidden">
                  <Image
                    alt="WhatsApp Lead Automation"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALsMI9l7YUhy0L5ddFxcD1-qKdZnQYGaKcBojcs11ZMiMVphVnCHKM1LHrQ9_UcjOeGRQVWkQuKnfm2b9MDHP1tk_dxFATjL90Y9eI4LU3S_RTo1iBbLZP0rJjNsZS5keB-UZwMVrLoHfTLLgkq367CRfh8_qfnCLRmW8b0HhMha2APlPifGbEBR5rvD4gQ8gfeXjQdR_P628z3qb8bBkko9_gVLKFRT4K__vXk8efpGo3v7CjgRJ2PJZMg7GcdOeFje6R3D5LI-g"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">OMNICHANNEL</span>
                    <h3 className="font-headline-md text-headline-md mb-4">WhatsApp Lead Automation</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">Autonomous qualifying system that handled 10,000+ leads monthly without human intervention.</p>
                  </div>
                  <a className="font-label-sm text-label-sm text-primary uppercase border-b-2 border-primary pb-1 w-fit" href="#">
                    Read Case Study
                  </a>
                </div>
              </div>
              {/* Case Study 3 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                <div className="h-56 relative w-full overflow-hidden">
                  <Image
                    alt="CRM Workflow"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxW5eCL0Fn7st5jjeJ3wm-KdwdOQW7cNs7L_pvYd30NW7LekoECfF28GzlOnjz_4-I092GLSuW-nbgBSeZ3C2TUNNZqBSv2Uyys8cB52Pij-X79f3GQq_t6wky_effDF488hjLCrwwG_Fuib2AgqCIx9kpnAFNT6jNuNOM5tE0nWdjdby_4y2MSysidNHuIdXT0em4U8iZAadd-u5c9Jd6EuQ6AdTGIQeDIbDPYYNAhMVNQn9Fa1sC945UWUvVzI7oWjz9wEZC6YM"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">OPERATIONS</span>
                    <h3 className="font-headline-md text-headline-md mb-4">CRM Workflow Engine</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">Custom middleware synchronizing Sales and Ops teams, increasing pipeline velocity by 40%.</p>
                  </div>
                  <a className="font-label-sm text-label-sm text-primary uppercase border-b-2 border-primary pb-1 w-fit" href="#">
                    Read Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary overflow-hidden relative">
          <div className="orbital-path w-[1000px] h-[1000px] -bottom-1/2 -left-1/4 opacity-20 border-on-primary absolute rounded-full border pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
            <h2 className="font-display-lg text-display-lg mb-8 max-w-4xl mx-auto">Ready to automate? Let's build the future.</h2>
            <p className="font-body-lg text-on-primary/80 mb-12 max-w-2xl mx-auto">Schedule a strategic consultation to discover how Jovian Technologies can transform your business operations with intelligent systems.</p>
            <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-sm font-label-sm text-label-sm hover:bg-opacity-90 transition-all uppercase tracking-widest shadow-lg">Start a Project Now</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mb-4 block">Jovian Technologies</span>
            <p className="font-body-md text-on-surface-variant mb-6">Pioneering celestial-grade AI and automation for terrestrial enterprises.</p>
            <div className="flex gap-4">
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mb-6">Solutions</h5>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Automation Strategy</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Machine Learning</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Cloud Infrastructure</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mb-6">Tech Stack</h5>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">PyTorch</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">TensorFlow</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Kubernetes</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mb-6">Company</h5>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Contact Support</a></li>
              <li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
              <li className="font-body-md text-on-tertiary-fixed-variant mt-4">© 2024 Jovian Technologies.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
