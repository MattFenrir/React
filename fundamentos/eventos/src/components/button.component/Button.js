const Button = () => {
    const handleBtn = (e) => {
        console.log('Clicou em mim!')
        console.log(e.target)
    }
    
    const texto = () => {
        const p = <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi saepe dolores molestias. Nobis quaerat, quam aperiam aliquid non sint quos provident reprehenderit voluptates ratione. Architecto minima adipisci accusantium modi error.</p>
        return p
    }

    return(
        <div>
            <div>
            <button onClick={handleBtn}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Função inline')}>Função inLine</button>
            </div>
            <div>
                <button onClick={(e) => {
                    console.log('Bloco')
                    e.target.classList.add('evento')
                    console.log(e.target)
                }}>Bloco inLine</button>
            </div>
            {texto()}
        </div>
    )
}

export default Button