import LogGroup from '@/components/logs/LogGroup';
import { getUserLogs, test } from '@/modules/api';
import {Log} from '@/modules/entity';

export default async function Logs() {
    const logs = await getUserLogs();

    return <>
    <div className='flex justify-center px-2'>
    <div className='mt-10 w-full md:w-2/3 lg:w-1/2'>
        <h1 className='text-3xl pl-5 font-display'>All</h1>
        <div className='divider h-0'></div>
        <div className='px-5 flex gap-2 flex-wrap'>
            {(logs) && logs.map((log) => <div key={log.book.title}>
                <LogGroup  log={log} />
                </div>
            )}
        </div>
    </div>
    </div>
    </>
}
