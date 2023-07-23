export default function Icon({src, className}:{src: string, className?: string}) {
    return <>
        <img className={className} src={src}/>
    </>
}