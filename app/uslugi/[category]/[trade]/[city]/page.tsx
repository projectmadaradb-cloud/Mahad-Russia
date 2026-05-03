import type { Metadata } from "next";
import matrixData from "@/data/matrix.json";
import { generatePageContent } from "@/src/utils/contentGenerator";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

interface PageProps {
  params: {
    category: string;
    trade: string;
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = generatePageContent(
    {
      trade: params.trade,
      city: params.city,
      category: params.category
    },
    siteUrl
  );

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${siteUrl}/uslugi/${params.category}/${params.trade}/${params.city}`,
      locale: "ru_RU",
      type: "article"
    },
    alternates: {
      canonical: `/uslugi/${params.category}/${params.trade}/${params.city}`
    }
  };
}

export async function generateStaticParams() {
  // PHASE 1 CANARY: Only generate 50 pages (10 trades × 5 cities)
  const params: Array<{
    category: string;
    trade: string;
    city: string;
  }> = [];

  // Iterate through trades
  for (const trade of matrixData.trades) {
    // Iterate through cities
    for (const city of matrixData.cities) {
      // Only push if PHASE 1 is active and we haven't exceeded the limit
      if (matrixData.active_phase && params.length < matrixData.page_build_limit) {
        params.push({
          category: trade.category,
          trade: trade.slug,
          city: city.slug
        });
      }
    }
  }

  return params;
}

export default function TradeCityPage({ params }: PageProps) {
  const content = generatePageContent(
    {
      trade: params.trade,
      city: params.city,
      category: params.category
    },
    siteUrl
  );

  const tradeData = matrixData.trades.find((t) => t.slug === params.trade);
  const cityData = matrixData.cities.find((c) => c.slug === params.city);

  if (!tradeData || !cityData) {
    return <div>Page not found</div>;
  }

  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
          {params.category === "stroitelstvo" ? "Строительство" : "Логистика"}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
          {content.h1}
          <br />
          <span style={{ color: "var(--gold)" }}>верифицированный персонал, готовый к выводу.</span>
        </h1>
      </div>

      {/* Key metrics */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">350 000+</p>
          <p className="mt-1 text-sm text-gray-500">в активной базе</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">500–2 000</p>
          <p className="mt-1 text-sm text-gray-500">специалистов/квартал</p>
        </div>
        <div className="metric-card p-6 text-center">
          <p className="text-3xl font-black text-gray-900">21–45 дней</p>
          <p className="mt-1 text-sm text-gray-500">до выхода на объект</p>
        </div>
      </div>

      {/* Trade details card */}
      <div className="metric-card p-7">
        <h2 className="text-xl font-black text-gray-900">{tradeData.nameRu}</h2>
        <p className="mt-2 text-sm text-gray-500">{tradeData.descriptionRu}</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-600">
          Требуемая сертификация
        </p>
        <p className="mt-1 text-sm text-gray-700">{tradeData.certificationRu}</p>
      </div>

      {/* Regional context card */}
      <div className="metric-card p-7">
        <h2 className="text-xl font-black text-gray-900">Рынок {cityData.nameRu}</h2>
        <p className="mt-2 text-sm text-gray-500">{cityData.marketContext}</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-600">
          Логистический контекст
        </p>
        <p className="mt-1 text-sm text-gray-700">{cityData.logisticContext}</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-600">
          Климат и условия
        </p>
        <p className="mt-1 text-sm text-gray-700">{cityData.climateContext}</p>
      </div>

      {/* Main content */}
      <div className="prose prose-sm max-w-none space-y-4">
        {content.body.map((paragraph, idx) => (
          <p key={idx} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Call to action */}
      <div className="rounded-2xl border-l-4 bg-gray-50 p-6" style={{ borderColor: "var(--gold)" }}>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Начать процесс найма
        </p>
        <p className="mt-2 text-gray-700">
          Отправьте запрос на наш корпоративный адрес <strong>corporate@mahadmanpowers.ru</strong> или
          свяжитесь через{" "}
          <a href="https://wa.me/919219824357" className="text-[color:var(--gold)] hover:brightness-125">
            WhatsApp
          </a>
          . Мы подготовим первичный план мобилизации и сроки за 24 часа.
        </p>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content.jsonLd) }}
      />
    </section>
  );
}
