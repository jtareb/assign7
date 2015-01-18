var items, pricetag, currencytype

/*first qeustion*/

var total_pricetag = 0;
var avg_pricetag = 0;
items.filter(function(a){
	total_pricetag +=	a.price;

});
avg_pricetag =total_pricetag/items.length;
console.log('The average price is', avg_pricetag);


/*second question*/
var items, title, price, currency_code;

var pricetag=items.filter(function(object) {
	
 	 return object.price>= 14 && object.price <= 18;  
 		
 				
 	
});

console.log(pricetag);


/*third question*/

var titlegbp = [];
var title, price, currency_code
	var currencytype=items.filter(function(object) {
		if(object.currency_code === "GBP"){
		titlegbp.push(object.title + object.price);
		};
	 
		

	});

console.log('The name of the product using the GBP is', titlegbp);

/*fourth question*/
var titleWood = [];
var items, title, materials


	
	var usesWood=items.filter(function(objects) {
		if(object.materials === "wood"){
			titleWood.push(.title + object.price);
			object
		}



	});
	console.log(titleWood);


/*fifth question*/







