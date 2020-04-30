import React, { Component } from "react";
import img from "../../../assets/inicio.jpeg";
import "./inicio.css"
class Inicio extends Component {
    render() {
        return (
            <section>
                <div className="inicio">
                    <img src={img} alt="Arquitetura" />
                    <strong>HS - ACADEMY <br/> Venha fazer parte desse time de campeões!</strong>
                </div>
            </section>
        )
    }
}
export default Inicio;