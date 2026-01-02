"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-50 bg-[url('/bg2.png')] bg-cover bg-center bg-fixed" />

      {/* GLOBAL GLASS OVERLAY */}
      <div className="fixed inset-0 -z-40 bg-white/[0.025] backdrop-blur-[3px] pointer-events-none" />

      {/* GOLD FADE */}
      <div className="fixed top-0 left-0 w-full h-60 -z-30 bg-gradient-to-b from-[#CFAF63]/60 via-transparent to-transparent blur-xl opacity-80 pointer-events-none" />

      {/* DEPTH */}
      <div className="fixed bottom-0 left-0 w-full h-40 -z-30 bg-gradient-to-t from-[#2B0F2D]/50 via-transparent to-transparent blur-lg opacity-70 pointer-events-none" />

      {/* ───────── HEADER ───────── */}
      <header
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[88%] max-w-6xl
          rounded-2xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/15 backdrop-blur-xl shadow-[0_6px_22px_rgba(207,175,99,0.15)] border border-white/20"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between px-8 py-4 text-white">
          {/* LEFT */}
          <div className="flex items-center gap-6 opacity-90">
            <button className="text-3xl font-light hover:opacity-70 transition">
              &#9776;
            </button>
            <button className="text-lg tracking-wide hover:opacity-70 transition">
              SEARCH
            </button>
          </div>

          {/* LOGO */}
          <img
            src="/logo.webp"
            alt="Queen of Nature"
            className="h-11 md:h-14 object-contain"
          />

          {/* RIGHT */}
          <div className="flex items-center gap-8">
            <button className="uppercase text-sm opacity-80 hover:opacity-100 transition">
              Login / Signup
            </button>

            <button className="text-sm opacity-80 hover:opacity-100 flex items-center gap-2 transition">
              Cart
              <span className="px-2 py-[1px] rounded-sm text-xs border border-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ───────── HERO ───────── */}
      <main className="relative h-screen w-full overflow-hidden font-[Montserrat] pt-28">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
          src="/1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 flex items-end justify-between pb-20 px-14 z-10 text-white">
          <div className="space-y-3">
            <p className="uppercase text-xs tracking-widest opacity-85">
              Premium Wellness
            </p>

            <h2 className="text-5xl md:text-6xl font-[Playfair_Display] drop-shadow-xl">
              QUEEN OF NATURE
            </h2>

            <button className="text-sm border-b border-white pb-1 hover:text-[#CFAF63] hover:border-[#CFAF63] transition">
              READ MORE
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/chocolate">
              <button className="px-8 py-3 rounded-full border border-[#CFAF63]/60 text-[#CFAF63] backdrop-blur-md bg-white/[0.06] hover:bg-[#CFAF63]/15 transition-all tracking-wide text-sm font-medium">
                Chocolate
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* ───────────────────── SECTION 2 ───────────────────── */}
      <section className="relative w-full text-white py-24 px-6 md:px-20 glass-section">

        <div className="max-w-5xl mx-auto text-center space-y-8 z-10">

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#CFAF63] opacity-80">
            A Journey of Natural Wellness
          </p>

          <h2 className="text-4xl md:text-6xl font-[Playfair_Display] text-transparent bg-clip-text bg-gradient-to-r from-[#F5E3B5] via-[#CFAF63] to-[#D4B46B]">
            Where Nature Becomes Royalty
          </h2>

          <p className="text-sm md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            Queen of Nature is more than a brand — it's a journey of conscious care,
            purity, and royalty for the soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-3 rounded-full bg-[#CFAF63] text-[#2B0F2D] font-semibold hover:scale-105 transition-all duration-300">
              Explore Our Products
            </button>

            <button className="px-8 py-3 rounded-full border border-[#CFAF63] text-[#CFAF63] font-semibold hover:bg-[#CFAF63]/20 hover:scale-105 transition-all duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────── SECTION 3 ───────────────────── */}
      <section className="relative w-full text-white py-32 px-6 md:px-20 glass-section overflow-hidden">

  {/* Background Luxury Glows */}
  <div className="absolute -top-20 left-0 w-72 h-72 bg-[#CFAF63]/10 blur-[120px] rounded-full" />
  <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#5A2A7C]/20 blur-[140px] rounded-full" />

  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto z-10">

    {/* LEFT SIDE — Story Text */}
    <div className="space-y-10 text-center lg:text-left">

      

      <h3 className="text-4xl md:text-6xl font-[Playfair_Display] tracking-wide bg-gradient-to-r 
      from-[#F5E3B5] via-[#CFAF63] to-[#D4B46B] bg-clip-text text-transparent drop-shadow-sm leading-tight">
        The Heart Behind the Crown
      </h3>

      <blockquote className="text-gray-200 italic leading-relaxed text-lg md:text-xl font-light max-w-xl">
        “Beauty is not about becoming someone else — it's about  
        coming home to yourself. A ritual of remembrance, not reinvention.”
      </blockquote>

      <p className="text-sm text-gray-300 tracking-wide">
        — <span className="text-[#CFAF63] italic font-medium">Founder, Queen of Nature</span>
      </p>

      <button className="px-12 py-3 rounded-full border border-[#CFAF63] text-[#CFAF63] text-sm font-semibold 
        hover:bg-[#CFAF63]/20 hover:scale-105 transition-all duration-300 tracking-wide">
        Read Our Full Story
      </button>
    </div>

    {/* RIGHT SIDE — Image / Founder / Floral Asset */}
    <div className="relative flex justify-center lg:justify-end">
      <div className="w-full max-w-sm h-[420px] rounded-3xl overflow-hidden border border-white/20 
      backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] bg-white/10">

        <img
          src="/founder.png" // ⭐ change to your image (or floral / product)
          alt="Founder - Queen of Nature"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Optional Corner Glow */}
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#CFAF63]/20 blur-3xl rounded-full pointer-events-none"></div>
    </div>

  </div>
</section>


      {/* ───────────────────── SECTION 4 ───────────────────── */}
      <section className="relative w-full text-white py-28 px-6 md:px-20 glass-section border-t border-[#ffffff1a]">

  {/* Soft Gold Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cfae6333] to-transparent opacity-20 pointer-events-none" />

  {/* Heading */}
  <div className="text-center mb-20">
    <h3 className="text-3xl md:text-5xl font-[Playfair_Display] bg-gradient-to-r from-[#F5E3B5] via-[#CFAF63] to-[#E3C98A] bg-clip-text text-transparent">
      Why Choose Queen of Nature?
    </h3>
    <div className="w-24 h-[2px] bg-[#CFAF63] mx-auto mt-4 rounded-full" />
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

    {[
      ["100% Natural Ingredients", "Clean, safe, toxin-free & rooted in nature."],
      ["Scientifically Backed", "Ancient rituals meet modern formulation."],
      ["Arabian Wellness Roots", "Inspired by royal beauty traditions & purity."],
      ["Elevated Self-Worth", "Every woman deserves to feel like a queen."]
    ].map(([title, desc], i) => (
      <div key={i}
        className="group relative p-10 rounded-3xl backdrop-blur-2xl border border-white/20 bg-white/[0.08]
          hover:bg-white/[0.14] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.06)]">

        {/* Decorative Gold Top Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-gradient-to-r from-[#F5E3B5] to-[#CFAF63] rounded-full" />

        {/* Optional Placeholder Icon Area */}
        <div className="w-16 h-16 mx-auto rounded-full border border-[#CFAF63]/40 flex items-center justify-center text-[#CFAF63] 
          text-xl font-bold tracking-wider group-hover:scale-110 transition-all duration-300">
          {i+1}
        </div>

        <h4 className="mt-6 font-semibold text-[#CFAF63] text-lg">
          {title}
        </h4>

        <p className="text-sm text-gray-200 leading-relaxed mt-2">
          {desc}
        </p>
      </div>
    ))}

  </div>
</section>
<footer
  className="relative w-full text-white pt-24 pb-12 px-8 md:px-20 glass-section border-t border-[#ffffff20] mt-32"
>

  {/* Gold Shine Accent Top */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#CFAF63] to-transparent opacity-60"></div>

  {/* Top Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-14 max-w-7xl mx-auto">

    {/* Column 1 — Logo + Tagline */}
    <div className="space-y-4">
      <img
        src="/logo.webp"
        alt="Queen of Nature"
        className="h-16 object-contain"
      />

      <p className="text-sm text-gray-300 leading-relaxed">
        Holistic beauty meets royal elegance.  
        Transforming self-care into a ritual of self-worth.
      </p>

      <div className="flex gap-4 pt-2">
        {/* Social Icons — you can replace with lucide or images */}
        <a className="hover:text-[#CFAF63] transition">Instagram</a>
        <a className="hover:text-[#CFAF63] transition">Facebook</a>
        <a className="hover:text-[#CFAF63] transition">YouTube</a>
      </div>
    </div>

    {/* Column 2 — Links */}
    <div>
      <h4 className="text-lg font-[Playfair_Display] text-[#CFAF63] mb-4">Explore</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Products</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Services</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Consultations</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Our Story</li>
      </ul>
    </div>

    {/* Column 3 — Support */}
    <div>
      <h4 className="text-lg font-[Playfair_Display] text-[#CFAF63] mb-4">Support</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li className="hover:text-[#CFAF63] transition cursor-pointer">FAQ</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Shipping & Returns</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Privacy Policy</li>
        <li className="hover:text-[#CFAF63] transition cursor-pointer">Terms of Service</li>
      </ul>
    </div>

    {/* Column 4 — Newsletter Signup */}
    <div>
      <h4 className="text-lg font-[Playfair_Display] text-[#CFAF63] mb-4">Stay Connected</h4>
      <p className="text-sm text-gray-300 mb-4">Join our royal circle for updates & rituals.</p>
      
      <div className="flex bg-white/10 backdrop-blur-xl rounded-full overflow-hidden border border-[#ffffff30]">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-3 flex-1 text-sm bg-transparent outline-none placeholder-gray-400"
        />
        <button className="px-6 bg-gradient-to-r from-[#CFAF63] to-[#F8E9C4] text-[#2B0F2D] font-semibold text-sm transition hover:opacity-90">
          Join
        </button>
      </div>
    </div>
  </div>


  {/* Divider */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-14"></div>


  {/* Bottom copyright */}
  <div className="text-center text-xs text-gray-400">
    © {new Date().getFullYear()} Queen of Nature — All Rights Reserved.
  </div>

</footer>

    </>
  );
}
