import type { Metadata } from "next";
import TrustBadges from "@/src/components/TrustBadges";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Строительный персонал из Индии для России | Сварщики, скаффолдеры, операторы техники",
  description:
    "Поставка строительных специалистов из Индии: каменщики, стальщики, сварщики 6G/TIG/MIG, сертифицированные скаффолдеры, операторы тяжёлой техники. 350 000+ база, вывод 500–2 000/квартал.",
  alternates: {
    canonical: "/uslugi/stroitelstvo",
  },
  openGraph: {
    title: "Строительный персонал из Индии для России | Mahad Manpower",
    description:
      "Mahad Manpower поставляет верифицированных строительных специалистов для EPC-контракторов РФ. База 350 000+, 21–45 дней до выхода на объект.",
    url: `${siteUrl}/uslugi/stroitelstvo`,
    locale: "ru_RU",
    type: "article",
  },
};

const constructionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Поставка строительного персонала из Индии в Россию",
  serviceType: "Международный B2B-подбор строительного персонала",
  provider: {
    "@type": "Organization",
    name: "Mahad Employment Services",
    url: siteUrl,
  },
  areaServed: "RU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Строительные специальности: верифицированный персонал",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Каменщики",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Монтажники металлоконструкций",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Сварщики 6G/TIG/MIG",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Сертифицированные скаффолдеры",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Операторы тяжёлой техники",
        },
      },
    ],
  },
};

export default function ConstructionServicePage() {
  return (
    <section className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Строительство</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Строительный персонал из Индии:<br />
          <span style={{ color: "var(--gold)" }}>верифицированный, готовый к выводу.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          Мы поставляем не абстрактных &laquo;рабочих&raquo;, а сертифицированных специалистов конкретных строительных
          профессий из базы 350 000+ верифицированных кандидатов. Производственные бригады формируются под
          календарно-сетевой график вашего объекта.
        </p>
      </div>

      {/* Capacity metrics */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">350 000+</p>
          <p className="mt-1 text-sm text-gray-500">верифицированных специалистов в базе</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">500–2 000</p>
          <p className="mt-1 text-sm text-gray-500">специалистов на вывод в квартал</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">21–45 дней</p>
          <p className="mt-1 text-sm text-gray-500">от визового клиринга до выхода на объект</p>
        </div>
      </div>

      {/* Trade grid */}
      <div>
        <h2 className="mb-4 text-2xl font-black text-gray-900">Строительные специальности</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Каменщики</h3>
            <p className="mt-2 text-sm text-gray-500">Кирпичная кладка, перегородки, фасадные работы. Бригады под поточный контроль сменной выработки.</p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Монтажники металлоконструкций</h3>
            <p className="mt-2 text-sm text-gray-500">Стальщики для монолитных циклов: вязка арматуры, сборка каркасов, подготовка к бетонированию.</p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Сварщики 6G / TIG / MIG</h3>
            <p className="mt-2 text-sm text-gray-500">Сертифицированные сварщики для трубопроводов, металлоконструкций и ответственных узлов соединений.</p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Сертифицированные скаффолдеры</h3>
            <p className="mt-2 text-sm text-gray-500">Специалисты по сборке и обслуживанию строительных лесов с международными сертификатами безопасности.</p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Операторы тяжёлой техники</h3>
            <p className="mt-2 text-sm text-gray-500">Экскаваторщики, машинисты кранов, операторы погрузчиков. Международные права и медицинский допуск.</p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Общестроительные рабочие</h3>
            <p className="mt-2 text-sm text-gray-500">Массовое закрытие вспомогательных ролей, поддержка темпа генподрядчика на всех стадиях.</p>
          </div>
        </div>
      </div>

      {/* Trust */}
      <div className="rounded-2xl border-l-4 bg-gray-50 p-6" style={{ borderColor: "var(--gold)" }}>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Подтверждённый международный опыт</p>
        <p className="mt-2 text-gray-700">
          Те же строительные специальности мы поставляли для крупнейших глобальных подрядчиков (Arabtec и Deugro) на проектах в ОАЭ и Саудовской Аравии.
          Операционную систему мобилизации и верификации мы переносим на Российскую Федерацию без изменений, с полным соответствием EOR-контуру и требованиям Министерства внешних дел Индии.
        </p>
      </div>


      {/* ── B2B Enterprise keywords section ── */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Аутстаффинг индийского персонала для стройки</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Мы поставляем не отдельных специалистов, а готовые производственные бригады под ваш календарно-сетевой график. Весь персонал трудоустраивается через аккредитованных российских EOR-партнёров — заказчик получает кадровый ресурс без юридической нагрузки по иностранным трудовым договорам.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-black text-gray-900">Стоимость массового найма рабочих из Индии</h2>
          <p className="mt-2 mb-4 text-sm text-gray-500">Ориентировочные сроки вывода для EPC-контракторов. Точные цифры — по запросу.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-widest text-gray-500">Батч</th>
                  <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-widest text-gray-500">Срок вывода</th>
                  <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-widest text-gray-500">Модель</th>
                  <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-widest text-gray-500">Статус</th>
                </tr>
              </thead>
              <tbody>
                {([
                  { batch: "50–100 чел.", days: "21–25 дней", model: "EOR-аутстаффинг", status: "Доступно" },
                  { batch: "200–500 чел.", days: "25–35 дней", model: "EOR-аутстаффинг", status: "Доступно" },
                  { batch: "500–1 000 чел.", days: "30–40 дней", model: "EOR + прямой контракт", status: "Доступно" },
                  { batch: "1 000+ чел.", days: "35–45 дней", model: "Проектный EOR-аутстаффинг", status: "По запросу" },
                ] as { batch: string; days: string; model: string; status: string }[]).map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="py-2 px-3 font-semibold text-gray-900">{row.batch}</td>
                    <td className="py-2 px-3 text-gray-700">{row.days}</td>
                    <td className="py-2 px-3 text-gray-700">{row.model}</td>
                    <td className="py-2 px-3">
                      <span className="inline-block rounded px-2 py-0.5 text-xs font-bold" style={{ background: "var(--gold)", color: "#111" }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-gray-900">Поставка рабочей силы из Индии для нефтегаза</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Нефтегазовые месторождения Тюмени и ХМАО испытывают один из наибольших кадровых дефицитов в отрасли. Мы поставляем сварщиков 6G, слесарей и операторов тяжёлой техники для объектов на месторождениях в режиме вахты.
            Подробнее: <a href="/uslugi/stroitelstvo/svarshchiki/tyumen" className="text-[color:var(--gold)] hover:brightness-125">сварщики в Тюмени</a>,
            {" "}<a href="/uslugi/stroitelstvo/heavy-operators/surgut" className="text-[color:var(--gold)] hover:brightness-125">операторы в Сургуте</a>.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <TrustBadges />

      {/* ── Programmatic pages navigation grid ── */}
      <div>
        <h2 className="mb-2 text-2xl font-black text-gray-900">Специальность × Город</h2>
        <p className="mb-5 text-sm text-gray-500">Выберите специальность и регион для подробной информации о найме.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="py-2 pr-4 text-left text-xs font-bold uppercase tracking-widest text-gray-400">Специальность</th>
                {["Москва","Санкт-Петербург","Тюмень","Новосибирск","Владивосток","Екатеринбург","Сургут","Челябинск","Уфа","Казань"].map(city => (
                  <th key={city} className="px-3 py-2 text-center text-xs font-bold uppercase tracking-widest text-gray-400">{city}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                { name: "Каменщики",                slug: "kamenchiki" },
                { name: "Сварщики",                 slug: "svarshchiki" },
                { name: "Монтажники",               slug: "montazhniki" },
                { name: "Скаффолдеры",              slug: "scaffolders" },
                { name: "Операторы техники",        slug: "heavy-operators" },
              ] as { name: string; slug: string }[]).map((trade, i) => (
                <tr key={trade.slug} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 pr-4 font-semibold text-gray-800">{trade.name}</td>
                  {([
                    { label: "МСК",  slug: "moskva" },
                    { label: "СПБ",  slug: "sankt-peterburg" },
                    { label: "ТЮМ",  slug: "tyumen" },
                    { label: "НСК",  slug: "novosibirsk" },
                    { label: "ВЛД",  slug: "vladivostok" },
                    { label: "ЕКБ",  slug: "ekaterinburg" },
                    { label: "СГТ",  slug: "surgut" },
                    { label: "ЧЛБ",  slug: "chelyabinsk" },
                    { label: "УФА",  slug: "ufa" },
                    { label: "КЗН",  slug: "kazan" },
                  ] as { label: string; slug: string }[]).map(city => (
                    <td key={city.slug} className="px-3 py-2 text-center">
                      <a
                        href={`/uslugi/stroitelstvo/${trade.slug}/${city.slug}`}
                        className="inline-block rounded px-2 py-1 text-xs font-semibold transition hover:brightness-110"
                        style={{ background: "var(--gold)", color: "#111" }}
                      >
                        {city.label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constructionSchema) }}
      />
    </section>
  );
}
