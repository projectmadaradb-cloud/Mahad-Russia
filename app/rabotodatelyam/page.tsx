import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Решения для работодателей",
  description:
    "BOFU-страницы для работодателей: цены на аутстаффинг, найм бригад сварщиков и управляемая альтернатива дефициту кадров.",
  alternates: {
    canonical: "/rabotodatelyam",
  },
  openGraph: {
    title: "Решения для работодателей | Mahad Manpower Russia",
    description:
      "Пакет решений для EPC, генподрядчиков и логистических операторов: бюджет, скорость мобилизации, юридический контроль.",
    url: `${siteUrl}/rabotodatelyam`,
    locale: "ru_RU",
    type: "article",
  },
};

const pages = [
  {
    href: "/rabotodatelyam/autstaffing-stroiteley-ceny",
    title: "Аутстаффинг строителей: цены",
    text: "Ценовой капкан для финдиректора: ставки, налоги, окупаемость и сравнение с локальным наймом.",
  },
  {
    href: "/rabotodatelyam/nanyat-brigadu-svarshchikov",
    title: "Найм бригад сварщиков",
    text: "Готовая производственная единица 50+ специалистов: план мобилизации, НАКС-подготовка и контроль качества.",
  },
  {
    href: "/rabotodatelyam/alternativa-migrantam-sng",
    title: "Альтернатива дефициту кадров СНГ",
    text: "Риск-менеджмент для EPC-контракторов: легальность, прослеживаемость, предсказуемость вывода персонала.",
  },
];

export default function EmployerHubPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Employer Intent</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Решения для работодателей: <span className="text-[color:var(--gold)]">финансы, скорость, юридическая безопасность</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          Эти страницы созданы для финблока, тендерного отдела и операционных директоров. Здесь нет общих слов —
          только коммерческие расчеты, план мобилизации и контроль рисков под российские проекты.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {pages.map((item) => (
          <article key={item.href} className="metric-card p-7">
            <h2 className="text-xl font-black text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
            <Link href={item.href} className="mt-5 inline-block text-sm font-bold text-[color:var(--gold)]">
              Открыть страницу →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
