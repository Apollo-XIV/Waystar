import { GBook } from "@/components/utils/types";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { BookButtons } from "@/components/Button";
import { callAPI } from "@/modules/api";
import { createHash } from "crypto";
import Image from "next/image";

export default async function Book({params} : {params: {id: string}}) {
    const book: GBook | undefined = await getData(params.id);
    if (!book) {notFound()};
    const readers = await getReaders({title: book.volumeInfo.title, authors: book.volumeInfo.authors});

    return <>
        <div className="flex flex-col items-center align-center">
            <div className="relative overflow-hidden bg-secondary flex justify-center w-screen before:content-[''] before:bg-secondary before:absolute before:top-0 before:h-32 before:w-screen">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(0deg, rgba(57,58,58,0.6) 0%, var(--clr-secondary) 80%) ,url(${(book.volumeInfo.imageLinks) ? `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api` : ""})`,
                    backgroundSize: "cover",
                    filter: "blur(5px)",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}>
                     
                </div>
                <div className="relative flex gap-4 px-6 pb-10 lg:w-2/3">
                    <BookButtons book={book} className="absolute right-0 top-0" />
                    <Image alt="book cover" className="hover:scale-105 transition all rounded-md drop-shadow-xl w-64 relative z-50" src={(book.volumeInfo.imageLinks) ? `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api` : ""} /> {/** TODO: Make image shrink on scroll down */}
                    <div className="flex flex-col justify-end">
                        <p className="text-lg text-white font-sans italic">{book.volumeInfo.authors}</p>
                        <h1 className="text-6xl text-white font-black">{book.volumeInfo.title}</h1>
                        <p className="pt-1 font-sans text-white font-semibold">{readers} {(readers == 1) ? "reader" : "readers"} • {book.volumeInfo.publishedDate.slice(0,4)} • {book.volumeInfo.printedPageCount} pages</p>
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
    if (!response.ok) {
        return undefined;
    }
    return response.json();
}

async function getReaders(book: {title: string, authors: string[]}) {
    function generateBID(title: string, authors: string[]) {
        const authorString: string = authors.join()
        let prehash = title + authorString;
        const hash = createHash('sha256')
                        .update(prehash)
                        .digest('hex')
        return hash;
    }
    const res = await callAPI(`/logs/readers=${generateBID(book.title, book.authors)}`);
    return res.count;
}
