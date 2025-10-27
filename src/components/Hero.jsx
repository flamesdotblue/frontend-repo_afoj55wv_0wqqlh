import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-700/80">Eau de Parfum</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900">
            The Fragrance of Creativity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">
            Minimal, modern perfumes inspired by light, glass, and the quiet moments that shape our days.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#fragrances" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800 transition-colors">
              Explore collection
            </a>
            <a href="#story" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-slate-900 hover:shadow-sm transition-all">
              Our story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
