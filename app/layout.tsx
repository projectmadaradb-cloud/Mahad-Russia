import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CookieConsent from "@/src/components/CookieConsent";
import FloatingTelegramButton from "@/src/components/FloatingTelegramButton";
import NewsletterForm from "@/src/components/NewsletterForm";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";
const yandexVerification =
  process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? "PASTE_YANDEX_VERIFICATION_CODE";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahad Manpower Russia | Индийский персонал для крупных проектов",
    template: "%s | Mahad Manpower Russia",
  },
  description:
    "Mahad Manpower закрывает дефицит кадров для мегапроектов России: массовый подбор, визовая мобилизация и контролируемый вывод персонала в сжатые сроки.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Mahad Manpower Russia",
    title: "Mahad Manpower Russia | Индийский персонал для крупных проектов",
    description:
      "Системный наем индийских рабочих для строительства и логистики в России: соответствие законодательству, визовое сопровождение и быстрый вывод на объект.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content={yandexVerification} />
        <meta name="google-site-verification" content="p68PffHFYABmG12SuubVEc7E_JL9ZgCkYH21lc0C3qE" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="81d33919-dfe5-4bc6-8a53-02789487e8eb"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Header — full viewport width, white */}
        <header className="w-full border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-[110px] w-full max-w-7xl items-center justify-between px-6">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image
                src="/logo.avif"
                alt="Mahad Manpower"
                width={240}
                height={96}
                className="h-[96px] w-auto object-contain"
                priority
              />
              <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white">RU</span>
            </Link>
            <nav className="flex items-center gap-1 text-[15px] font-medium text-gray-700">
              <Link href="/o-nas" className="rounded-md px-3 py-2 hover:bg-gray-100">О нас</Link>
              <Link href="/komplaens" className="rounded-md px-3 py-2 hover:bg-gray-100">Легальность и визы</Link>
              <Link href="/uslugi/stroitelstvo" className="rounded-md px-3 py-2 hover:bg-gray-100">Строительство</Link>
              <Link href="/uslugi/logistika" className="rounded-md px-3 py-2 hover:bg-gray-100">Логистика</Link>
              <a href="/uslugi/stroitelstvo" className="nav-cta ml-4 px-5 py-2 text-[15px] font-bold">Нанять рабочих</a>
              <a href="/komplaens" className="cta-gold ml-2 px-5 py-2 text-[15px] font-bold">Оставить заявку</a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">{children}</main>

        {/* Footer — dark theme matching mahadmanpowers.co.in */}
        <footer className="w-full bg-[#0a0a0a] text-gray-300">

          {/* Main footer columns */}
          <div className="mx-auto w-full max-w-7xl px-6 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Услуги</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/uslugi/stroitelstvo" className="hover:text-white">Строительные рабочие</Link></li>
                  <li><Link href="/uslugi/logistika" className="hover:text-white">Логистика и склад</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">Массовый найм</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">Визовое сопровождение</Link></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Компания</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/o-nas" className="hover:text-white">О нас</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">Легальность и визы</Link></li>
                  <li><Link href="/o-nas" className="hover:text-white">Наша команда</Link></li>
                  <li><Link href="/o-nas" className="hover:text-white">Партнёрство</Link></li>
                  <li><a href="https://mahadmanpowers.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white" style={{ color: "var(--gold)" }}>Главный сайт →</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Работодателям</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/uslugi/stroitelstvo" style={{ color: "var(--gold)" }} className="hover:brightness-125">Нанять рабочих →</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">Оставить заявку</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">GCC-опыт</Link></li>
                  <li><Link href="/komplaens" className="hover:text-white">EOR-синхронизация</Link></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Контакт</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="text-gray-400">Лакхнау, Уттар-Прадеш, Индия</li>
                  <li><a href="https://wa.aisensy.com/+919219824357" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: +91 92198 24357</a></li>
                  <li><a href="tel:+917524937773" className="hover:text-white">Тел: +91 75249 37773</a></li>
                  <li><a href="https://t.me/Mahadmanpowers" target="_blank" rel="noopener noreferrer" className="hover:text-white">Telegram: @Mahadmanpowers</a></li>
                  <li><a href="mailto:corporate@mahadmanpowers.ru" className="hover:text-white">corporate@mahadmanpowers.ru</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <NewsletterForm />

          {/* Social icons row */}
          <div className="mx-auto w-full max-w-7xl px-6 pb-8">
            <div className="flex items-center gap-3">
              <span className="mr-1 text-xs font-bold uppercase tracking-widest text-gray-500">Мы в сети</span>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919219824357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.855L.057 23.882a.5.5 0 0 0 .611.61l6.098-1.597A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.947 9.947 0 0 1-5.084-1.394l-.364-.215-3.77.988.935-3.686-.237-.379A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Mahadmanpowers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#229ED9]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#229ED9]">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+917524937773"
                aria-label="Позвонить"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-400/20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" style={{ color: "var(--gold)" }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Mahadmanpower"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#FF0000]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#FF0000]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom bar */}
          <div className="mx-auto w-full max-w-7xl px-6 py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-black" style={{ color: "var(--gold)" }}>MAHAD</span>
                <span className="text-base font-black text-white">MANPOWER</span>
                <span className="ml-1 rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">RUSSIA</span>
              </div>
              <p className="text-xs text-gray-600">
                © 2026 Mahad Manpower. Все права защищены. Лицензированный B2B-оператор.{" "}
                <a href="https://mahadmanpowers.co.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">mahadmanpowers.co.in</a>
              </p>
              <p className="mt-1 max-w-3xl text-[10px] leading-relaxed text-gray-600">
                Mahad Employment Services (UDYAM-UP-50-0250161) · Партнёр по рекрутингу: TAJ HR SERVICES, лицензия B-3252/DEL/PER/1000+/5/11251/2025, действует до 2030.
                Одобрено Министерством внешних дел Правительства Индии. Не аффилировано с Mahad Manpower LLC, Mahad Manpower Pvt. Ltd. или Mahad Manpower Co. W.L.L.
              </p>
            </div>
          </div>

        </footer>
        <CookieConsent />
        <FloatingTelegramButton />
      </body>
    </html>
  );
}
