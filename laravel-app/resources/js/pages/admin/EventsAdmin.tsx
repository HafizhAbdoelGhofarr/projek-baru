import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Admin', href: '/admin/events' },
  { title: 'Event', href: '/admin/events' },
];

const initialEvents = [
  {
    id: 1,
    name: 'Seminar Pengembangan Web',
    date: '25 Mei 2026',
    type: 'Seminar',
    location: 'Jakarta Convention Center',
    slots: 120,
  },
  {
    id: 2,
    name: 'Lomba Aplikasi Mobile',
    date: '2 Juni 2026',
    type: 'Lomba',
    location: 'Universitas Teknologi Bandung',
    slots: 30,
  },
];

export default function EventsAdmin() {
  const [events, setEvents] = useState(initialEvents);
  const [form, setForm] = useState({ name: '', date: '', type: 'Seminar', location: '', slots: '0' });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEvents((current) => [
      ...current,
      {
        id: current.length + 1,
        name: form.name,
        date: form.date,
        type: form.type,
        location: form.location,
        slots: Number(form.slots),
      },
    ]);
    setForm({ name: '', date: '', type: 'Seminar', location: '', slots: '0' });
  };

  const handleRemove = (id: number) => {
    setEvents((current) => current.filter((item) => item.id !== id));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Event" />
      <div className="space-y-6">
        <section className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Event</p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950">Kelola Event</h1>
            </div>
            <p className="text-sm text-slate-600">Tambahkan atau hapus event seminar dan lomba dari panel admin.</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-lg font-semibold text-slate-950">Daftar Event</h2>
            <div className="mt-6 space-y-4">
              {events.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.type} • {item.date}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{item.location}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Slot {item.slots}</span>
                      <Button variant="outline" size="sm" type="button" onClick={() => handleRemove(item.id)}>
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-lg font-semibold text-slate-950">Tambah Event Baru</h2>
            <form onSubmit={handleAdd} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Event</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Contoh: Seminar AI" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal</Label>
                  <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipe Event</Label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="Seminar">Seminar</option>
                    <option value="Lomba">Lomba</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Lokasi</Label>
                  <Input id="location" name="location" value={form.location} onChange={handleChange} placeholder="Contoh: Auditorium" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slots">Slot</Label>
                  <Input id="slots" name="slots" type="number" value={form.slots} onChange={handleChange} min="0" required />
                </div>
              </div>
              <Button type="submit">Simpan Event</Button>
            </form>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
