"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function LeadRequestForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      companyName: String(formData.get("companyName") ?? "").trim(),
      contactName: String(formData.get("contactName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      telegram: String(formData.get("telegram") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      requestType: String(formData.get("requestType") ?? "").trim(),
      workforceCount: String(formData.get("workforceCount") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error ?? "Не удалось отправить заявку. Попробуйте позже.");
      }

      setSubmitState("success");
      setMessage("Заявка отправлена. Наш корпоративный отдел свяжется с вами в течение 1 рабочего дня.");
      form.reset();
      return;
    } catch (error) {
      setSubmitState("error");
      const fallback = "Ошибка отправки. Напишите напрямую: corporate@mahadmanpowers.ru";
      setMessage(error instanceof Error && error.message ? error.message : fallback);
    }
  }

  return (
    <div className="metric-card overflow-hidden p-4 sm:p-6 md:p-7">
      <h2 className="text-2xl font-black text-gray-900">Оставить заявку</h2>
      <p className="mt-2 text-sm text-gray-500">
        Заполните форму для расчета кадровой волны под ваш объект. Мы вернемся с первичным планом мобилизации и сроками.
      </p>

      <form className="mt-6 grid gap-4 [overflow-wrap:anywhere] md:grid-cols-2" onSubmit={onSubmit}>
        <label className="block text-sm font-semibold text-gray-700">
          Компания *
          <input
            name="companyName"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="ООО / АО / ГК"
          />
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Контактное лицо *
          <input
            name="contactName"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="ФИО и должность"
          />
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Телефон *
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="+7 ..."
          />
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Email *
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="name@company.ru"
          />
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Telegram / WhatsApp
          <input
            name="telegram"
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="@username / +7 ..."
          />
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Тип заявки *
          <select
            name="requestType"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
          >
            <option value="" disabled>Выберите услугу</option>
            <option value="construction">Строительство</option>
            <option value="logistics">Логистика и склад</option>
            <option value="mixed">Смешанный профиль</option>
          </select>
        </label>

        <label className="block text-sm font-semibold text-gray-700">
          Планируемый объем персонала *
          <input
            name="workforceCount"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="например: 300 / квартал"
          />
        </label>

        <label className="md:col-span-2 block text-sm font-semibold text-gray-700">
          Город / регион объекта *
          <input
            name="city"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="Москва, Санкт-Петербург, Тюмень..."
          />
        </label>

        <label className="md:col-span-2 block text-sm font-semibold text-gray-700">
          Детали проекта
          <textarea
            name="details"
            rows={4}
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-500"
            placeholder="Опишите специальности, сроки старта, сменность, формат проживания и другие требования."
          />
        </label>

        <label className="md:col-span-2 flex items-start gap-2 text-sm text-gray-600">
          <input name="consent" type="checkbox" required className="mt-1" />
          <span>Подтверждаю согласие на обработку корпоративных контактных данных.</span>
        </label>

        <div className="md:col-span-2 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="cta-gold w-full px-5 py-2.5 text-center text-base font-bold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:text-sm"
          >
            {submitState === "submitting" ? "Отправка..." : "Отправить заявку"}
          </button>
          <a
            href="mailto:corporate@mahadmanpowers.ru"
            className="cta-black w-full px-5 py-2.5 text-center text-base font-bold [overflow-wrap:anywhere] sm:w-auto sm:text-sm"
          >
            Написать на корпоративную почту
          </a>
        </div>

        {message && (
          <p className={`md:col-span-2 text-sm ${submitState === "error" ? "text-red-600" : "text-green-700"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
