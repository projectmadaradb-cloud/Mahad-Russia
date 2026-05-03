import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadPayload = {
  companyName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  requestType?: string;
  workforceCount?: string;
  city?: string;
  details?: string;
  consent?: boolean;
};

function isBlank(value: unknown): boolean {
  return typeof value !== "string" || value.trim().length === 0;
}

function buildHtml(payload: LeadPayload, id: string): string {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#111">${value}</td></tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0">
    <div style="background:#1a1a1a;padding:20px 24px">
      <span style="color:#c9a84c;font-size:20px;font-weight:900;letter-spacing:2px">MAHAD</span>
      <span style="color:#fff;font-size:20px;font-weight:900"> MANPOWER</span>
      <span style="margin-left:8px;background:rgba(255,255,255,0.1);color:#fff;font-size:10px;font-weight:700;letter-spacing:2px;padding:2px 8px;border-radius:4px">RUSSIA</span>
    </div>
    <div style="padding:20px 24px;background:#fffbf0;border-bottom:2px solid #c9a84c">
      <p style="margin:0;font-size:18px;font-weight:700;color:#1a1a1a">🆕 Новая заявка от клиента</p>
      <p style="margin:4px 0 0;font-size:12px;color:#888">ID: ${id} · ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} МСК</p>
    </div>
    <div style="padding:16px 24px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row("Компания", payload.companyName)}
        ${row("Контакт", payload.contactName)}
        ${row("Телефон", payload.phone)}
        ${row("Email", payload.email)}
        ${row("Telegram", payload.telegram)}
        ${row("Тип запроса", payload.requestType)}
        ${row("Кол-во сотрудников", payload.workforceCount)}
        ${row("Город / Объект", payload.city)}
      </table>
      ${payload.details ? `<div style="margin-top:16px;padding:12px;background:#f9f9f9;border-left:3px solid #c9a84c;border-radius:4px;font-size:14px;color:#333"><strong>Комментарий:</strong><br/>${payload.details}</div>` : ""}
    </div>
    <div style="padding:16px 24px;border-top:1px solid #eee;font-size:12px;color:#aaa">
      Отправлено через форму на mahadmanpowers.ru
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Неверный формат данных." }, { status: 400 });
  }

  if (isBlank(payload.companyName) || isBlank(payload.contactName) || isBlank(payload.phone) || isBlank(payload.email)) {
    return NextResponse.json({ error: "Заполните обязательные поля: компания, контакт, телефон, email." }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ error: "Необходимо согласие на обработку данных." }, { status: 400 });
  }

  const id = `LEAD-${Date.now()}`;

  // --- Zoho SMTP ---
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL ?? smtpUser;

  if (!smtpUser || !smtpPass) {
    // Credentials not configured — log and return success so form still works in dev
    console.warn("[lead-request] SMTP_USER / SMTP_PASS not set. Email skipped.");
    console.info("[lead-request]", { id, createdAt: new Date().toISOString(), ...payload });
    return NextResponse.json({ ok: true, id }, { status: 200 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    tls: { rejectUnauthorized: false },
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    // 1. Notify you
    await transporter.sendMail({
      from: `"Mahad Manpower Russia — Заявки" <${smtpUser}>`,
      to: notifyTo,
      replyTo: payload.email,
      subject: `[Заявка ${id}] ${payload.companyName} — ${payload.requestType ?? "новый запрос"}`,
      html: buildHtml(payload, id),
    });

    // 2. Auto-reply to the client
    if (payload.email) {
      await transporter.sendMail({
        from: `"Mahad Manpower Russia" <${smtpUser}>`,
        to: payload.email,
        subject: `Ваша заявка принята [${id}]`,
        html: `<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0">
    <div style="background:#1a1a1a;padding:20px 24px">
      <span style="color:#c9a84c;font-size:20px;font-weight:900;letter-spacing:2px">MAHAD</span>
      <span style="color:#fff;font-size:20px;font-weight:900"> MANPOWER</span>
      <span style="margin-left:8px;background:rgba(255,255,255,0.1);color:#fff;font-size:10px;font-weight:700;letter-spacing:2px;padding:2px 8px;border-radius:4px">RUSSIA</span>
    </div>
    <div style="padding:24px">
      <p style="margin:0;font-size:18px;font-weight:700;color:#1a1a1a">Уважаемый(-а) ${payload.contactName ?? 'Партнёр'},</p>
      <p style="margin:12px 0;font-size:14px;color:#444;line-height:1.6">
        Мы получили вашу заявку (номер <strong>${id}</strong>) и уже обрабатываем её.
        Наш менеджер свяжется с вами в течение <strong>1 рабочего дня</strong>.
      </p>
      <div style="background:#fffbf0;border-left:3px solid #c9a84c;padding:12px 16px;border-radius:4px;font-size:13px;color:#555">
        <p style="margin:0"><strong>Компания:</strong> ${payload.companyName ?? 'не указано'}</p>
        <p style="margin:4px 0 0"><strong>Тип запроса:</strong> ${payload.requestType ?? 'не указано'}</p>
        <p style="margin:4px 0 0"><strong>Город / Объект:</strong> ${payload.city ?? 'не указано'}</p>
      </div>
      <p style="margin:20px 0 4px;font-size:13px;color:#444">Если у вас есть срочные вопросы:</p>
      <p style="margin:0;font-size:13px;color:#444">
        ✉️ <a href="mailto:corporate@mahadmanpowers.ru" style="color:#c9a84c">corporate@mahadmanpowers.ru</a><br/>
        💬 <a href="https://t.me/Mahadmanpowers" style="color:#c9a84c">@Mahadmanpowers</a>
      </p>
    </div>
    <div style="padding:12px 24px;border-top:1px solid #eee;background:#fafafa;font-size:11px;color:#aaa">
      Mahad Employment Services &middot; mahadmanpowers.ru &middot; mahadmanpowers.co.in
    </div>
  </div>
</body></html>`,
      });
    }
  } catch (err) {
    console.error("[lead-request] SMTP error:", err);
    return NextResponse.json(
      { error: "Ошибка отправки. Напишите напрямую: corporate@mahadmanpowers.ru" },
      { status: 500 }
    );
  }

  console.info("[lead-request] sent", id);
  return NextResponse.json({ ok: true, id }, { status: 200 });
}
