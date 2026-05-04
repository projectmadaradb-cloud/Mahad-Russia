import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Cookie-политика",
  description:
    "Cookie-политика Mahad Manpower Russia: категории cookie, цели применения, сроки хранения и способы управления согласием.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie-политика | Mahad Manpower Russia",
    description:
      "Политика использования технических и аналитических cookie на сайте mahadmanpowers.ru.",
    url: `${siteUrl}/cookie-policy`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Legal</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Cookie-политика
        </h1>
        <p className="mt-3 text-sm text-gray-500">Дата вступления в силу: 04.05.2026</p>
      </div>

      <div className="metric-card p-7 text-sm leading-relaxed text-gray-600">
        <p>
          Мы используем cookie и аналогичные технологии, чтобы обеспечить стабильную работу сайта и анализировать
          его использование. Ниже описаны основные категории cookie.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">1. Технические cookie</h2>
        <p className="mt-3">
          Обязательные cookie, необходимые для корректной работы интерфейса, сохранения базовых предпочтений и
          обеспечения безопасности сессии.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">2. Аналитические cookie</h2>
        <p className="mt-3">
          Мы применяем обезличенную веб-аналитику для оценки посещаемости страниц, технической производительности
          и качества пользовательского пути.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">3. Срок хранения</h2>
        <p className="mt-3">
          Cookie могут храниться только в рамках текущей сессии или в течение ограниченного срока, достаточного
          для выполнения соответствующей функции.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">4. Управление cookie</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Вы можете удалить cookie через настройки браузера.</li>
          <li>Вы можете ограничить сохранение cookie на уровне браузера или устройства.</li>
          <li>Отключение технических cookie может повлиять на корректную работу отдельных разделов сайта.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">5. Контакты</h2>
        <p className="mt-3">
          Если у вас есть вопросы по применению cookie, напишите нам: 
          <a href="mailto:corporate@mahadmanpowers.ru" className="font-semibold text-gray-800 hover:underline">
            corporate@mahadmanpowers.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
