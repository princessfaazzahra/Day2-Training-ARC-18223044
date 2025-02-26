const paymentMethod = document.createElement("p");
paymentMethod.textContent = "Please select your payment method";

const cartItems = document.createElement("p");
cartItems.textContent = "Select to add or remove an item";

const main = document.querySelector('#main');

const button = document.querySelector('#payment');
button.addEventListener("click",(event) =>{
    event.preventDefault();
    main.innerHTML = "";
    main.appendChild(paymentMethod);
});

const button2 = document.querySelector('#cart');
button2.addEventListener("click",(event) =>{
    event.preventDefault();
    main.innerHTML = "";
    main.appendChild(cartItems);
});

const products_section = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data)=>{
    console.log(data);
    data.products.forEach((products) =>{
        const container = document.createElement("div");
        container.style.backgroundColor = "#FF1493";
        container.style.margin = "10px";
        container.style.padding = "10px";
        container.style.border = "1px white solid";
        container.style.textAlign = "center";

        const item = document.createElement("div");
        const desc = document.createElement("div");
        const price = document.createElement("div");
        const rating = document.createElement("div");

        item.textContent = products.title;
        desc.textContent = products.description;
        price.textContent = products.price;
        rating.textContent = products.rating;

        // masukin data ke container
        container.appendChild(item);
        container.appendChild(desc);
        container.appendChild(price);
        container.appendChild(rating);
        // biar smua data masuk ke html page
        products_section.appendChild(container);
    })
});