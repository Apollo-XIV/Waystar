import Modal from '@/components/Modal';

export default function New() {
    return <>
        <Modal>
            <div className='absolute inset-0 m-5 flex flex-col'>
                <h1 className='font-display text-2xl font-bold text-accent pointer-events-none capitalize'>Create new entry</h1>
                <p className='text-lg'>Select a log</p>
                <select className="select select-bordered select-lg w-full bg-secondary">
                    <option disabled selected>Large</option>
                    <option>Large Apple</option>
                    <option>Large Orange</option>
                    <option>Large Tomato</option>
                </select>
                <textarea className="inline-block mt-2 p-4 grow rounded-lg w-full bg-secondary focus:border-primary" placeholder="What are your thoughts..."></textarea>
                <button className='self-end p-3 w-32 rounded-lg mt-2 hover:brightness-90 transition-all bg-primary'>Submit</button>
            </div>
        </Modal>
    </>
}