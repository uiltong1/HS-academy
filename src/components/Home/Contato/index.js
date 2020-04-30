import React, { Component } from "react";
import "./contato.css";
class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            texto: '',
        }
        this.enviar = this.enviar.bind(this)
    }
    enviar(e){
        const {nome} = this.state
        alert(`Olá ${nome}, infelizmente esse canal de atendimento está desabilitado \nPor favor ligue para: (xx)xxxx-xxxx`)
        e.preventDefault()
    }
    render() {
        return (
            <div id="contato">
                <form onSubmit={this.enviar}>
                <h1>Contato</h1>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} placeholder="Informe o seu nome" autoFocus
                        autoComplete="off" onChange={(e) => this.setState({ nome: e.target.value })} />
                    <label>Email:</label>
                    <input type="email" value={this.state.email} placeholder="exemplo@exemplo.com" autoFocus
                        autoComplete="off" onChange={(e) => this.setState({ email: e.target.value })} />
                    <label>Telefone:</label>
                    <input type="tel" value={this.state.telefone} placeholder="(XX)xxxx-xxxx"
                        autoComplete="off" onChange={(e) => this.setState({ telefone: e.target.value })} />
                    <label>Mensagem:</label>
                    <textarea value={this.state.texto} placeholder="Digite sua mensagem..."
                        autoComplete="off" onChange={(e) => this.setState({ texto: e.target.value })} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
export default Contato;