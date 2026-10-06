import { useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic irregular rounded corners for cards
  const services = [
    {
      num: '01',
      title: 'Design',
      desc: 'UI/UX interface systems, high-fidelity prototypes, brand guidelines, and visual language.',
      img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      shapeClass: 'rounded-tl-[44px] rounded-br-[44px] rounded-tr-[16px] rounded-bl-[16px]',
    },
    {
      num: '02',
      title: 'Coding',
      desc: 'Ultra-fast web applications, resilient backend architectures, and API integrations.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      shapeClass: 'rounded-tr-[44px] rounded-bl-[44px] rounded-tl-[16px] rounded-br-[16px]',
    },
    {
      num: '03',
      title: 'Branding',
      desc: 'Distinctive brand positioning, voice formulation, typography, and cohesive collateral.',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      shapeClass: 'rounded-tl-[36px] rounded-bl-[36px] rounded-tr-[20px] rounded-br-[20px]',
    },
    {
      num: '04',
      title: 'SEO',
      desc: 'Technical optimizations, content strategy, programmatic landing pages, and search dominance.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      shapeClass: 'rounded-tr-[36px] rounded-br-[36px] rounded-tl-[20px] rounded-bl-[20px]',
    }
  ];

  const featuredWorks = [
    {
      title: 'Squared',
      url: 'https://sqrdhq.xyz',
      displayUrl: 'sqrdhq.xyz',
      image: '/featuured-works/Squared.png',
      shapeClass: 'rounded-tl-[40px] rounded-br-[40px] rounded-tr-[18px] rounded-bl-[18px]'
    },
    {
      title: 'Genpay',
      url: null,
      displayUrl: 'Enterprise Solution',
      image: '/featuured-works/Genpay.png',
      shapeClass: 'rounded-tr-[40px] rounded-bl-[40px] rounded-tl-[18px] rounded-br-[18px]'
    },
    {
      title: 'Klerly',
      url: 'https://klerly.app',
      displayUrl: 'klerly.app',
      image: '/featuured-works/klerly.png',
      shapeClass: 'rounded-tl-[36px] rounded-tr-[36px] rounded-bl-[18px] rounded-br-[18px]'
    }
  ];

  const emailSubject = encodeURIComponent("Project Inquiry — ForwardStack");
  const emailBody = encodeURIComponent("Hi Toluwanimi,\n\nI'd like to talk about a project with ForwardStack.\n\nHere are some quick details:\n");
  const mailtoUrl = `mailto:toluwanimiajiboso03@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen w-full bg-[#f8f9fd] text-[#0a0618] selection:bg-[#aa3bff]/20 selection:text-[#0a0618] font-sans relative overflow-x-hidden">
      {/* Soft Purple/Violet Ambient Glows for Light Theme */}
      <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[950px] h-[850px] bg-gradient-to-br from-[#c084fc]/20 via-[#f472b6]/15 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[650px] right-0 w-[750px] h-[750px] bg-[#818cf8]/15 blur-[180px] pointer-events-none rounded-full" />

      {/* Main Header / Navigation */}
      <nav className="w-full px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between relative z-20">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-black tracking-tight text-[#0a0618] group">
          <span className="text-[#9333ea] text-2xl font-black font-mono">+</span>
          <span className="font-black tracking-tight text-2xl sm:text-3xl text-[#0a0618]">
            ForwardStack<span className="text-[#9333ea]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center min-h-[520px]">
          
          {/* Left Hero: EVEN LARGER Spiral Picture + Cream Circular "Discuss a Project" Button */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative flex items-center justify-center py-4">
            <div className="relative w-full max-w-[420px] sm:max-w-[620px] lg:max-w-[720px] h-[400px] sm:h-[540px] lg:h-[660px] flex items-center justify-center">
              {/* Ultra large Spiral Picture Asset */}
              <img
                src="/spiral-picture-bg.png"
                alt="3D Spiral Digital Art"
                className="w-full h-full object-contain filter drop-shadow-[0_30px_70px_rgba(147,51,234,0.28)] select-none pointer-events-none scale-110 sm:scale-125 lg:scale-140 transition-transform"
              />

              {/* Intersecting "Discuss a Project" warm cream circle button */}
              <div className="absolute z-20 bottom-2 sm:bottom-8 lg:bottom-12 right-2 sm:right-6 lg:right-10">
                <a
                  href={mailtoUrl}
                  className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-[#fbf7ee] hover:bg-[#f3ebd7] text-[#1c1917] font-black text-xs sm:text-base lg:text-lg tracking-tight flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-center px-3 border-4 border-white group"
                >
                  <span className="group-hover:-translate-y-0.5 transition-transform text-[#0a0618]">Discuss</span>
                  <span className="group-hover:translate-y-0.5 transition-transform text-[#9333ea]">a Project</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero: Headline & Copy */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center lg:pl-4 space-y-4 sm:space-y-6 text-left">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[96px] xl:text-[104px] font-black tracking-tight leading-[1.02] sm:leading-[0.98] text-[#0a0618] break-words">
              We Build <br />
              Digital <br />
              <span className="text-[#0a0618]">Solutions</span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-2xl text-[#0a0618]/70 max-w-2xl leading-relaxed font-medium">
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
              <span className="text-xs uppercase tracking-wider text-[#0a0618]/40 block mb-1 font-bold">Direct Email</span>
              <a href={mailtoUrl} className="text-[#0a0618] font-bold hover:text-[#9333ea] transition">
                toluwanimiajiboso03@gmail.com
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

      {/* 4 Feature Service Boxes — Irregular geometric shapes, wider width, reduced harsh white scrim */}
      <section id="services" className="w-full px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((item) => (
            <div
              key={item.num}
              className={`group relative h-64 sm:h-72 w-full overflow-hidden bg-[#181328] border border-black/10 hover:border-[#9333ea]/70 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-end p-6 lg:p-7 cursor-pointer ${item.shapeClass}`}
            >
              {/* Background Monochrome Image - rich contrast, not washed out */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700 pointer-events-none"
              />

              {/* Reduced white gradient scrim: dark transparent scrim for high contrast and punchy text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a1a]/95 via-[#0e0a1a]/40 to-transparent transition-all duration-300" />

              {/* Card Content Overlay */}
              <div className="relative z-10 flex flex-col w-full">
                <span className="text-sm font-mono font-bold text-[#c084fc] mb-1">
                  {item.num}
                </span>

                <div className="flex items-center justify-between w-full">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-black text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-[#fbf7ee] text-white group-hover:text-[#0a0618] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Description on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 overflow-hidden text-xs sm:text-sm text-white/80 font-medium">
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Section — Irregular shapes & categorization removed */}
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

        {/* Featured works boxes — Irregular modern shapes, reduced white washes, tags removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featuredWorks.map((work, idx) => {
            const CardWrapper = work.url ? 'a' : 'div';
            const cardProps = work.url ? { href: work.url, target: '_blank', rel: 'noreferrer' } : {};

            return (
              <CardWrapper
                key={idx}
                {...cardProps}
                className={`group overflow-hidden bg-[#120e20] border border-black/10 hover:border-[#9333ea]/70 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#9333ea]/20 w-full ${work.shapeClass}`}
              >
                <div className="h-60 sm:h-68 lg:h-76 overflow-hidden relative bg-[#090714] w-full">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle glass vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e20] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-7 flex items-center justify-between w-full bg-[#120e20]">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#c084fc] transition-colors">
                      {work.title}
                    </h4>
                    <span className="text-sm text-white/50 font-mono mt-1 block font-semibold">
                      {work.displayUrl}
                    </span>
                  </div>
                  {work.url && (
                    <div className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#fbf7ee] flex items-center justify-center text-white group-hover:text-[#0a0618] transition">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Metrics Section — Matching user screenshot with punchy bold badges */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-t border-black/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center w-full">
          <div className="p-8 sm:p-10 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[18px] rounded-bl-[18px] bg-white border border-black/10 hover:border-[#9333ea]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0a0618] tracking-tight group-hover:scale-105 transition-transform">99.8%</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/70 mt-3 uppercase tracking-wider font-extrabold group-hover:text-[#9333ea] transition-colors">Client Satisfaction</p>
          </div>
          <div className="p-8 sm:p-10 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-[18px] rounded-br-[18px] bg-white border border-black/10 hover:border-[#9333ea]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#9333ea] tracking-tight group-hover:scale-105 transition-transform">10+</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/70 mt-3 uppercase tracking-wider font-extrabold group-hover:text-[#9333ea] transition-colors">Projects Launched</p>
          </div>
          <div className="p-8 sm:p-10 rounded-tl-[36px] rounded-bl-[36px] rounded-tr-[20px] rounded-br-[20px] bg-white border border-black/10 hover:border-[#9333ea]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0a0618] tracking-tight group-hover:scale-105 transition-transform">12x</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/70 mt-3 uppercase tracking-wider font-extrabold group-hover:text-[#9333ea] transition-colors">Average ROI Boost</p>
          </div>
          <div className="p-8 sm:p-10 rounded-tr-[36px] rounded-br-[36px] rounded-tl-[20px] rounded-bl-[20px] bg-white border border-black/10 hover:border-[#9333ea]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#9333ea] tracking-tight group-hover:scale-105 transition-transform">24/7</h4>
            <p className="text-xs sm:text-sm text-[#0a0618]/70 mt-3 uppercase tracking-wider font-extrabold group-hover:text-[#9333ea] transition-colors">Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner — Full width */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16">
        <div className="rounded-[40px] p-10 sm:p-16 lg:p-20 bg-gradient-to-r from-[#211142] via-[#0f0b1e] to-[#211142] text-white border border-black/10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden w-full shadow-2xl">
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
            className="z-10 bg-[#fbf7ee] hover:bg-white text-[#1c1917] px-10 py-5 rounded-full font-black text-base tracking-tight transition cursor-pointer shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap text-center"
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
              ForwardStack is an independent design and software engineering studio building crisp interfaces, robust web systems, and distinctive digital brands.
            </p>
            <div className="pt-2 text-[#0a0618]/40 font-mono text-xs">
              Based in Nigeria · Collaborating globally
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
                <Mail className="w-4 h-4 text-[#9333ea]" /> 
                <a href={mailtoUrl} className="hover:text-[#9333ea] transition break-all">
                  toluwanimiajiboso03@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#9333ea]" /> @forwardstack_team
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
