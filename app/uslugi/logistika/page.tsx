import type { Metadata } from "next";
import TrustBadges from "@/src/components/TrustBadges";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Логистический персонал из Индии | Водители грузовиков, операторы погрузчиков, холодовая цепь",
  description:
    "Поставка логистических специалистов из Индии: водители HGV, операторы погрузчиков, комплектовщики, персонал холодовой цепи. 350 000+ база, EOR-модель для РФ.",
  alternates: {
    canonical: "/uslugi/logistika",
  },
  openGraph: {
    title: "Логистический персонал из Индии для России | Mahad Manpower",
    description:
      "Mahad Manpower поставляет верифицированных логистических специалистов через EOR-аутстаффинг в РФ. База 350 000+, 21–45 дней до выхода на объект.",
    url: `${siteUrl}/uslugi/logistika`,
    locale: "ru_RU",
    type: "article",
  },
};

const logisticsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Поставка логистического персонала из Индии в Россию",
  serviceType: "Международный B2B-подбор логистического персонала",
  provider: {
    "@type": "Organization",
    name: "Mahad Employment Services",
    url: siteUrl,
  },
  areaServed: "RU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Логистические специальности: верифицированный персонал",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Водители международных грузовиков",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Операторы погрузчиков",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Складские комплектовщики",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Персонал холодовой цепи",
        },
      },
    ],
  },
};

export default function LogisticsServicePage() {
  return (
    <section className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Логистика и склад</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          Логистический персонал из Индии:<br />
          <span style={{ color: "var(--gold)" }}>непрерывная цепочка поставок, без кадрового разрыва.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
          Дефицит водителей, операторов и складского персонала останавливает логистические потоки. Мы формируем
          управляемые кадровые волны из базы 350 000+ верифицированных специалистов и выводим их на объект
          через аккредитованных российских EOR-партнёров в течение 21–45 дней.
        </p>
      </div>

      {/* Capacity metrics */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">350 000+</p>
          <p className="mt-1 text-sm text-gray-500">верифицированных специалистов в активной базе</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">500–2 000</p>
          <p className="mt-1 text-sm text-gray-500">на вывод в квартал</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">21–45 дней</p>
          <p className="mt-1 text-sm text-gray-500">до выхода на объект</p>
        </div>
      </div>

      {/* Trade grid */}
      <div>
        <h2 className="mb-4 text-2xl font-black text-gray-900">Логистические специальности</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Водители HGV (тяжёлые грузовики)</h3>
            <p className="mt-2 text-sm text-gray-500">
              Дальнобойные и региональные маршруты. Все кандидаты имеют международные права категории C/E,
              медицинский допуск и чистую историю вождения.
            </p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Операторы погрузчиков</h3>
            <p className="mt-2 text-sm text-gray-500">
              Сертифицированные операторы вилочных и ричтрак погрузчиков для распределительных центров,
              портов и промышленных складов.
            </p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Складские комплектовщики</h3>
            <p className="mt-2 text-sm text-gray-500">
              Warehouse Pickers для высокоинтенсивных операций: приём, сортировка, отбор заказов и
              отгрузка в многосменном режиме работы.
            </p>
          </div>
          <div className="metric-card p-5">
            <h3 className="font-black text-gray-900">Персонал холодовой цепи</h3>
            <p className="mt-2 text-sm text-gray-500">
              Cold Chain специалисты для продовольственной и фармацевтической логистики: обслуживание
              холодильных камер, мониторинг температурного режима, стерильная упаковка.
            </p>
          </div>
        </div>
      </div>

      {/* EOR model note */}
      <div className="rounded-2xl border-l-4 bg-gray-50 p-6" style={{ borderColor: "var(--gold)" }}>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Правовая модель для РФ</p>
        <p className="mt-2 text-gray-700">
          Весь персонал трудоустраивается через аккредитованных российских EOR-партнёров (Employer of Record).
          Заказчик получает полностью готовый кадровый ресурс без юридической нагрузки по иностранным
          трудовым договорам. Поставка одобрена МИД Индии и соответствует рамочным соглашениям Индия–Россия.
        </p>
      </div>


      {/* ── B2B Enterprise keywords section ── */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Массовый найм разнорабочих из Индии на завод</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Фабрики, распределительные центры и промышленные склады испытывают системный дефицит логистического и складского персонала. Мы формируем управляемые кадровые волны из базы 350&nbsp;000+ верифицированных специалистов и выводим их на объект через EOR-аутстаффинг в 21–45 дней.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-black text-gray-900">Контракт на поставку индийских рабочих для логистики</h2>
          <p className="mt-2 mb-4 text-sm text-gray-500">Ориентировочные сроки SLA для корпоративных заказчиков:</p>
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
                  { batch: "500–1\u00a0000 чел.", days: "30–40 дней", model: "EOR + прямой контракт", status: "Доступно" },
                  { batch: "1\u00a0000+ чел.", days: "35–45 дней", model: "Проектный EOR-аутстаффинг", status: "По запросу" },
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
                { name: "Водители HGV",            slug: "hgv-drivers" },
                { name: "Операторы погрузчиков",   slug: "forklift-operators" },
                { name: "Складской персонал",      slug: "warehouse-pickers" },
                { name: "Холодовая цепь",          slug: "cold-chain" },
                { name: "Разнорабочие",            slug: "general-workers" },
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
                        href={`/uslugi/logistika/${trade.slug}/${city.slug}`}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logisticsSchema) }}
      />
    </section>
  );
}
