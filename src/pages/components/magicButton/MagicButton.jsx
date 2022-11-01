import { useEffect, useState } from "react";

function MagicButton() {
    const [data, setData] = useState(1);
    
    const handleClick = () => {
      //a = 10;null
      setData(10);
    }
    useEffect(() => { //Life Cicle
        console.log('apenas se inicie el componente life cicle', data);
    
        /* return () => {
            console.log('cuando muere el componente')
        }; */
      }, [data]) //Change: tiene que venir del useState y es lo que cambia
  
    return (
        <div>
            <span>  {data} </span>
            <button onClick={handleClick}>Transformamos a</button>
        </div>
    )
}

export default MagicButton