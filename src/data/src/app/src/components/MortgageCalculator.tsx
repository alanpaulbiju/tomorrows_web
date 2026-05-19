"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(500000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const payment =
    (price *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Mortgage Calculator
      </h2>

      <div className="mt-6 space-y-4">
        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(Number(e.target.value))
          }
          placeholder="Property Price"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="number"
          value={years}
          onChange={(e) =>
            setYears(Number(e.target.value))
          }
          placeholder="Years"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="number"
          value={rate}
          onChange={(e) =>
            setRate(Number(e.target.value))
          }
          placeholder="Interest Rate"
          className="w-full rounded-xl border p-4"
        />

        <div className="rounded-xl bg-slate-100 p-5">
          <p className="text-slate-500">
            Estimated Monthly Payment
          </p>

          <h3 className="text-4xl font-bold text-blue-900">
            ${payment.toFixed(0)}
          </h3>
        </div>
      </div>
    </div>
  );
}
