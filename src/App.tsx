import { useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      num: '01',
      title: 'Design',
      desc: 'UI/UX interface systems, high-fidelity prototypes, brand guidelines, and visual language.',
      img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '02',
      title: 'Coding',
      desc: 'Ultra-fast web applications, resilient backend architectures, and API integrations.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '03',
      title: 'Branding',
      desc: 'Distinctive brand positioning, voice formulation, typography, and cohesive collateral.',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '04',
      title: 'SEO',
      desc: 'Technical optimizations, content strategy, programmatic landing pages, and search dominance.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  const featuredWorks = [
    {
      title: 'Squared',
      url: 'https://sqrdhq.xyz',
      displayUrl: 'sqrdhq.xyz',
      category: 'Web App & Platform',
      image: '/featuured-works/Squared.png'
    },
    {
      title: 'Genpay',
      url: null,
      displayUrl: 'Confidential / Enterprise',
      category: 'Fintech Solution',
      image: '/featuured-works/Genpay.png'
    },
    {
      title: 'Klerly',
      url: 'https://klerly.app',
      displayUrl: 'klerly.app',
      category: 'SaaS & Productivity',
      image: '/featuured-works/klerly.png'
    }
  ];

  const emailSubject = encodeURIComponent("Project Inquiry — ForwardStack");
  const emailBody = encodeURIComponent("Hi ForwardStack Team,\n\nI would like to discuss a project with you.\n\nProject details:\n");
  const mailtoUrl = `mailto:forwardstack@mail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen w-full bg-[#f8f9fd] text-[#0a0618] selection:bg-[#aa3bff]/20 selection:text-[#0a0618] font-sans relative overflow-x-hidden">
      {/* Soft Purple/Violet Ambient Glows for Light Theme */}
      <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[900px] h-[800px] bg-gradient-to-br from-[#c084fc]/20 via-[#f472b6]/15 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[650px] right-0 w-[700px] h-[700px] bg-[#818cf8]/15 blur-[180px] pointer-events-none rounded-full" />

      {/* Main Header / Navigation — full width container */}
      <nav className="w-full px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between relative z-20">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-black tracking-tight text-[#0a0618] group">
          <span className="text-[#9333ea] text-2xl font-black font-mono">+</span>
          <span className="font-black tracking-tight text-2xl sm:text-3xl text-[#0a0618]">
            ForwardStack<span className="text-[#9333ea]">.</span>
          </span>
        </a>

        {/* Streamlined Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-base lg:text-lg font-semibold text-[#0a0618]/70">
          <a href="#home" className="text-[#0a0618] hover:text-[#9333ea] transition">
            Home
          </a>
          <a href="#services" className="hover:text-[#9333ea] transition">
            Services
          </a>
          <a href="#featured-works" className="hover:text-[#9333ea] transition">
            Featured Works
          </a>
          <a href="#contact" className="hover:text-[#9333ea] transition">
            Contact
          </a>
        </div>

        {/* Header Right Action - Email Mailto CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={mailtoUrl}
            className="border-2 border-[#0a0618]/20 hover:border-[#0a0618] text-[#0a0618] text-sm px-7 py-3 rounded-full font-bold transition hover:bg-[#0a0618] hover:text-white cursor-pointer shadow-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#0a0618] p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-black/10 px-6 py-6 flex flex-col gap-5 text-base font-semibold z-30 relative backdrop-blur-md shadow-lg">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#0a0618] py-1">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#0a0618]/70 py-1">Services</a>
          <a href="#featured-works" onClick={() => setMobileMenuOpen(false)} className="text-[#0a0618]/70 py-1">Featured Works</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#0a0618]/70 py-1">Contact</a>
          <a
            href={mailtoUrl}
            className="w-full mt-2 bg-[#9333ea] text-white py-3 rounded-full font-bold text-sm text-center block"
          >
            Get In Touch
          </a>
        </div>
      )}

      {/* Hero Section — full width container */}
      <section id="home" className="w-full px-6 md:px-12 lg:px-16 pt-4 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[560px]">
          
          {/* Left Hero: A LOT BIGGER Spiral Picture Asset + Intersecting "Discuss a Project" Pill */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            <div className="relative w-full max-w-[580px] h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center">
              {/* Extra large Spiral Picture Asset */}
              <img
                src="/spiral-picture-bg.png"
                alt="3D Spiral Digital Art"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_60px_rgba(147,51,234,0.25)] select-none pointer-events-none scale-110 sm:scale-125"
              />

              {/* Intersecting "Discuss a Project" Circle Button directly overlapping the spiral inner loop */}
              <div className="absolute z-20 bottom-8 sm:bottom-16 right-4 sm:right-10 transform translate-x-2 translate-y-2">
                <a
                  href={mailtoUrl}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0a0618] hover:bg-[#9333ea] text-white font-extrabold text-sm sm:text-base tracking-tight flex flex-col items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-center px-3 border-4 border-white group"
                >
                  <span className="group-hover:-translate-y-0.5 transition-transform">Discuss</span>
                  <span className="group-hover:translate-y-0.5 transition-transform">a Project</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero: Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4 space-y-6">
            <h1 className="text-6xl sm:text-8xl lg:text-[104px] font-black tracking-tight leading-[0.98] text-[#0a0618]">
              We Build <br />
              Digital <br />
              <span className="text-[#0a0618]">Solutions</span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-[#0a0618]/70 max-w-2xl leading-relaxed font-medium">
              We specialize in providing related to digital marketing, web development, design, and technology.
            </p>
          </div>
        </div>

        {/* Hero Metadata Sub-bar */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-6 text-sm sm:text-base text-[#0a0618]/60">
          <div className="flex items-center gap-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0a0618]/40 block mb-1 font-bold">Telegram</span>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="text-[#0a0618] font-bold hover:text-[#9333ea] transition">
                forwardstack_team
              </a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0a0618]/40 block mb-1 font-bold">Mail</span>
              <a href={mailtoUrl} className="text-[#0a0618] font-bold hover:text-[#9333ea] transition">
                forwardstack@mail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="border border-black/15 hover:border-black rounded-full px-5 py-1.5 text-[#0a0618]/80 hover:text-black transition text-xs sm:text-sm font-semibold"
            >
              Facebook
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="border border-black/15 hover:border-black rounded-full px-5 py-1.5 text-[#0a0618]/80 hover:text-black transition text-xs sm:text-sm font-semibold"
            >
              Twitter
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="border border-black/15 hover:border-black rounded-full px-5 py-1.5 text-[#0a0618]/80 hover:text-black transition text-xs sm:text-sm font-semibold"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 4 Feature Service Boxes — Full width, wider width & lesser height, light theme */}
      <section id="services" className="w-full px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((item) => (
            <div
              key={item.num}
              className="group relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-[#9333ea]/60 transition-all duration-500 shadow-md hover:shadow-xl flex flex-col justify-end p-6 lg:p-7 cursor-pointer"
            >
              {/* Background Monochrome Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:via-white/60 transition-all duration-300" />

              {/* Card Content Overlay */}
              <div className="relative z-10 flex flex-col w-full">
                <span className="text-sm font-mono font-bold text-[#9333ea] mb-1">
                  {item.num}
                </span>

                <div className="flex items-center justify-between w-full">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-black text-[#0a0618] tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-[#0a0618] text-[#0a0618] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Description on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 overflow-hidden text-xs sm:text-sm text-[#0a0618]/80 font-medium">
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Section — Full width layout */}
      <section id="featured-works" className="w-full px-6 md:px-12 lg:px-16 py-20 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-mono uppercase tracking-widest text-[#9333ea] font-bold">Portfolio</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mt-2 text-[#0a0618]">
              Featured Works
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0a0618]/60 max-w-lg font-medium">
            Recent breakthrough products engineered and designed with top-tier precision.
          </p>
        </div>

        {/* Featured works boxes — wider and optimized aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featuredWorks.map((work, idx) => {
            const CardWrapper = work.url ? 'a' : 'div';
            const cardProps = work.url ? { href: work.url, target: '_blank', rel: 'noreferrer' } : {};

            return (
              <CardWrapper
                key={idx}
                {...cardProps}
                className="group rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-[#9333ea]/60 transition-all duration-300 flex flex-col cursor-pointer shadow-md hover:shadow-2xl hover:shadow-[#9333ea]/15 w-full"
              >
                <div className="h-56 sm:h-64 lg:h-72 overflow-hidden relative bg-[#f1f2f8] w-full">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-1.5 text-xs text-[#9333ea] font-bold border border-black/10 shadow-sm">
                    {work.category}
                  </div>
                </div>

                <div className="p-7 flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-[#0a0618] group-hover:text-[#9333ea] transition-colors">
                      {work.title}
                    </h4>
                    <span className="text-sm text-[#0a0618]/60 font-mono mt-1 block font-semibold">
                      {work.displayUrl}
                    </span>
                  </div>
                  {work.url && (
                    <div className="w-11 h-11 rounded-full border-2 border-black/15 flex items-center justify-center text-[#0a0618] group-hover:bg-[#0a0618] group-hover:text-white transition">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Metrics Section — Full width */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-t border-black/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full">
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0a0618]">99.8%</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/60 mt-3 uppercase tracking-wider font-bold">Client Satisfaction</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#9333ea]">140+</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/60 mt-3 uppercase tracking-wider font-bold">Projects Launched</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0a0618]">12x</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/60 mt-3 uppercase tracking-wider font-bold">Average ROI Boost</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#9333ea]">24/7</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/60 mt-3 uppercase tracking-wider font-bold">Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner — Full width */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16">
        <div className="rounded-3xl p-10 sm:p-16 lg:p-20 bg-gradient-to-r from-[#211142] via-[#0f0b1e] to-[#211142] text-white border border-black/10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden w-full shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#c084fc]/25 rounded-full blur-[110px] pointer-events-none" />
          <div className="space-y-4 z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Ready to take your digital presence forward?
            </h3>
            <p className="text-base sm:text-lg text-white/70 font-medium">
              Let's create exceptional design, scalable code, and impactful brands together.
            </p>
          </div>
          <a
            href={mailtoUrl}
            className="z-10 bg-white hover:bg-white/90 text-black px-10 py-5 rounded-full font-black text-base tracking-tight transition cursor-pointer shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap text-center"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Footer — Full width */}
      <footer id="contact" className="border-t border-black/10 pt-16 pb-12 w-full px-6 md:px-12 lg:px-16 text-sm text-[#0a0618]/60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 w-full">
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight text-[#0a0618]">
              <span className="text-[#9333ea] font-mono">+</span>
              <span className="font-black tracking-tight text-2xl">
                ForwardStack<span className="text-[#9333ea]">.</span>
              </span>
            </a>
            <p className="text-[#0a0618]/60 max-w-md leading-relaxed text-base font-normal">
              ForwardStack is an elite digital engineering and brand collective building scalable architectures, intuitive interfaces, and compelling brands.
            </p>
            <div className="pt-2 text-[#0a0618]/40 font-mono text-xs">
              Available worldwide · Remote first
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[#0a0618] mb-4 uppercase tracking-wider text-xs">Navigation</h5>
            <ul className="space-y-3 font-semibold text-[#0a0618]/80">
              <li><a href="#home" className="hover:text-[#9333ea] transition">Home</a></li>
              <li><a href="#services" className="hover:text-[#9333ea] transition">Services</a></li>
              <li><a href="#featured-works" className="hover:text-[#9333ea] transition">Featured Works</a></li>
              <li><a href="#contact" className="hover:text-[#9333ea] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#0a0618] mb-4 uppercase tracking-wider text-xs">Get in Touch</h5>
            <ul className="space-y-3 text-[#0a0618]/80 font-semibold">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9333ea]" /> forwardstack@mail.com
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#9333ea]" /> @forwardstack_team
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9333ea]" /> +1 (555) 019-2834
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0a0618]/50 font-medium">
          <div>© {new Date().getFullYear()} ForwardStack. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#9333ea] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#9333ea] transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
