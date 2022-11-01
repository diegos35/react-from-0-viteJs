
function Home() {
  let a = 1;
  const handleClick = () => {
    a = 10;
  }
    return (
        <div>
            <div>Home</div>
            <span>{a}</span>
            <button onClick={handleClick}>Transformamos a</button>
        </div>
        /* <> tag vacio
            <div>Home</div>
            <span>{a}</span>
        </> */
  )
}

export default Home