import LogGroup from "@/components/logs/LogGroup";

export default function Test() {
    return <>
    <div className="flex gap-3 fixed inset-0 place-items-center justify-center">
        <LogGroup />
        <LogGroup />
        <LogGroup />
        <LogGroup />
    </div>
    </>
}