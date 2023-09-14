import Logo from "@/public/logo.svg";
import Foreground from  "@/public/scene/foreground.svg" ;
import Midground from  "@/public/scene/midground.svg" ;
import Background from  "@/public/scene/background.svg" ;
import Orb from "@/public/scene/orb.svg";
import SignIn from "@/components/auth/signIn";
import Footer from "@/components/fixtures/Footer";

export default function Home() {
    return <>
    <style>{`
        #container {
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
            perspective: 1px;
            perspective-origin: 0 0;
            position: relative;
            
        }
        
        .p-cont {
            transform-style: preserve-3d;
        }

        .foreground {
            transform-origin: 0 0;
            transform: translateZ(0px) scale(1);
        }

        .midground {
            transform-origin: 0 0;
            transform: translateZ(-0.5px) translateY(60%) scale(1.5);
        }

        .background {
            transform-origin: 0 0;
            transform: translateZ(-1px) translateY(60%) scale(2);
        }

    `}</style>
    <Logo className="fixed top-4 left-4 drop-shadow-2xl z-10 w-32 hover:scale-105 transition-all h-min" />
    <SignIn className="fixed top-6 right-4 z-10 rounded-full w-48"/>
    <div className="fixed inset-0 bg-gradient-to-t from-[#f8782f75] to-[var(--clr-secondary)] flex place-items-center justify-center">
        <Orb className="fixed flat top-0 scale-50" />
    </div>
    <div id="container" className="max-h-3xl">

        <div className="p-cont h-screen relative aspect-video">
            <div className="p-cont flex place-items-center justify-center absolute inset-0">
                <section className="flex z-20 absolute inset-0 px-8 text-white md:px-28 flex-col justify-end py-24 sm:justify-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display drop-shadow-2xl w-full">Uncover Shared Stories.<br/>Connect Through the Pages.</h1>
                    <p className="mt-8 text-lg font-serif drop-shadow-2xl md:max-w-3xl">Track, Connect, and Explore Your Reading Journey. Leave digital logs in books, articles, and more, connecting with fellow readers at shared moments. Rediscover your favourite passages and join a vibrant community of book lovers. Welcome to Waystar.</p>
                </section>
            </div>
            <Background className="absolute background bottom-0" />
            <Midground className="absolute midground bottom-0" />
            <Foreground className="absolute foreground bottom-0" />
        </div>

        <div className="bg-gradient-to-b from-[var(--scene-foreground)] to-[var(--clr-primary)] z-0 relative flex justify-center">
            <div className="max-w-3xl m-5 w-full pt-10 pb-10">


            <section id="features">
                <h1 className="font-display text-4xl">40 Million+ Books</h1>
                <p>With access to over 40 million books and the entire Google Books repository, chances are that we have exactly what you  re looking for. Add as many books as you  d like to your account, with the option to group them into categories for convenience.</p>

                <h1 className="mt-10 font-display text-4xl text-right">A Feed You Care About</h1>
                <p className="text-right">Catch up on exciting moments from your latest book or see what your friends have been reading in one place. Every reader is different, but, with a personalised timeline, Waystar makes it easy to engage with the communities you care about.</p>

                <h1 className="mt-10 font-display text-4xl">Leave Virtual Footnotes</h1>
                <p>Waystar lets you track books using logs. A log is simply a collection of posts, made by you, that keeps note of where in the book you are using page numbers. Each post has a page number attached, meaning posts are only shown to either those who  ve opted in to spoilers or won  t be affected by them. Use posts to write your thoughts on a passage, predictions for what happens next, or simply to add your own personal notes to the book - for those shy of annotating books directly.</p>
            </section>

            <section id="demo" className="mt-24">
                <h1 className="font-display text-5xl">Demo</h1>
                <div className="flex flex-col p-2 w-full bg-accent rounded-xl">
                        <iframe className="aspect-video w-full rounded-lg"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                        </iframe>
                        <h1 className="text-black font-serif text-xl p-1">Using Waystar - watch (2:30m)</h1>
                </div>
            </section>

            <section id="testimonies">

                <h1 className="mt-10 font-display text-4xl">What Our Users are Saying</h1>
                <p>Below is just some of the positive feedback we  ve received. We  re only a small platform so your feedback and thoughts are always appreciated. If you ve used Waystar before, please feel free to <a href="/feedback">Take the Survey</a> and your answer may show up here!</p>

                <Testimony  title="Mark T. Moniker, June 2023"
                            content="&quot;I ve always enjoyed reading, but Waystar has taken my love for books to a whole new level. The ability to leave virtual notes and interact with fellow readers has made reading a truly immersive and social experience. It s incredibly rewarding to connect with others who share the same literary passion. Waystar has become an essential part of my reading routine.&quot;"
                            className="mt-10"
                />

                <Testimony  title="Sarah G. Alias, May 2023"
                            content="&quot;Waystar has completely transformed the way I read books. Leaving virtual notes and connecting with other readers has added a whole new dimension to my reading experience. It s like having a book club right at my fingertips! Highly recommended for any book lover out there.&quot;"
                            className="ml-auto mt-5 mb-10"
                />

            </section>

            <section id="register" className="mt-24"> 
                
                <div className="flex flex-row rounded-2xl bg-secondary relative before:-z-10 before:absolute before:-inset-[1px] before:bg-black before:rounded-2xl">
                    <div className="bg-tertiary basis-1/2 rounded-2xl flex flex-col justify-center place-items-center px-7 py-32 border-br-1">
                        
                        <div className="mb-5">
                        <p className="text-lg text-right -mb-2 font-sans">join over</p>
                        <h1 className="text-6xl font-bold font-sans">1000+</h1>
                        <p className="text-lg -mt-2 font-sans">users</p>
                        </div>
                        <h1 className="text-xl mb-2 font-display">Join Waystar in One Click</h1>
                        <SignIn className="w-full rounded-lg" />
                        <div className="divider">or</div>
                        <input type="text" placeholder="email..." className="input text-black input-bordered w-full max-w-xs bg-accent" />
                        <input type="text" placeholder="password..." className="input text-black input-bordered w-full max-w-xs mt-1 bg-accent" />

                    </div>
                    <div className="basis-1/2 flex flex-col justify-center place-items-center px-7">
                        <h1 className="font-sans font-bold text-3xl text-white">How it Works</h1>
                        <ol type="1" className="font-sans text-white">
                            <li>1.  Sign up for a free account.</li>
                            <li>2.  Select a book from our extensive library or add a book manually.</li>
                            <li>3.  Start reading and leave virtual notes as you go.</li>
                            <li>4.  Explore your timeline to see notes from other readers who have marked the same pages.</li>
                            <li>5.  Connect with fellow readers, join discussions, and expand your literary horizons.</li>
                        </ol>

                    </div>
                </div>

            </section>



            </div>
        </div>
        <Footer/>
        </div>

</>}

function Testimony({title, content, className}:{title: string, content: string, className?: string}) {
    return <>
    <div className={className+" "+"bg-secondary rounded-xl max-w-prose relative before:-z-10 before:absolute before:-inset-[1px] before:bg-black before:rounded-xl"}>

        <h1 className="px-4 text-white py-2 font-display text-xl">
            {title}
        </h1>
        <div className="bg-accent text-primary italic p-4 rounded-lg font-serif">
        <p>
            {content}
        </p>
        </div>
    </div>
    </>
}