class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    get elemento() {
        return this._elemento;
    }
}
