"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — only on mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
        aria-label="Открыть меню"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-4 py-3">
            <Link href="/o-nas" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">О нас</Link>
            <Link href="/komplaens" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">Легальность и визы</Link>
            <Link href="/rabotodatelyam" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">Работодателям</Link>
            <Link href="/uslugi/stroitelstvo" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">Строительство</Link>
            <Link href="/uslugi/logistika" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">Логистика</Link>
            <div className="mt-2 flex flex-col gap-2 pb-2">
              <a href="/uslugi/stroitelstvo" onClick={() => setOpen(false)} className="nav-cta px-5 py-3 text-center text-[15px] font-bold">Нанять рабочих</a>
              <a href="/komplaens" onClick={() => setOpen(false)} className="cta-gold px-5 py-3 text-center text-[15px] font-bold">Оставить заявку</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
