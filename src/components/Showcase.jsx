import React from 'react';

const products = [
  {
    name: 'No. 01 — Lumen',
    notes: 'Iris, Pear, White Musk',
    color: 'from-purple-200/60 to-indigo-200/60'
  },
  {
    name: 'No. 02 — Glass',
    notes: 'Aldehydes, Neroli, Cedar',
    color: 'from-pink-200/60 to-purple-200/60'
  },
  {
    name: 'No. 03 — Haze',
    notes: 'Violet Leaf, Bergamot, Amber',
    color: 'from-indigo-200/60 to-blue-200/60'
  }
];

export default function Showcase() {
  return (
    <section className="py-20" id="story">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Signature collection</h2>
            <p className="mt-3 text-slate-700 max-w-prose">A curated trio of modern compositions celebrating stillness, light, and texture. Designed to feel like a second skin.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:shadow-sm">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className={`h-56 bg-gradient-to-br ${p.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.notes}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm text-white group-hover:bg-slate-800 transition-colors">Add to bag</button>
                  <span className="text-sm font-medium text-slate-900">$120</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
