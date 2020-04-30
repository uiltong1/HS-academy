import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="rodape">
                    <div>
                        <h1>LOGO</h1>
                    </div>
                    <div>
                        <article>
                            <strong>Sede Administrativa:</strong>
                            <p>Endereço: Rua Barros de Leão</p>
                            <p>Bairro: Rio São João</p>
                            <p>CEP: 40221-042</p>
                            <p>Telefone: (XX)XXXX-XXXX</p>
                        </article>
                    </div>
                </div>
                <div className="copy">
                    <h5>© Copyright - HS Academy</h5>
                </div>
            </footer>
        )
    }
}
export default Footer;