// Get cart items safely
const getCartItems = JSON.parse(localStorage.getItem("cartItem")) || [];

console.log(getCartItems);

const cartItemContainer = document.querySelector(".items");
const totalAmount = document.querySelector(".total-amount");

// Render cart items
function renderItem() {

    // Check if container exists
    if (!cartItemContainer || !totalAmount) {
        console.log("Container not found");
        return;
    }

    // Clear previous HTML
    cartItemContainer.innerHTML = "";

    // If cart is empty
    if (getCartItems.length === 0) {
        cartItemContainer.innerHTML = "<h2>Cart is Empty</h2>";
        totalAmount.innerHTML = "$0";
        return;
    }

    // Render items
    getCartItems.forEach((item) => {
        cartItemContainer.innerHTML += `
            <div class="cart-item">
                <div class="item-info">${item.name  }</div>

                <div class="item-price">
                    $${item.price}
                </div>

                <div class="item-qty">
                    <div class="qty-box">
                        <button onclick="changeQuantity('less', ${item.id})">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity('add', ${item.id})">+</button>
                    </div>
                </div>

                <div class="item-total">
                    $${item.quantity * item.price}
                </div>
            </div>
        `;
    });

    // Calculate total
    const getTotalAmount = getCartItems.reduce((acc, cval) => {
        return acc + cval.price * cval.quantity;
    }, 0);

    totalAmount.innerHTML = `$${getTotalAmount}`;
}

// Initial render
renderItem();

// Change quantity
function changeQuantity(quantity, id) {

    console.log(quantity);

    const index = getCartItems.findIndex((item) => item.id === id);

    console.log(index);

    // If item not found
    if (index === -1) return;

    if (quantity === "add") {
        getCartItems[index].quantity += 1;
    } else {
        if (getCartItems[index].quantity === 1) {
            // Remove item
            getCartItems.splice(index, 1);
        } else {
            getCartItems[index].quantity -= 1;
        }
    }
    console.log(getCartItems);

    // Save updated cart
    localStorage.setItem("cartItem", JSON.stringify(getCartItems));

    // Re-render
    renderItem();
}