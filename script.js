'use strict';
/********************/
/*      Slider     */
/******************/
const slides = document.querySelectorAll('.slide-container');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


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
    }
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

/********************/
/*   Display Map   */
/******************/
if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(
    function(position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;

        const coords = [latitude, longitude];

        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
    }
);
/*************************/
/* Render pets section  */
/***********************/
const cardsContainer = document.querySelector('.cards-container');
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











  /*
  {
        "id": "u9",
        "breed": "MO239 - Chihuahua",
        "gene": "Male",
        "age": "02 months",
        "price": "4.500.000 VND",
        "SKU": "#1000087",
        "size": "Small",
        "color": "Tan",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "01-nov-2024",
        "Additional-Information": "Bold and energetic with MKA cert and Microchip. Loves to play.",
        "avatar": "pet-9.jpg"
    },
    {
        "id": "u10",
        "breed": "MO240 - Rottweiler",
        "gene": "Female",
        "age": "06 months",
        "price": "12.000.000 VND",
        "SKU": "#1000088",
        "size": "Large",
        "color": "Black",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "03-nov-2024",
        "Additional-Information": "Confident and loyal with MKA cert and Microchip. Needs a strong owner.",
        "avatar": "pet-10.jpg"
    },
    {
        "id": "u11",
        "breed": "MO241 - Yorkshire Terrier",
        "gene": "Male",
        "age": "03 months",
        "price": "5.000.000 VND",
        "SKU": "#1000089",
        "size": "Small",
        "color": "Black & Tan",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "05-nov-2024",
        "Additional-Information": "Affectionate and lively with MKA cert and Microchip. Loves to be pampered.",
        "avatar": "pet-11.jpg"
    },
    {
        "id": "u12",
        "breed": "MO242 - Boxer",
        "gene": "Female",
        "age": "07 months",
        "price": "9.000.000 VND",
        "SKU": "#1000090",
        "size": "Medium",
        "color": "Fawn",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "10-nov-2024",
        "Additional-Information": "Energetic and fun-loving with MKA cert and Microchip. Great with kids.",
        "avatar": "pet-12.jpg"
    },
    {
        "id": "u13",
        "breed": "MO243 - Cocker Spaniel",
        "gene": "Male",
        "age": "04 months",
        "price": "7.000.000 VND",
        "SKU": "#1000091",
        "size": "Medium",
        "color": "Golden",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "12-nov-2024",
        "Additional-Information": "Friendly and affectionate with MKA cert and Microchip. Loves to fetch.",
        "avatar": "pet-13.jpg"
    },
    {
        "id": "u14",
        "breed": "MO244 - Great Dane",
        "gene": "Female",
        "age": "05 months",
        "price": "15.000.000 VND",
        "SKU": "#1000092",
        "size": "Giant",
        "color": "Harlequin",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "15-nov-2024",
        "Additional-Information": "Gentle giant with MKA cert and Microchip. Needs space to roam.",
        "avatar": "pet-14.jpg"
    },
    {
        "id": "u15",
        "breed": "MO245 - Pug",
        "gene": "Male",
        "age": "02 months",
        "price": "4.000.000 VND",
        "SKU": "#1000093",
        "size": "Small",
        "color": "Fawn",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "18-nov-2024",
        "Additional-Information": "Charming and sociable with MKA cert and Microchip. Great companion.",
        "avatar": "pet-15.jpg"
    },
    {
        "id": "u16",
        "breed": "MO246 - Akita",
        "gene": "Female",
        "age": "08 months",
        "price": "14.000.000 VND",
        "SKU": "#1000094",
        "size": "Large",
        "color": "White",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "20-nov-2024",
        "Additional-Information": "Loyal and protective with MKA cert and Microchip. Needs firm training.",
        "avatar": "pet-16.jpg"
    },
    {
        "id": "u17",
        "breed": "MO247 - Border Collie",
        "gene": "Male",
        "age": "06 months",
        "price": "10.000.000 VND",
        "SKU": "#1000095",
        "size": "Medium",
        "color": "Black & White",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "25-nov-2024",
        "Additional-Information": "Intelligent and energetic with MKA cert and Microchip. Loves to work.",
        "avatar": "pet-17.jpg"
    },
    {
        "id": "u18",
        "breed": "MO248 - Boston Terrier",
        "gene": "Female",
        "age": "04 months",
        "price": "5.500.000 VND",
        "SKU": "#1000096",
        "size": "Small",
        "color": "Black & White",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "30-nov-2024",
        "Additional-Information": "Lively and affectionate with MKA cert and Microchip. Good for apartments.",
        "avatar": "pet-18.jpg"
    },
    {
        "id": "u19",
        "breed": "MO249 - Pembroke Corgi",
        "gene": "Male",
        "age": "03 months",
        "price": "7.200.000 VND",
        "SKU": "#1000097",
        "size": "Medium",
        "color": "Red & White",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "02-dec-2024",
        "Additional-Information": "Friendly and playful with MKA cert and Microchip. Great with kids.",
        "avatar": "pet-19.jpg"
    },
    {
        "id": "u20",
        "breed": "MO250 - Siberian Husky",
        "gene": "Female",
        "age": "05 months",
        "price": "11.000.000 VND",
        "SKU": "#1000098",
        "size": "Large",
        "color": "Black & White",
        "vaccinated": "Yes",
        "Dewormed": "Yes",
        "Cert": "Yes",
        "Microchip": "Yes",
        "Location": "Vietnam",
        "Published-Data": "05-dec-2024",
        "Additional-Information": "Loving and energetic with MKA cert and Microchip. Needs lots of exercise.",
        "avatar": "pet-20.jpg"
    } */