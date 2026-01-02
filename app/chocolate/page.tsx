"use client";

import { useEffect, useState } from "react";

export default function ChocolatePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      name: "Classic Pistachio Bar",
      price: "AED 120",
      image: "/3.jpg",
    },
    {
      name: "Double Filled Pistachio",
      price: "AED 150",
      image: "/2.jpeg",
    },
    {
      name: "Caramel Drizzle Pistachio",
      price: "AED 165",
      image: "/1.webp",
    },
  ];

  /* ───────── LOADER ───────── */
  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2B1A14] text-[#F6EFE7]">
        <div className="flex flex-col items-center gap-6 text-center">

          <p className="text-xs tracking-[0.35em] uppercase text-[#9DB37C]">
            Dubai Chocolate
          </p>

          <h2 className="text-3xl md:text-4xl font-[Playfair_Display]">
            Preparing
            <br />
            Pistachio Bars
          </h2>

          <div className="w-44 h-[2px] bg-[#9DB37C]/30 overflow-hidden rounded-full">
            <div className="h-full w-1/3 bg-[#9DB37C] animate-pulse" />
          </div>

        </div>
      </div>
    );
  }


  return (
    <main className="bg-[#F6EFE7] text-[#1E1A18] overflow-hidden">

      {/* HERO */}
     <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center hero-bg"
    style={{ backgroundImage: "url('/hero-choc.jpg')" }}
  />
  <div className="absolute inset-0 bg-[#2B1A14]/55" />

  {/* TOP RIGHT BRAND */}
  <div className="absolute top-6 right-6 md:top-10 md:right-20 text-right animate-brand">
    <p className="text-[10px] tracking-[0.3em] uppercase text-[#F6EFE7]/70 mb-2">
      From the house of
    </p>
    <img
      src="/logo.webp"
      alt="Brand Logo"
      className="w-28 md:w-40 object-contain ml-auto"
    />
  </div>

  {/* CONTENT */}
  <div className="relative max-w-2xl space-y-6">
    <span className="text-xs tracking-[0.35em] text-[#F6EFE7]/80 uppercase animate-item delay-1">
      Dubai Chocolate
    </span>

    <h1 className="text-5xl md:text-7xl font-[Playfair_Display] leading-[1.05] text-[#F6EFE7] animate-item delay-2">
      Pistachio
      <br />
      <span className="italic text-[#9DB37C]">Chocolate Bars</span>
    </h1>

    <p className="text-lg text-[#F6EFE7]/90 max-w-md animate-item delay-3">
      Rich milk chocolate filled with generous layers of roasted
      pistachio — handcrafted in the Dubai style.
    </p>

    <div className="mt-10 flex gap-4 animate-item delay-4">
      <button className="px-8 py-4 rounded-full bg-[#9DB37C] text-[#1E1A18] font-medium">
        Shop Now
      </button>

      <button className="px-8 py-4 rounded-full border border-[#F6EFE7]/60 text-[#F6EFE7]">
        Order on WhatsApp
      </button>
    </div>
  </div>
</section>


      {/* PRODUCTS */}
      <section className="px-6 md:px-20 py-32">
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] mb-16 text-[#2B1A14]">
          Dubai Chocolate Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {products.map((product, index) => (
            <div key={index} className="group">
              {/* IMAGE */}
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#4A2C1D] relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[#4A2C1D]" />
                    <div className="absolute bottom-0 w-full h-1/3 bg-[#9DB37C]" />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(200,155,60,0.6)_45%,transparent_50%)] opacity-70" />
                  </>
                )}
              </div>

              {/* INFO */}
              <div className="mt-6">
                <h3 className="text-xl font-[Playfair_Display] text-[#2B1A14]">
                  {product.name}
                </h3>

                <p className="text-sm text-[#6E5B50] mt-1">
                  Thick pistachio filling · Milk chocolate
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-medium text-[#2B1A14]">
                    {product.price}
                  </p>

                  <button className="px-5 py-2 rounded-full bg-[#2B1A14] text-[#F6EFE7] text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="px-6 md:px-20 py-32 bg-[#F1E7DC]">
        <p className="text-3xl md:text-4xl font-[Playfair_Display] max-w-4xl leading-relaxed text-[#2B1A14]">
          Thick chocolate.
          <br />
          <span className="text-[#6E5B50]">
            Generous pistachio filling.
            Inspired by Dubai’s love for indulgence.
          </span>
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-32 border-t border-[#E2D6C8]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <h2 className="text-4xl md:text-5xl font-[Playfair_Display] text-[#2B1A14]">
            Taste Dubai’s
            <br />
            favorite chocolate
          </h2>

          <button className="px-10 py-5 rounded-full bg-[#9DB37C] text-[#1E1A18] font-medium">
            Order Now
          </button>
        </div>
      </section>
      {/* FOOTER */}
<footer className="bg-[#2B1A14] text-[#F6EFE7] px-6 md:px-20 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-[Playfair_Display] mb-4">
        Dubai Chocolate
      </h3>
      <p className="text-sm text-[#E8DCCD] leading-relaxed max-w-sm">
        Handcrafted pistachio-filled chocolate bars inspired by Dubai’s
        love for indulgence, generosity, and bold flavors.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="text-sm uppercase tracking-widest text-[#9DB37C] mb-4">
        Quick Links
      </h4>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-[#9DB37C] cursor-pointer">
          Shop Collection
        </li>
        <li className="hover:text-[#9DB37C] cursor-pointer">
          About Us
        </li>
        <li className="hover:text-[#9DB37C] cursor-pointer">
          Contact
        </li>
        <li className="hover:text-[#9DB37C] cursor-pointer">
          Shipping & Returns
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-sm uppercase tracking-widest text-[#9DB37C] mb-4">
        Contact
      </h4>
      <p className="text-sm mb-3">
         Dubai, United Arab Emirates
      </p>
      <p className="text-sm mb-3">
         +971 50 123 4567
      </p>
      <button className="mt-4 px-6 py-3 rounded-full bg-[#9DB37C] text-[#1E1A18] font-medium hover:opacity-90 transition">
        WhatsApp Us
      </button>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="mt-16 pt-8 border-t border-[#4A2C1D] text-center text-xs text-[#E8DCCD]">
    © {new Date().getFullYear()} Dubai Chocolate. All rights reserved.
  </div>
</footer>


    </main>
  );
}
