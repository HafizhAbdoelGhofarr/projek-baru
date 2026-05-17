import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Admin', href: '/admin/seminars' },
  { title: 'Seminar', href: '/admin/seminars' },
];

const initialSeminars = [
  {
    id: 1,
    title: 'Seminar UI/UX dan UX Research',
    speaker: 'Nadia Prasetya',
    date: '20 Mei 2026',
    quota: 120,
  },
  {
    id: 2,
    title: 'Seminar Cloud & DevOps',
    speaker: 'Rizky Hartono',
    date: '28 Mei 2026',
    quota: 90,
  },
];

export default function SeminarsAdmin() {
  const [seminars, setSeminars] = useState(initialSeminars);
  const [form, setForm] = useState({ title: '', speaker: '', date: '', quota: '0' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSeminars((current) => [
      ...current,
      {
        id: current.length + 1,
        title: form.title,
        speaker: form.speaker,
        date: form.date,
        quota: Number(form.quota),
      },
    ]);
    setForm({ title: '', speaker: '', date: '', quota: '0' });
  };

  const handleRemove = (id: number) => {
    setSeminars((current) => current.filter((seminar) => seminar.id !== id));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Seminar" />
      <div className="space-y-6">
        <section className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Seminar</p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950">Kelola Seminar</h1>
            </div>
            <p className="text-sm text-slate-600">Tambahkan, edit, atau hapus seminar peserta.</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-lg font-semibold text-slate-950">Daftar Seminar</h2>
            <div className="mt-6 space-y-4">
              {seminars.map((seminar) => (
                <div key={seminar.id} className="rounded-3xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{seminar.title}</p>
                      <p className="text-sm text-slate-500">Pembicara: {seminar.speaker}</p>
                      <p className="text-sm text-slate-500">{seminar.date}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Kuota {seminar.quota}</span>
                      <Button variant="outline" size="sm" type="button" onClick={() => handleRemove(seminar.id)}>
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-lg font-semibold text-slate-950">Tambah Seminar Baru</h2>
            <form onSubmit={handleAdd} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Judul Seminar</Label>
                <Input id="title" name="title" value={form.title} onChange={handleChange} placeholder="Judul seminar" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="speaker">Pembicara</Label>
                <Input id="speaker" name="speaker" value={form.speaker} onChange={handleChange} placeholder="Nama pembicara" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal</Label>
                  <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quota">Kuota</Label>
                  <Input id="quota" name="quota" type="number" value={form.quota} onChange={handleChange} min="0" required />
                </div>
              </div>
              <Button type="submit">Simpan Seminar</Button>
            </form>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
