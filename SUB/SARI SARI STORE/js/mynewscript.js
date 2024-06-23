let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    stockItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    stockItem.classList.remove('active');
}

let stockItem = document.querySelector('.stocks-items-container');

document.querySelector('#stock-btn').onclick = () =>{
    stockItem.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    stockItem.classList.remove('active');
} 



// Cache the elements
const container = document.querySelector('#container');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const container4 = document.querySelector('#container4');
const container5 = document.querySelector('#container5');
const container6 = document.querySelector('#container6');
const container7 = document.querySelector('#container7');
const container8 = document.querySelector('#container8');
const container9 = document.querySelector('#container9');
const container10 = document.querySelector('#container10');
const container11 = document.querySelector('#container11');
const container12 = document.querySelector('#container12');
const container13 = document.querySelector('#container13');
const container14 = document.querySelector('#container14');
const container15 = document.querySelector('#container15');
const container16 = document.querySelector('#container16');
const container17 = document.querySelector('#container17');
const container18 = document.querySelector('#container18');
const container19 = document.querySelector('#container19');


const inputs = document.querySelectorAll('#inp_stck_jeans');
const inputs1 = document.querySelectorAll('#inp_stck_jeans1');
const inputs2 = document.querySelectorAll('#inp_stck_jeans2');
const inputs3 = document.querySelectorAll('#inp_stck_jeans3');
const inputs4 = document.querySelectorAll('#inp_stck_shirt1');
const inputs5 = document.querySelectorAll('#inp_stck_shirt2');
const inputs6 = document.querySelectorAll('#inp_stck_shirt3');
const inputs7 = document.querySelectorAll('#inp_stck_shirt4');
const inputs8 = document.querySelectorAll('#inp_stck_perf1');
const inputs9 = document.querySelectorAll('#inp_stck_perf2');
const inputs10 = document.querySelectorAll('#inp_stck_perf3');
const inputs11 = document.querySelectorAll('#inp_stck_perf4');
const inputs12 = document.querySelectorAll('#inp_stck_tank1');
const inputs13 = document.querySelectorAll('#inp_stck_tank2');
const inputs14 = document.querySelectorAll('#inp_stck_tank3');
const inputs15 = document.querySelectorAll('#inp_stck_tank4');
const inputs16 = document.querySelectorAll('#inp_stck_toy1');
const inputs17 = document.querySelectorAll('#inp_stck_toy2');
const inputs18 = document.querySelectorAll('#inp_stck_toy3');
const inputs19 = document.querySelectorAll('#inp_stck_toy4');


const result = document.querySelector('#result');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');
const result4 = document.querySelector('#result4');
const result5 = document.querySelector('#result5');
const result6 = document.querySelector('#result6');
const result7 = document.querySelector('#result7');
const result8 = document.querySelector('#result8');
const result9 = document.querySelector('#result9');
const result10 = document.querySelector('#result10');
const result11 = document.querySelector('#result11');
const result12 = document.querySelector('#result12');
const result13 = document.querySelector('#result13');
const result14 = document.querySelector('#result14');
const result15 = document.querySelector('#result15');
const result16 = document.querySelector('#result16');
const result17 = document.querySelector('#result17');
const result18 = document.querySelector('#result18');
const result19 = document.querySelector('#result19');


const jeans = document.querySelector('#new_jeans');
const jeans1 = document.querySelector('#new_jeans1');
const jeans2 = document.querySelector('#new_jeans2');
const jeans3 = document.querySelector('#new_jeans3');
const jeans4 = document.querySelector('#new_shirt');
const jeans5 = document.querySelector('#new_shirt1');
const jeans6 = document.querySelector('#new_shirt2');
const jeans7 = document.querySelector('#new_shirt3');
const jeans8 = document.querySelector('#new_perf');
const jeans9 = document.querySelector('#new_perf1');
const jeans10 = document.querySelector('#new_perf2');
const jeans11= document.querySelector('#new_perf3');
const jeans12= document.querySelector('#new_tank');
const jeans13= document.querySelector('#new_tank1');
const jeans14= document.querySelector('#new_tank2');
const jeans15= document.querySelector('#new_tank3');
const jeans16= document.querySelector('#new_toy');
const jeans17= document.querySelector('#new_toy1');
const jeans18= document.querySelector('#new_toy2');
const jeans19= document.querySelector('#new_toy3');

//stocks



// Add a listener to the container
container.addEventListener('change', handleChange, false);
container1.addEventListener('change', handleChange1, false);
container2.addEventListener('change', handleChange2, false);
container3.addEventListener('change', handleChange3, false);
container4.addEventListener('change', handleChange4, false);
container5.addEventListener('change', handleChange5, false);
container6.addEventListener('change', handleChange6, false);
container7.addEventListener('change', handleChange7, false);
container8.addEventListener('change', handleChange8, false);
container9.addEventListener('change', handleChange9, false);
container10.addEventListener('change', handleChange10, false);
container11.addEventListener('change', handleChange11, false);
container12.addEventListener('change', handleChange12, false);
container13.addEventListener('change', handleChange13, false);
container14.addEventListener('change', handleChange14, false);
container15.addEventListener('change', handleChange15, false);
container16.addEventListener('change', handleChange16, false);
container17.addEventListener('change', handleChange17, false);
container18.addEventListener('change', handleChange18, false);
container19.addEventListener('change', handleChange19, false);






// Reset the total, iterate over the input elements,
// and add their value to the total, coercing the string
// to a number first. Finally add that total to the
// value of the `result` element
function handleChange() {
  let total = 25;
  inputs.forEach(input => total += Number(input.value));
  result.value = total;
  
}
function handleChange1() {
  let total1 = 35;
  inputs1.forEach(input => total1 += Number(input.value));
  result1.value = total1;
  
}
function handleChange2() {
  let total2 = 8;
  inputs2.forEach(input => total2 += Number(input.value));
  result2.value = total2;
  
}

function handleChange3() {
  let total3 = 46;
  inputs3.forEach(input => total3 += Number(input.value));
  result3.value = total3;
  
}
// shirt

function handleChange4() {
  let total4 = 90;
  inputs4.forEach(input => total4 += Number(input.value));
  result4.value = total4;
}

function handleChange5() {
  let total5 = 61;
  inputs5.forEach(input => total5 += Number(input.value));
  result5.value = total5;
}

function handleChange6() {
  let total6 = 34;
  inputs6.forEach(input => total6 += Number(input.value));
  result6.value = total6;
}


function handleChange7() {
  let total7 = 29;
  inputs7.forEach(input => total7 += Number(input.value));
  result7.value = total7;
}

// perf

function handleChange8() {
  let total8 = 10;
  inputs8.forEach(input => total8 += Number(input.value));
  result8.value = total8;
}


function handleChange9() {
  let total9 = 12;
  inputs9.forEach(input => total9 += Number(input.value));
  result9.value = total9;
}


function handleChange10() {
  let total10 = 8;
  inputs10.forEach(input => total10 += Number(input.value));
  result10.value = total10;
}


function handleChange11() {
  let total11 = 15;
  inputs11.forEach(input => total11 += Number(input.value));
  result11.value = total11
}

// tank

function handleChange12() {
  let total12 = 48;
  inputs12.forEach(input => total12 += Number(input.value));
  result12.value = total12;
}


function handleChange13() {
  let total13 = 56;
  inputs13.forEach(input => total13 += Number(input.value));
  result13.value = total13;
}


function handleChange14() {
  let total14 = 29;
  inputs14.forEach(input => total14 += Number(input.value));
  result14.value = total14;
}


function handleChange15() {
  let total15 = 110;
  inputs15.forEach(input => total15 += Number(input.value));
  result15.value = total15
}

// toy

function handleChange16() {
  let total16 = 15;
  inputs16.forEach(input => total16 += Number(input.value));
  result16.value = total16;
}


function handleChange17() {
  let total17 = 12;
  inputs17.forEach(input => total17 += Number(input.value));
  result17.value = total17;
}


function handleChange18() {
  let total18 = 12;
  inputs18.forEach(input => total18 += Number(input.value));
  result18.value = total18;
}


function handleChange19() {
  let total19 = 12;
  inputs19.forEach(input => total19 += Number(input.value));
  result19.value = total19
}





function myFunction() {
  let total = 25;
  let total1 = 35;
  let total2 = 8;
  let total3 = 46;
  let total4 = 90;
  let total5 = 61;
  let total6 = 34;
  let total7 = 29;
  let total8 = 10;
  let total9 = 12;
  let total10 = 8;
  let total11 = 15;
  let total12 = 48;
  let total13 = 56;
  let total14 = 29;
  let total15 = 110;
  let total16 = 15;
  let total17 = 12;
  let total18 = 12;
  let total19 = 12;


  inputs.forEach(input => total += Number(input.value));
  inputs1.forEach(input => total1 += Number(input.value));
  inputs2.forEach(input => total2 += Number(input.value));
  inputs3.forEach(input => total3 += Number(input.value));
  inputs4.forEach(input => total4 += Number(input.value));
  inputs5.forEach(input => total5 += Number(input.value));
  inputs6.forEach(input => total6 += Number(input.value));
  inputs7.forEach(input => total7 += Number(input.value));
  inputs8.forEach(input => total8 += Number(input.value));
  inputs9.forEach(input => total9 += Number(input.value));
  inputs10.forEach(input => total10 += Number(input.value));
  inputs11.forEach(input => total11 += Number(input.value));
  inputs12.forEach(input => total12 += Number(input.value));
  inputs13.forEach(input => total13 += Number(input.value));
  inputs14.forEach(input => total14 += Number(input.value));
  inputs15.forEach(input => total15 += Number(input.value));
  inputs16.forEach(input => total16 += Number(input.value));
  inputs17.forEach(input => total17 += Number(input.value));
  inputs18.forEach(input => total18 += Number(input.value));
  inputs19.forEach(input => total19 += Number(input.value));

  jeans.value = total;
  jeans1.value = total1;
  jeans2.value = total2;
  jeans3.value = total3;
  jeans4.value = total4;
  jeans5.value = total5;
  jeans6.value = total6;
  jeans7.value = total7;
  jeans8.value = total8;
  jeans9.value = total9;
  jeans10.value = total10;
  jeans11.value = total11;
  jeans12.value = total12;
  jeans13.value = total13;
  jeans14.value = total14;
  jeans15.value = total15;
  jeans16.value = total16;
  jeans17.value = total17;
  jeans18.value = total18;
  jeans19.value = total19;
 
}
// stocks end

document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.querySelector("#searchForm"); // Define searchForm variable

    searchForm.onclick = function() {
        // Your code for handling the onclick event
    };
});

// disc and total
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for discount radio buttons and other relevant elements
    var discountRadios = document.getElementsByName('discount');
    for (var i = 0; i < discountRadios.length; i++) {
        discountRadios[i].addEventListener('change', calculateDiscount);
    }

    var radios = document.querySelectorAll('input[type="radio"]');
    var subtotalDiv = document.getElementById("subtotalValue");
    var totalDiv = document.getElementById("totalValue");
    var amountInput = document.getElementById("amountInput");
    var applyDiscountButton = document.querySelector('.apply-discount-btn');

    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            updateCart();
        });
    });

    applyDiscountButton.addEventListener('click', function() {
        applyDiscount();
    });

    function updateCart() {
        calculateSubtotal(); // Calculate subtotal before applying discount
        applyDiscount(); // Apply discount after updating subtotal
    }

    function calculateSubtotal() {
        var subtotal = 0;
        for (const itemId in selectedItems) {
            const item = selectedItems[itemId];
            subtotal += item.price * item.count;
        }
        subtotalDiv.textContent = subtotal.toFixed(2);
        return subtotal;
    }

    function applyDiscount() {
        var discount = 0;
        discountRadios.forEach(function(radio) {
            if (radio.checked) {
                discount = parseFloat(radio.value);
            }
        });

        var subtotal = calculateSubtotal();
        var discountedTotal = subtotal * (1 - discount);

        // If an amount is entered manually, use it instead of discounted total
        if (amountInput.value) {
            discountedTotal = parseFloat(amountInput.value);
        }

        totalDiv.textContent = discountedTotal.toFixed(2); // Update total value with discounted amount
    }

    function calculateDiscount() {
        // Get the selected discount percentage
        var discountPercentage = 0;
        for (var i = 0; i < discountRadios.length; i++) {
            if (discountRadios[i].checked) {
                discountPercentage = parseFloat(discountRadios[i].value);
                break;
            }
        }

        // Get the current total price
        var cTotalElement = document.getElementById('carttotal');
        var currTotal = parseFloat(cTotalElement.textContent);

        // Calculate the discounted price
        var totalPriceAfterDiscount = currTotal * (1 - discountPercentage);

        // Update the total price in the receipt with the discount applied
        cTotalElement.textContent = totalPriceAfterDiscount.toFixed(2);
    }
});





// add to cart



const cards = document.querySelectorAll('.card');
const cart = document.getElementById('cart');
const totalElement = document.getElementById('total'); 
const selectedItems = {};
let discount = 0; // Initialize discount variable

function handleCardClick(event) {
    const card = event.currentTarget;
    const itemId = card.id;
    const itemName = card.querySelector('h1').textContent;
    const itemPrice = parseFloat(card.querySelector('.price').textContent); 

    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    } else {
        selectedItems[itemId] = {
            name: itemName,
            price: itemPrice,
            count: 1,
        };
    }

    updateCart();
}

function updateStocks(itemId, count) {
    const stockInput = document.querySelector(`#inp_stck_${itemId}`);
    if (stockInput) { // Check if the element exists
        const currentStock = parseInt(stockInput.value);
        const updatedStock = currentStock - count;
        stockInput.value = updatedStock;
    } else {
        console.error(`Stock input with ID 'inp_stck_${itemId}' not found.`);
    }
}

function addItemToCart(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    } else {
        selectedItems[itemId] = {
            name: itemName,
            price: itemPrice,
            count: 1,
        };
    }
    updateCart();
    updateStocks(itemId, 1); // Update the stock value
}

// Make sure to handle other functions accordingly


function updateCart() {
    cart.innerHTML = '';
    let total = 0;

    for (const itemId in selectedItems) {
        const item = selectedItems[itemId];
        const listItem = document.createElement('li');
        const quantityContainer = document.createElement('div');
        const quantityText = document.createElement('span');
        const addButton = document.createElement('button');
        const subtractButton = document.createElement('button');

        addButton.textContent = '+';
        subtractButton.textContent = '-';

        quantityText.textContent = item.count;

        addButton.addEventListener('click', () => {
            addItem(itemId);
        });

        subtractButton.addEventListener('click', () => {
            removeItem(itemId);
        });

        const hr = document.createElement('hr');

        quantityContainer.appendChild(subtractButton);
        quantityContainer.appendChild(quantityText);
        quantityContainer.appendChild(addButton);
        quantityContainer.appendChild(hr);

        listItem.textContent = `${item.name} - $${item.price * item.count}`;

        listItem.appendChild(quantityContainer);
        cart.appendChild(listItem);

        total += item.price * item.count;
    }

    // Apply discount to the total
    const discountedTotal = total * (1 - discount);
    // Update total element with span element for the numerical value
    totalElement.innerHTML = `Total amount: $<span id="totalValue">${discountedTotal.toFixed(2)}</span>`;
}

// Function to handle adding items to the cart
function addItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    }
    updateCart();
    updateStocks(itemId, 1); // Update the stock value
}

// Function to handle removing items from the cart
function removeItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count--;
        if (selectedItems[itemId].count <= 0) {
            delete selectedItems[itemId];
        }
    }
    updateCart();
    updateStocks(itemId, -1); // Update the stock value
}

// Add event listeners to the buttons in the cards
cards.forEach((card) => {
    card.addEventListener('click', handleCardClick);
});



