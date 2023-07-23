'use client';
import { useRouter } from "next/navigation"

type Props = { 
    children: React.ReactNode,
}

export default function Modal({children}: Props) {
    const router = useRouter();

    return <>
        <div className="fixed z-50 backdrop-blur-xs place-items-center justify-center flex inset-0">
            <div  className="bg-tertiary p-[0.25rem] relative rounded-3xl h-1/2 m-2 sm:w-3/4 md:w-2/3 lg:w-1/2">
                <button onClick={() => {router.back()}} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-[25]">✕</button>
                {children}
            </div>
        </div>
    </>
}