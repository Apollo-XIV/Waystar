
type Props = {
    className?: String,
}


export default function Noise({className}:Props) {
    const inheritedStyles = (className) ? className : "";

    return <>
        <div style={{mixBlendMode: "multiply"}} className={inheritedStyles + " pointer-events-none fixed inset-0 z-50 mix-blend-mode-overlay opacity-50 "}>
            <svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.65' 
                    numOctaves='3' 
                    stitchTiles='stitch'/>
                </filter>
                
                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
            </svg>
        </div>
    </>
}