import React, { Component } from "react";
import "./atividades.css";
import img from "../../../assets/academia-ambiente.jpg"
class Atividades extends Component {
    render() {
        return (
            <section id="atividades">
                <h1>Atividades</h1>
                <div className="lista-atividades">
                    <article>
                        <img src={img} />
                        <h4>Artes Marciais</h4>
                    </article>
                    <article>
                        <img src={img} />
                        <h4>Aeróbico</h4>
                    </article>
                    <article>
                        <img src={img} />
                        <h4>Boxe</h4>
                    </article>
                </div>
                <div className="lista-atividades">
                    <article>
                        <img src={img} />
                        <h4>Musculação</h4>
                    </article>
                    <article>
                        <img src={img} />
                        <h4>Natação</h4>
                    </article>
                    <article>
                        <img src={img} />
                        <h4>Zumba</h4>
                    </article>
                </div>
            </section>
        )
    }
}
export default Atividades;