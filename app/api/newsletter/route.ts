import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let email: string;

  try {
    const body = await request.json();
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Неверный формат данных." }, { status: 400 });
  }

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Укажите корректный email." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL ?? smtpUser;

  if (!smtpUser || !smtpPass) {
    console.info("[newsletter] new subscriber (SMTP not configured):", email);
    return NextResponse.json({ ok: true }, { status: 200 });
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
      from: `"Mahad Manpower Russia — Рассылка" <${smtpUser}>`,
      to: notifyTo,
      replyTo: email,
      subject: `[Подписка] Новый подписчик: ${email}`,
      html: `<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px">
  <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0">
    <div style="background:#1a1a1a;padding:16px 24px">
      <span style="color:#c9a84c;font-size:18px;font-weight:900">MAHAD</span>
      <span style="color:#fff;font-size:18px;font-weight:900"> MANPOWER</span>
      <span style="margin-left:8px;background:rgba(255,255,255,0.1);color:#fff;font-size:10px;font-weight:700;letter-spacing:2px;padding:2px 8px;border-radius:4px">RUSSIA</span>
    </div>
    <div style="padding:20px 24px">
      <p style="margin:0;font-size:16px;font-weight:700;color:#1a1a1a">📬 Новый подписчик на рассылку</p>
      <p style="margin:12px 0 0;font-size:14px;color:#333">Email: <strong>${email}</strong></p>
      <p style="margin:6px 0 0;font-size:12px;color:#888">${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} МСК</p>
    </div>
    <div style="padding:12px 24px;border-top:1px solid #eee;font-size:11px;color:#aaa">
      Подписка через форму на mahadmanpowers.ru
    </div>
  </div>
</body></html>`,
    });

    // 2. Confirmation to subscriber
    await transporter.sendMail({
      from: `"Mahad Manpower Russia" <${smtpUser}>`,
      to: email,
      subject: `Подписка подтверждена — Mahad Manpower Russia`,
      html: `<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px">
  <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0">
    <div style="background:#1a1a1a;padding:16px 24px">
      <span style="color:#c9a84c;font-size:18px;font-weight:900">MAHAD</span>
      <span style="color:#fff;font-size:18px;font-weight:900"> MANPOWER</span>
      <span style="margin-left:8px;background:rgba(255,255,255,0.1);color:#fff;font-size:10px;font-weight:700;letter-spacing:2px;padding:2px 8px;border-radius:4px">RUSSIA</span>
    </div>
    <div style="padding:24px">
      <p style="margin:0;font-size:17px;font-weight:700;color:#1a1a1a">Спасибо за подписку!</p>
      <p style="margin:12px 0;font-size:14px;color:#444;line-height:1.6">
        Вы подписались на обновления о кадровом рынке России и новостях Mahad Manpower.
        Мы будем отправлять вам полезные материалы по мере их появления.
      </p>
      <p style="margin:16px 0 4px;font-size:13px;color:#444">Если у вас есть вопросы по найму персонала:</p>
      <p style="margin:0;font-size:13px;color:#444">
        ✉️ <a href="mailto:corporate@mahadmanpowers.ru" style="color:#c9a84c">corporate@mahadmanpowers.ru</a><br/>
        🌐 <a href="https://mahadmanpowers.ru" style="color:#c9a84c">mahadmanpowers.ru</a>
      </p>
    </div>
    <div style="padding:12px 24px;border-top:1px solid #eee;background:#fafafa;font-size:11px;color:#aaa">
      Mahad Employment Services &middot; mahadmanpowers.ru
    </div>
  </div>
</body></html>`,
    });
  } catch (err) {
    console.error("[newsletter] SMTP error:", err);
    return NextResponse.json({ error: "Ошибка. Попробуйте позже." }, { status: 500 });
  }

  console.info("[newsletter] subscribed:", email);
  return NextResponse.json({ ok: true }, { status: 200 });
}
