import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "О нас | Mahad Employment Services | Одобрено МИД Индии, ISO 9001",
  description:
    "Mahad Employment Services: зарегистрированный оператор трудовой мобилизации, одобренный МИД Индии. Генеральный директор: Обайдур Рахман. 15 000+ международных размещений.",
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    title: "О нас | Mahad Manpower Russia",
    description:
      "Корпоративная инфраструктура Mahad Manpower: централизованный рекрутинг, юридический контроль и поставка рабочих для проектов федерального масштаба.",
    url: `${siteUrl}/o-nas`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <section className="space-y-8">

      {/* Page header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">О компании</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Mahad Employment Services:<br />
          <span style={{ color: "var(--gold)" }}>проверенный экспортёр труда из Индии.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          Мы не агентство по вакансиям. Мы работаем как B2B-оператор промышленной мобилизации кадров, доверенный министерствами, сертифицированный
          международными стандартами и проверенный глобальными EPC-контракторами на проектах стоимостью в миллиарды долларов.
        </p>
      </div>

      {/* Credential grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="metric-card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Юридическое название</p>
          <p className="mt-2 text-lg font-black text-gray-900">Mahad Employment Services</p>
          <p className="mt-1 text-sm text-gray-500">UDYAM-UP-50-0250161 · MSME зарегистрирована</p>
        </div>
        <div className="metric-card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Руководство</p>
          <p className="mt-2 text-lg font-black text-gray-900">Обайдур Рахман</p>
          <p className="mt-1 text-sm text-gray-500">Основатель и генеральный директор</p>
        </div>
        <div className="metric-card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Штаб-квартира</p>
          <p className="mt-2 text-lg font-black text-gray-900">Лакхнау, Индия</p>
          <p className="mt-1 text-sm text-gray-500">Nisa Apartment, Kalyanpur East, UP 226022</p>
        </div>
        <div className="metric-card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Размещений</p>
          <p className="mt-2 text-lg font-black text-gray-900">15 000+</p>
          <p className="mt-1 text-sm text-gray-500">успешных международных трудоустройств</p>
        </div>
      </div>

      {/* Compliance block */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Государственные одобрения</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li className="flex gap-2"><span style={{ color: "var(--gold)" }}>✓</span> Одобрено Министерством внешних дел Правительства Индии</li>
            <li className="flex gap-2"><span style={{ color: "var(--gold)" }}>✓</span> ISO 9001-совместимые процессы подбора и верификации</li>
            <li className="flex gap-2"><span style={{ color: "var(--gold)" }}>✓</span> Официальный партнёр Taj HR Services, лицензия B-3252/DEL/PER/1000+/5/11251/2025, действует до 2030</li>
            <li className="flex gap-2"><span style={{ color: "var(--gold)" }}>✓</span> Строгое соответствие рамочным соглашениям о трудовой мобильности Индия–Россия</li>
          </ul>
        </div>
        <div className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Подтверждённый международный опыт</h2>
          <p className="mt-3 text-sm text-gray-500">
            Мы поставляли высококвалифицированный персонал для крупнейших мировых подрядчиков (включая <strong className="text-gray-800">Arabtec</strong> и <strong className="text-gray-800">Deugro</strong>) на
            инфраструктурных проектах в ОАЭ и Саудовской Аравии. Этот же операционный потенциал направлен на закрытие
            кадрового дефицита мегапроектов в Москве, Санкт-Петербурге, Сибири и на Дальнем Востоке.
          </p>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="rounded-2xl border-l-4 bg-gray-50 p-6" style={{ borderColor: "var(--gold)" }}>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Позиционирование на российском рынке</p>
        <p className="mt-2 text-gray-700">
          В настоящее время мы формируем управляемые кадровые потоки для генеральных подрядчиков федерального уровня и государственных логистических сетей Российской Федерации.
          Мы действуем как сертифицированный индийский экспортёр труда: с полной прозрачностью, юридической безупречностью документов и контролируемой поставкой в каждой партии.
        </p>
      </div>

    </section>
  );
}
