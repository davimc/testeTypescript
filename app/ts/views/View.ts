abstract class  View{
    private _elemento:Element;
    constructor(selector:string){
        this._elemento = document.querySelector(selector);
    }
    update(model: any):void{
        this._elemento.innerHTML = this.template(model);
     }
     abstract template(model: any):string;

     get elemento(){
         return this._elemento;
     }
}