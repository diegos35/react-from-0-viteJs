import { useEffect, useState } from "react";
import { MagicArreglo, MagicButton } from "./components"; //con plugin auto barrel
/* import MagicArreglo from "./components/magicArreglo/MagicArreglo";
import MagicButton from "./components/magicButton/MagicButton";
 */
function Home() {
  
    return (
       /*  <div>
            <div>Home</div>
            <span>{data}</span>
        
        </div> */

        <>
        <MagicButton/>
        <MagicArreglo/>
        </>
  )
}

export default Home