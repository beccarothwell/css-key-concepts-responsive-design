const pets= [
    {
        "name" : "Purrsloud",
        "species" : "Cat",
        "favFoods" : ["wet food", "dry food", "<strong>any</strong> food"],
        "birthYear" : 2016,
        "photo" : "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        "name" : "Barksalot",
        "species" : "Dog",
        "birthYear" : 2008,
        "photo" : "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        "name" : "Meowsalot",
        "species" : "Cat",
        "favFoods" : ["tuna", "catnip", "celery"],
        "birthYear" : 2012,
        "photo" : "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
        "name" : "Test",
        "species" : "Cat",
        "favFoods" : ["mice"],
        "birthYear" : 2012,
        "photo" : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
    }
];

(function () {
    const petContainers = document.getElementsByClassName("pet-pic");
    for (let i = 0; i < petContainers.length; i++) {
        petContainers[i].src = pets[i].photo;
    }
})();



