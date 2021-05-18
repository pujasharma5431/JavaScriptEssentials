// D= ( L - S ) / L * 100


// a + ((b *c) / d) * e

var sellingPrice=299;
var listingPrice=900;

var discountPercent = ( listingPrice - sellingPrice ) / listingPrice * 100;


console.log ("Discount percentage is:"+discountPercent);


displayDiscountPercent=Math.round(discountPercent)

console.log(displayDiscountPercent+"% off");


var result=listingPrice > sellingPrice;
console.log(result);
console.log(typeof result);



