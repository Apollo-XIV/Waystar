import { GBook } from "@/components/utils/types";

export default async function Book({params} : {params: {id: string}}) {
    const book = await getData(params.id)

    return <>
        <div className="flex flex-col items-center align-center">
            <div className="bg-secondary flex justify-center w-screen">
                <div className="relative flex gap-4 px-6 pb-10 lg:w-2/3">
                    <Buttons className="absolute right-0 top-0" />
                    <img className="hover:scale-105 transition all rounded-md drop-shadow-xl w-64" src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : ""} />
                    <div className="flex flex-col justify-end">
                        <p className="text-lg italic">{book.volumeInfo.authors}</p>
                        <h1 className="text-6xl font-black">{book.volumeInfo.title}</h1>
                        <p className="font-semibold">x readers • {book.volumeInfo.publishedDate.slice(0,4)} • {book.volumeInfo.printedPageCount} pages</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="">

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
