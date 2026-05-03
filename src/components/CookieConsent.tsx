"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent_v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании данных"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0f0f0f]/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-300 sm:max-w-2xl">
          Этот сайт использует технические файлы cookie, необходимые для его работы, а также анонимную статистику посещаемости без отслеживания личных данных.
          Используя сайт, вы принимаете нашу{" "}
          <a href="/komplaens" className="underline hover:text-white">
            политику конфиденциальности
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-gray-400 transition hover:border-white/40 hover:text-white"
          >
            Отказаться
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-[color:var(--gold)] px-5 py-2 text-sm font-bold text-[#111] transition hover:brightness-110"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
