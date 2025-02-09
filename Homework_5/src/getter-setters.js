class Mark {
    #model;
    #name;
    constructor (name,model){
        this.#model = model;
        this.#name = name;
    }
    get name (){
        return this.#name;
    }
    set name(newName){
        if (!newName){
            throw  new Error('Select mark of car' );
        } else {
            this.#name = newName;
        }
    }
    get model (){
        return this.#model;
    }
    set model(newModel) {
        if (!newModel){
            throw  new Error('Select model' );
        } else {
            this.#model = newModel;
        }
    }
    textSelect() {
        return `${this.name} - ${this.model}`;
    }
    selectYear(){
        return 'Please select the year';
    }
}
const mark = new Mark('BWM','X5');
console.log (mark.name);
console.log (mark.model);
mark.name = 'Audi';
mark.model = 'TT';
console.log(mark.name);
console.log (mark.model);
console.log(mark.textSelect());
console.log(mark.selectYear());
