import Footer from "components/fixed/Footer";
import Header from "components/fixed/Header"
import { Link } from "react-router-dom";
import {Btncustom}from "./styled";

const Home = () => {

    return (
        <>
            <Header />
            <div className="container">
                <div className="jumbotron">
                    <div className ="justop">
                    <h1 className="display-4 mt-n1">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Btncustom>
                    <Link to="/dashboard">
                        <a><span>Acesse o Dashboard!</span></a>
                    </Link>
                    </Btncustom>
                 
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );


}

export default Home;