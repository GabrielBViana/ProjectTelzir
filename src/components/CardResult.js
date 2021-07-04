import React, { Component } from "react";

class CardResult extends Component {

    render() {

        let { ddOrigem, ddDestino, minutos, planoFaleMais, valorFaleMais, valorNormal } = this.props.paramsUser;
        return (

            <div className="card result-spending mx-auto">
                <div className="card-header">
                    <h3>Plano FaleMais {planoFaleMais}</h3>
                </div>
                <div className="card-body">
                    <ul>
                        <li><span>Origem (DDD):</span> {ddOrigem}</li>
                        <li><span>Destino (DDD):</span> {ddDestino}</li>
                        <li><span>Tempo:</span> {minutos} Minutos</li>
                        <li><span>Plano FaleMais:</span> {planoFaleMais} Minutos</li>
                        <li><span>Com FaleMais:</span> R$ {valorFaleMais}</li>
                        <li><span>Sem FaleMais:</span> R$ {valorNormal}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default CardResult;