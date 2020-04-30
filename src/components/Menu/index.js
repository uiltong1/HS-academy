import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./menu.css";

class Menu extends Component {
    render() {
        return (
            <div id="header-content">
                <div className="menu-content">
                    <Link to="#home" smooth>Home</Link>
                    <Link to="#atividades" smooth>Atividades</Link>
                    <Link to="#sobre" smooth>Sobre</Link>
                    <Link to="#contato" smooth>Contato</Link>
                </div>
            </div>
        )
    }
}
export default Menu;