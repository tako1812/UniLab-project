'use strict';
const slides = document.querySelectorAll('.slide-container');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


const btnReset = document.querySelector('.btn-reset');
const ViewMoreBtn = document.querySelector('.btn-ViewMore');
const btnJoin = document.querySelector('.btn-join');
const resetLink = document.querySelector('.reset-link');
const cardsContainer = document.querySelector('.pets-card-container');
const productsContainer = document.querySelector('.products-container');
const viewMorePetsConatiner = document.querySelector('.view-more-pets-container');
/********************/
/*  Open pages     */
/******************/
ViewMoreBtn.addEventListener('click', function() {
  window.location.href="pages/ViewMore.html";
});
btnJoin.addEventListener('click', function() {
  window.location.href="pages/JoinCom.html";
});
/*
resetLink.addEventListener('click', function() {
  window.location.href="pages/reset.html";
});
btnReset.addEventListener('click', function() {
  window.location.href="./pages/sendLink.html";
});*/
/********************/
/*      Slider     */
/******************/
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  };
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

/*************************/
/* Render pets section  */
/***********************/
const renderPetsCard = async function () {
    cardsContainer.innerHTML = "";
    const res = await fetch(
      "json.data"
    );
    const datas = await res.json();
    console.log(datas);

    datas.map((data) => {
        const html= `
        <div class="card">
            <img src="assets/pets.images/${data.avatar}" alt="dog breeds image">
            <div class="details-container">
              <p class="card-title">${data.breed}</p>
              <div class="description">
                <p>Gene: <b>${data.gene}</b></p>
                <span>.</span>
                <p>Age: <b>${data.age}</b></p>
              </div>
              <p class="price">${data.price}</p>
            </div>
          </div>
        `;
        cardsContainer.insertAdjacentHTML("afterbegin", html);
    })
};
renderPetsCard();
/*****************************/
/* Render Products section  */
/***************************/
const renderProductsCard = async function () {
  productsContainer.innerHTML = "";
  const res = await fetch(
    "json.data2"
  );
  const datas = await res.json();
  console.log(datas);
    datas.map((data) => {
        const html= `
        <div class="card">
            <img class="product-img"src="assets/products.images/${data.avatar}" alt="product's image">
            <div class="details-container">
              <p class="card-title">${data.title}</p>
              <div class="description">
                <p>Product: <b>${data.product}</b></p>
                <span><img src="assets/products.images/dot.png"></span>
                <p>Size: <b>${data.size}</b></p>
              </div>
              <p class="price">${data.price}</p>
              <div class="tag-container">
                <img class="present-box-img" src="assets/products.images/present box.png">
                <img class="dot-img" src="assets/products.images/dot.png">
                <p class="tag-text"><span>Free</span><span>Toys</span><span>&</span><span>Free</span><span>Shaker</span></p>
              </div> 
            </div>
          </div>
        `;
        productsContainer.insertAdjacentHTML("afterbegin", html);
    })
};
renderProductsCard();
/*****************************/
/*    Render More Pets      */
/***************************/

const renderViewMorePets = async function () {
  viewMorePetsConatiner.innerHTML = "";
  const res = await fetch("json.data");
  const datas = await res.json();
  console.log(datas);

  datas.map((data) => {
    const html= `
    <div class="card">
      <img src="assets/pets.images/${data.avatar}" alt="dog breed image">
        <div class="details-container">
          <p class="card-title">${data.breed}</p>
          <div class="description">
            <p>Gene: <b>${data.gene}</b></p>
            <span>.</span>
            <p>Age: <b>${data.age}</b></p>
          </div>
          <p class="price">${data.price}</p>
        </div>
    </div>
    `;
  viewMorePetsConatiner.innerHTML += html;
  })
};
renderViewMorePets();

