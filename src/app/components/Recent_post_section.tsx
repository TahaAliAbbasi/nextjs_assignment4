import Image from "next/image";

export default function Recent_post_section(){
    return(
        <div id="rps">
            <h1 id="rpsh">Making a design system from scratch</h1>
            <p id="rpsp">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p id="rpsdp">Design , Pattern</p>
            <Image id="rpssym" src="/Vector 1.png" alt="picture" width={3} height={20} />
            <p id="rps12">12 Feb 2020</p>
        </div>
    )
}