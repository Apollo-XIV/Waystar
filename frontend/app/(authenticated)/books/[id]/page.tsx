

export default async function Book({params} : {params: {id: string}}) {
    const book = await getData(params.id)

    return <>
        <div className="flex">
        <img src={book.volumeInfo.imageLinks.thumbnail} />
        <div>
            <h1 className="text-3xl">{book.volumeInfo.title}</h1>
        </div>
        </div>
        <p>
            {book.volumeInfo.title}
        </p>
    </>
}

async function getData(id: string) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book: GBook = await response.json();

    return book
}

export interface GBook {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
}

export interface AccessInfo {
    country:                string;
    viewability:            string;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: string;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       string;
    quoteSharingAllowed:    boolean;
}

export interface Epub {
    isAvailable: boolean;
}

export interface SaleInfo {
    country:     string;
    saleability: string;
    isEbook:     boolean;
}

export interface VolumeInfo {
    title:               string;
    authors:             string[];
    publisher:           string;
    publishedDate:       string;
    readingModes:        ReadingModes;
    pageCount:           number;
    printedPageCount:    number;
    printType:           string;
    maturityRating:      string;
    allowAnonLogging:    boolean;
    contentVersion:      string;
    panelizationSummary: PanelizationSummary;
    imageLinks:          ImageLinks;
    language:            string;
    previewLink:         string;
    infoLink:            string;
    canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
    small:          string;
    medium:         string;
    large:          string;
    extraLarge:     string;
}

export interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}
