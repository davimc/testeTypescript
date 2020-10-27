class NegociacaoController{
    private _dataInput: HTMLInputElement;
    private _quantidadeInput: HTMLInputElement;
    private _valorInput: HTMLInputElement;
    private _negociacoes = new Negociacoes();

    private _view = new NegociacoesView("#negociacaoView");
    private _mensagem = new MensagemView("#mensagemView");

    constructor(){
        this._dataInput= <HTMLInputElement>document.querySelector("#data");
        this._quantidadeInput =<HTMLInputElement> document.querySelector("#quantidade");
        this._valorInput =<HTMLInputElement> document.querySelector("#valor");
        this._view.update(this._negociacoes);

    }

    adiciona(event: Event){
        event.preventDefault();
        
        
        this._negociacoes.adiciona(new Negociacao(
            new Date(this._dataInput.value.replace(/-/g,',')),
            parseInt(this._quantidadeInput.value),
            parseFloat(this._valorInput.value)
        ));
        this._view.update(this._negociacoes);
        this._mensagem.update("Negociação realizada com sucesso");
    }
}