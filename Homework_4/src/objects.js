const product = {
    city: 'Kiev',
    companyName: 'FIxed',
    address: {
        street: 'Malushko',
        building: 1,
        contactNumber: +380900000000
    }
};
console.log(product);
console.log(Object.keys(product));
console.log(Object.values(product));

function addPrice (product, price){
    return Object.assign(product,{price});
};
console.log(addPrice(product, 'Test'));
