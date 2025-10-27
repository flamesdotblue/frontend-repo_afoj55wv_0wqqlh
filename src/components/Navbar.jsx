import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-500 via-pink-400 to-indigo-500" />
            <span className="font-semibold tracking-tight text-slate-900">Aér Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#fragrances" className="hover:text-slate-900 transition-colors">Fragrances</a>
            <a href="#story" className="hover:text-slate-900 transition-colors">Our Story</a>
            <a href="#journal" className="hover:text-slate-900 transition-colors">Journal</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:shadow transition-all">
              <ShoppingBag className="h-4 w-4" />
              Shop now
            </button>
            <button className="md:hidden p-2 rounded-md hover:bg-white/60" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
