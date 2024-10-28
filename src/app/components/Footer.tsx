import Image from "next/image";

export default function Footer(){
    return(
        <div>
            <Image id="footl" src="/Linkedin.png" alt="picture" width={30} height={30} />
            <Image id="foott" src="/Vector.png" alt="picture" width={36.92} height={30} />
            <Image id="footf" src="/fb.png" alt="picture" width={30} height={30} />
            <Image id="footia" src="/Vector.svg" alt="picture" width={30} height={30} />
            <Image id="footib" src="/Vectorc.svg" alt="picture" width={15.46} height={15.46} />
            <Image id="footic" src="/Vectorb.svg" alt="picture" width={3.9} height={3.9} />
         <p id="footp">Copyright ©2020 All rights reserved </p>
        </div>
    )
}