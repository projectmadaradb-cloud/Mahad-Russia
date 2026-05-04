import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности Mahad Manpower Russia: состав данных, цели обработки, правовые основания и права субъектов персональных данных.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Политика конфиденциальности | Mahad Manpower Russia",
    description:
      "Правила обработки персональных данных для пользователей и корпоративных клиентов Mahad Manpower Russia.",
    url: `${siteUrl}/privacy-policy`,
    locale: "ru_RU",
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Legal</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-3 text-sm text-gray-500">Дата вступления в силу: 04.05.2026</p>
      </div>

      <div className="metric-card p-7 text-sm leading-relaxed text-gray-600">
        <p>
          Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта
          mahadmanpowers.ru (далее — Сайт), оператором которого выступает Mahad Employment Services.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">1. Какие данные мы собираем</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Контактные данные, которые вы указываете в формах: имя, телефон, email, Telegram/WhatsApp.</li>
          <li>Корпоративные данные: компания, город/регион проекта, профиль вакансии, объем заявки.</li>
          <li>Технические данные: IP-адрес, тип устройства/браузера, базовые события посещения страниц.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">2. Цели обработки данных</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Обработка входящих заявок и обратная связь по B2B-запросам.</li>
          <li>Подготовка коммерческих предложений и кадровых планов мобилизации.</li>
          <li>Соблюдение требований законодательства и защита законных интересов компании.</li>
          <li>Аналитика качества сервиса и улучшение функциональности Сайта.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">3. Правовые основания</h2>
        <p className="mt-3">
          Обработка данных осуществляется на основании согласия субъекта персональных данных, исполнения
          договорных и преддоговорных обязательств, а также законных интересов оператора в рамках действующего
          законодательства.
        </p>

        <h2 className="mt-6 text-lg font-black text-gray-900">4. Передача и хранение данных</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Доступ к данным получают только уполномоченные сотрудники и подрядчики по принципу необходимости.</li>
          <li>Передача третьим лицам возможна только в рамках выполнения заявки или при наличии законного основания.</li>
          <li>Срок хранения определяется целью обработки, требованиями договора и обязательными нормами права.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">5. Права субъекта данных</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Запросить сведения об обработке ваших данных.</li>
          <li>Потребовать актуализацию, блокировку или удаление данных при наличии оснований.</li>
          <li>Отозвать согласие на обработку, если это не противоречит законным обязанностям оператора.</li>
        </ul>

        <h2 className="mt-6 text-lg font-black text-gray-900">6. Контакты по вопросам приватности</h2>
        <p className="mt-3">
          По вопросам обработки персональных данных вы можете обратиться по адресу:
          <a href="mailto:corporate@mahadmanpowers.ru" className="ml-1 font-semibold text-gray-800 hover:underline">
            corporate@mahadmanpowers.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
