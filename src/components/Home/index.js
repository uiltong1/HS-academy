import React, {Component} from "react";
import Inicio from "./Inicio";
import Sobre from "./Sobre";
import Atividades from "./Atividades";
import Contato from "./Contato";
import Footer from "./Footer";
class Home extends Component{
    render(){
        return(
            <div>
                <Inicio/>
                <Sobre/>
                <Atividades/>
                <Contato/>
                <Footer/>
            </div>
        )
    }
}
export default Home;