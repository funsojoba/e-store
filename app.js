const sideBar = document.getElementById("aside");
const body = document.querySelector("body");
const mainBody = document.querySelector(".main");
let shoeDisplay = document.querySelector(".section-two");
let bagDisplay = document.querySelector(".section-three");
let watchDisplay = document.querySelector(".section-four");
let cartNumber = document.querySelector(".nav-icon-cart-counter");
let cartDisplay = document.querySelector(".aside-content-item");
let navIcon = document.querySelector(".nav-icon-cart");
let totalItemPrice = document.querySelector(".total");
let removeBtn = document.querySelectorAll(".close");
let emptyCart = document.getElementById("clear-cart");

let shoeProduct = [
  { name: "SUPRA", price: 1200, img: "./asset/3.png" },
  { name: "PAT KWON", price: 1500, img: "./asset/1.png" },
  { name: "GUCCI", price: 2000, img: "./asset/4.png" },
  { name: "MELVIN", price: 1600, img: "./asset/8.png" },
  { name: "GUCCI", price: 1100, img: "./asset/bag1.png" },
  { name: "AMANI", price: 2500, img: "./asset/bag2.png" },
  { name: "DOLCE", price: 2000, img: "./asset/bag3.png" },
  { name: "FENDI", price: 1600, img: "./asset/bag4.png" },
  { name: "GUCCI", price: 1100, img: "./asset/watch1.png" },
  { name: "AMANI", price: 2500, img: "./asset/watch2.png" },
  { name: "DOLCE", price: 2000, img: "./asset/watch3.png" },
  { name: "FENDI", price: 1600, img: "./asset/watch4.png" },
];

let cartItem = [];
let totalCartItemPrice = [];

const app = {
  openSideBar: function () {
    sideBar.style.transform = "translateX(0)";
    mainBody.classList.add("fade");
  },
  closeSideBar: function () {
    sideBar.style.transform = "translateX(300px)";
    mainBody.classList.remove("fade");
  },
  displayShoeProduct: function () {
    let newShowDisplay = shoeProduct.map((shoe) => {
      return `
            <div class="section-two-card" id="yellow">
                    <div class="section-two-card-image">
                        <img src="${shoe.img}" alt="">
                    </div>
                    <div class="section-two-card-title">
                        <h2>${shoe.name}</h2>
                    </div>
                    <div class="section-two-card-price">
                        <div class="section-two-card-price-amount">
                            <h3>$ ${shoe.price}</h3>
                        </div>
                        <div class="section-two-card-price-button">
                            <button class="buy">BUY</button>
                        </div>
                    </div>
                </div>
            `;
    });

    shoeDisplay.innerHTML = newShowDisplay.join("");
  },

  getBuyButton: function () {
    let buyButton = document.querySelectorAll(".buy");

    buyButton.forEach((e, index) => {
      e.addEventListener("click", (y) => {
        cartItem.push(shoeProduct[index]);
        totalCartItemPrice.push(shoeProduct[index].price);
        let newCartItem = cartItem.map((item) => {
          return `<div class="aside-content-item-list">
            <div class="product">
                <img src="${item.img}" alt="">
            </div>
            <div class="details">
                <h3 id="name">${item.name}</h3>
                <p id="price">$${item.price}</p>
            </div>
            <div class="count" >
                <span><i class="fas fa-times-circle fa-lg close" ></i></span>
            </div>
        </div>`;
        });

        cartDisplay.innerHTML = newCartItem.join("");
        cartNumber.innerHTML = cartItem.length;

        totalItemPrice.innerHTML = this.getTotalCartPrice();
        this.openSideBar();
        console.log(this.getCloseBtn());
      });
    });
  },
  getCloseBtn: function(){
    let closeBtns = document.querySelectorAll(".close");
    
    closeBtns.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            return item;
        })
    })
  },

  getTotalCartPrice: function () {
    let total = totalCartItemPrice.reduce((a, b) => {
      return a + b;
    });

    return total;
  }
};


//meant to open navBar with the cart
navIcon.addEventListener("click", () => {
  app.openSideBar();
});

//close navBar by clicking on the body

body.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("aside-content-item") &&
    !e.target.classList.contains("buy") &&
    !e.target.classList.contains("fa-times-circle") &&
    e.target.classList.contains("nav-icon-cart")
  ) {
    app.closeSideBar();
  }
});




app.displayShoeProduct();
app.getBuyButton();
