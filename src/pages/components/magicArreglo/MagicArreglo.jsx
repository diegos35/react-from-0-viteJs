
function MagicArreglo() {
    const arrgeglo = [
        {
            id: 1,
            nombre: 'Diego',
        },
        {   id: 2,
            nombre: 'Cristian',
        },
    ]
            
    return (
        <ul>
            {arrgeglo.map(item => (
                <li key={item.id}> {item.nombre}</li>)
            )}
        </ul>
    )
}

export default MagicArreglo