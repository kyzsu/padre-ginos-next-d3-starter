import type { DailySale } from "./admin-data";

// Pure functions for the analytics page: no React, easy to test

export interface WeeklyRow extends DailySale {
  weekAverage: number;
}

// Average quantity of the same pizza over the 7 days up to this row's date
export function withWeekAverage(rows: DailySale[]): WeeklyRow[] {
  return rows.map((row) => {
    const end = Date.parse(row.date);
    const start = end - 6 * 24 * 60 * 60 * 1000;
    let total = 0;
    for (const other of rows) {
      if (other.pizzaId !== row.pizzaId) continue;
      const t = Date.parse(other.date);
      if (t >= start && t <= end) total += other.quantity;
    }
    return { ...row, weekAverage: total / 7 };
  });
}
