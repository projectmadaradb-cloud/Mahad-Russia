const badges = [
  "Индийские рабочие с пройденным трейд тестом",
  "Сварщики 6G с сертификатом NAKS / ISO 9606",
  "Легальный найм граждан Индии — полный комплайнс",
  "Прямой работодатель — без посредников и субагентов",
  "Готовая бригада: вывод 21–45 дней от визового клиринга",
  "Аутстаффинг индийского персонала для стройки и заводов",
];

export default function TrustBadges() {
  return (
    <div className="metric-card p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
        Подтверждение компетенций
      </p>
      <ul className="space-y-2">
        {badges.map((badge) => (
          <li key={badge} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-0.5 shrink-0 text-base font-bold text-[color:var(--gold)]">✓</span>
            <span>{badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
