import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: 'Seminar Pengembangan Web Modern',
    type: 'Seminar',
    date: '25 Mei 2026',
    location: 'Jakarta Convention Center',
    description: 'Belajar best practice frontend dan backend modern bersama pembicara ahli.',
  },
  {
    id: 2,
    title: 'Lomba Kreasi Aplikasi Mobile',
    type: 'Lomba',
    date: '2 Juni 2026',
    location: 'Universitas Teknologi Bandung',
    description: 'Tunjukkan skill timmu dalam membangun aplikasi yang inovatif dan solutif.',
  },
];

export default function Events() {
  return (
    <>
      <Head title="Event" />

      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  <Calendar className="h-4 w-4" />
                  Event Seminar & Lomba
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                    Temukan seminar & lomba yang siap kamu ikuti.
                  </h1>
                  <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                    Pendaftaran terbuka untuk peserta umum. Untuk admin, tersedia panel khusus untuk mengelola daftar dan event.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button variant="secondary" asChild>
                  <Link href="/seminars">Lihat Seminar</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/lombas">Lihat Lomba</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <article key={event.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    {event.type === 'Seminar' ? <Users className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                  </span>
                  {event.type}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{event.title}</h2>
                <p className="mt-3 text-slate-600">{event.description}</p>
                <div className="mt-6 grid gap-4 text-sm text-slate-500 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="default" size="sm" asChild>
                    <Link href={event.type === 'Seminar' ? '/seminars/register' : '/lombas/register'}>
                      Daftar Sekarang
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={event.type === 'Seminar' ? '/seminars' : '/lombas'}>
                      Detail {event.type}
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
