const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 800, stock: 10 },
  { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 25 },
  { id: 3, name: "Tablet", category: "Electronics", price: 300, stock: 15 },
  { id: 4, name: "Headphones", category: "Electronics", price: 100, stock: 40 },
  { id: 5, name: "Keyboard", category: "Electronics", price: 50, stock: 30 },

  { id: 6, name: "Shirt", category: "Clothing", price: 25, stock: 50 },
  { id: 7, name: "Jeans", category: "Clothing", price: 40, stock: 35 },
  { id: 8, name: "Jacket", category: "Clothing", price: 80, stock: 20 },
  { id: 9, name: "Shoes", category: "Clothing", price: 60, stock: 45 },
  { id: 10, name: "Cap", category: "Clothing", price: 15, stock: 60 },

  { id: 11, name: "Rice", category: "Grocery", price: 20, stock: 100 },
  { id: 12, name: "Flour", category: "Grocery", price: 18, stock: 90 },
  { id: 13, name: "Sugar", category: "Grocery", price: 22, stock: 80 },
  { id: 14, name: "Milk", category: "Grocery", price: 10, stock: 70 },
  { id: 15, name: "Tea", category: "Grocery", price: 12, stock: 60 },

  { id: 16, name: "Chair", category: "Furniture", price: 45, stock: 25 },
  { id: 17, name: "Table", category: "Furniture", price: 120, stock: 10 },
  { id: 18, name: "Sofa", category: "Furniture", price: 400, stock: 5 },
  { id: 19, name: "Bed", category: "Furniture", price: 600, stock: 8 },
  { id: 20, name: "Wardrobe", category: "Furniture", price: 350, stock: 6 },

  { id: 21, name: "Watch", category: "Accessories", price: 150, stock: 20 },
  { id: 22, name: "Bag", category: "Accessories", price: 70, stock: 30 },
  { id: 23, name: "Belt", category: "Accessories", price: 20, stock: 40 },
  { id: 24, name: "Sunglasses", category: "Accessories", price: 90, stock: 25 },
  { id: 25, name: "Wallet", category: "Accessories", price: 35, stock: 50 },

  { id: 26, name: "Book A", category: "Books", price: 15, stock: 60 },
  { id: 27, name: "Book B", category: "Books", price: 18, stock: 55 },
  { id: 28, name: "Book C", category: "Books", price: 22, stock: 50 },
  { id: 29, name: "Notebook", category: "Books", price: 8, stock: 100 },
  { id: 30, name: "Pen", category: "Books", price: 2, stock: 200 },

  { id: 31, name: "Football", category: "Sports", price: 30, stock: 40 },
  { id: 32, name: "Cricket Bat", category: "Sports", price: 75, stock: 20 },
  { id: 33, name: "Tennis Racket", category: "Sports", price: 120, stock: 15 },
  { id: 34, name: "Gym Gloves", category: "Sports", price: 25, stock: 35 },
  { id: 35, name: "Skipping Rope", category: "Sports", price: 10, stock: 60 },

  { id: 36, name: "Perfume", category: "Beauty", price: 55, stock: 25 },
  { id: 37, name: "Face Wash", category: "Beauty", price: 12, stock: 70 },
  { id: 38, name: "Shampoo", category: "Beauty", price: 18, stock: 65 },
  { id: 39, name: "Lotion", category: "Beauty", price: 20, stock: 50 },
  { id: 40, name: "Lipstick", category: "Beauty", price: 25, stock: 45 },

  { id: 41, name: "Toy Car", category: "Toys", price: 15, stock: 80 },
  { id: 42, name: "Doll", category: "Toys", price: 20, stock: 60 },
  { id: 43, name: "Puzzle", category: "Toys", price: 10, stock: 70 },
  { id: 44, name: "Board Game", category: "Toys", price: 35, stock: 30 },
  { id: 45, name: "Action Figure", category: "Toys", price: 25, stock: 40 },

  { id: 46, name: "Fan", category: "Appliances", price: 60, stock: 25 },
  { id: 47, name: "Iron", category: "Appliances", price: 35, stock: 20 },
  { id: 48, name: "Blender", category: "Appliances", price: 80, stock: 15 },
  { id: 49, name: "Microwave", category: "Appliances", price: 150, stock: 10 },
  { id: 50, name: "Fridge", category: "Appliances", price: 500, stock: 5 },

  { id: 51, name: "Camera", category: "Electronics", price: 700, stock: 8 },
  { id: 52, name: "Tripod", category: "Electronics", price: 45, stock: 20 },
  { id: 53, name: "Speaker", category: "Electronics", price: 120, stock: 25 },
  { id: 54, name: "Monitor", category: "Electronics", price: 200, stock: 12 },
  { id: 55, name: "Mouse", category: "Electronics", price: 25, stock: 50 },

  { id: 56, name: "T-shirt", category: "Clothing", price: 20, stock: 60 },
  { id: 57, name: "Sweater", category: "Clothing", price: 50, stock: 25 },
  { id: 58, name: "Shorts", category: "Clothing", price: 30, stock: 40 },
  { id: 59, name: "Sandals", category: "Clothing", price: 35, stock: 30 },
  { id: 60, name: "Socks", category: "Clothing", price: 5, stock: 100 },

  { id: 61, name: "Eggs", category: "Grocery", price: 5, stock: 120 },
  { id: 62, name: "Butter", category: "Grocery", price: 8, stock: 80 },
  { id: 63, name: "Cheese", category: "Grocery", price: 15, stock: 70 },
  { id: 64, name: "Chicken", category: "Grocery", price: 40, stock: 50 },
  { id: 65, name: "Fish", category: "Grocery", price: 45, stock: 45 },

  { id: 66, name: "Desk Lamp", category: "Furniture", price: 25, stock: 35 },
  { id: 67, name: "Bookshelf", category: "Furniture", price: 150, stock: 10 },
  {
    id: 68,
    name: "Office Chair",
    category: "Furniture",
    price: 180,
    stock: 12,
  },
  { id: 69, name: "Coffee Table", category: "Furniture", price: 130, stock: 8 },
  { id: 70, name: "TV Stand", category: "Furniture", price: 160, stock: 9 },
];
const div = document.querySelector(".container");
const checkoutBtn = document.querySelector("#checkout-btn");
const btnDiv = document.querySelector(".btns");
// LOCAL STORAGE (FIXED)
const getCartItems = JSON.parse(localStorage.getItem('cartItem'));
const cartItem = getCartItems || [] ;
const categoryArr = ['all'];
const renderItem =  ((arr) => {
    div.innerHTML = '' ;
    arr.forEach((item) => {
        div.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p class="price">$${item.price}</p>
        <p>Stock: ${item.stock}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      </div> ` ;
    } )
})
renderItem(products) ;
function addToCart(id) {
    const singleProduct = products.find(item => item.id === id);
    const existingItem = cartItem.find (item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1 ;
        console.log('Item Already Exists => quantity increased');
    } else {
        const newProduct = { ...singleProduct , quantity: 1 } ;
        cartItem.push (newProduct) ;
        console.log('new Item added');        
        }
     localStorage.setItem ('cartitem' , JSON.stringify(cartItem));
     console.log(cartItem);
}
function goToCheckout() {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
    window.location = 'cart.html';
}


    
products.forEach((item) => {
    if (!categoryArr.includes(item.category)) {
        categoryArr.push(item.category)
    }
})



btnDiv.innerHTML = "";

// CHECKOUT BUTTON FIRST
btnDiv.innerHTML += `
    <button class="checkout-main-btn" onclick="goToCheckout()">
        🛒 Checkout (${cartItem.length})
    </button>
`;

categoryArr.forEach((item , index) => {
    btnDiv.innerHTML += `
   
    <button onclick="(${index})">${item}</button>
    `;
})

function changeCategory(index){
    console.log(categoryArr[index]);
    renderItem(products)
    return
}


products.forEach((item) => {
    if (!categoryArr.includes(item.category) ) {
        categoryArr.push(item.category)
    }
})
categoryArr.forEach((item, index) => {
  btnDiv.innerHTML += `
    <button onclick="changeCategory(${index})">${item}</button>
  `;
});

    function changeCategory(index) {
        console.log(categoryArr[index]);
        if (index === 0) {
            renderItem(products);
            return
        } ;
        const filterdItem = products.filter((item) =>
        item.category === categoryArr[index]
        );
        renderItem(filterdItem)
    }
