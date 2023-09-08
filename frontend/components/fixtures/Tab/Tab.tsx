

export default function Tab() {
    const [index, setIndex] = useState(1);

    return <>
    <style>{`

        active-tab {
            width: 33%;
            position: absolute;
            left: 0;
            transition: transform 300ms;
        }

        active-tab[data-index="1"] {
            transform: translateX(0%);
        }
    
        active-tab[data-index="2"] {
            transform: translateX(100%);
        }

        active-tab[data-index="3"] {
            transform: translateX(200%);
        }
    
    `}</style>
    <div className="w-full relative">
        <div id="active-tab" data-index={index}>

        </div>
        <div id="tabs" className="">
            <div className="w-24 h-16 bg-black rounded-full">Test</div>
            <div className="w-24 h-16 bg-black rounded-full">Test</div>
            <div className="w-24 h-16 bg-black rounded-full">Test</div>
        </div>
    </div>
    </>
}