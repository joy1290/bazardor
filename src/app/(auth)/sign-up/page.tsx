"use client"

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

interface SignUpFormDataType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    callbacURL: string;
}

export const handleGoogleSignIn = async () => {
    const data = await signIn.social({
        provider: "google"
    })
    toast.success("Login successfully")

}
export const handleGithubSignIn = async () => {
    const data = await signIn.social({
        provider: "github",
    })
    toast.success("Login successfully")
}
export default function SignUpPage() {
    const router = useRouter();

    const handelSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const getUsersData = Object.fromEntries(formData.entries()) as unknown as SignUpFormDataType;

        if (getUsersData.confirmPassword !== getUsersData.password) {
            toast.error("invalid username or password");
            return;
        }

        const { error, data } = await signUp.email({
            name: getUsersData.name,
            email: getUsersData.email,
            password: getUsersData.password,
            callbackURL: "/"
        })

        console.log(data);
        if (error) {
            toast.error(error.message)
            return
        }
        router.push("/")
        toast.success(`WELCOME ${getUsersData.name}`)

    }



    return (

        <section className="container mx-auto px-4 py-8 sm:py-12">
            <div className="mx-auto max-w-md">

                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"> অ্যাকাউন্ট তৈরি করুন</h1>
                    <p className="mt-2 text-sm text-gray-500 sm:text-base"> বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>
                <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl shadow-gray-200/50">

                    <form onSubmit={handelSignUp} className="space-y-4 sm:space-y-5">
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">নাম</label>
                            <input id="name" name="name" type="text" placeholder="যেমন: রহিম উদ্দিন" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">ইমেইল</label>
                            <input id="email" name="email" type="email" placeholder="যেমন: rahim@example.com" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                            <input id="password" name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড" minLength={8} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-gray-700">পাসওয়ার্ড নিশ্চিত করুন</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="আবার পাসওয়ার্ড লিখুন" minLength={8} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                        <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#05893E] px-4 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#05893E]/20 transition duration-200 hover:bg-[#047532] active:scale-[0.98]">
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>


                    <div className="relative my-6 flex items-center justify-center">
                        <div className="w-full border-t border-gray-200"></div>
                        <span className="absolute bg-white px-3 text-xs text-gray-500 uppercase tracking-wider">
                            অথবা
                        </span>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button onClick={handleGoogleSignIn} type="button" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]">
                            <FaGoogle className="text-red-500 text-lg" />
                            <span>Google</span>
                        </button>

                        <button onClick={handleGithubSignIn} type="button" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]">
                            <FaGithub className="text-gray-900 text-lg" />
                            <span>GitHub</span>
                        </button>
                    </div>



                    <p className="mt-6 text-center text-sm text-gray-600">
                        ইতোমধ্যে অ্যাকাউন্ট আছে?{' '}
                        <Link className="font-semibold text-[#05893E] hover:underline" href="/sign-In">
                            লগইন করুন
                        </Link>
                    </p>

                </div>

                
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#05893E] transition-colors"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>

            </div>
        </section>

    )
}