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
	
 	 return object.price>= 14 && object.price <= 18 && object.currency_code === 'USD';  
 		
 				
 	
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

var titlewood = [];
var items, title, materials
	var materialType=items.filter(function(object) {
		if(object.materials="wood"){
		titlewood.push(object.title);

		}
	});
	console.log('The title of th product using wood is', titlewood);


/*question 5*/
var materialCount=[];	
var items, title, materials
var materials=0;

	var materialType=items.forEach(function(object) {
		if(materials.length>7){
			materialCount.push(object.title);
		}

	
		

		


		
	});
	console.log('The items made from at least 8 items are', materialCount);

/*question 6*/
var whomade=[];
var items, who_made


	var question=items.filter(function(object) {
		if(object.who_made==="i_did"){
			whomade.push(object.title);

		}
		

	});
	console.log('The items personally made are', whomade);
		



		  
		
		

			
		



	










