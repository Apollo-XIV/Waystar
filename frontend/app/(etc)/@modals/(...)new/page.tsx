import { getUserLogs } from '@/modules/api';
import Form from './form';


export default async function NewModal() {
    const logs = await getUserLogs();

    return <Form logs={logs} />
}