import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export const metadata: Metadata = {
  title: "Наем индийских рабочих в Россию для строительства и логистики",
  description:
    "Массовый наем индийского персонала в Россию: ускоренная мобилизация, база 350 000+ верифицированных специалистов и централизованная визовая обработка крупных партий.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Наем индийских рабочих в Россию для строительства и логистики",
    description:
      "Mahad Manpower закрывает кадровый дефицит мегапроектов: быстрый рекрутинг, визовое сопровождение и контролируемый вывод рабочих.",
    url: siteUrl,
    locale: "ru_RU",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mahad Employment Services: Представительство в России",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Международный B2B-оператор трудовой мобилизации из Индии для строительных и логистических проектов в Российской Федерации.",
  areaServed: "RU",
  knowsAbout: [
    "Наем индийских строительных рабочих",
    "Визовая мобилизация персонала",
    "Легальный вывод кадров в Россию",
    "EOR-аутстаффинг",
    "Комплаенс и трудовые соглашения",
  ],
  sameAs: [
    "https://mahadmanpowers.co.in",
    "https://wa.me/919219824357",
    "https://t.me/Mahadmanpowers",
    "https://www.youtube.com/@Mahadmanpower",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "продажи",
    availableLanguage: ["ru", "en"],
    areaServed: "RU",
  },
};

export default function HomePage() {
  return (
    <section className="space-y-12">

      {/* ── HERO: two-column ── */}
      <div className="grid items-center gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-16">

        {/* Left: copy */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
            B2B КАДРОВЫЙ ОПЕРАТОР · РОССИЯ
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.12] text-gray-900 md:text-5xl lg:text-6xl">
            Надёжные кадровые решения для российских мегапроектов{" "}
            <span style={{ color: "var(--gold)" }}>и масштабнее.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Мы закрываем дефицит труда там, где локальный рынок исчерпан: от стройплощадок федерального уровня до распределительных центров
            национальных ритейлеров. Mahad Manpower поднимает поток кандидатов, визирует партии и выводит людей в графике EPC-контрактов.
          </p>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full border-2" style={{ borderColor: "var(--gold)" }} />
              Лицензированный оператор
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full border-2" style={{ borderColor: "var(--gold)" }} />
              Верифицированные кандидаты
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="/uslugi/stroitelstvo" className="cta-black px-6 py-3 text-sm font-bold">
              Нанять рабочих
            </a>
            <a href="/komplaens" className="cta-gold px-6 py-3 text-sm font-bold">
              Схема мобилизации
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <a href="/komplaens" className="hover:text-gray-700">Закупочный директор? Запросить коммерческое предложение →</a>
          </p>
        </div>

        {/* Right: metric cards 2×2 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="metric-card p-6">
            <p className="text-4xl font-black text-gray-900">21–45</p>
            <p className="mt-2 text-sm text-gray-500">дней от визового клиринга до выхода на объект</p>
          </div>
          <div className="metric-card p-6">
            <p className="text-4xl font-black text-gray-900">15 000+</p>
            <p className="mt-2 text-sm text-gray-500">успешных международных размещений по всему миру</p>
          </div>
          <div className="metric-card p-6">
            <p className="text-4xl font-black text-gray-900">350 000+</p>
            <p className="mt-2 text-sm text-gray-500">верифицированных специалистов в активной базе</p>
          </div>
          <div className="metric-card p-6">
            <p className="text-4xl font-black text-gray-900">98%</p>
            <p className="mt-2 text-sm text-gray-500">успешных выводов персонала на объект</p>
          </div>
        </div>
      </div>

      {/* ── Feature cards ── */}
      <div className="grid gap-5 md:grid-cols-2">
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Доверие Arabtec, Deugro и ведущих EPC-контракторов</h2>
          <p className="mt-3 text-gray-500">
            Мы поставляли персонал крупнейшим глобальным подрядчикам (Arabtec и Deugro) на проектах в ОАЭ и Саудовской Аравии.
            Эту же логистическую мощь мы направляем в Российскую Федерацию без потери темпа и без компромисса по качеству.
          </p>
        </article>
        <article className="metric-card p-7">
          <h2 className="text-xl font-black text-gray-900">Сертифицированный индийский экспортёр труда</h2>
          <p className="mt-3 text-gray-500">
            Mahad Employment Services (UDYAM-UP-50-0250161) одобрена Министерством внешних дел Правительства Индии,
            ISO 9001-совместимые процессы и официальный партнёр Taj HR Services (лицензия B-3252/DEL/PER/1000+/5/11251/2025, действует до 2030 года).
          </p>
        </article>
      </div>

      {/* ── How it works ── */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Как это работает</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900">От заявки до выхода на объект за 21–45 дней</h2>
        <p className="mt-3 max-w-2xl text-gray-500">
          Наш процесс отработан на тысячах размещений в ОАЭ, Саудовской Аравии и других странах. Каждый этап стандартизирован,
          прозрачен и контролируется нашей командой в режиме реального времени.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Заявка и согласование", body: "Вы направляете нам техническое задание: специальность, количество, город, сроки. Мы подтверждаем наличие кандидатов и согласовываем коммерческие условия в течение 24 часов." },
            { step: "02", title: "Отбор и верификация", body: "Наша команда в Индии проверяет сертификаты, квалификацию и опыт каждого кандидата. Проводятся практические тесты и медицинское освидетельствование." },
            { step: "03", title: "Визовое оформление", body: "Мы собираем пакет документов, получаем выездной клиринг Министерства внешних дел Индии и оформляем рабочие визы через официальные каналы. Процесс занимает 14–30 дней." },
            { step: "04", title: "Мобилизация на объект", body: "Рабочие прибывают партиями под согласованный график. Передача производится через аккредитованного EOR-партнёра на территории РФ с полным пакетом трудовых документов." },
          ].map((item) => (
            <div key={item.step} className="metric-card p-6">
              <p className="text-3xl font-black" style={{ color: "var(--gold)" }}>{item.step}</p>
              <h3 className="mt-3 text-base font-black text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Industries ── */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Отрасли</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900">Строительство и логистика: наш основной фокус</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="metric-card p-7">
            <h3 className="text-xl font-black text-gray-900">Строительство и промышленные объекты</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Мы закрываем потребность генподрядчиков в каменщиках, сварщиках 6G/TIG/MIG, монтажниках металлоконструкций,
              скаффолдерах и операторах тяжёлой техники. Каждый кандидат имеет действующую сертификацию по ГОСТ и
              международным стандартам (NAKS, ISO 9606, IPAF). Мы работаем с EPC-контрактами, нефтегазовыми месторождениями,
              инфраструктурными мегапроектами и жилым строительством федерального масштаба.
            </p>
            <a href="/uslugi/stroitelstvo" className="mt-5 inline-block text-sm font-bold" style={{ color: "var(--gold)" }}>
              Строительные специальности →
            </a>
          </article>
          <article className="metric-card p-7">
            <h3 className="text-xl font-black text-gray-900">Логистика и складские операции</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Распределительные центры, холодовая цепь, портовые терминалы и дальнобойные перевозки требуют стабильного
              пополнения персонала. Мы поставляем водителей категории C+E, операторов погрузчиков с допусками,
              складских комплектовщиков и специалистов холодовой цепи. Наши кандидаты имеют необходимые допуски ФТС
              и соответствуют требованиям Роспотребнадзора.
            </p>
            <a href="/uslugi/logistika" className="mt-5 inline-block text-sm font-bold" style={{ color: "var(--gold)" }}>
              Логистические специальности →
            </a>
          </article>
        </div>
      </div>

      {/* ── Why India ── */}
      <div className="rounded-2xl bg-gray-50 p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Почему Индия</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900">Индийские рабочие для российских проектов: ключевые преимущества</h2>
        <p className="mt-4 max-w-3xl text-gray-500 leading-relaxed">
          Индия располагает крупнейшим в мире резервом квалифицированных строительных и логистических рабочих.
          Ежегодно более 500 000 индийских специалистов выезжают на работу за рубеж в рамках официальных программ трудовой мобильности.
          Для российских проектов это означает стабильный и масштабируемый источник кадров без зависимости от дефицитного локального рынка труда.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Высокая квалификация", body: "Индийские рабочие проходят профессиональную подготовку в государственных и частных центрах ITI (Industrial Training Institutes). Многие имеют опыт работы в ОАЭ, Катаре и Саудовской Аравии на объектах мирового класса." },
            { title: "Юридическая прозрачность", body: "Каждый выезд за рубеж регулируется Министерством внешних дел Индии. Документы верифицируются государством, что исключает нелегальный статус и снижает юридические риски для российского заказчика." },
            { title: "Адаптируемость к условиям", body: "Индийские специалисты имеют доказанный опыт работы в экстремальных климатических условиях: от +50°C в Персидском заливе до −40°C на нефтегазовых месторождениях Сибири. Акклиматизация проходит в штатном режиме." },
            { title: "Масштабируемость поставки", body: "Наша база насчитывает 350 000+ верифицированных специалистов. Мы можем вывести 50 рабочих за 21 день или 2 000 рабочих за квартал в зависимости от потребности проекта." },
            { title: "Конкурентная стоимость", body: "При сопоставимой квалификации стоимость привлечения индийских специалистов ниже, чем местный рынок труда в дефицитных регионах России. Это позволяет генподрядчику выдерживать бюджет без потери качества." },
            { title: "Готовность к сертификации", body: "Кандидаты заблаговременно проходят обучение и сдают квалификационные тесты по российским ГОСТ. К моменту выхода на объект каждый специалист имеет действующие допуски и прошёл медицинское освидетельствование." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-base font-black text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Geography ── */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">География присутствия</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900">Мы поставляем персонал в ключевые регионы России</h2>
        <p className="mt-4 max-w-2xl text-gray-500">
          Наши EOR-партнёры аккредитованы в пяти федеральных округах. Трудоустройство через местного работодателя
          обеспечивает полное соответствие Трудовому кодексу РФ без прямого российского юридического лица у Mahad.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { city: "Москва", desc: "Федеральные мегапроекты, высотное строительство, крупнейшие логистические хабы страны." },
            { city: "Санкт-Петербург", desc: "Портовая инфраструктура, реставрационные объекты, промышленные холдинги Северо-Запада." },
            { city: "Тюмень", desc: "Нефтегазовые месторождения ХМАО, трубопроводное строительство, буровые объекты." },
            { city: "Новосибирск", desc: "Железнодорожные и промышленные проекты, трансазиатские логистические коридоры." },
            { city: "Владивосток", desc: "Портовые терминалы, судоремонт, зоны опережающего развития Дальнего Востока." },
          ].map((item) => (
            <div key={item.city} className="metric-card p-5">
              <p className="text-base font-black text-gray-900">{item.city}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Часто задаваемые вопросы</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900">Вопросы генподрядчиков и HR-директоров</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              q: "Как быстро вы можете вывести рабочих на объект?",
              a: "Стандартный срок от подписания договора до выхода первой партии на объект составляет 21–45 дней. Он включает верификацию кандидатов, медосмотр, получение выездного клиринга МИД Индии и визовое оформление. Партии от 500 человек обрабатываются параллельными потоками для сокращения общего срока.",
            },
            {
              q: "Каков правовой статус рабочих в России?",
              a: "Все работники официально трудоустраиваются через аккредитованного российского EOR-партнёра (Employer of Record). EOR выступает формальным работодателем на территории РФ, заключает трудовые договоры, начисляет зарплату и уплачивает налоги. Заказчик получает кадровый ресурс без правовой нагрузки.",
            },
            {
              q: "Какие специальности вы поставляете?",
              a: "В строительстве: каменщики, сварщики (6G/TIG/MIG), монтажники металлоконструкций, скаффолдеры, операторы кранов и экскаваторов. В логистике: водители HGV (C+E), операторы погрузчиков, складские комплектовщики, персонал холодовой цепи и разнорабочие.",
            },
            {
              q: "Вы работаете легально по российскому законодательству?",
              a: "Да. Модель EOR-аутстаффинга полностью соответствует Трудовому кодексу РФ и Федеральному закону № 115-ФЗ о правовом положении иностранных граждан. Каждый рабочий имеет действующее разрешение на работу и зарегистрирован в налоговых органах.",
            },
            {
              q: "Какой минимальный заказ?",
              a: "Минимальная партия составляет 20 специалистов. Это позволяет экономически обосновать визовую логистику. Для пилотных заказов до 50 человек мы предлагаем ускоренную схему с фиксированной стоимостью и гарантией замены.",
            },
            {
              q: "Что происходит, если рабочий не справляется или заболевает?",
              a: "Мы поддерживаем резервный пул кандидатов прошедших верификацию. При выбытии любого специалиста мы обеспечиваем замену в течение 7–14 рабочих дней. Это гарантировано договором и не требует дополнительной оплаты за мобилизацию замены.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-black text-gray-900">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="rounded-2xl bg-gray-900 p-8 md:p-12 text-center">
        <h2 className="text-2xl font-black text-white md:text-3xl">Готовы обсудить вашу потребность в кадрах?</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Оставьте заявку и наш менеджер свяжется с вами в течение одного рабочего дня с предварительным планом мобилизации
          и расчётом сроков.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <a href="/komplaens" className="cta-gold px-8 py-3 text-sm font-bold">
            Оставить заявку
          </a>
          <a href="https://wa.me/919219824357" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-3 text-sm font-bold text-white hover:border-gray-400 transition">
            WhatsApp
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </section>
  );
}
