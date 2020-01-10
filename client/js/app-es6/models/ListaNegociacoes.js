export class ListaNegociacoes {
    constructor(/*armadilha*/){
        this._negociacoes = [];
        //this._armadilha = armadilha;
    }

    adiciona(negociacao){
        this._negociacoes = [].concat(this._negociacoes, negociacao);
        //this._negociacoes.push(negociacao);
        //this._armadilha(this);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        //this._armadilha(this);
    }

    inverteOrdem(){
        this._negociacoes.reverse();
    }

    ordena(criterio){
        this._negociacoes.sort(criterio);
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0)
    }
}