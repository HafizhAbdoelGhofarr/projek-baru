import { Head, Link } from '@inertiajs/react';
import { Award, CalendarDays, ChevronRight, MapPin, Sparkles, Users } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const stats = [
    {
        label: 'Peserta Terdaftar',
        value: '1.240',
        icon: Users,
        tone: 'bg-blue-100 text-blue-700',
    },
    {
        label: 'Seminar Terjadwal',
        value: '8',
        icon: CalendarDays,
        tone: 'bg-violet-100 text-violet-700',
    },
    {
        label: 'Lomba Aktif',
        value: '5',
        icon: Award,
        tone: 'bg-rose-100 text-rose-700',
    },
    {
        label: 'Lokasi Event',
        value: '3',
        icon: MapPin,
        tone: 'bg-cyan-100 text-cyan-700',
    },
];

const recentEvents = [
    {
        title: 'Seminar Cloud & DevOps',
        subtitle: 'Aula Utama • 28 Mei 2026',
        status: 'Open',
    },
    {
        title: 'Lomba Website Interaktif',
        subtitle: 'Lab Komputer • 9 Juni 2026',
        status: 'Open',
    },
    {
        title: 'Workshop IoT Smart Grid',
        subtitle: 'Gedung Seminar B • 15 Juni 2026',
        status: 'Open',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="space-y-6 rounded-xl p-4">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article key={item.label} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
                                        <p className="mt-3 text-3xl font-semibold text-foreground">{item.value}</p>
                                    </div>
                                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
                                <h2 className="mt-4 text-2xl font-semibold text-foreground">Ringkasan Kegiatan</h2>
                            </div>
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                            <p>Pantau semua pendaftaran dan perkembangan event di satu dashboard yang mudah digunakan.</p>
                            <p>Siapkan tim dan peserta untuk menghadiri seminar, lomba, dan sesi networking secara optimal.</p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button variant="secondary" asChild>
                                <Link href="/events">Lihat Event</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/dashboard">Detail</Link>
                            </Button>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Agenda Terbaru</p>
                                <h2 className="mt-4 text-2xl font-semibold text-foreground">Acara Mendatang</h2>
                            </div>
                            <CalendarDays className="h-6 w-6 text-primary" />
                        </div>

                        <div className="mt-6 space-y-4">
                            {recentEvents.map((event) => (
                                <div key={event.title} className="rounded-3xl border border-border bg-background/80 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-semibold text-foreground">{event.title}</p>
                                            <p className="text-sm text-muted-foreground">{event.subtitle}</p>
                                        </div>
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{event.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Lokasi</p>
                                <h2 className="mt-4 text-2xl font-semibold text-foreground">Tempat Utama</h2>
                            </div>
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                            <p>Semua aktivitas utama akan berlangsung di beberapa lokasi strategis dengan akses mudah.</p>
                            <p>Pastikan peserta siap dengan jadwal dan ruang yang telah ditentukan.</p>
                        </div>
                        <div className="mt-6 flex items-center gap-3 text-sm text-foreground">
                            <ChevronRight className="h-5 w-5 text-primary" />
                            Informasi lokasi dapat diakses pada halaman event.
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
