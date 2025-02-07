const product = {
    city: 'Kiev',
    companyName: 'FIxed',
    address: {
        street: 'Malushko',
        building: 1,
        contactNumber: +380900000000
    },
    func: function () {
        console.log(this.companyName);
    },
    funcTwo(city){
        console.log('this.city'+ this.city);
        console.log('param without this = ' + city);
        this.city=city;
        this.func();
    },
    addPrice (price){
        this.price=price;
        return this;
    },
    nasted: {
        prop: 'value',
        funNasted() {
            console.log(this.prop);
        }
    }
};
console.log(product);
product.func();
product.funcTwo('Test3');
console.log(product.city);
console.log(product.nasted.funNasted());
product.addPrice(100);
console.log(product);
console.log(Object.keys(product));
console.log(Object.values(product));
