'use client';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import useGBAPI from '@/hooks/useGBAPI';

export default function Search() {

    const {searchResults, search} = useGBAPI();

    const handleChange = async (string: string, results: Item[]) => {
        search(string);
        console.log(string)
    }


    const formatResult = (item: Item) => {
        return <>
        <div className='flex gap-4'>
        <img className='h-10' src={item.thumbnail} />
        <div key={item.id} className=''>
            <p >{item.title}</p>
            {(item.authors) ? <p className='text-sm'>{item.authors.toString()}</p> : <></> }
        </div>
        </div>
        </>
    }

    return <>
        <ReactSearchAutocomplete<Item>
            styling={{
                backgroundColor: "var(--clr-secondary)",
                hoverBackgroundColor: "var(--clr-primary)",
                border: "1px solid var(--clr-tertiary)",
                color: "white",
                width: "100%",

            }}
            className='w-full'
            placeholder="Search Books, Authors, & Users..."
            onSearch={handleChange}
            autoFocus={true}
            onSelect={(item) => {console.log(item)}}
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