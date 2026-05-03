"use client";

import { useEffect, useState } from "react";

export default function FloatingTelegramButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="https://t.me/Mahadmanpowers"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать нам в Telegram"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-110 active:scale-95"
      style={{ background: "#0088cc" }}
      title="Написать нам в Telegram"
    >
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.138-.357.299-.55.299-.002 0-.003 0-.004 0l.214-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.644-.213-.658-.644.136-.953l11.566-4.453c.538-.197 1.006.128.832.941z" />
      </svg>
    </a>
  );
}
