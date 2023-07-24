'use client';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import useGBAPI from '@/hooks/useGBAPI';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Search() {

    const router = useRouter();

    const {searchResults, search} = useGBAPI();

    const handleChange = async (string: string, results: Item[]) => {
        search(string);
        console.log(string)
    }

    const handleSelect = (result: Item) => {
        router.push(`/${result.id}`)
        console.log(result);
    }

    const formatResult = (item: Item) => {
        return <>
        <Link href={`/books/${item.id}`} className='flex gap-4 rounded-none'>
        <img className='h-10 rounded-none' src={item.thumbnail} />
        <div key={item.id} className=''>
            <p >{item.title}</p>
            {(item.authors) ? <p className='text-sm'>{item.authors.toString()}</p> : <></> }
        </div>
        </Link>
        </>
    }

    return <>
        <ReactSearchAutocomplete<Item>
            styling={{
                backgroundColor: "var(--clr-secondary)",
                hoverBackgroundColor: "var(--clr-primary)",
                border: "1px solid var(--clr-tertiary)",
                borderRadius: "10px",
                color: "white",
                width: "100%",
                height: "3rem"

            }}
            className='w-full rounded-lg'
            placeholder="Search Books, Authors, & Users..."
            onSearch={handleChange}
            onSelect={handleSelect}
            autoFocus={true}
            showClear={false}
            items={searchResults.map((result, index) => {
                try {

                    return {id: index,
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        thumbnail: result.volumeInfo.imageLinks.smallThumbnail
                    }
                } catch (e: any) {
                    console.log("eh");
                    return {
                        id: index,
                        title: "",
                        authors:[""],
                        thumbnail: "",
                    }
                }})
            }
            fuseOptions={{keys: ["title","authors"]}}
            formatResult={formatResult}
            showIcon={false}
            />
    </>
}

type Item = {
    id: number,
    title: string,
    authors: string[],
    thumbnail: string,
}