import { Head, Link } from '@inertiajs/react';
import { Award, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lombas = [
  {
    id: 1,
    title: 'Lomba Aplikasi Mobile',
    category: 'UX & Performance',
    date: '2 Juni 2026',
    location: 'Auditorium Utama',
    maxTeam: 5,
    description: 'Tim bersaing membangun aplikasi mobile cepat dengan UX menarik dalam satu hari.',
  },
  {
    id: 2,
    title: 'Lomba Website Interaktif',
    category: 'Front-end Innovation',
    date: '9 Juni 2026',
    location: 'Lab Komputer',
    maxTeam: 4,
    description: 'Ciptakan website interaktif yang memukau dengan teknik modern dan pengalaman pengguna maksimal.',
  },
];

export default function Lombas() {
  return (
    <>
      <Head title="Lomba" />

      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Lomba Peserta</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Daftar Lomba</h1>
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  Daftarkan timmu dan bersaing dalam lomba terbaik. Setiap lomba menyediakan kategori dan hadiah menarik.
                </p>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/lombas/register">Form Daftar Lomba</Link>
              </Button>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {lombas.map((lomba) => (
              <article key={lomba.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">{lomba.title}</h2>
                    <p className="mt-2 text-sm text-slate-500">Kategori: {lomba.category}</p>
                  </div>
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
                    Lomba
                  </span>
                </div>
                <p className="mt-4 text-slate-600">{lomba.description}</p>
                <div className="mt-6 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {lomba.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {lomba.location}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-2xl bg-slate-100 px-3 py-1 text-sm text-slate-700">Team max {lomba.maxTeam}</span>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/lombas/register">Daftar Sekarang</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
