// 'use strict';

/**
 *
 * @param {String} name
 * @param {Number} price
 * @param {Number} category
 * @param {Number} discount
 * @param {Date} createdAt
 * @constructor
 */

function Product(
    name = "Default product",
    price = 0,
    category = 1,
    discount = 0,
    createdAt = new Date()
) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.priceWithDiscount = discount;

    const createdDate = createdAt;
    function getPriceWithDiscount() {
        console.log("this", this);
        const price = this.price * (100 - discount)/100;
        return price;
    }

    /**
     * Method for update Product
     * @param {String} name
     * @param {Number} price
     * @param {Number} category
     * @param {Number} discount
     * @return this
     */

    this.updateProduct = function(name, price, category, discount = 0){
        this.name = name;
        this.price = price;
        this.category = category;
        this.priceWithDiscount = getPriceWithDiscount(discount);
        return this;
    };
    /**
     * Method for get createdDate
     * @returns {Date} createdDate
     */
    this.getCreatetDate = function () {
        return createdDate;
    }

}

let product = new Product('Coffee', 55, 2);
console.log(product);
console.log(product.getCreatetDate());