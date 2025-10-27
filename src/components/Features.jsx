import React from 'react';
import { Sparkles, Leaf, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Modern Aromatics',
    desc: 'Clean, luminous compositions crafted for everyday elegance.'
  },
  {
    icon: Leaf,
    title: 'Consciously Made',
    desc: 'Vegan, cruelty-free formulations with mindful sourcing.'
  },
  {
    icon: Shield,
    title: 'All-day Presence',
    desc: 'Balanced sillage designed to linger without overpowering.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="fragrances">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Scent, refined</h2>
          <p className="mt-3 text-slate-700">A minimalist approach to perfume that lets the essentials shine.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-white/60 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/15 to-indigo-500/15 text-slate-900">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
