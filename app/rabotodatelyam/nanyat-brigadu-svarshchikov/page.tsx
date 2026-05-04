import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Нанять бригаду сварщиков из Индии | 50+ человек за 45 дней",
  description:
    "Найм бригад сварщиков под ключ: от 50 человек, верификация навыков, подготовка под НАКС и вывод на объект в РФ за 45 дней.",
  alternates: {
    canonical: "/rabotodatelyam/nanyat-brigadu-svarshchikov",
  },
  openGraph: {
    title: "Нанять бригаду сварщиков из Индии | 50+ человек за 45 дней",
    description:
      "Готовая производственная единица для EPC-проектов: план мобилизации, видеопроверка навыков и контроль качества.",
    url: `${siteUrl}/rabotodatelyam/nanyat-brigadu-svarshchikov`,
    locale: "ru_RU",
    type: "article",
  },
};

const mobilizationPlan = [
  { day: "День 1", text: "Получение заявки, профилирование объекта и запуск подбора." },
  { day: "День 14", text: "Внутреннее тестирование, видеофиксация и согласование shortlist." },
  { day: "День 30", text: "Оформление виз и разрешительной документации под партию." },
  { day: "День 45", text: "Выход на объект в РФ первой волны 50+ специалистов." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой минимальный размер бригады сварщиков?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стандартный старт — 50 человек. По запросу формируются партии 100, 150 и 250 специалистов по волнам.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли подготовить бригаду под НАКС?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Мы формируем профиль по типу сварки и закладываем этап подготовки под требования НАКС до вывода персонала.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько занимает мобилизация под ключ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ориентир — до 45 дней для первой волны при подтвержденной заявке и утвержденном профиле бригады.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Найм бригад сварщиков под ключ",
  serviceType: "B2B мобилизация сварочных бригад 50+",
  provider: {
    "@type": "Organization",
    name: "Mahad Employment Services",
    url: siteUrl,
  },
  areaServed: "RU",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteUrl}/rabotodatelyam/nanyat-brigadu-svarshchikov`,
  },
};

export default function HireWeldersBrigadePage() {
  return (
    <section className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Масштаб и НАКС</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Найм бригад сварщиков «под ключ»: от 50 человек с аттестацией под НАКС
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-500">
          Мы поставляем не отдельных кандидатов, а готовую производственную единицу с управляемой мобилизацией,
          внутренним контролем качества и прозрачным графиком вывода на объект.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Формат партии</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-500">
            <li>Бригады 50 / 100 / 150 / 250+ специалистов.</li>
            <li>Профили: MIG, TIG, ручная дуговая, трубная сварка, монтаж металлоконструкций.</li>
            <li>Назначение проектного координатора на стороне поставщика.</li>
          </ul>
        </article>
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Ключевой блок: видеопротоколы тестов</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Ниже размещен live-блок из YouTube по профилю сварочных тестов. Используйте его как первичный фильтр
            перед финальным shortlist. При необходимости передаем видеопротоколы под NDA в procurement-канал.
          </p>
        </article>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <iframe
            className="h-[280px] w-full"
            src="https://www.youtube.com/embed?listType=search&list=Mahad%20manpower%20welding%20test"
            title="Видео тестов сварщиков"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <iframe
            className="h-[280px] w-full"
            src="https://www.youtube.com/embed?listType=search&list=NAKS%20welding%20qualification%20test"
            title="Видео квалификационных тестов"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <article className="metric-card p-7">
        <h2 className="text-xl font-black text-gray-900">План мобилизации</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {mobilizationPlan.map((item) => (
            <div key={item.day} className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-black text-[color:var(--gold)]">{item.day}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        <a href="/komplaens" className="mt-6 inline-block rounded-full bg-[#111827] px-5 py-2.5 text-sm font-bold text-white">
          Запросить план мобилизации бригады
        </a>
      </article>
    </section>
  );
}
