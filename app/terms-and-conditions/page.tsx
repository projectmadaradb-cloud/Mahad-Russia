import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Условия использования",
  description:
    "Условия использования сайта Mahad Manpower Russia: права и обязанности пользователей, ограничения ответственности и применимое право.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Условия использования | Mahad Manpower Russia",
    description:
      "Публичные условия и правила использования сайта для корпоративных клиентов и посетителей.",
    url: `${siteUrl}/terms-and-conditions`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Legal</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Условия использования
        </h1>
        <p className="mt-3 text-sm text-gray-500">Дата вступления в силу: 04.05.2026</p>
      </div>

      <div className="metric-card p-7 text-sm leading-relaxed text-gray-600">
        <h2 className="text-lg font-black text-gray-900">1. Общие положения</h2>
        <p className="mt-3">
          Используя сайт mahadmanpowers.ru, вы подтверждаете согласие с настоящими Условиями. Если вы не
          согласны с Условиями, пожалуйста, прекратите использование Сайта.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">2. Назначение сайта</h2>
        <p className="mt-3">
          Сайт предназначен для предоставления информации о B2B-услугах в сфере международной трудовой
          мобилизации и для приема корпоративных запросов.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">3. Интеллектуальная собственность</h2>
        <p className="mt-3">
          Все тексты, элементы дизайна, логотипы, изображения, структура страниц и иные материалы Сайта защищены
          правами правообладателя. Копирование и использование материалов без письменного согласия запрещено,
          за исключением случаев, прямо предусмотренных законом.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">4. Ограничение ответственности</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Информация на Сайте носит информационный характер и не является публичной офертой.</li>
          <li>Компания не гарантирует непрерывную и безошибочную работу Сайта в любой момент времени.</li>
          <li>Компания не несет ответственности за косвенные убытки, возникшие из использования Сайта.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">5. Внешние ссылки</h2>
        <p className="mt-3">
          Сайт может содержать ссылки на сторонние ресурсы. Компания не контролирует их содержание и не несет
          ответственности за политику конфиденциальности и практики третьих лиц.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">6. Применимое право</h2>
        <p className="mt-3">
          К настоящим Условиям применяется право, действующее по месту регистрации оператора. Споры подлежат
          урегулированию путем переговоров, а при недостижении согласия — в компетентном суде по применимой
          юрисдикции.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">7. Контакты</h2>
        <p className="mt-3">
          По вопросам настоящих Условий: 
          <a href="mailto:corporate@mahadmanpowers.ru" className="font-semibold text-gray-800 hover:underline">
            corporate@mahadmanpowers.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
