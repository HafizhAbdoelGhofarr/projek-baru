import { useForm } from '@inertiajs/react'

export default function Login() {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    function submit(e: React.FormEvent) {
        e.preventDefault()

        post('/login')
    }

    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={submit}
                className="w-96 p-6 rounded-lg shadow space-y-4"
            >

                <h1 className="text-2xl font-bold">
                    Login
                </h1>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="w-full border p-2 rounded"
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>

            
                 <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <button
                    disabled={processing}
                    className="w-full bg-black text-white p-2 rounded"
                >
                    Login
                </button>

            </form>

        </div>
    )
}