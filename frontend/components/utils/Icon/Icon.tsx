import Image from "next/image";

export default function Icon({src, className}:{src: string, className?: string}) {
    return <>
        <Image alt="Icon" className={className} src={src}/>
    </>
}