import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Правовая информация",
  description:
    "Правовая документация Mahad Manpower Russia: политика конфиденциальности, условия использования, cookie-политика и отказ от ответственности.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Правовая информация | Mahad Manpower Russia",
    description:
      "Полный набор юридических документов для пользователей и корпоративных заказчиков Mahad Manpower Russia.",
    url: `${siteUrl}/legal`,
    locale: "ru_RU",
    type: "article",
  },
};

const legalPages = [
  {
    href: "/privacy-policy",
    title: "Политика конфиденциальности",
    text: "Порядок обработки персональных данных, сроки хранения, права субъектов данных и каналы связи по вопросам приватности.",
  },
  {
    href: "/terms-and-conditions",
    title: "Условия использования",
    text: "Правила использования сайта, ограничения ответственности, интеллектуальная собственность и применимое право.",
  },
  {
    href: "/cookie-policy",
    title: "Cookie-политика",
    text: "Описание используемых технических и аналитических cookie, сроки действия и способы управления согласием.",
  },
  {
    href: "/disclaimer",
    title: "Отказ от ответственности",
    text: "Ограничения по использованию материалов сайта, статус информационных публикаций и условия B2B-взаимодействия.",
  },
];

export default function LegalHubPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Юридический центр</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Правовая информация <span className="text-[color:var(--gold)]">Mahad Manpower Russia</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          На этой странице собраны все основные правовые документы, регулирующие использование сайта и
          взаимодействие с нашей командой. Актуальная версия документов действует с 04.05.2026.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {legalPages.map((item) => (
          <article key={item.href} className="metric-card p-7">
            <h2 className="text-xl font-black text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
            <Link href={item.href} className="mt-5 inline-block text-sm font-bold" style={{ color: "var(--gold)" }}>
              Открыть документ →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
