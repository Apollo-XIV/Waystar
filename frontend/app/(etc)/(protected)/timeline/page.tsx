import UserBox from "@/components/auth/UserBox"
import { callAPI } from "@/modules/api";
import { User, Entry } from "@/modules/entity"


export default async function Page() {
    const entries = await callAPI("/entries/timeline") as Partial<Entry>[];

    return <>
    <div className="flex justify-center place-items-center">
        <div className="relative w-full h-full py-8 max-w-prose flex flex-col gap-5 z-[1]
                        before:left-0 before:top-0 before:bottom-0 before:absolute before:w-32
                        before:border-dashed before:border-white before:border-r-2 before:z-[-1]
        ">

    {entries.map((entry: Partial<Entry>) => <>
        <EntryBox entry={entry}/>
    </>)}




        </div>
    </div>
    </>
}

function EntryBox({entry}:{entry: Partial<Entry>}) {


    return <>
    <div className="w-full bg-tertiary rounded-xl p-5">
        <div className="flex w-full place-items-end">
            <p className="font-bold text-end text-xl">{entry.log?.user.name} has read up to page {entry.index}</p>
            <p className="ml-auto text-end text-3xl font-bold"><span className="text-xl font-normal">pg</span>{entry.index}</p>
        </div>
        <p>{entry.content}</p>
        <div className="flex flex-row w-full mt-2">
            <UserBrick user={entry.log!.user} />
            <div className="flex gap-2 ml-auto">
                <div className="flex flex-col justify-end">
                {/* Book */}
                <p className="text-right font-semibold">{entry.log?.book.title}</p>
                {/* Date */}
                <p className="text-right italic">0/1/23</p>
                </div>
            {/* Index */}

            </div>
        </div>
    </div>
    </>
}

function UserBrick({user}:{user : Partial<User>}) {
    return <>
    <div className="flex gap-2">
        {/**Circle */}
        <div className="bg-slate-600 rounded-full w-12 h-12"></div>

        <div className="flex flex-col">
            <p className="font-semibold">{user.name}</p>
        {/* username */}
            <p>{user.handle}@example</p>
        {/* Handle */}
        </div>
    </div>
    </>
}