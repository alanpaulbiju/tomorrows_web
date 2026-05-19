"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [investment, setInvestment] =
    useState(100000);

  const [profit, setProfit] =
    useState(20000);

  const roi =
    ((profit - investment) / investment) * 100;

  return (
    <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        ROI Calculator
      </h2>

      <div className="mt-6 space-y-4">
        <input
          type="number"
          value={investment}
          onChange={(e) =>
            setInvestment(Number(e.target.value))
          }
          placeholder="Investment Amount"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="number"
          value={profit}
          onChange={(e) =>
            setProfit(Number(e.target.value))
          }
          placeholder="Profit"
          className="w-full rounded-xl border p-4"
        />

        <div className="rounded-xl bg-slate-100 p-5">
          <p className="text-slate-500">
            Estimated ROI
          </p>

          <h3 className="text-4xl font-bold text-emerald-500">
            {roi.toFixed(2)}%
          </h3>
        </div>
      </div>
    </div>
  );
}
