import { PostType } from './typedef';

type Props = {
    post: PostType;
}

export default function Post({post}:Props) {
    const date: Date = new Date(post.posted);
    return <>
        <div className='card card-compact shadow-xl bg-neutral'>
            <div className='card-body'>
            <p className='text-primary inline'>{post.author}</p>
            <p className='card-title'>{post.content}</p>
            {/* <p className='text-black'>{(chirp.likes).toString()}</p> */}
            <p className='text-primary'>{date.toLocaleDateString()}</p>
            </div>
        </div>
    </>
}