import Image from "next/image";
export default function Herosection(){
    return(
        <>
        <div>
        <Image id="image" src="/image.png" alt="picture" width={282} height={297} />
        </div>
        <div id="h-text">
            <h1 id="h-text-h">Hi, I am John, Creative Technologist</h1>
            <p id="h-text-t">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <button id="h-text-b">Download Resume</button>
        
         
        </>
    )
}