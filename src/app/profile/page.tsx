'use client'

import { signOut, updateUser, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ShowProfileCardContext } from "../context/ProfileAvatar";

export default function ProfilePage() {
    const { data: session} = useSession();
    const {updateShowAvatar} = useContext(ShowProfileCardContext)
    const router = useRouter();

    const hanldeSignOut = () => {
        signOut()
        updateShowAvatar(false)
        toast.success("SignOut successfully")
        router.push("/")

    }
    const handleChangeUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const getUserName = Object.fromEntries(formData.entries()) as unknown as { name: string };
        try {
            const responseData = await updateUser({ name: getUserName.name });
            if(responseData.error){
                toast.error(responseData.error.message || "name not changed");
                return
            }
            toast.success("name changed successfullt!");
            updateShowAvatar(false)
            router.push("/")

        }catch{
            toast.error("Someting went worng, Please try again");
        }
    }

    return (

        <section className="container mx-auto mt-8 px-4 py-4 sm:mt-10 sm:px-6">
            <div className="mx-auto max-w-3xl space-y-6">

                {/* Profile Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Information */}
                <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">

                    <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700">
                            {session?.user.name?.[0]?.toUpperCase() ?? "U"}
                        </div>

                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-semibold text-gray-900">
                                {session?.user.name}
                            </h2>

                            <p className="break-all text-sm text-gray-500">
                                {session?.user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={hanldeSignOut}
                        className="w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:w-auto"
                    >
                        ↩︎ সাইন আউট
                    </button>
                </div>

                {/* Update Name Form */}
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

                    <div className="mb-6 border-b border-gray-100 pb-4">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            নাম হালনাগাদ করুন
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            আপনার অ্যাকাউন্টের নাম পরিবর্তন করতে নিচের ফর্মটি ব্যবহার করুন।
                        </p>
                    </div>

                    <form onSubmit={handleChangeUser} className="space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                আপনার নাম
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder={session?.user.name}
                                required
                                maxLength={100}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        <button type="submit" className="w-full rounded-lg bg-[#05893E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">নাম হালনাগাদ করুন</button>
                    </form>
                </div>

            </div>
        </section>

    )
}