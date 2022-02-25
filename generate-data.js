const faker = require('faker');
const fs = require("fs");

faker.locale = "vi"

const randomProductList = (n) =>{
    if(n <= 0) return []
    const productsList = []
    // loop and push product
    Array.from(Array(n)).forEach(()=>{
        const product = {
            id: faker.random.uuid(),
            name:faker.commerce.productName(),
            price:Number.parseFloat(faker.commerce.price()),
            image:faker.image.imageUrl(70,90),
            createdAt:Date.now(),
            updatedAt:Date.now()
        }

        productsList.push(product)
    })
    return productsList
}

//IFFE
(()=>{

    //random data

    const productsList = randomProductList(9)

    const db = {
        products:productsList
    }

    //write db object to db.json
    fs.writeFile('db.json',JSON.stringify(db),()=>{
        console.log("Transfer")
    })
})();