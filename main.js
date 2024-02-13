const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector("#shoppingCart");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer=  document.querySelector('#productDetail');

menuHamIcon.addEventListener("click", toggleMobileMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleCarritoAside() {
  const mobileMenuOpen = mobileMenu.classList.contains("inactive");
  const desktopMenuOpen = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  if (!mobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  } else if (!desktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

function toggleDesktopMenu() {
  const asideOpen = aside.classList.contains("inactive");

  if (!asideOpen) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const asideOpen = aside.classList.contains("inactive");

  if (!asideOpen) {
    aside.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function openProductDetailAside(){
  aside.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Pantalla",
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });
  productList.push({
    name: "PC",
    price: 1120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });





   function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInf = document.createElement('div');
        productInf.classList.add('product-info');
    
        const productInfDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfDiv.appendChild(productPrice);
        productInfDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImageCart = document.createElement('img');
        productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCart);
    
        productInf.appendChild(productInfDiv);
        productInf.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInf);
    
        cardsContainer.appendChild(productCard);
    
       }
   }

   renderProducts(productList);