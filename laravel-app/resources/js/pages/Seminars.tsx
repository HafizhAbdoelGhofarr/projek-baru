import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const seminars = [
  {
    id: 1,
    title: 'Seminar UI/UX dan UX Research',
    speaker: 'Nadia Prasetya',
    date: '20 Mei 2026',
    location: 'Aula Lantai 2',
    quota: 120,
    description: 'Pelajari teknik desain antarmuka dan riset pengguna untuk aplikasi yang lebih kuat.',
  },
  {
    id: 2,
    title: 'Seminar Cloud & DevOps',
    speaker: 'Rizky Hartono',
    date: '28 Mei 2026',
    location: 'Gedung Seminar B',
    quota: 90,
    description: 'Membangun deployment otomatis dan infrastruktur yang skalabel di cloud.',
  },
];

export default function Seminars() {
  return (
    <>
      <Head title="Seminar" />

      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Seminar Peserta</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Daftar Seminar</h1>
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  Pilih seminar yang paling sesuai dengan tujuanmu, kemudian isi formulir pendaftaran peserta.
                </p>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/seminars/register">Form Daftar Seminar</Link>
              </Button>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {seminars.map((seminar) => (
              <article key={seminar.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">{seminar.title}</h2>
                    <p className="mt-2 text-sm text-slate-500">Pembicara: {seminar.speaker}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                    Seminar
                  </span>
                </div>
                <p className="mt-4 text-slate-600">{seminar.description}</p>
                <div className="mt-6 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {seminar.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {seminar.location}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-2xl bg-slate-100 px-3 py-1 text-sm text-slate-700">Kuota: {seminar.quota}</span>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/seminars/register">Daftar Sekarang</Link>
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
