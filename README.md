Psihologijas portāls izmantojot Next.js 14 ar Vercel, PostgreSQL un Drizzle ORM.

Lai palaistu izmanto npm run dev.

Izveidots:
Lietotāju reģistrācija izmantojot PostgreSQL ar Vercel, kur visas paroles ir hashotas un lietotāja dati ir sadalīti divās tabulās, lietotāja informācija ar parolēm, e-pastiem un pārējo, kā arī lietotāja profils.
Tabulas ir savienotas izmantojot reference, kurā drizzle ORM spēj savienot vienu tabulu ar otru izmantojot userId.
