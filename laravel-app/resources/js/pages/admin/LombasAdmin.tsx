import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Admin', href: '/admin/lombas' },
  { title: 'Lomba', href: '/admin/lombas' },
];

const initialLombas = [
  {
    id: 1,
    title: 'Lomba Aplikasi Mobile',
    category: 'UX & Performance',
    date: '2 Juni 2026',
    teamSize: 5,
  },
  {
    id: 2,
    title: 'Lomba Website Interaktif',
    category: 'Front-end Innovation',
    date: '9 Juni 2026',
    teamSize: 4,
  },
];

export default function LombasAdmin() {
  const [lombas, setLombas] = useState(initialLombas);
  const [form, setForm] = useState({ title: '', category: '', date: '', teamSize: '0' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLombas((current) => [
      ...current,
      {
        id: current.length + 1,
        title: form.title,
        category: form.category,
        date: form.date,
        teamSize: Number(form.teamSize),
      },
    ]);
    setForm({ title: '', category: '', date: '', teamSize: '0' });
  };

  const handleRemove = (id: number) => {
    setLombas((current) => current.filter((item) => item.id !== id));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Lomba" />
      <div className="space-y-6">
        <section className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Lomba</p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950">Kelola Lomba</h1>
            </div>
            <p className="text-sm text-slate-600">Tambahkan lomba baru dan kelola peluang tim peserta.</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-lg font-semibold text-slate-950">Daftar Lomba</h2>
            <div className="mt-6 space-y-4">
              {lombas.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-sm text-slate-500">Kategori: {item.category}</p>
                      <p className="text-sm text-slate-500">{item.date}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Team max {item.teamSize}</span>
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
            <h2 className="text-lg font-semibold text-slate-950">Tambah Lomba Baru</h2>
            <form onSubmit={handleAdd} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Nama Lomba</Label>
                <Input id="title" name="title" value={form.title} onChange={handleChange} placeholder="Nama lomba" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Input id="category" name="category" value={form.category} onChange={handleChange} placeholder="Kategori lomba" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal</Label>
                  <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Maksimum Tim</Label>
                  <Input id="teamSize" name="teamSize" type="number" value={form.teamSize} onChange={handleChange} min="1" required />
                </div>
              </div>
              <Button type="submit">Simpan Lomba</Button>
            </form>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
