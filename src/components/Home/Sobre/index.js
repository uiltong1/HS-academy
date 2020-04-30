import React, { Component } from "react";
import academia from "../../../assets/academia-ambiente.jpg";
import "./sobre.css";

class Sobre extends Component {
    render() {
        return (
            <section id="sobre">
                <div>
                    <h1 className="title-sobre">HS Academy</h1>
                    <div className="texto">
                        <p>A HS Academy é uma Academia que alia beleza, praticidade, conforto e seriedade em cada detalhe.
                        Desde a sua inauguração da Unidade Pará no ano 2000, sempre teve como compromisso ser melhor a cada dia,
                        com responsabilidade, ética, respeito ao próximo e transparência. É uma empresa de vanguarda, sempre
                        atenta às tendências do mercado, com um ambiente moderno,  espaços bem aproveitados e completamente climatizados,
                        surpreende a todos que visitam, a Unidade Rosas inaugurada em 2015 conta com a mesma
                         qualidade constatada nesses anos.</p>
                        <p>É uma academia que se preocupa em estimular a melhoria da qualidade de vida aos seus alunos, através de exercícios
                        físicos orientados e eficientes, contribuindo na conquista de resultados para uma vida melhor. Mais que cuidar
                        do bem-estar, equilíbrio e condicionamento físico, a HS Academy propõe a integrar, compartilhar e se comunicar
                    com o aluno de forma diferenciada.</p>
                    </div>
                    <h1 className="title-unidades">Nossas Unidades</h1>
                    <div className="unidades">
                        <article>
                            <h2>Itapuã</h2>
                            <img src={academia} />
                        </article>
                        <article>
                            <h2>Costa Azul</h2>
                            <img src={academia} />
                        </article>
                        <article>
                            <h2>Pituba</h2>
                            <img src={academia} />
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}
export default Sobre;