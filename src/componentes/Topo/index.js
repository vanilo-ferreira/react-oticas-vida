import "./style.css"

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao topo">
                <img src="assets/logo.png" alt="Logo Óticas Vida" className="imagem-topo"></img>

                <nav>
                    <a href="#produtos" className="link-topo">PRODUTOS</a>
                    <a href="#sobre" className="link-topo">SOBRE</a>
                    <a href="#contato" className="link-topo">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}