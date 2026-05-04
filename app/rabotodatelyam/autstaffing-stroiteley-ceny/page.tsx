import type { Metadata } from "next";
import EmployerIntentPricingMatrix from "@/src/components/EmployerIntentPricingMatrix";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Цены на аутстаффинг строителей | Смета за 24 часа | Mahad",
  description:
    "Аутстаффинг строителей из Индии: цены, налоги, retention rate и расчет окупаемости для проектов в РФ.",
  alternates: {
    canonical: "/rabotodatelyam/autstaffing-stroiteley-ceny",
  },
  openGraph: {
    title: "Цены на аутстаффинг строителей | Смета за 24 часа | Mahad",
    description:
      "Коммерческая страница для финдиректоров: стоимость бригады, retention rate и модель экономии для EPC-проектов.",
    url: `${siteUrl}/rabotodatelyam/autstaffing-stroiteley-ceny`,
    locale: "ru_RU",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая минимальная партия для запуска аутстаффинга?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стартовая партия обычно начинается от 30-50 специалистов. Для EPC-контрактов эффективный объем — от 100 человек и выше.",
      },
    },
    {
      "@type": "Question",
      name: "Что включает цена аутстаффинга?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставка включает подбор, верификацию кандидатов, визовую мобилизацию, документооборот и координацию вывода на объект в рамках согласованной модели.",
      },
    },
    {
      "@type": "Question",
      name: "За сколько дней можно вывести первую волну?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При готовой заявке и согласованном профиле — от 21 до 45 дней, в зависимости от объема и региона проекта.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Аутстаффинг строителей из Индии",
  serviceType: "B2B аутстаффинг строительного персонала",
  provider: {
    "@type": "Organization",
    name: "Mahad Employment Services",
    url: siteUrl,
  },
  areaServed: "RU",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteUrl}/rabotodatelyam/autstaffing-stroiteley-ceny`,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    description: "Смета за 24 часа по профилю проекта и объему партии",
  },
};

export default function OutstaffingPricesPage() {
  return (
    <section className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Ценовой капкан</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Аутстаффинг строителей из Индии: цены, налоги и окупаемость в 2026 году
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-500">
          Страница для финансового директора и тендерного блока. Ниже — матрица ставок, сравнение India vs РФ vs СНГ
          и ориентир по retention rate, влияющему на фактическую стоимость выполнения контракта.
        </p>
      </div>

      <EmployerIntentPricingMatrix />

      <div className="grid gap-5 md:grid-cols-2">
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Что видит финдиректор в этой модели</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-500">
            <li>Прогнозируемая стоимость рабочей силы на весь горизонт проекта.</li>
            <li>Снижение потерь от текучести и срывов производственного графика.</li>
            <li>Смета на 24 часа с разбивкой по ролям и регионам РФ.</li>
          </ul>
        </article>
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Следующий шаг</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Отправьте параметры проекта: город, профиль специальностей, объем партии и желаемую дату выхода.
            Мы подготовим коммерческую модель и дорожную карту мобилизации в течение одного рабочего дня.
          </p>
          <a href="/komplaens" className="mt-5 inline-block rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-bold text-[#111]">
            Получить смету за 24 часа
          </a>
        </article>
      </div>
    </section>
  );
}
