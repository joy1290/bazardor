'use client'

import { useState,createContext,ReactNode, Dispatch, SetStateAction } from "react";

interface AvatarContextType{
    isShowAvatar: boolean;
    updateShowAvatar: Dispatch<SetStateAction<boolean>>;
}

export const ShowProfileCardContext = createContext<AvatarContextType>({
    isShowAvatar: false,
    updateShowAvatar: () => {}
})

export const AvatarContextProvider = ({children}:{children: ReactNode}) => {
    const [isShowAvatar,updateShowAvatar] = useState<boolean>(false);

    const allContext: AvatarContextType = {
        isShowAvatar,updateShowAvatar
    }

    return (
        <ShowProfileCardContext.Provider value={allContext}>
            {children}
        </ShowProfileCardContext.Provider>
    )
}