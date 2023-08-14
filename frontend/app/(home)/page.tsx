import Logo from "@/public/logo.svg";
import Foreground from '@/public/scene/foreground.svg'
import Midground from '@/public/scene/midground.svg'
import Background from '@/public/scene/background.svg'
import Orb from "@/public/scene/orb.svg"


export default function Home() {
    return <>
    <style>{`
        .level {
            --scaleMod: calc(var(--depth)*-0.4 + 1);
            --translateMod: calc(var(--depth) * 1px);
            transform: translateZ(var(--translateMod)) scale(var(--scaleMod));
            background-size: 100%;
        }


    `}
    </style>
    <div className="absolute inset-0 flex flex-col place-items-center">

    <div style={{
        perspective: "500px"
    }} id="mountains" className="absolute z-10 flex place-items-center justify-center top-0 h-screen w-[2000px] transform">
        <Orb className="h-1/2" />
        <Background style={{"--depth": "-20"}} className="level absolute bottom-0 min-w-full min-h-[50vh]" />
        <Midground style={{"--depth": "-10"}} className="level absolute bottom-0 min-w-full min-h-[50vh]" />
        <Foreground style={{"--depth": "0"}} className="level absolute bottom-0 min-w-full min-h-[50vh] " />
    </div>
    </div>
    <section className="flex z-20 absolute inset-0 px-8 md:px-28 flex-col justify-end py-24 sm:justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display w-full">Uncover Shared Stories.<br/>Connect Through the Pages.</h1>
        <p className="mt-8 text-lg font-serif md:max-w-3xl">Track, Connect, and Explore Your Reading Journey. Leave digital logs in books, articles, and more, connecting with fellow readers at shared moments. Rediscover your favourite passages and join a vibrant community of book lovers. Welcome to Waystar.</p>
    </section>
    <div className="h-[300vh] bg-transparent">

    </div>
    </>
}