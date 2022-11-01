import { useState } from "react";

function Home() {
  //let a = 1;
  const [data, setData] = useState(1);
  const arrgeglo = [
    {
        id: 1,
        nombre: 'Diego',
    },
    {   id: 2,
        nombre: 'Cristian',
    },
]

  const handleClick = () => {
    //a = 10;null
    setData(10);
  }
    return (
        <div>
            <div>Home</div>
            <span>{data}</span>
            <button onClick={handleClick}>Transformamos a</button>
        <ul>
            {arrgeglo.map(item => (
                <li key={item.id}> {item.nombre}</li>)
            )}
        </ul>
        </div>

        /* <> tag vacio
            <div>Home</div>
            <span>{a}</span>
        </> */
  )
}

export default Home