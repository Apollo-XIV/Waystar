'use client'
export default function Test() {
    let result;
    async function testAPI() {
        result = await fetch('http://localhost:3001/logs/new',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                book: {
                    title: "The Way of Kings",
                    authors: ["Brandon Sanderson"]
                }
            })
        })
    }


    return <>
    <div className="flex place-items-center h-screen justify-center">
        <p>{result}</p>
        <div onClick={() => {testAPI()}} className="cursor-pointer w-32 h-16 rounded-xl bg-tertiary hover:brightness-75 transition-all">
            Test API
        </div>
    
    </div>
    </>
}