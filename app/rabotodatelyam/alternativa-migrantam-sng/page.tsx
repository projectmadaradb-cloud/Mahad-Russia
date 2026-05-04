import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Альтернатива мигрантам из СНГ | Управляемый импорт персонала в РФ",
  description:
    "Легальная альтернатива дефициту кадров: индийский персонал с прозрачной визовой моделью, eMigrate-контролем и предсказуемым выводом.",
  alternates: {
    canonical: "/rabotodatelyam/alternativa-migrantam-sng",
  },
  openGraph: {
    title: "Альтернатива мигрантам из СНГ | Управляемый импорт персонала в РФ",
    description:
      "Риск-ориентированная страница для EPC: прозрачность, комплаенс и стабильный кадровый поток на объект.",
    url: `${siteUrl}/rabotodatelyam/alternativa-migrantam-sng`,
    locale: "ru_RU",
    type: "article",
  },
};

const riskRows = [
  {
    metric: "Визовая прозрачность",
    india: "Маршрут eMigrate, централизованный контроль",
    cis: "Нерегулярная практика по подрядчикам",
  },
  {
    metric: "Документарная прослеживаемость",
    india: "Единый пакет, проверка до выезда",
    cis: "Разнородный уровень документирования",
  },
  {
    metric: "Стабильность партии",
    india: "Плановые волны и SLA",
    cis: "Высокая вариативность по выходам",
  },
  {
    metric: "Управляемость поставки",
    india: "Проектный PM и weekly-репорт",
    cis: "Зависит от локального посредника",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Почему эта модель считается более управляемой?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Поток персонала строится по волнам с документарной проверкой до выезда и централизованным контролем статуса каждого кандидата.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли легальные гарантии прозрачности?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Модель опирается на лицензированного партнера TAJ HR, требования eMigrate и формальную прослеживаемость кадрового пакета.",
      },
    },
    {
      "@type": "Question",
      name: "Как быстро можно заменить выпадающий объем на объекте?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В рамках согласованного SLA резервная волна готовится заранее, что сокращает окно кадрового дефицита.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Управляемый импорт персонала для EPC-проектов",
  serviceType: "B2B кадровая мобилизация с риск-контролем",
  provider: {
    "@type": "Organization",
    name: "Mahad Employment Services",
    url: siteUrl,
  },
  areaServed: "RU",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteUrl}/rabotodatelyam/alternativa-migrantam-sng`,
  },
};

export default function AlternativeToCisPage() {
  return (
    <section className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Риск-менеджмент</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Легальная замена кадровому дефициту: почему индийский персонал стабильнее рынка СНГ
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-500">
          Эта страница для EPC-контракторов, которым важны не лозунги, а управляемость рисков: прозрачный визовый
          контур, прогнозируемый выход на объект и контроль стабильности производственной смены.
        </p>
      </div>

      <article className="metric-card p-7">
        <h2 className="text-xl font-black text-gray-900">Индийская модель: полная визовая прозрачность</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Каждый специалист проходит предвыездную проверку и документарный контроль в рамках официального процесса.
          Модель исключает «серые» схемы и дает закупочному блоку проверяемый кадровый контур.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-500">
          <li>Лицензионный контур партнера: TAJ HR SERVICES (B-3252/DEL/PER/1000+/5/11251/2025).</li>
          <li>Государственный контроль индийской стороны через eMigrate-процессы.</li>
          <li>Пакет документов по каждому специалисту до выхода на объект в РФ.</li>
        </ul>
      </article>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-bold">Параметр</th>
              <th className="px-4 py-3 font-bold">Индийская модель</th>
              <th className="px-4 py-3 font-bold">Дефицитный рынок СНГ</th>
            </tr>
          </thead>
          <tbody>
            {riskRows.map((row) => (
              <tr key={row.metric} className="border-t border-gray-100">
                <td className="px-4 py-3 font-semibold text-gray-900">{row.metric}</td>
                <td className="px-4 py-3 text-gray-700">{row.india}</td>
                <td className="px-4 py-3 text-gray-700">{row.cis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="metric-card p-7">
        <h2 className="text-xl font-black text-gray-900">Для EPC и генподрядчиков</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Мы фокусируемся на снижении операционной неопределенности: заранее планируем волны, ведем weekly-репорты
          по статусу кандидатов и фиксируем точки контроля до мобилизации и после выхода на объект.
        </p>
        <a href="/komplaens" className="mt-5 inline-block rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-bold text-[#111]">
          Получить risk-report по вашему проекту
        </a>
      </article>
    </section>
  );
}
