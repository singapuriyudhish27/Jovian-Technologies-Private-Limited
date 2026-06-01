"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStackPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Atmosphere effects - continuous subtle orbital rotation for background orbits
    const orbits = document.querySelectorAll(".orbital-path-bg");
    let angle = 0;
    let animationFrameId;

    const animate = () => {
      angle += 0.03;
      orbits.forEach((orbit, i) => {
        if (orbit instanceof HTMLElement) {
          orbit.style.transform = `rotate(${angle * (i + 1) * 0.15}deg)`;
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
    <div className="min-h-screen bg-background text-on-surface font-body-md selection:bg-primary/20 selection:text-primary">
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
              className="font-body-md text-body-md text-primary font-semibold border-b-2 border-primary hover:translate-x-1 transition-all duration-300"
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
              <button className="bg-primary-container text-on-primary py-3 px-6 font-label-sm text-label-sm uppercase tracking-widest rounded-lg hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
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
          <div className="md:hidden border-t border-outline-variant/30 bg-surface transition-all duration-300">
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
                className="font-body-md text-body-md text-primary font-semibold border-l-2 border-primary pl-2 py-2"
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

      <main className="relative overflow-hidden">
        {/* Celestial Decorative Background */}
        <div className="absolute inset-0 overflow-hidden -z-10 opacity-40">
          <div className="orbital-path-bg orbit-path w-[800px] h-[800px] -top-96 -left-96 absolute pointer-events-none"></div>
          <div className="orbital-path-bg orbit-path w-[1200px] h-[1200px] -top-[600px] -right-[400px] absolute pointer-events-none"></div>
        </div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-8 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50 shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ecosystem Mastery</span>
          </div>
          <h1 className="font-display-lg text-display-lg mb-8 max-w-4xl tracking-tight leading-tight">
            The Core Engine Behind <span className="text-primary">Intelligent Automation.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            We leverage a curated selection of industry-leading technologies to architect scalable, secure, and AI-driven solutions tailored for enterprise resilience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-default">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-body-md text-body-md font-medium">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-default">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-body-md text-body-md font-medium">API First Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-default">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-body-md text-body-md font-medium">Cloud Native</span>
            </div>
          </div>
        </section>

        {/* Tech Categories Bento Grid */}
        <section className="max-w-container-max mx-auto px-gutter pb-section-padding-mobile md:pb-section-padding-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* AI & Machine Learning - Featured Large Card */}
            <div className="md:col-span-8 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)] flex flex-col justify-between min-h-[380px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="flex items-start justify-between mb-12 relative z-10">
                <div>
                  <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-primary/20">
                    <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                      psychology
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md mb-2">AI &amp; Machine Learning</h2>
                  <p className="text-on-surface-variant max-w-md">Orchestrating cognitive capabilities into business workflows for predictive excellence.</p>
                </div>
                <div className="hidden lg:block relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full shadow-sm"></div>
                  </div>
                  <div className="absolute inset-4 border border-outline-variant/30 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-300 shadow-sm border border-outline-variant/10">
                  <span className="font-label-sm text-label-sm text-primary uppercase">OpenAI</span>
                  <span className="font-body-md text-body-md font-semibold">GPT-4 Mastery</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-300 shadow-sm border border-outline-variant/10">
                  <span className="font-label-sm text-label-sm text-primary uppercase">Agents</span>
                  <span className="font-body-md text-body-md font-semibold">Auto-GPT / CrewAI</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-300 shadow-sm border border-outline-variant/10">
                  <span className="font-label-sm text-label-sm text-primary uppercase">RAG</span>
                  <span className="font-body-md text-body-md font-semibold">Vector Search</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-300 shadow-sm border border-outline-variant/10">
                  <span className="font-label-sm text-label-sm text-primary uppercase">LangChain</span>
                  <span className="font-body-md text-body-md font-semibold">LLM Pipelines</span>
                </div>
              </div>
            </div>

            {/* Backend Infrastructure */}
            <div className="md:col-span-4 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)] flex flex-col justify-between">
              <div>
                <div className="bg-secondary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                    dns
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md mb-4">Core Backend</h2>
                <p className="text-on-surface-variant mb-8">Robust architectures built for high-throughput and atomic consistency.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-3 hover:text-primary transition-colors cursor-pointer group/item">
                  <span className="font-body-md text-body-md font-medium">Node.js / Express</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40 transition-transform duration-300 group-hover/item:translate-x-1">
                    arrow_forward
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-3 hover:text-primary transition-colors cursor-pointer group/item">
                  <span className="font-body-md text-body-md font-medium">FastAPI (Python)</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40 transition-transform duration-300 group-hover/item:translate-x-1">
                    arrow_forward
                  </span>
                </li>
                <li className="flex items-center justify-between hover:text-primary transition-colors cursor-pointer group/item">
                  <span className="font-body-md text-body-md font-medium">Go-Microservices</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40 transition-transform duration-300 group-hover/item:translate-x-1">
                    arrow_forward
                  </span>
                </li>
              </ul>
            </div>

            {/* Frontend Experience */}
            <div className="md:col-span-4 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                    web
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md mb-4">Frontend</h2>
                <p className="text-on-surface-variant mb-8">Crafting pixel-perfect, accessible, and high-performance user interfaces.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low text-on-surface rounded-full text-sm font-medium border border-outline-variant/30 hover:bg-surface-container-high transition-colors cursor-default">Next.js 14</span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface rounded-full text-sm font-medium border border-outline-variant/30 hover:bg-surface-container-high transition-colors cursor-default">React</span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface rounded-full text-sm font-medium border border-outline-variant/30 hover:bg-surface-container-high transition-colors cursor-default">Tailwind CSS</span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface rounded-full text-sm font-medium border border-outline-variant/30 hover:bg-surface-container-high transition-colors cursor-default">TypeScript</span>
              </div>
            </div>

            {/* Automation & Workflows */}
            <div className="md:col-span-8 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)]">
              <div className="flex flex-col md:flex-row gap-12 items-start h-full">
                <div className="flex-1">
                  <div className="bg-tertiary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-tertiary/20">
                    <span className="material-symbols-outlined text-tertiary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                      automation
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md mb-4">Automation Ecosystem</h2>
                  <p className="text-on-surface-variant mb-6">Eliminating manual overhead through seamless API integrations and event-driven triggers.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors group-hover/item:border-primary duration-300">
                        <span className="material-symbols-outlined text-primary">hub</span>
                      </div>
                      <span className="font-body-md font-medium text-on-surface group-hover/item:text-primary transition-colors duration-300">n8n Workflow Hub</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors group-hover/item:border-primary duration-300">
                        <span className="material-symbols-outlined text-primary">chat</span>
                      </div>
                      <span className="font-body-md font-medium text-on-surface group-hover/item:text-primary transition-colors duration-300">WhatsApp API</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors group-hover/item:border-primary duration-300">
                        <span className="material-symbols-outlined text-primary">contact_page</span>
                      </div>
                      <span className="font-body-md font-medium text-on-surface group-hover/item:text-primary transition-colors duration-300">CRM Synchronization</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors group-hover/item:border-primary duration-300">
                        <span className="material-symbols-outlined text-primary">mail</span>
                      </div>
                      <span className="font-body-md font-medium text-on-surface group-hover/item:text-primary transition-colors duration-300">Email Automation</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-64 flex-shrink-0">
                  <div className="bg-surface-container-low rounded-lg p-6 border border-primary/20 relative overflow-hidden group/sidebar min-h-[220px] flex flex-col justify-between hover:border-primary/40 transition-colors duration-300 shadow-sm">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary mb-2 block tracking-wider">CORE VALUE</span>
                      <p className="font-body-md text-body-md font-semibold leading-tight text-on-surface">
                        Reducing 40+ hours of manual labor per week via custom n8n nodes.
                      </p>
                    </div>
                    <div className="mt-4 relative h-24 w-full overflow-hidden rounded-md border border-outline-variant/30 shadow-inner bg-surface">
                      <Image
                        alt="Automation Dashboard"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHDTvQigB3lTCBdp8pZF29xB4HiduR1D1DnQdnI2yZFW5CLzVopr5wdiO7It613xG2sD7XgeNGDEUOlNLMnChd0Ea_r8ENDrBOOipz8Ma6uOGlNTaidM1YlmaGzykqdpHjuOUiwJNkYsWjBEee13ZXciK-oXBKiuW-DDhEnaMMjkCM_f_B-HL1lfeZFeTcusFWRv0YnG9CfspjuCqFPHAxxIdfn1IoqKX1tYz7yIWclqzp_ZSNd1GOZdptnGBeRJKWeO4FrT-6zHk"
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover transition-transform duration-700 group-hover/sidebar:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases & Vector Storage */}
            <div className="md:col-span-6 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="bg-secondary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                    storage
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md mb-4">Data Persistence</h2>
                <p className="text-on-surface-variant mb-8">From relational integrity to high-dimensional semantic search.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-outline-variant/30 hover:border-primary/50 hover:bg-surface transition-all duration-300 p-4 rounded-lg flex items-center gap-4 cursor-default group/db">
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/db:text-primary">database</span>
                  <span className="font-body-md font-medium transition-colors group-hover/db:text-primary">PostgreSQL</span>
                </div>
                <div className="border border-outline-variant/30 hover:border-primary/50 hover:bg-surface transition-all duration-300 p-4 rounded-lg flex items-center gap-4 cursor-default group/db">
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/db:text-primary">schema</span>
                  <span className="font-body-md font-medium transition-colors group-hover/db:text-primary">MongoDB</span>
                </div>
                <div className="border border-outline-variant/30 hover:border-primary/50 hover:bg-surface transition-all duration-300 p-4 rounded-lg flex items-center gap-4 cursor-default group/db">
                  <span className="material-symbols-outlined text-secondary transition-colors group-hover/db:text-primary">travel_explore</span>
                  <span className="font-body-md font-medium transition-colors group-hover/db:text-primary">Pinecone</span>
                </div>
                <div className="border border-outline-variant/30 hover:border-primary/50 hover:bg-surface transition-all duration-300 p-4 rounded-lg flex items-center gap-4 cursor-default group/db">
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/db:text-primary">table_rows</span>
                  <span className="font-body-md font-medium transition-colors group-hover/db:text-primary">MySQL</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps Tools */}
            <div className="md:col-span-6 group tech-card bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-celestial-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_15px_40px_rgba(0,80,203,0.08)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-6 transition-all duration-300 group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.15] group-hover:rotate-[5deg]">
                    cloud
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md mb-4">Cloud &amp; DevOps</h2>
                <p className="text-on-surface-variant mb-8">Scalable infrastructure that evolves with your traffic demands.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-surface rounded-lg px-4 py-2 border border-outline-variant/50 hover:border-primary/50 hover:bg-white transition-all duration-300 cursor-default group/cloud">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-body-md font-medium group-hover/cloud:text-primary transition-colors">AWS</span>
                </div>
                <div className="flex items-center gap-3 bg-surface rounded-lg px-4 py-2 border border-outline-variant/50 hover:border-primary/50 hover:bg-white transition-all duration-300 cursor-default group/cloud">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-body-md font-medium group-hover/cloud:text-primary transition-colors">Vercel</span>
                </div>
                <div className="flex items-center gap-3 bg-surface rounded-lg px-4 py-2 border border-outline-variant/50 hover:border-primary/50 hover:bg-white transition-all duration-300 cursor-default group/cloud">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-body-md font-medium group-hover/cloud:text-primary transition-colors">Firebase</span>
                </div>
                <div className="flex items-center gap-3 bg-surface rounded-lg px-4 py-2 border border-outline-variant/50 hover:border-primary/50 hover:bg-white transition-all duration-300 cursor-default group/cloud">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-body-md font-medium group-hover/cloud:text-primary transition-colors">Docker</span>
                </div>
                <div className="flex items-center gap-3 bg-surface rounded-lg px-4 py-2 border border-outline-variant/50 hover:border-primary/50 hover:bg-white transition-all duration-300 cursor-default group/cloud">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-body-md font-medium group-hover/cloud:text-primary transition-colors">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Standards Banner */}
        <section className="bg-primary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white,transparent,transparent)]"></div>
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-xl">
              <h3 className="font-headline-lg text-headline-lg mb-6 animate-pulse">Built for Reliability. Scaled for Success.</h3>
              <p className="font-body-lg opacity-80 leading-relaxed">
                Our technology choices aren't just about the latest trends; they're about long-term stability and ensuring your business stays ahead of the curve.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary-container mb-2 tracking-tight">99.9%</div>
                <div className="font-label-sm text-white uppercase tracking-widest">Uptime Target</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary-container mb-2 tracking-tight">SOC2</div>
                <div className="font-label-sm text-white uppercase tracking-widest">Compliant Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA / Contact Section */}
        <section className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
          <div className="bg-surface-container-high rounded-xl p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/50 shadow-md">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">Ready to deploy your next innovation?</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                Consult with our lead architects to determine the optimal stack for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/Contact" className="w-full sm:w-auto">
                  <button className="bg-primary text-on-primary py-4 px-10 rounded-lg font-semibold hover:bg-primary-container transition-all shadow-md hover:shadow-lg active:scale-95 duration-200 cursor-pointer w-full">
                    Schedule Tech Audit
                  </button>
                </Link>
                <button className="bg-white text-on-surface border border-outline-variant py-4 px-10 rounded-lg font-semibold hover:bg-surface-container-low transition-all shadow-sm hover:shadow active:scale-95 duration-200 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                  <span>Download Capability Deck</span>
                  <span className="material-symbols-outlined text-xl">download</span>
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mb-4 block hover:text-primary transition-colors">
              Jovian Technologies
            </Link>
            <p className="text-on-surface-variant text-body-md mb-8 leading-relaxed">
              Celestial Corporate: Engineering the future of enterprise automation with precision and vision.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" href="#" aria-label="Share">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" href="#" aria-label="Hub">
                <span className="material-symbols-outlined text-sm">hub</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-label-sm text-label-sm text-on-surface uppercase mb-6 tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Services">
                  Automation Strategy
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Services">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Services">
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-label-sm text-label-sm text-on-surface uppercase mb-6 tracking-widest">Technologies</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Techstack">
                  PyTorch
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Techstack">
                  TensorFlow
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Techstack">
                  Kubernetes
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-label-sm text-label-sm text-on-surface uppercase mb-6 tracking-widest">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/Contact">
                  Contact Support
                </Link>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-outline-variant/20 text-center md:text-left">
          <p className="text-on-surface-variant text-label-sm">© 2024 Jovian Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
