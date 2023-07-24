export default function LogGroup() {
    return <>
    <div className="bg-accent cursor-pointer hover:scale-105 transition-all h-64 w-48 p-2 rounded-lg flex-col flex">
        <div className="bg-secondary  relative w-full max-h-full overflow-hidden rounded-md">
            <p className="text-white z-20 absolute text-md left-2 bottom-1 leading-5 font-bold">Author Name Thats Longer</p>
            <div className="relative z-10">
                <img src={"https://www.gollancz.co.uk/wp-content/uploads/2018/07/hbg-title-9780575097360-694.jpg?fit=440%2C675"} className="" />
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 right-0 left-0 h-48"></div>
            </div>
        </div>
        <p className="mx-2 mt-1 text-black text-lg leading-5 font-bold">Book Title Thats Also Longer And</p>
        <div className="px-2 flex">
            <span className="text-black text-xs leading-0">58%</span>
            <span className="text-black ml-auto text-xs leading-0">12 Posts</span>
        </div>
    </div> 
</>}