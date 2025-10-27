import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-500 via-pink-400 to-indigo-500" />
            <p className="mt-3 text-sm text-slate-600 max-w-xs">Modern fragrances crafted with intention. Minimal by design, maximal by feeling.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#fragrances" className="hover:text-slate-900">Fragrances</a></li>
              <li><a href="#story" className="hover:text-slate-900">Our Story</a></li>
              <li><a href="#journal" className="hover:text-slate-900">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Stay in touch</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aér Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
