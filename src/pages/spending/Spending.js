import React, { Component } from "react";
import './spending-style.css';
import { Link } from 'react-router-dom';
import imgLogo from './img/logo.png';
import CardRsult from '../../components/CardResult';
import { calculoPlanoNormal, calculoPlanoFaleMais } from './calculoPlanos';


export default class Spending extends Component {

    state = {
        optionsDDestino: [],
        paramsUser: []
    }

    addDestinos = () => {

        //Se o DDD origem não for o DDD-011 então seguindo a tabela dos DDD's, o select do DDD destino é obrigado ser 011;
        if (Number(this.inputOrigem.value) !== 11 && this.inputOrigem.value !== "") {
            this.setState({ optionsDDestino: ['011'] });
        }

        //Se o DDD origem não for selecionado, o DDD destino não mostra nenhuma opção
        else if (this.inputOrigem.value === "") {
            this.setState({ optionsDDestino: [] });
        }
        else {
            //Caso nenhuma das condições acima for true, então significa que o DDD 011 foi selecionado, então deve mostrar os outros DDD's no destino
            this.setState({ optionsDDestino: ['016', '017', '018'] });
        }
    }

    enviaForm = (event) => {

        event.preventDefault();

        if (Number(this.minutos.value) > 0) {
            
            let ddOrigem = Number(this.inputOrigem.value);
            let ddDestino = Number(this.inputDestino.value);
            let planoFaleMais = Number(this.inputPlano.value);
            let minutos = Number(this.minutos.value);

            let valorFaleMais = calculoPlanoFaleMais(minutos, planoFaleMais, ddOrigem, ddDestino);
            let valorNormal = calculoPlanoNormal(minutos, ddOrigem, ddDestino);

            let objetoParametros = { ddOrigem, ddDestino, minutos, planoFaleMais, valorFaleMais, valorNormal }
            this.setState({ paramsUser: [objetoParametros] });
        }
        else {
            alert("No campo minutos, apenas digite valores positivos maiores do que zero!");
        }

        //Muda o display do cardresult para que possa criar um efeito na tela quando o usuário calcular várias vezes, pra ele perceber que ta mudando os resultados. 
        if (this.card) {
            setTimeout(() => { this.card.style.display = 'block'; }, 1500);
            this.card.style.display = 'none';
        }
    }


    render() {

        return ([

            <div id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">  
                    <a className="navbar-brand" href="#">
                        <img src={imgLogo} alt="logo-telzir" className="img-fluid"/>
                    </a>
                    <button className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active" aria-current="page">
                                Página Inicial
                            </a>
                        </li>
                    </ul>
                </div>
                </nav>  
            </div>
        </div> ,

        <section className="container mt-5">
            <div className="pesquisa p-5">
                <form onSubmit={this.enviaForm}>
                    <div className="row">

                        <div className="form-group  col-12 col-md-3">
                            <select className="form-control" onChange={this.addDestinos} ref={(input) => this.inputOrigem = input} required>
                                <option value="">Origem (DDD)</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                            </select>
                        </div>

                        <div className="form-group col-12 col-md-3">

                            <select className="form-control" ref={(input) => this.inputDestino = input} required>

                                <option value="">Destino (DDD)</option>
                                {
                                    this.state.optionsDDestino.map(optionValue => {
                                        return (
                                            <option key={optionValue} value={optionValue}>{optionValue}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>

                        <div className="form-group col-12 col-md-3">
                            <select className="form-control" ref={input => this.inputPlano = input} required>
                                <option value="">Escolha o Plano</option>
                                <option value="30">FaleMais 30 min</option>
                                <option value="60">FaleMais 60 min</option>
                                <option value="120">FaleMais 120 min</option>
                            </select>

                        </div>

                        <div className="form-group col-12 col-md-3">
                            <input type="number" ref={(input) => { this.minutos = input }} className="form-control" placeholder="Minutos da Ligação" required />
                        </div>


                        </div>

                        <div className="row">
                            <div className="col-12 text-center pt-3">
                                <button type="submit" className="btn-busca">Calcular</button>
                            </div>
                        </div>

                    </form>
                </div>

            </section>,

            <section className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.paramsUser.map((params) => {
                                return (
                                    <div key={params.ddOrigem} ref={(input) => { this.card = input }}>
                                        <CardRsult paramsUser={params} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        ]);
    }

}