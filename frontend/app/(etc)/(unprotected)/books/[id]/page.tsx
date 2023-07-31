import { GBook } from "@/components/utils/types";
import parse from "html-react-parser";

export default async function Book({params} : {params: {id: string}}) {
    const book = await getData(params.id)

    return <>
        <div className="flex flex-col items-center align-center">
            <div className="bg-secondary flex justify-center w-screen before:content-[''] before:bg-secondary before:absolute before:top-0 before:h-32 before:w-screen">
                <div className="relative flex gap-4 px-6 pb-10 lg:w-2/3">
                    <Buttons className="absolute right-0 top-0" />
                    <img className="hover:scale-105 transition all rounded-md drop-shadow-xl w-64 relative z-50" src={(book.volumeInfo.imageLinks) ? `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api` : ""} /> {/** TODO: Make image shrink on scroll down */}
                    <div className="flex flex-col justify-end">
                        <p className="text-lg italic">{book.volumeInfo.authors}</p>
                        <h1 className="text-6xl font-black">{book.volumeInfo.title}</h1>
                        <p className="pt-1 font-semibold">x readers • {book.volumeInfo.publishedDate.slice(0,4)} • {book.volumeInfo.printedPageCount} pages</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 p-6 lg:w-2/3">
                <div id="description" className="relative shrink basis-1/3 grow min-w-[20rem]  overflow-hidden">
                    <div tabIndex={0} className="hover:underline focus:cursor-auto focus:opacity-0 focus:top-0 absolute bottom-0 peer w-full bg-gradient-to-t from-primary to-transparent text-center cursor-pointer">See more </div>
                    <div className="peer-focus:max-h-full max-h-[30rem]">{(book.volumeInfo.description) ? parse(book.volumeInfo.description) : <></>}</div>
                </div>
                <div className="shrink basis-1/3 grow min-w-[20rem]">
                    <div className="flex place-items-center justify-center bg-blue-800 h-full">
                        TODO
                    </div>
                </div>
            </div>
        </div>
    </>
}

async function getData(id: string) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book: GBook = await response.json();

    return book
}

function Buttons({className} : {className?: string}) {
    return <>
    <div className={className + " gap-2 flex"}>
        <div className="h-12 w-40 bg-primary flex place-items-center justify-center rounded-xl cursor-pointer hover:brightness-75 transition-all">
            <p className="text-center">Add to Logs</p>
        </div>
        <div className="w-12 h-12 bg-primary rounded-xl cursor-pointer hover:brightness-75 transition-all"></div>
    </div>
    </>
}
