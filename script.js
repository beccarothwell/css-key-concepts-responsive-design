const cats = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
    photo: "./images/cat1.jpg",
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
    photo: "./images/cat2.jpg",
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
    photo: "./images/cat3.jpg",
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
    photo: "./images/cat4.jpg",
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "./images/cat5.jpg",
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
    photo: "./images/cat6.jpg",
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
    photo: "./images/cat7.jpg",
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
    photo: "./images/cat8.jpg",
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
    photo: "./images/cat9.jpg",
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
    photo: "./images/cat10.jpg",
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
    photo: "./images/cat11.jpg",
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
    photo: "./images/cat12.jpg",
  },
  {
    name: "Tiger",
    species: "Fearsome Cat",
    favFoods: ["anything that moves", "anything else"],
    birthYear: 2020,
    photo: "https://placekitten.com/250/180",
  },
  {
    name: "Smushi",
    species: "Sushi Cat",
    favFoods: ["ramen"],
    birthYear: 2000,
    photo: "https://placekitten.com/250/180",
  },
  {
    name: "Doughnut",
    species: "Party Cat",
    favFoods: ["mushrooms"],
    birthYear: 2014,
    photo: "https://placekitten.com/250/180",
  },
  {
    name: "Blep",
    species: "Cat",
    favFoods: ["baked bean juice"],
    birthYear: 2016,
    photo: "https://placekitten.com/250/180",
  },
];

(function () {
  const petNames = document.getElementsByClassName("cat-name");
  const petImage = document.getElementsByClassName("pet-pic");
  const favFoods = document.getElementsByClassName("fav-foods");
  const birthYear = document.getElementsByClassName("birth-year");
  const species = document.getElementsByClassName("species");

  for (let i = 0; i < cats.length; i++) {
    petNames[i].innerText = cats[i].name;
    petImage[i].src = cats[i].photo;
    favFoods[i].innerText = `Favourite foods: ${cats[i].favFoods
      .map((food) => food)
      .join(", ")}`;
    birthYear[i].innerText = `Birth Year: ${cats[i].birthYear}`;
    species[i].innerText = `Species: ${cats[i].species}`;
  }
})();
