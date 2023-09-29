// For loop
let xhr = new XMLHttpRequest();
xhr.open('GET','https://fakestoreapi.com/products',true)
xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText); 
        console.log(response);
        for(i=0;i<response.length;i++)
        {
            console.log(response[i].title);
        }
        console.log(response.length)
        }
        else 
           console.log("Error") //throww
    }
xhr.send()

o/p : (taken from console)

// (index):39 Live reload enabled.
// Array(20)
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts 
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave 
// White Gold Plated Princess
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
// WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
// Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
// Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED 
// BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
// Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
// Rain Jacket Women Windbreaker Striped Climbing Raincoats
// MBJ Women's Solid Short Sleeve Boat Neck V 
// Opna Women's Short Sleeve Moisture
// DANVOUY Womens T Shirt Casual Cotton Short
// 20
----------------------------------------------------------------------------------------------------------------------------------------------------
// For in loop
let xhr = new XMLHttpRequest();
xhr.open('GET','https://fakestoreapi.com/products',true)
xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText); 
        console.log(response);
        for (let i in response) {
            console.log(response[i].title);
          }
        console.log(response.length);
        }
        else 
           console.log("Error") //throww
    }
xhr.send()

o/p : (taken from console)

// (index):39 Live reload enabled.
// Array(20)
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts 
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave 
// White Gold Plated Princess
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
// WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
// Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
// Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED 
// BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
// Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
// Rain Jacket Women Windbreaker Striped Climbing Raincoats
// MBJ Women's Solid Short Sleeve Boat Neck V 
// Opna Women's Short Sleeve Moisture
// DANVOUY Womens T Shirt Casual Cotton Short
// 20
----------------------------------------------------------------------------------------------------------------------------------------------------
// ForEach loop
let xhr = new XMLHttpRequest();
xhr.open('GET','https://fakestoreapi.com/products',true)
xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText); 
        console.log(response);
        response.forEach( i => {
            console.log(i.title);
        });
        }
        else 
           console.log("Error") //throww
    }
xhr.send()

o/p : (taken from console)

// (index):39 Live reload enabled.
// Array(20)
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts 
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave 
// White Gold Plated Princess
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
// WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
// Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
// Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED 
// BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
// Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
// Rain Jacket Women Windbreaker Striped Climbing Raincoats
// MBJ Women's Solid Short Sleeve Boat Neck V 
// Opna Women's Short Sleeve Moisture
// DANVOUY Womens T Shirt Casual Cotton Short
----------------------------------------------------------------------------------------------------------------------------------------------------
// Forof loop
let xhr = new XMLHttpRequest();
xhr.open('GET','https://fakestoreapi.com/products',true)
xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText); 
        console.log(response);
        for(let i of response)
        {
            console.log(i.title);
        }
        console.log(response.length);
        }
        else 
           console.log("Error") //throww
    }
xhr.send()

o/p : (taken from console)

// (index):39 Live reload enabled.
// Array(20)
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts 
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave 
// White Gold Plated Princess
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
// WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
// Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
// Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED 
// BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
// Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
// Rain Jacket Women Windbreaker Striped Climbing Raincoats
// MBJ Women's Solid Short Sleeve Boat Neck V 
// Opna Women's Short Sleeve Moisture
// DANVOUY Womens T Shirt Casual Cotton Short
// 20
