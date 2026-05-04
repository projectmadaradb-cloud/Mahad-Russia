import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Отказ от ответственности",
  description:
    "Отказ от ответственности Mahad Manpower Russia: статус материалов сайта, ограничения гарантий и ответственность сторон.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Отказ от ответственности | Mahad Manpower Russia",
    description:
      "Ограничения ответственности и правовой статус информации, опубликованной на сайте mahadmanpowers.ru.",
    url: `${siteUrl}/disclaimer`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function DisclaimerPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Legal</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Отказ от ответственности
        </h1>
        <p className="mt-3 text-sm text-gray-500">Дата вступления в силу: 04.05.2026</p>
      </div>

      <div className="metric-card p-7 text-sm leading-relaxed text-gray-600">
        <h2 className="text-lg font-black text-gray-900">1. Информационный характер материалов</h2>
        <p className="mt-3">
          Все материалы на Сайте предоставляются исключительно в информационных целях и не являются юридической,
          финансовой или кадровой консультацией, а также не образуют публичной оферты.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">2. Отсутствие гарантий</h2>
        <p className="mt-3">
          Компания прикладывает разумные усилия для актуальности информации, однако не гарантирует абсолютную
          полноту, точность и непрерывную доступность материалов и сервисов Сайта.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">3. Ограничение ответственности</h2>
        <p className="mt-3">
          Компания не несет ответственности за убытки, возникшие в результате использования или невозможности
          использования Сайта, включая косвенные, случайные и сопутствующие убытки.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">4. Ответственность за решения</h2>
        <p className="mt-3">
          Любые управленческие, закупочные или кадровые решения, принятые на основании материалов Сайта,
          пользователь принимает самостоятельно и под свою ответственность.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">5. Контакты</h2>
        <p className="mt-3">
          По вопросам, связанным с данным документом, обращайтесь: 
          <a href="mailto:corporate@mahadmanpowers.ru" className="font-semibold text-gray-800 hover:underline">
            corporate@mahadmanpowers.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
