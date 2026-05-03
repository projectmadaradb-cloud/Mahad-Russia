"use client";

import { FormEvent, useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");

  function dismissKeyboard() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dismissKeyboard();
    setState("submitting");
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Ошибка.");
      setState("success");
      setMsg("Вы подписаны. Ждите обновлений.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "Ошибка. Попробуйте позже.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 sm:flex sm:items-center sm:gap-8">
        <div className="sm:flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Рассылка</p>
          <p className="mt-1 text-sm font-semibold text-gray-200">
            Получайте обновления о кадровом рынке России и новостях Mahad
          </p>
        </div>
        <form className="mt-4 flex flex-col gap-2 sm:mt-0 sm:shrink-0 sm:flex-row" onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            required
            placeholder="ваш@email.ru"
            disabled={state === "submitting" || state === "success"}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-base text-white placeholder-gray-500 outline-none transition focus:border-white/40 disabled:opacity-50 sm:w-48 sm:text-sm"
          />
          <button
            type="submit"
            disabled={state === "submitting" || state === "success"}
            className="w-full rounded-lg bg-[color:var(--gold)] px-4 py-2 text-sm font-bold text-[#111] transition hover:brightness-110 disabled:opacity-50 sm:w-auto"
          >
            {state === "submitting" ? "..." : state === "success" ? "✓" : "Подписаться"}
          </button>
        </form>
        {msg && (
          <p className={`mt-2 text-xs sm:mt-0 sm:ml-4 ${state === "success" ? "text-green-400" : "text-red-400"}`}>
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
