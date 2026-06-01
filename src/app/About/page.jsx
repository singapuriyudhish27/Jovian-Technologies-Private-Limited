"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const orbits = document.querySelectorAll(".orbital-path");
      orbits.forEach((orbit, index) => {
        const speed = 0.05 * (index + 1);
        const rotate = scrolled * speed;
        // Keep original translates but rotate dynamically
        const baseTranslate = index % 2 === 0 ? "translate(50%, -50%)" : "translate(-25%, 25%)";
        if (orbit instanceof HTMLElement) {
          orbit.style.transform = `${baseTranslate} rotate(${rotate}deg)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/10">
      {/* TopNavBar */}
      <nav className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 dark:border-outline/20 shadow-sm dark:shadow-none transition-all duration-300 ease-in-out">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-black tracking-tighter hover:text-primary transition-colors">
            Jovian Technologies
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/Services"
            >
              Services
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/Casestudy"
            >
              Case Studies
            </Link>
            <a
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="#"
            >
              Solutions
            </a>
            <Link
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-all duration-300 hover:translate-x-1"
              href="/Techstack"
            >
              Tech Stack
            </Link>
            <Link
              className="font-body-md text-body-md text-blue-800 dark:text-blue-500 font-semibold border-b-2 border-blue-800 dark:border-blue-500 hover:translate-x-1 transition-all duration-300"
              href="/About"
            >
              Insights
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/Contact">
              <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-label-sm text-label-sm hover:brightness-110 transition-all duration-300 cursor-pointer">
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
                className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-2"
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
                className="font-body-md text-body-md text-blue-800 dark:text-blue-500 font-semibold border-l-2 border-blue-800 dark:border-blue-500 pl-2 py-2"
                href="/About"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile md:pb-section-padding-desktop bg-surface-container-lowest">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] orbital-path translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orbital-path -translate-x-1/4 translate-y-1/4 opacity-20 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-6 block">
                Our Identity
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-8">
                Engineering Clarity in an Era of Complexity.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Jovian Technologies is built with a practical belief: businesses do not need AI for hype. They need systems that save time, reduce manual work, and improve execution.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section (Bento Inspired) */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-5 relative group overflow-hidden rounded-xl bg-white soft-celestial-shadow min-h-[400px] md:min-h-[500px]">
                <Image
                  alt="YUDHISH SINGAPURI"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHwBDlo7Mj-qN4-kcK0YXd_Ij9lvt-fRhkE_xPQhp2GJP63-2zCZsrZsZ1VlecOI-goid3yVIN7o4Rb-CMLmwQzur26Rbhy6VSPI-spP3ioURajvi-kEcFbfAzGNEXHfAerhok1qNCs7rlK4k2Y9RVYdm386TJtThqDteakm0dE6zylSoMJ1hRfwtNuVPQjvA01gQqBLm8ejd80SQYc3j-g79uQSB1rebMVhRf9iDikxXkihAttM7HhGE2wXx3LjZCVVntgR0Iuj8"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-headline-md text-white">YUDHISH SINGAPURI</h3>
                  <p className="text-white/80 font-label-sm tracking-wider">FOUNDER, JOVIAN TECHNOLOGIES</p>
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center gap-12 p-8 md:p-12 bg-white rounded-xl border border-outline-variant/30 soft-celestial-shadow relative">
                <div className="absolute top-8 right-8 text-primary/10 select-none">
                  <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    format_quote
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-lg text-on-surface mb-6">Founder's Philosophy</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 italic leading-relaxed">
                    "We are moving past the 'magical' phase of AI. My goal for Jovian is to ground this technology in operational reality. We build tools that don't just 'think' but 'do'—integrating seamlessly into the workflows that keep your business alive."
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-1 border-t-2 border-secondary self-center"></div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">THE VISION FOR JOVIAN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Approach (Asymmetric Grid) */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Vision */}
              <div className="flex flex-col gap-6 p-8 border-l border-outline-variant/30 hover:border-primary transition-colors duration-500">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Vision</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  To be the premier architect of autonomous business environments where human creativity is liberated from repetitive manual data processing.
                </p>
              </div>
              {/* Mission */}
              <div className="flex flex-col gap-6 p-8 border-l border-outline-variant/30 hover:border-primary transition-colors duration-500 md:mt-12">
                <div className="bg-secondary/5 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl">rocket_launch</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Mission</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Deploying production-ready AI solutions that prioritize security, scalability, and measurable ROI for industry leaders and emerging ventures.
                </p>
              </div>
              {/* Approach */}
              <div className="flex flex-col gap-6 p-8 border-l border-outline-variant/30 hover:border-primary transition-colors duration-500">
                <div className="bg-tertiary/5 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-3xl">settings_account_box</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Approach</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our implementation starts with the outcome. We reverse-engineer your bottlenecks to build tailored agents that act as a force multiplier for your existing talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Cards: The Studio Culture */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-16">
            <span className="font-label-sm text-label-sm text-primary uppercase mb-4 block">The Studio</span>
            <h2 className="font-headline-lg text-on-surface">Where Precision Meets Innovation</h2>
          </div>
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-12 rounded-xl border border-outline-variant/30 soft-celestial-shadow flex items-start gap-8 group">
              <div className="w-1 bg-secondary h-full group-hover:h-12 transition-all duration-500"></div>
              <div>
                <h5 className="font-headline-md text-on-surface mb-4">Founder-Led Agility</h5>
                <p className="font-body-md text-on-surface-variant">
                  Unlike traditional agencies, we operate as a nimble studio. Every project is overseen by our founder, ensuring that high-level strategy isn't lost in translation through layers of management.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl border border-outline-variant/30 soft-celestial-shadow flex items-start gap-8 group">
              <div className="w-1 bg-primary h-full group-hover:h-12 transition-all duration-500"></div>
              <div>
                <h5 className="font-headline-md text-on-surface mb-4">Pragmatic Tech Stack</h5>
                <p className="font-body-md text-on-surface-variant">
                  We don't chase the newest libraries unless they solve the problem. Our tech stack is built for durability, using PyTorch and Cloud Infrastructure that enterprise IT can actually support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-primary p-8 md:p-16 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-[800px] h-[800px] orbital-path border-white -top-1/2 -left-1/4"></div>
                <div className="absolute w-[600px] h-[600px] orbital-path border-white -bottom-1/2 -right-1/4"></div>
              </div>
              <h2 className="font-display-lg text-headline-lg text-white mb-8 relative z-10 max-w-2xl">
                Ready to automate your execution?
              </h2>
              <p className="font-body-lg text-white/80 mb-12 relative z-10 max-w-xl">
                Let's discuss how Jovian Technologies can implement practical AI for your business operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-label-sm text-label-sm hover:brightness-105 transition-all">
                  Book a Consultation
                </button>
                <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-label-sm text-label-sm hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-high border-t border-outline-variant/50 transition-opacity duration-500">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-headline-md text-headline-md font-bold text-black tracking-tight mb-4 block">
              Jovian Technologies
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Practical AI for modern business execution. Established 2024.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Capabilities</span>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Automation Strategy
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Machine Learning
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Cloud Infrastructure
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Ecosystem</span>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              PyTorch
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              TensorFlow
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Kubernetes
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Connect</span>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Contact Support
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">
              Privacy Policy
            </a>
            <div className="flex gap-4 mt-4">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">hub</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">terminal</span>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-outline-variant/30 text-center">
          <p className="font-body-md text-label-sm text-on-surface-variant opacity-60">
            © 2024 Jovian Technologies. All rights reserved. Built for precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
