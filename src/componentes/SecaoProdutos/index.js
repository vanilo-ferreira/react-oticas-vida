import './style.css';

export default function SecaoProdutos() {
    return (
        <section id="produtos" className="secao-produtos">
            <div className="limitar-secao">
                <h2 className="texto-subtitulo">NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade de mercado.</p>
                <div className="container-produtos">
                    <div className='produtos-card'>
                        <h3>Óculos de grau</h3>
                        <img src="assets/oculos01.png" title='Óculos de grau' alt='Armação de óculos de grau' />
                        <p>R$ 500,00</p>
                    </div>
                    <div className='produtos-card'>
                        <h3>Óculos transition</h3>
                        <img src="assets/oculos02.png" title='Óculos transition' alt='Armação de óculos transition' />
                        <p>R$ 750,00</p>
                    </div>
                    <div className='produtos-card'>
                        <h3>Óculos de sol</h3>
                        <img src="assets/oculos03.png" title='Óculos de sol' alt='Armação de óculos de sol' />
                        <p>R$ 700,00</p>
                    </div>
                    <div className='produtos-card'>
                        <h3>Óculos infantil</h3>
                        <img src="assets/oculos04.png" title='Óculos infantil' alt='Armação de óculos infantil' />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <ul className='lista-produtos'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}