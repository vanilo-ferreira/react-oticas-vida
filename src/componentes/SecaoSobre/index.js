import "./style.css";

export default function SecaoSobre() {
    return (
        <section id="sobre">
            <div className="limitar-secao">
                <h2 className="texto-subtitulo">QUEM SOMOS NÓS?</h2>
                <p className="paragrafo-secao-sobre">Fundada em 2001, em Nova iguaçu - Rio de Janeiro, a òticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivco de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="box-cards">
                <img src="assets/loja.png" title="Imagem da loja" alt="Imagem de prateleira de remédios da Óticas vida"/>
                    <div>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div> 
                    <div>
                        <h3>ATENDIMENTO <br/>FLEXIVEL</h3>
                        <p>Nossa equipe possui treinamentos para atender</p>
                    </div>
                    <img src="assets/atendimento.png" title="Atendimento" alt="Funcionária realizando um atendimento na Óticas vida"></img>
                </div>
            </div>
        </section>
    )
}