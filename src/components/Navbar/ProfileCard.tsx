'use client'

import { signOut, useSession } from "@/lib/auth-client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface ProfileCardProps{
    isShowAvatar: boolean,
    updateShowAvatar: Dispatch<SetStateAction<boolean>>
}

export default function ProfileCard({isShowAvatar,updateShowAvatar}: ProfileCardProps) {
    const router = useRouter()
    const { data: session } = useSession();
    const hanldeSignOut = () => {
        signOut()
        updateShowAvatar(!isShowAvatar);
        toast.success("Logout Successfully");
        router.push("/")
    }
    
    return (
        <div className="animate-in fade-in slide-in-from-top-1 duration-150 absolute right-2 top-16 z-50 w-[calc(100vw-1rem)] max-w-72 origin-top-right rounded-xl bg-white p-4 shadow-xl shadow-gray-900/10 ring-1 ring-gray-200/80 sm:right-4 sm:top-18 sm:w-72 sm:p-5">
            
            <div className="border-b border-gray-100 pb-4">
                <h2 className="truncate text-sm font-semibold text-gray-900">{session?.user.name}</h2>
                <p className="mt-1 truncate text-xs text-gray-500">{session?.user.email}</p>
            </div>

            
            <div className="space-y-1 pt-3">
                
                <Link href={"/profile"}>
                <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-[#E8F7EF] hover:text-[#05893E] active:scale-[0.98]">
                    <span>👤</span>
                    <span>আমার প্রোফাইল</span>
                </button>
                </Link>

                <button type="button" onClick={hanldeSignOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50 active:scale-[0.98]">
                    <span>↩</span>
                    <span>সাইন আউট</span>
                </button>

            </div>
        </div>
    )
}