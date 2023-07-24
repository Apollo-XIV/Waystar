import useGBAPI from '@/hooks/useGBAPI';
import Autocomplete from '@mui/material/Autocomplete'

export default function Search() {

    const {searchResults, search} = useGBAPI();

    return <>
        <Autocomplete
            options={searchResults}
            filterOptions={(x) => x}
            renderInput={(params) => (
                <input type='text' {...params} placeholder="Add a location" />
            )}
            />
    </>
}

type Item = {
    id: number,
    title: string,
    authors: string[],
    thumbnail: string,
}