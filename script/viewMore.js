'use strict';
const viewMorePetsConatiner = document.querySelector('.view-more-pets-container');

const renderViewMorePets = async function () {
  //viewMorePetsConatiner.innerHTML = "";
  const res = await fetch("../json.data");
  const datas = await res.json();
 
  datas.map((data) => {
    const html= `
    <div class="card">
        <img src="../assets/pets.images/${data.avatar}" alt="dog breed image">
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
    viewMorePetsConatiner.insertAdjacentHTML("afterbegin", html);


    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener("click", function() {
        window.location.href = "./pages/PetsDetails.html";
        /*const pageId = card.getAttribute('dataset');
        localStorage.setItem("page-id",pageId);
        usersdata = JSON.parse( localStorage.getItem('pageId'));
        console.log(usersdata);*/
    }));
  });
};
renderViewMorePets();

