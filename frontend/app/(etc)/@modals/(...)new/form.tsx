'use client';
import Modal from "@/components/Modal";
import { Log } from "@/modules/entity";
import Tooltip from '@/public/tooltip.svg';
import {callAPI} from '@/modules/api';
import { useRouter } from "next/navigation";

export default function Form({logs}:{logs: Log[]}) {

    const router = useRouter();

    async function handlePost(formData: any) {
        console.log(formData.get("content"))
        const res = await callAPI("/entries/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: formData.get("content"),
                index: formData.get("index"),
                log: formData.get("log"),
            }),
        });
        if (res.ok) {
            router.back();
        }
    }

    return <>
    <Modal>
        <form action={handlePost} >
        <div className="absolute inset-0 m-5 flex flex-col">
        <h1 className='font-heading text-2xl font-bold pointer-events-none capitalize'>New Entry</h1>
        <label>
        <p className="font-sans">Select a Log</p>
        <select name="log" className="block select bg-secondary select-bordered text-white w-full max-w-xs">
            {(logs) && logs.map((log) => <>
                <option className="font-sans bg-secondary text-white" key={log.book.title} value={log.id}>{log.book.title}</option>
            </>)}
        </select>
        </label>
        <label>
            <span className="font-sans">Page No.</span>
            <div className="tooltip inline" data-tip="Enter the page number where you would like to attach this entry. This may update your place in the book, and will be visible to anyone else past that point.">
                <Tooltip className="inline w-4 ml-1 h-4" />
            </div><br/>
            <input name="index" required pattern="^[1-9]\d*$" className="input bg-secondary text-white" type="number" id="pageNo" min="0"></input>
        </label>
        <label className="flex-grow flex flex-col">
            <p className="font-sans">Entry Contents</p>
            <textarea required name="content" placeholder="What are your thoughts..." className="flex-grow textarea textarea-bordered bg-secondary text-white textarea-sm w-full " ></textarea>
        </label>
        <label className="w-fit mt-2 place-self-end">
            <input type="submit" className="btn bg-secondary hover:bg-secondary hover:brightness-75 text-white" value="Submit" />
        </label>
        </div>
        </form>
    </Modal>
</>
}