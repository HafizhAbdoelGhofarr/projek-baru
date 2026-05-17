import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const seminars = [
  'Seminar UI/UX dan UX Research',
  'Seminar Cloud & DevOps',
  'Seminar Product Management',
];

export default function SeminarRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    seminar: seminars[0],
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
      <Head title="Daftar Seminar" />

      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-3 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Form Pendaftaran</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">Daftar Seminar</h1>
              <p className="mt-3 text-slate-600">Isi data peserta dan pilih seminar yang ingin kamu ikuti.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" asChild>
                <Link href="/seminars">Kembali ke Daftar Seminar</Link>
              </Button>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-950 shadow-sm shadow-emerald-200/60">
              <h2 className="text-2xl font-semibold">Pendaftaran Berhasil!</h2>
              <p className="mt-3 text-slate-700">Terima kasih, {form.name}. Kami telah menerima pendaftaran seminarmu.</p>
              <div className="mt-6 space-y-2 text-slate-700">
                <p><strong>Seminar:</strong> {form.seminar}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Nomor HP:</strong> {form.phone}</p>
              </div>
              <div className="mt-6">
                <Button variant="secondary" asChild>
                  <Link href="/seminars">Lihat Seminar Lainnya</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Nama lengkap" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor HP</Label>
                  <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0812xxxxxxx" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Instansi / Universitas</Label>
                  <Input id="institution" name="institution" value={form.institution} onChange={handleChange} placeholder="Nama instansi" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seminar">Pilih Seminar</Label>
                <select
                  id="seminar"
                  name="seminar"
                  value={form.seminar}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  {seminars.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea id="notes" name="notes" value={form.notes} onChange={handleChange} placeholder="Tuliskan kebutuhan khusus atau pertanyaan" />
              </div>

              <div className="flex items-center justify-between gap-4 pt-3">
                <Button type="submit">Kirim Pendaftaran</Button>
                <Button variant="secondary" asChild>
                  <Link href="/seminars">Batal</Link>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
