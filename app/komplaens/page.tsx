import type { Metadata } from "next";
import LeadRequestForm from "@/src/components/LeadRequestForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Комплаенс и EOR-аутстаффинг | Правовая модель работы в России",
  description:
    "Мы работаем через аккредитованных российских EOR-партнёров, без прямого российского юридического лица. Соответствие индийским и российским нормам трудовой мобилизации.",
  alternates: {
    canonical: "/komplaens",
  },
  openGraph: {
    title: "Комплаенс и EOR-аутстаффинг | Mahad Manpower Russia",
    description:
      "Правовая архитектура поставки персонала в РФ: EOR-аутстаффинг, соответствие МИД Индии, рамочные соглашения Индия–Россия, сроки 21–45 дней.",
    url: `${siteUrl}/komplaens`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function CompliancePage() {
  return (
    <section className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Правовая архитектура</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Комплаенс и EOR-аутстаффинг:<br />
          <span className="text-[color:var(--gold)]">без серых зон, без юридических рисков.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          Мы не имеем прямого российского юридического лица. Весь персонал трудоустраивается через
          аккредитованных российских EOR-партнёров (Employer of Record), что обеспечивает полное соответствие
          трудовому законодательству РФ и устраняет правовую нагрузку с заказчика.
        </p>
      </div>

      {/* EOR model explainer */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Модель EOR-аутстаффинга</h2>
          <p className="mt-3 text-sm text-gray-500">
            Мы подбираем, верифицируем и мобилизуем персонал из Индии. Официальным работодателем на территории РФ
            выступает наш аккредитованный российский EOR-партнёр. Заказчик получает кадровый ресурс без
            необходимости самостоятельно управлять иностранными трудовыми договорами.
          </p>
        </div>
        <div className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Целевые регионы РФ</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-500">
            <li className="flex gap-2"><span className="text-[color:var(--gold)]">→</span> Москва и Московская область</li>
            <li className="flex gap-2"><span className="text-[color:var(--gold)]">→</span> Санкт-Петербург и Ленинградская область</li>
            <li className="flex gap-2"><span className="text-[color:var(--gold)]">→</span> Сибирские мегапроекты (Тюмень, Новосибирск, Красноярск)</li>
            <li className="flex gap-2"><span className="text-[color:var(--gold)]">→</span> Дальневосточные промышленные зоны (Владивосток, Хабаровск)</li>
          </ul>
        </div>
      </div>

      {/* Compliance pillars */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="metric-card p-6">
          <h3 className="text-base font-black text-gray-900">Индийский выездной клиринг</h3>
          <p className="mt-2 text-sm text-gray-500">
            Соответствие процедурам выезда, регулируемым Министерством внешних дел Индии (MoEA). Полный документарный
            пакет проверяется до отправки.
          </p>
        </div>
        <div className="metric-card p-6">
          <h3 className="text-base font-black text-gray-900">Рамка Индия–Россия</h3>
          <p className="mt-2 text-sm text-gray-500">
            Наши процессы выстроены в соответствии с двусторонними рамочными соглашениями о трудовой мобильности
            между Индией и Российской Федерацией.
          </p>
        </div>
        <div className="metric-card p-6">
          <h3 className="text-base font-black text-gray-900">Срок: 21–45 дней</h3>
          <p className="mt-2 text-sm text-gray-500">
            От визового клиринга до выхода на объект. Включает медицинское освидетельствование, апостиль документов,
            ориентационный инструктаж и передачу EOR-партнёру.
          </p>
        </div>
      </div>

      {/* Client statement */}
      <div className="rounded-2xl border-l-4 border-l-[color:var(--gold)] bg-gray-50 p-6">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Статус на российском рынке</p>
        <p className="mt-2 text-gray-700">
          В настоящее время мы формируем кадровые потоки для генеральных подрядчиков федерального уровня и государственных
          логистических сетей Российской Федерации. Каждая поставка осуществляется с полной документарной трассируемостью,
          соответствием требованиям Министерства внешних дел Индии и синхронизацией с аккредитованными российскими EOR-партнёрами.
        </p>
      </div>

      <LeadRequestForm />

    </section>
  );
}
