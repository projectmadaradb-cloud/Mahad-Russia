"use client";

import { useMemo, useState } from "react";

type RoleKey = "kamenchik" | "armaturschik" | "montazhnik";

type RoleData = {
  title: string;
  min: number;
  max: number;
};

const roles: Record<RoleKey, RoleData> = {
  kamenchik: { title: "Каменщики", min: 118000, max: 142000 },
  armaturschik: { title: "Арматурщики", min: 124000, max: 149000 },
  montazhnik: { title: "Монтажники", min: 132000, max: 158000 },
};

const regionMultipliers = {
  msk: { label: "Москва / МО", value: 1.08 },
  spb: { label: "Санкт-Петербург / ЛО", value: 1.04 },
  sib: { label: "Сибирь / Дальний Восток", value: 1.12 },
};

const comparisonRows = [
  {
    metric: "Retention rate (удержание 6+ мес.)",
    india: "95%",
    ru: "40%",
    cis: "55%",
  },
  {
    metric: "Предсказуемость вывода",
    india: "Высокая",
    ru: "Средняя",
    cis: "Низкая/сезонная",
  },
  {
    metric: "Прослеживаемость документов",
    india: "Полная",
    ru: "Полная",
    cis: "Фрагментарная",
  },
  {
    metric: "Масштабируемость партий",
    india: "50-500+",
    ru: "Ограниченная",
    cis: "Нестабильная",
  },
];

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value));
}

export default function EmployerIntentPricingMatrix() {
  const [region, setRegion] = useState<keyof typeof regionMultipliers>("msk");
  const [workers, setWorkers] = useState(120);

  const totals = useMemo(() => {
    const multiplier = regionMultipliers[region].value;

    return (Object.keys(roles) as RoleKey[]).map((key) => {
      const role = roles[key];
      const min = role.min * multiplier;
      const max = role.max * multiplier;
      const monthlyMin = min * workers;
      const monthlyMax = max * workers;

      return {
        title: role.title,
        min,
        max,
        monthlyMin,
        monthlyMax,
      };
    });
  }, [region, workers]);

  return (
    <div className="space-y-6">
      <div className="metric-card p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-gray-700">
            Регион проекта
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as keyof typeof regionMultipliers)}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
            >
              {Object.entries(regionMultipliers).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-gray-700">
            Объем партии (чел.)
            <input
              type="number"
              min={30}
              max={2000}
              value={workers}
              onChange={(e) => setWorkers(Number(e.target.value || 0))}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
            />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-bold">Позиция</th>
              <th className="px-4 py-3 font-bold">Ставка, от (руб/мес)</th>
              <th className="px-4 py-3 font-bold">Ставка, до (руб/мес)</th>
              <th className="px-4 py-3 font-bold">Партия, от (руб/мес)</th>
              <th className="px-4 py-3 font-bold">Партия, до (руб/мес)</th>
            </tr>
          </thead>
          <tbody>
            {totals.map((row) => (
              <tr key={row.title} className="border-t border-gray-100">
                <td className="px-4 py-3 font-semibold text-gray-900">{row.title}</td>
                <td className="px-4 py-3 text-gray-700">{formatRub(row.min)}</td>
                <td className="px-4 py-3 text-gray-700">{formatRub(row.max)}</td>
                <td className="px-4 py-3 text-gray-700">{formatRub(row.monthlyMin)}</td>
                <td className="px-4 py-3 text-gray-700">{formatRub(row.monthlyMax)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="metric-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Сравнение рынка</p>
        <h3 className="mt-2 text-xl font-black text-gray-900">Индия vs РФ vs СНГ (операционные факторы)</h3>

        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-bold">Показатель</th>
                <th className="px-4 py-3 font-bold">Индия</th>
                <th className="px-4 py-3 font-bold">РФ</th>
                <th className="px-4 py-3 font-bold">СНГ</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.metric} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.metric}</td>
                  <td className="px-4 py-3 text-gray-700">{row.india}</td>
                  <td className="px-4 py-3 text-gray-700">{row.ru}</td>
                  <td className="px-4 py-3 text-gray-700">{row.cis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">Индия</p>
            <p className="mt-2 text-2xl font-black text-[color:var(--gold)]">95%</p>
            <div className="mt-2 h-2 rounded bg-gray-200">
              <div className="h-2 w-[95%] rounded bg-[color:var(--gold)]" />
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">РФ</p>
            <p className="mt-2 text-2xl font-black text-gray-700">40%</p>
            <div className="mt-2 h-2 rounded bg-gray-200">
              <div className="h-2 w-[40%] rounded bg-gray-500" />
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">СНГ</p>
            <p className="mt-2 text-2xl font-black text-gray-700">55%</p>
            <div className="mt-2 h-2 rounded bg-gray-200">
              <div className="h-2 w-[55%] rounded bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
