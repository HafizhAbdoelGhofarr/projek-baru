import { Head, Link } from '@inertiajs/react';
import { Award, CalendarDays, Users as UsersIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserProps {
    users?: Array<{ id: number; name: string; email: string }>;
}

export default function Users({ users = [] }: UserProps) {
    return (
        <div className="min-h-screen bg-background text-foreground px-4 py-12 sm:px-6 lg:px-8">
            <Head title="About" />

            <div className="mx-auto max-w-6xl space-y-10">
                <section className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-slate-200/50">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <UsersIcon className="h-4 w-4" />
                                Tentang EEA
                            </div>
                            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Membangun acara kompetitif dan penuh inspirasi untuk energi, teknologi, dan inovasi.</h1>
                            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                                EEA adalah platform acara untuk seminar, lomba, dan konferensi yang membantu peserta bertemu, belajar, dan menunjukkan karya terbaik mereka.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="default" asChild>
                                    <Link href="/">Kembali ke Beranda</Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href="/events">Lihat Event</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="rounded-[2rem] bg-gradient-to-br from-primary/15 to-secondary/15 p-8">
                            <div className="space-y-4 text-sm text-foreground">
                                <div className="rounded-3xl bg-white/90 p-6 shadow-sm shadow-primary/10">
                                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Peserta aktif</p>
                                    <p className="mt-3 text-4xl font-semibold text-foreground">{users.length}</p>
                                </div>
                                <div className="rounded-3xl bg-white/90 p-6 shadow-sm shadow-secondary/10">
                                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Seminar & Lomba</p>
                                    <p className="mt-3 text-4xl font-semibold text-foreground">13+</p>
                                </div>
                                <div className="rounded-3xl bg-white/90 p-6 shadow-sm shadow-accent/10">
                                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Klub dan tim</p>
                                    <p className="mt-3 text-4xl font-semibold text-foreground">24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: 'Kenapa EEA?',
                            description: 'Acara yang dirancang untuk menginspirasi peserta melalui kompetisi, workshop, dan jaringan profesional.',
                            icon: Award,
                        },
                        {
                            title: 'Fokus Utama',
                            description: 'Pengembangan teknologi, inovasi desain, dan penggunaan energi cerdas dalam konteks akademik dan industri.',
                            icon: CalendarDays,
                        },
                        {
                            title: 'Komunitas',
                            description: 'Komunitas peserta yang saling mendukung dan berbagi peluang terbaik dalam setiap event.',
                            icon: UsersIcon,
                        },
                    ].map((card) => {
                        const Icon = card.icon;
                        return (
                            <div key={card.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-foreground">{card.title}</h2>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                            </div>
                        );
                    })}
                </section>

                <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground">Anggota komunitas</h2>
                            <p className="mt-2 text-sm text-muted-foreground">Menampilkan beberapa pengguna yang sudah terdaftar.</p>
                        </div>
                        <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{users.length} Akun</div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {users.length > 0 ? (
                            users.slice(0, 6).map((user) => (
                                <div key={user.id} className="rounded-3xl border border-border bg-background p-5 shadow-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                                            <p className="text-sm text-muted-foreground">{user.email}</p>
                                        </div>
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Member</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full rounded-3xl border border-border bg-background p-8 text-center text-sm text-muted-foreground">
                                Belum ada data pengguna untuk ditampilkan.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
