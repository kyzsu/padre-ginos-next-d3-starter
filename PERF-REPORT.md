# Performance Investigation Report — Day 4

Nama: **********\_\_********** Tag awal: `d4-start`

Cara mengukur (selalu sama):

- `npm run build && npm run start` (bukan `dev`)
- Chrome DevTools → Performance → CPU **4× slowdown**
- Ulangi 3 kali, catat median

| #   | Keluhan                                       | Alat ukur | Metrik | Sebelum | Hipotesis | Perbaikan | Sesudah |
| --- | --------------------------------------------- | --------- | ------ | ------- | --------- | --------- | ------- |
| A   | Filter analitik terasa lambat saat mengetik   |           |        |         |           |           |         |
| B   | Dashboard makin berat kalau dibiarkan terbuka |           |        |         |           |           |         |
| C   | Overview lambat di laptop staf                |           |        |         |           |           |         |
| D   | Detail order lama terbuka                     |           |        |         |           |           |         |

## Catatan

- Apa yang paling mengejutkan dari hasil pengukuran?
- Perbaikan mana yang TIDAK memberi hasil, dan kenapa?
