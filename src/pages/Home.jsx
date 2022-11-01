import { useState } from "react";

function Home() {
  //let a = 1;
  const [data, setData] = useState(1);

  const handleClick = () => {
    //a = 10;null
    setData(10);
  }
    return (
        <div>
            <div>Home</div>
            <span>{data}</span>
            <button onClick={handleClick}>Transformamos a</button>
        </div>
        /* <> tag vacio
            <div>Home</div>
            <span>{a}</span>
        </> */
  )
}

export default Home