
type Props = {
    className?: String,
}


export default function Noise({className}:Props) {
    const inheritedStyles = (className) ? className : "";

    return <>
        <div className={inheritedStyles + "absolute inset-0 z-100 opacity-20"}>
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