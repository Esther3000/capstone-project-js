var carts = document.querySelectorAll(".cart-button");
var products = [
     			{
				id: 1,
				name: "Brown Brim",
				image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",		
				price: 25,
				inCart:0
			},
			{
				id: 2,
				name: "Blue Beanie",
				image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",			
				price: 18,
				inCart:0
			},
			{
				id: 3,
				name: "Brown Cowboy",
				image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",				
				price: 35,
				inCart:0
			},
			{
				id: 4,
				name: "Grey Brim",
				image:"https://i.ibb.co/RjBLWxB/grey-brim.png",	
				price: 25,
				inCart:0
			},
			{
				id: 5,
				name: "Adidas NMD",
				image: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",		
				price: 220,
				inCart:0
			},
			{
				id: 6,
				name: "Adidas Yeezy",
				image:"https://i.ibb.co/dJbG1cT/yeezy.png",
				price: 280,
				inCart:0
			},
			{
				id: 7,
				name: "Black Converse",
				image:"https://i.ibb.co/bPmVXyP/black-converse.png",
				price: 110,
				inCart:0
			},
			{
				id: 8,
				name: "Nike White AirForce",
				image:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
				price: 160,
				inCart:0
			},
			{
				id: 9,
				name: "Black Jean Shearling",
				image:"https://i.ibb.co/XzcwL5s/black-shearling.png",
				price: 125,
				inCart:0
			},
			{
				id: 10,
				name: "Blue Jean Jacket",
				image:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
				price: 90,
				inCart:0
			},
			{
				id: 11,
				name: "Grey Jean Jacket",
				image:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
				price: 90,
				inCart:0
			},
			{
				id: 12,
				name: "Brown Shearling",
				image:"https://i.ibb.co/s96FpdP/brown-shearling.png",
				price: 165,
				inCart:0
			},
			{
				id: 13,
				name: "Blue Tanktop",
				image:"https://i.ibb.co/7CQVJNm/blue-tank.png",	
				price: 25,
				inCart:0
			},
			{
				id: 14,
				name: "Floral Blouse",
				image:"https://i.ibb.co/4W2DGKm/floral-blouse.png",
				price: 20,
				inCart:0
			},
			{
				id: 15,
				name: "Floral Dress",
				image:"https://i.ibb.co/KV18Ysr/floral-skirt.png",				
				price: 80,
				inCart:0
			},
			{
				id: 16,
				name: "Red Dots Dress",
				image:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
				price: 80,
				inCart:0
			},
			{
				id: 17,
				name: "Camo Down Vest",
				image:"https://i.ibb.co/xJS0T3Y/camo-vest.png",	
				price: 325,
				inCart:0
			},
			{
				id: 18,
				name: "Floral T-shirt",
				image:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",				
				price: 20,
				inCart:0
			},
			{
				id: 19,
				name: "Black & White Longsleeve",
				image:"https://i.ibb.co/55z32tw/long-sleeve.png",			
				price: 25,
				inCart:0
			},
			{
				id: 20,
				name: "Pink T-shirt",
				image:"https://i.ibb.co/RvwnBL8/pink-shirt.png",		
				price: 25,
				inCart:0
			}
];


for (let i = 0; i < carts.length; i++){
     carts[i].addEventListener("click", ()=>{
     	cartNumbers(products[i]);
     	totalCost(products[i]);
     });
 }

 function onLoadCartNumbers(){
 	let productNumbers = localStorage.getItem("cartNumbers");
 	if(productNumbers){
 		document.querySelector(".item-count").textContent = productNumbers;
 	}
 }
 function cartNumbers(product){
 	
 	let productNumbers = localStorage.getItem("cartNumbers");
 	
 	productNumbers = parseInt(productNumbers);
      if (productNumbers){
          localStorage.setItem("cartNumbers", productNumbers + 1);
          document.querySelector(".item-count").textContent = productNumbers + 1;
      }else {
      	localStorage.setItem("cartNumbers", 1);
      	document.querySelector(".item-count").textContent = 1;
      }
      setItems(product);
      
 }
 function setItems(product){
 	let cartItems = localStorage.getItem("productsInCart");
 	cartItems = JSON.parse(cartItems);
 	
 	if(cartItems !== null){
 		 if (cartItems[product.name] === undefined){
 		 	cartItems = {
 		 		...cartItems,
 		 		[product.name]:product
 		 	}
 		 }
 		cartItems[product.name].inCart += 1;
 	}else{
 		product.inCart = 1;
 		cartItems = {
 			[product.name]:product
 		}
 	}
 	localStorage.setItem("productsInCart",JSON.stringify(cartItems));
 }
 function totalCost(product){
 	

 	var cartCost = localStorage.getItem("totalCost");
 	

 	if(cartCost !== null){
 		cartCost = parseInt(cartCost);
       localStorage.setItem("totalCost", cartCost + product.price);
 	}else{
       localStorage.setItem("totalCost", product.price); 
 	}
 	
 	
 }

function displayCart(){
	var cartCost = localStorage.getItem("totalCost");
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	

	let productContainer = document.querySelector(".output");
	if( cartItems && productContainer ){
       productContainer.innerHTML = "";
       Object.values(cartItems).map(item =>{
       	productContainer.innerHTML += `
       	<div class="cart-contain">
       	<div class="cart-header">
        <div class="product">
        <img src=${item.image}>
        
        </div>
        <div class="description">
        <p >${item.name}</p></div>
        <div class="quantity">
        <button onclick="subtract()" class="add">&#x0003C;</button>
        <p class="in-cart">${item.inCart}</p>
        <button onclick="add()" class="minus">&#x0003E;</button>
        </div>

        <div class="price"><p>N ${item.price}.00</p></div>
        <div class="remove"><button onclick="remove()">&#x02A2F;</button></div>
        </div>

        </div>

        `
        ;
        
        
        
       }

       
       );
       productContainer.innerHTML += `
         <div class="total-container"><h3 class="total-title">TOTAL:</h3>
         <h3 class="total">${cartCost}</h3
         </div>
        ` 

       
       
	}
	
}
function remove() {
	let productNumbers = localStorage.getItem("cartNumbers");
  var myobj = document.querySelector(".cart-contain");
  myobj.remove();
}
function add(product)
{
  let productNumbers = localStorage.getItem("item.inCart");
  productNumbers = parseInt(productNumbers);
      if (productNumbers){
          localStorage.setItem("item.inCart", productNumbers + 1);
          document.querySelector(".in-cart").textContent = productNumbers + 1;
      }else {
      	localStorage.setItem("item.inCart", 1);
      	document.querySelector(".in-cart").textContent = 1;
      }
      setItems().forEach();
      
}

function subtract(product)
{
  var productNumbers = localStorage.getItem("item.inCart");
  productNumbers = parseInt(productNumbers);
      if (productNumbers){
          localStorage.setItem("item.inCart", productNumbers - 1);
          document.querySelector(".in-cart").textContent = productNumbers - 1;
      }else {
      	localStorage.setItem("item.inCart", 1);
      	document.querySelector(".in-cart").textContent = 1;
      }
      setItems().forEach();
      

}
 
 
 displayCart();
 onLoadCartNumbers();


       
   


