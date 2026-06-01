"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
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
            <button className="bg-primary text-on-primary px-6 py-3 font-label-sm text-label-sm rounded uppercase tracking-wider hover:bg-primary-container transition-all cursor-pointer">
              Start a Project
            </button>
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

      <main>
        {/* Hero Section */}
        <section className="relative py-section-padding-mobile md:py-section-padding-desktop overflow-hidden">
          {/* Atmospheric Orbital Background Decor */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] orbital-path opacity-20 pointer-events-none rounded-full border border-outline/15"></div>
          <div className="absolute top-1/4 -left-12 w-[300px] h-[300px] orbital-path opacity-10 pointer-events-none rounded-full border border-outline/15"></div>
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-primary mb-4 block tracking-widest uppercase">Contact Strategic Partners</span>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-8">
                Tell us what you want to build or <span className="text-primary">automate.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Transition from manual operations to intelligent automation. Our experts are ready to architect your next-generation AI infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content (Asymmetric Layout) */}
        <section className="pb-section-padding-mobile md:pb-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Premium Contact Form (7/12 width) */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-10 border border-outline-variant/30 soft-celestial-shadow relative group">
                {/* Premium Gold Corner Decor */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-secondary-container opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group focus-within:text-primary">
                      <label className="font-label-sm text-label-sm text-outline uppercase transition-colors">Full Name</label>
                      <input className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary h-14 px-4 transition-all outline-none" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2 group focus-within:text-primary">
                      <label className="font-label-sm text-label-sm text-outline uppercase transition-colors">Corporate Email</label>
                      <input className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary h-14 px-4 transition-all outline-none" placeholder="john@company.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2 group focus-within:text-primary">
                    <label className="font-label-sm text-label-sm text-outline uppercase transition-colors">Company Name</label>
                    <input className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary h-14 px-4 transition-all outline-none" placeholder="Global Enterprises Inc." type="text" />
                  </div>
                  <div className="space-y-2 group focus-within:text-primary">
                    <label className="font-label-sm text-label-sm text-outline uppercase transition-colors">Project Description</label>
                    <textarea className="w-full bg-surface-container-low border-0 focus:ring-1 focus:ring-primary p-4 transition-all outline-none resize-none" placeholder="Describe your automation challenges or AI goals..." rows="5"></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                    <button className="bg-primary text-on-primary px-10 py-5 font-label-sm text-label-sm rounded shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-3 uppercase tracking-wider" type="submit">
                      Submit Inquiry
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <span className="text-outline font-label-sm text-[11px] max-w-[200px] leading-tight">By submitting, you agree to our data handling policy.</span>
                  </div>
                </form>
              </div>

              {/* Contact Info & Sidebar (5/12 width) */}
              <div className="lg:col-span-5 space-y-12 lg:pl-12">
                {/* Contact Detail Blocks */}
                <div className="space-y-10">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-6">Direct Channels</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full group-hover:bg-primary/10 transition-colors">
                          <span className="material-symbols-outlined text-primary">mail</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-outline uppercase mb-1">Email Our Strategy Team</p>
                          <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors" href="mailto:singapuriyudhish27@gmail.com">singapuriyudhish27@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full group-hover:bg-primary/10 transition-colors">
                          <span className="material-symbols-outlined text-primary">chat_bubble</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-outline uppercase mb-1">WhatsApp Instant Support</p>
                          <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors" href="https://wa.me/918734058744">+91 8734058744</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-outline-variant/30">
                    <h3 className="font-headline-md text-headline-md mb-6">Global Presence</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <p className="font-label-sm text-label-sm text-primary uppercase mb-2">Singapore Office</p>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Marina Bay Financial Centre<br />
                          Level 32, Tower 1<br />
                          Singapore 018981
                        </p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-primary uppercase mb-2">Bangalore R&amp;D</p>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Jovian Tech Park<br />
                          Whitefield Main Road<br />
                          KA 560066, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagery Feature with Orbital Motif */}
                <div className="relative pt-12">
                  <div className="aspect-square bg-surface-container-low rounded-full overflow-hidden relative border border-outline-variant/30 max-w-[350px] mx-auto lg:max-w-none">
                    <Image
                      alt="Futuristic Office interior"
                      className="object-cover mix-blend-multiply opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS0ts24ThvS5O3tVMlCGI-mhEx0dxG_MbKT8aizZRxDKnqLMjb2-G0tJNcQY5MEFYrExx6LAZ2VC4WmQvRhHxCXjYPf13NMVYYhfYkS8zId1XPwqJbHY6k2IBm7QBNTuc1gS65srWM9dvqTryOorVKN808AC1FARZa9VuT5aAT65ic3PfQD0WXOjWNhvrNjp3qD7GgsMCxLUOvCJxgnhsTnoOTpAN0HK7BfSPuEFEiC3EWhJZf9WO9VygHg_vO2GKbNVq2kOugqJQ"
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
                    {/* Orbitals */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-4/5 h-4/5 orbital-path border-dashed opacity-30 absolute rounded-full border animate-[spin_15s_linear_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Footer CTA */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface">Stay connected with our evolution.</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Follow Jovian for deep dives into AI and infrastructure.</p>
            </div>
            <div className="flex gap-4">
              <a className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/50 hover:border-primary transition-colors soft-celestial-shadow" href="#">
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
              <a className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/50 hover:border-primary transition-colors soft-celestial-shadow" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/50 hover:border-primary transition-colors soft-celestial-shadow" href="#">
                <span className="material-symbols-outlined text-[20px]">podcasts</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-headline-md text-headline-md font-bold text-on-surface mb-4 block tracking-tight">Jovian Technologies</span>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Architecting the autonomous future with precision and celestial clarity.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-label-sm text-label-sm text-primary uppercase">Core Services</h5>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Automation Strategy</a></li>
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Machine Learning</a></li>
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Cloud Infrastructure</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-label-sm text-label-sm text-primary uppercase">Tech Stack</h5>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">PyTorch</a></li>
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">TensorFlow</a></li>
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Kubernetes</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-label-sm text-label-sm text-primary uppercase">Support</h5>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Contact Support</a></li>
              <li><a className="hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant/20 py-8">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-body-md text-body-md text-on-surface-variant/70">© 2024 Jovian Technologies. All rights reserved.</p>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">Network Status: Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
