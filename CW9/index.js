'use strict';

/**
 * @param {String} name
 * @param {Number} price
 * @param {Number} category
 * @param {Daye} createdAt
 */
function Product(
    name = 'Default product',
    price = 0,
    category = 1,
    createdAt = new Date()

) {
    this.name = name;
    this.price = price;
    this.category = category;

    const createdDate = createdAt;
    
}