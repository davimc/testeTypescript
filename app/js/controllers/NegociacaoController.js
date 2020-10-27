class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._view = new NegociacoesView("#negociacaoView");
        this._mensagem = new MensagemView("#mensagemView");
        this._dataInput = document.querySelector("#data");
        this._quantidadeInput = document.querySelector("#quantidade");
        this._valorInput = document.querySelector("#valor");
        this._view.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(new Negociacao(new Date(this._dataInput.value.replace(/-/g, ',')), parseInt(this._quantidadeInput.value), parseFloat(this._valorInput.value)));
        this._view.update(this._negociacoes);
        this._mensagem.update("Negociação realizada com sucesso");
    }
}
