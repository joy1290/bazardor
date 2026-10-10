'use client'

import { signIn} from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { handleGithubSignIn, handleGoogleSignIn } from "../sign-up/page";

interface SignInDataType{
    email: string;
    password: string;
    callbackURL: string;
}

export default function SignInPage() {
    const route = useRouter();

    const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const getUserFormData = Object.fromEntries(formData.entries()) as unknown as SignInDataType;

        const {error} = await signIn.email({
            email: getUserFormData.email,
            password: getUserFormData.password,
            callbackURL: "/"
        })

        if(error){
            toast.error(error.message);
            return
        }
        route.push("/");
        await toast.success("Login successfully")

    }

    return (
      <section className="container mx-auto px-4 py-8 sm:py-12">
            <div className="mx-auto max-w-md">
        
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"> সাইন ইন</h1>
                    <p className="mt-2 text-sm text-gray-500 sm:text-base"> বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>
                <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl shadow-gray-200/50">
                    
                    <form onSubmit={handelSignIn} className="space-y-4 sm:space-y-5">
                    
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">ইমেইল</label>
                            <input id="email" name="email" type="email" placeholder="যেমন: rahim@example.com" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                            <input id="password" name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড" minLength={8} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15" />
                        </div>

                       
                        <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#05893E] px-4 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#05893E]/20 transition duration-200 hover:bg-[#047532] active:scale-[0.98]">
                           সাইন ইন
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
                        অ্যাকাউন্ট নেই? {' '}
                        <Link className="font-semibold text-[#05893E] hover:underline" href="/sign-up">
                            সাইন আপ করুন?
                        </Link>
                    </p>

                </div>

                {/* ব্যাক টু হোম লিংক */}
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