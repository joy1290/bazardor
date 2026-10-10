'use client'
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import { useContext } from "react";
import { ShowProfileCardContext } from "@/app/context/ProfileAvatar";

export default function AuthButton() {
  const { data: session, isPending } = useSession();
  const { isShowAvatar, updateShowAvatar } = useContext(ShowProfileCardContext)

  const handleAvatarShow = (): void => {
    if (session?.user) {
      updateShowAvatar((prev) => !prev);
    }
  };
  
  if (isPending) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className="flex shrink-0 items-center">
        {
          session?.user ?
            <div>

              <div>
                {session?.user && (

                  <button onClick={handleAvatarShow} className="flex items-center gap-2 cursor-pointer">

                    {session.user.image ? (
                      <Image width={36} height={36} src={session.user.image} alt={session.user.name ?? "User"} className="h-9 w-9 rounded-full object-cover" />
                    ) :
                      (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#05893E] text-white">
                          <span className="text-lg font-bold">{session.user.name?.[0]?.toUpperCase() ?? "U"}</span>
                        </div>
                      )}
                    <span className="max-w-32 truncate text-sm font-medium text-gray-800">{session.user.name}</span>
                    <span className="text-sm">⬇️</span>
                  </button>

                )}
              </div>
            </div>

            :

            <div>
              <Link href={"/sign-In"}>
                <button className="cursor-pointer px-2 py-3 text-sm font-bold sm:mx-2 sm:py-4 sm:text-base">সাইন ইন</button>
              </Link>

              <Link href={"/sign-up"}>
                <button className="cursor-pointer rounded px-3 py-2 text-sm font-bold text-white shadow-sm shadow-green-600 bg-[#05893E] sm:px-4 sm:text-base">সাইন আপ</button>
              </Link>
            </div>
        }


      </div>
      {
        isShowAvatar ?
          <ProfileCard isShowAvatar={isShowAvatar} updateShowAvatar={updateShowAvatar} />
          :
          ""
      }
    </div>

  )
}