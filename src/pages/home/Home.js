import React from 'react';
import './home-style.css';
import imgLogo from './img/logo.png';
import imgPessoas from './img/pessoa-celular1-test.jpg';
import imgtel from './img/imgtel.svg';
import { Link } from "react-router-dom"



const Home = () => (

<div className="bg-help">
    
    <div id="header">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between col-12"> 
            <div className="col-6"> 
                <a className="navbar-brand" href="#">
                    <img src={imgLogo} alt="logo-telzir" className="img-fluid"/>
                </a>
                </div>
                <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-4" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active" aria-current="page">
                                Página Inicial
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#plano-normal" className="nav-link">
                                Serviços
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>  
        </div>
    </div>

    <div id="slider">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4 align-self-center mb-md-0 mb-4">
                    <h1>Telzir</h1>
                    <h4 className="mb-4">Somos uma empresa de telefonia, especializada em chamadas de longa distância nacional, estamos em busca de inovar
                    colocando um novo produto no mercado chamado FaleMais.</h4>
                    <a href="#falemais" className="btn btn-outline-primary button d-md-inline-block d-block mb-md-0 mb-2 mr-2">
                        Saiba mais
                    </a>
                </div>
                <div className="col-md-8 align-self-center text-center">
                    <img src={imgPessoas} className="img-fluid" alt="Pessoas no Celular" />
                </div>
            </div>
        </div>
    </div> 

    <section className="container space-section">
        <div className="row space-title-normal">
            <div className="col-12 col-md-12">
                <h3 id="plano-normal">Plano Normal</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Origem</th>
                            <th scope="col">Destino</th>
                            <th scope="col">R$/Minuto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>011</td>
                            <td>016</td>
                            <td>R$1,90</td>
                        </tr>

                        <tr>
                            <td>016</td>
                            <td>011</td>
                            <td>R$2,90</td>
                        </tr>

                        <tr>
                            <td>011</td>
                            <td>017</td>
                            <td>R$1,70</td>
                        </tr>

                        <tr>
                            <td>017</td>
                            <td>011</td>
                            <td>R$2,70</td>
                        </tr>

                        <tr>
                            <td>011</td>
                            <td>018</td>
                            <td>R$0,90</td>
                        </tr>

                        <tr>
                            <td>018</td>
                            <td>011</td>
                            <td>R$1,90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-12 col-md-6 mb-4 order-mb-2 order-1 text-plano-normal">
                <p>
                    Com o plano normal, o cliente pode fazer uma chamada de uma cidade para outra pagando
                    uma tarifa fixa por minuto com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino.
                </p>
            </div>
        </div>
    </section>

    <section className="space-section bg-plano-plus block">
        <div className="container">
            <div className="col-12 col-md-12 text-center">
                <h2 id="falemais">Plano Fale Mais</h2>
                <h4 id="txt-falemais" className="mb-4">
                    Com o novo produto FaleMais o cliente adquire um plano e pode falar de graça até
                    determinado tempo (em minutos) e só paga os minutos excedentes economizando dinheiro e falando mais. 
                    Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto.
                </h4>
                <div className="d-flex">
                    <div className="col-4">
                        <a href="#" className="destaque">
                            <div className="img-container mb-3">
                                <img src={imgtel} className="img-fluid" alt="Icone telefone"></img>
                            </div>
                            <h5>FaleMais 30</h5>
                            <p className="mb-0">30 minutos.</p>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="#" className="destaque">
                            <div className="img-container mb-3">
                                <img src={imgtel} className="img-fluid" alt="Icone telefone"></img>
                            </div>
                            <h5>FaleMais 60</h5>
                            <p className="mb-0">60 minutos.</p>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="#" className="destaque">
                            <div className="img-container mb-3">
                                <img src={imgtel} className="img-fluid" alt="Icone telefone"></img>
                            </div>
                            <h5>FaleMais 120</h5>
                            <p className="mb-0">120 minutos.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container space-section bg-plano-table">
        <div className="row">
            <div className="col-12 col-md-12 title-plano-table">
                <h3 id="exLigacao">Exemplos de Ligações</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="table-responsive-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Origem</th>
                                <th scope="col">Destino</th>
                                <th scope="col">Tempo</th>
                                <th scope="col">Plano FaleMais</th>
                                <th scope="col">Com FaleMais</th>
                                <th scope="col">Sem FaleMais</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>011</td>
                                <td>016</td>
                                <td>20</td>
                                <td>FaleMais 30</td>
                                <td>R$ 0,0</td>
                                <td>R$ 38,00</td>
                            </tr>

                            <tr>
                                <td>011</td>
                                <td>017</td>
                                <td>80</td>
                                <td>FaleMais 60</td>
                                <td>R$ 37,40</td>
                                <td>R$ 136,00</td>
                            </tr>

                            <tr>
                                <td>018</td>
                                <td>011</td>
                                <td>200</td>
                                <td>FaleMais 120</td>
                                <td>R$ 167,20</td>
                                <td>R$ 380,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-md-12">
                <a href="/spending" className="btn btn-outline-primary btn-introducao btn-calcule">Calcule Aqui</a>
            </div>
        </div>
    </section>
    <footer className="footer">
        <p> Telzir 2021 - Todos os direitos reservados</p>
    </footer>
</div>
);

export default Home;