const Lista = () => {
    const arrayObj = ['Mesa', 'Cadeira', 'Janela', 'Sofa', 'Televisão']
    return(
        <ul>
            {
                arrayObj.map((obj, i) => (
                    <li key={i}>
                        {obj}
                    </li>
                ))
            }
        </ul>
    )
}

export default Lista