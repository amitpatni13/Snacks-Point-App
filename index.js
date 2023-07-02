const foodMenu = [
    //Pizza Menu
    {
        logo: "assets/images/bacon-pizza.png",
        name: "Bacon Pizza",
        price: "$44",
        rating: "4.5",
        isItemInCart: false,
        category: "Pizza",
    },
    {
        logo: "assets/images/chillipaper-pizza.png",
        name: "Chillipaper Pizza",
        price: "$39",
        rating: "4.2",
        isItemInCart: false,
        category: "Pizza",
    },
    {
        logo: "assets/images/mariana-pizza.png",
        name: "Mariana Pizza",
        price: "$38",
        rating: "4.7",
        isItemInCart: false,
        category: "Pizza",
    },
    {
        logo: "assets/images/mozerella-pizza.png",
        name: "Mozerella Pizza",
        price: "$42",
        rating: "4.3",
        isItemInCart: false,
        category: "Pizza",
    },
    {
        logo: "assets/images/mexican-pizza.png",
        name: "Mexican Pizza",
        price: "$36",
        rating: "4.8",
        isItemInCart: false,
        category: "Pizza",
    },
    {
        logo: "assets/images/mushroom-pizza.png",
        name: "Mushroom Pizza",
        price: "$40",
        rating: "4.4",
        isItemInCart: false,
        category: "Pizza",
    },
    // Biryani Menu
    {
        logo: "assets/images/biryani1.jpg",
        name: "Hyderabadi Biryani",
        price: "$12",
        rating: "4.5",
        isItemInCart: false,
        category: "Biryani",
    },
    {
        logo: "assets/images/biryani2.jpg",
        name: "Lucknowi Biryani",
        price: "$10",
        rating: "4.2",
        isItemInCart: false,
        category: "Biryani",
    },
    {
        logo: "assets/images/biryani3.jpg",
        name: "Kolkata Biryani",
        price: "$11",
        rating: "4.7",
        isItemInCart: false,
        category: "Biryani",
    },
    {
        logo: "assets/images/biryani4.jpg",
        name: "Bombay Biryani",
        price: "$13",
        rating: "4.3",
        isItemInCart: false,
        category: "Biryani",
    },
    {
        logo: "assets/images/biryani5.jpg",
        name: "Vegetable Biryani",
        price: "$9",
        rating: "4.1",
        isItemInCart: false,
        category: "Biryani",
    },
    {
        logo: "assets/images/biryani6.jpg",
        name: "Egg Biryani",
        price: "$10",
        rating: "4.6",
        isItemInCart: false,
        category: "Biryani",
    },
    // Chicken Category
    {
        logo: 'assets/images/chicken1.png',
        name: 'Grilled Chicken',
        price: '$12',
        rating: '4.5',
        isItemInCart: false,
        category: 'Chicken'
      },
      {
        logo: 'assets/images/chicken2.png',
        name: 'Chicken Curry',
        price: '$10',
        rating: '4.2',
        isItemInCart: false,
        category: 'Chicken'
      },
      {
        logo: 'assets/images/chicken3.png',
        name: 'Roasted Chicken',
        price: '$14',
        rating: '4.8',
        isItemInCart: false,
        category: 'Chicken'
      },
      {
        logo: 'assets/images/chicken4.png',
        name: 'Chicken Shawarma',
        price: '$8',
        rating: '4.3',
        isItemInCart: false,
        category: 'Chicken'
      },
      {
        logo: 'assets/images/chicken5.png',
        name: 'Chicken Biryani',
        price: '$15',
        rating: '4.6',
        isItemInCart: false,
        category: 'Chicken'
      },
      {
        logo: 'assets/images/chicken6.png',
        name: 'Fried Chicken',
        price: '$9',
        rating: '4.4',
        isItemInCart: false,
        category: 'Chicken'
      }
    // Similarly give me card data with 6 items each for Paneer Category, Vegitable Category, South Indian Category and Chinese Category via Chatgpt
];

let cart = [];

const menuTitle = document.getElementById("menu-category").innerText;
console.log("Menu Title: ", menuTitle);

// Filtering the food menu by category
const menuList = foodMenu.filter((menu) => menu.category === menuTitle);
displayMenuList(menuList);

// Loop through the food menu data and generate HTML for each card
function displayMenuList(menuList) {
    const menuCard = document.getElementById("menu-card");
    menuCard.innerHTML = ""; // Resetting the inner html if already items present
    menuList.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card food-item-card col-md-3";

        const headerDiv = document.createElement("div");
        headerDiv.className = "row card-header-row";

        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating-card col-md-6";
        const ratingStar = document.createElement("i");
        ratingStar.className = "fa-solid fa-star";
        const ratingSpan = document.createElement("span");
        ratingSpan.textContent = item.rating;

        const addToCartDiv = document.createElement("div");
        addToCartDiv.className = "add-to-cart-logo round-logo col-md-6";
        addToCartDiv.id = item.name;

        if (cart.find((cartItem) => item.name === cartItem.name)) {
            // If item already in cart
            item.isItemInCart = true; // displaying it as cart item in UI
            addToCartDiv.classList.add("item-in-cart");
        }
        const addToCartIcon = document.createElement("i");
        addToCartIcon.className = "fa-regular fa-heart";

        const image = document.createElement("img");
        image.src = item.logo;
        image.className = "card-img-top food-item-logo";
        image.alt = "Food Logo";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = item.name;

        const price = document.createElement("p");
        price.className = "card-text";
        price.textContent = "Price: " + item.price;

        ratingDiv.appendChild(ratingStar);
        ratingDiv.appendChild(ratingSpan);

        addToCartDiv.appendChild(addToCartIcon);

        headerDiv.appendChild(ratingDiv);
        headerDiv.appendChild(addToCartDiv);

        card.appendChild(headerDiv);
        card.appendChild(image);
        card.appendChild(cardBody);

        card.onclick = () => addItemToCart(item.name);

        cardBody.appendChild(title);
        cardBody.appendChild(price);

        menuCard.appendChild(card);
    });
}

/**
 * To update the menu if a new category is selected by user from right sidebar
 * @param {string} category
 */
function updateMenu(category) {
    document.getElementById("menu-category").innerText = category;

    // Filtering the food menu by category
    const menuList = foodMenu.filter((menu) => menu.category === category);
    displayMenuList(menuList);
}

/**
 *
 * @param {string} itemName
 * @returns
 */
function addItemToCart(itemName) {
    console.log(itemName);
    menuItem = foodMenu.find((item) => item.name === itemName);
    if (!menuItem?.name) {
        alert("Menu Item not found!");
        return;
    }
    const addToCartDiv = document.getElementById(menuItem.name);
    if (!menuItem.isItemInCart) {
        // If menu item is not in cart
        menuItem.isItemInCart = true;
        if (addToCartDiv) {
            addToCartDiv.classList.add("item-in-cart");
            cart.push(menuItem);
            document.getElementById("total-cart-items").innerText = cart.length
                ? cart.length
                : "";
        }
    } else {
        removeItemFromCart(menuItem, addToCartDiv);
    }
}

/**
 *
 * @param {MenuItems} menuItem
 * @param {HtmlElement} div
 */
function removeItemFromCart(menuItem, div) {
    menuItem.isItemInCart = false;
    cart.splice(cart.indexOf(menuItem), 1);
    div.classList.remove("item-in-cart");
    document.getElementById("total-cart-items").innerText = cart.length
        ? cart.length
        : "";
}

function emptyCart() {
    cart = [];
}

function displayCart() {
    const menuCard = document.getElementById("menu-card");
    menuCard.innerHTML = ""; // Resetting the inner html if already items present


    const cartBody = document.createElement('div');
    cartBody.className = 'cart-body'

    // Create the heading
    const heading = document.createElement('h2');
    heading.textContent = 'Items Added in Wishlist';
    cartBody.appendChild(heading);
    
    // Create the table
    const table = document.createElement('table');
    table.className = 'table table-borderless';
    
    // Create the table head
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    
    const headItem1 = document.createElement('th');
    headItem1.scope = 'col';
    headItem1.textContent = 'Item';
    
    const headItem2 = document.createElement('th');
    headItem2.scope = 'col';
    headItem2.textContent = 'Name';
    
    const headItem3 = document.createElement('th');
    headItem3.scope = 'col';
    headItem3.textContent = 'Price ($)';
    
    headRow.appendChild(headItem1);
    headRow.appendChild(headItem2);
    headRow.appendChild(headItem3);
    thead.appendChild(headRow);
    table.appendChild(thead);
    
    // Create the table body
    const tbody = document.createElement('tbody');
    
    // Adding items in cart dynamically
    cart.forEach(item => {
      const row = document.createElement('tr');
    
      const logoCell = document.createElement('td');
      const logoImg = document.createElement('img');
      logoImg.src = item.logo;
      logoImg.className = 'cart-img-logo';
      logoImg.alt = 'Food Logo';
      logoCell.appendChild(logoImg);
    
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
    
      const priceCell = document.createElement('td');
      priceCell.textContent = item.price;
    
      row.appendChild(logoCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
    
      tbody.appendChild(row);
    });
    
    // Create the total row
    const totalRow = document.createElement('tr');
    
    const emptyCell = document.createElement('td');
    const emptyCell2 = document.createElement('td');
    const totalCell = document.createElement('td');

    const totalAmt = cart.reduce((total, item) => total + Number(item.price.substring(1)), 0);
    totalCell.textContent = '$' + totalAmt;
    
    totalRow.appendChild(emptyCell);
    totalRow.appendChild(emptyCell2);
    totalRow.appendChild(totalCell);
    
    tbody.appendChild(totalRow);
    
    table.appendChild(tbody);
    cartBody.appendChild(table);
    menuCard.appendChild(cartBody);
}
