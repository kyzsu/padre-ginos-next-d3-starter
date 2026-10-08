import { z } from "zod";
import { ORDER_STATUSES } from "./orders";

// Validation = is this input well-formed? A schema says it once, on the
// server, instead of a pile of typeof / Number.isInteger checks.

// zod adalah library untuk validasi dan parsing data di TypeScript. Di sini, kita menggunakan zod untuk membuat skema validasi input untuk status pesanan.

// z.coerce.number().int().positive() digunakan untuk memastikan bahwa orderId yang diterima adalah angka positif. Jika input bukan angka, zod akan mencoba mengubahnya menjadi angka (coerce). Jika tidak bisa diubah menjadi angka positif, validasi akan gagal.
export const orderStatusInput = z.object({
  orderId: z.coerce.number().int().positive(),
  status: z.enum(ORDER_STATUSES),
});
