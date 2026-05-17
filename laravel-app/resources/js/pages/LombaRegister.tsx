import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const categories = [
  'Aplikasi Mobile',
  'Website Interaktif',
  'Sistem IoT',
];

export default function LombaRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    category: categories[0],
    institution: '',
    notes: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head title="Daftar Lomba" />

      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-3 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Form Pendaftaran</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">Daftar Lomba</h1>
              <p className="mt-3 text-slate-600">Isi data tim dan pilih kategori lomba yang ingin diikuti.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" asChild>
                <Link href="/lombas">Kembali ke Lomba</Link>
              </Button>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-950 shadow-sm shadow-emerald-200/60">
              <h2 className="text-2xl font-semibold">Pendaftaran Lomba Berhasil!</h2>
              <p className="mt-3 text-slate-700">Terima kasih, tim {form.teamName}. Pendaftaran lombamu telah diterima.</p>
              <div className="mt-6 space-y-2 text-slate-700">
                <p><strong>Kategori:</strong> {form.category}</p>
                <p><strong>Pemimpin Tim:</strong> {form.leaderName}</p>
                <p><strong>Email:</strong> {form.email}</p>
              </div>
              <div className="mt-6">
                <Button variant="secondary" asChild>
                  <Link href="/lombas">Lihat Lomba Lainnya</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Nama Tim</Label>
                  <Input id="teamName" name="teamName" value={form.teamName} onChange={handleChange} placeholder="Nama tim" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leaderName">Nama Ketua Tim</Label>
                  <Input id="leaderName" name="leaderName" value={form.leaderName} onChange={handleChange} placeholder="Nama ketua tim" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor HP</Label>
                  <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0812xxxxxxx" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori Lomba</Label>
                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  >
                    {categories.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Instansi / Universitas</Label>
                  <Input id="institution" name="institution" value={form.institution} onChange={handleChange} placeholder="Nama instansi" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tim</Label>
                <Textarea id="notes" name="notes" value={form.notes} onChange={handleChange} placeholder="Tuliskan anggota tim atau kebutuhan khusus" />
              </div>

              <div className="flex items-center justify-between gap-4 pt-3">
                <Button type="submit">Kirim Pendaftaran</Button>
                <Button variant="secondary" asChild>
                  <Link href="/lombas">Batal</Link>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
