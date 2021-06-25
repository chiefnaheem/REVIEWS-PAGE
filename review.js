
var authorImg = document.querySelector("img");
var authorName = document.querySelector(".name");
var authorJob = document.querySelector(".job");
var authorText = document.querySelector(".text");
var nextBtn = document.querySelector("#next");
var previousBtn = document.querySelector("#previous");
var randomBtn = document.querySelector("button");


var reviews = [
    {
        id :"1",
        img : "reviewimage5.jpg",
        name : "John Doe",
        job : "Microsoft Engineer",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia, nesciunt assumenda repellendus reiciendis officiis eligendi aliquam quo dolorem illo. Quos fugiat repellendus nam quam quis quisquam saepe aliquid dolorum"
    },
    {
        id: "2",
        img:"reviewimages6.jpg",
        name : "Martin Kane",
        job: "Software Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia, nesciunt assumenda repellendus reiciendis officiis eligendi aliquam quo dolorem illo. Quos fugiat repellendus nam quam quis quisquam saepe aliquid dolorum."

    },
    {
        id: "3",
        img: "reviewimages7.png",
        name: "John Wolf",
        job : "Internet Explorer",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia, nesciunt assumenda repellendus reiciendis officiis eligendi aliquam quo dolorem illo. Quos fugiat repellendus nam quam quis quisquam saepe aliquid dolorum."
    },
    {
        id : "4",
        img : "reviewimages8.jpeg",
        name : "Warren Bale",
        job : "Data Scientist",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia, nesciunt assumenda repellendus reiciendis officiis eligendi aliquam quo dolorem illo. Quos fugiat repellendus nam quam quis quisquam saepe aliquid dolorum."
    }
]

var currentIndex = 0;

window.addEventListener ("DOMContentLoaded", function () {
    currentIndex = 0;
    eachProfile(currentIndex);
});
function eachProfile (currentIndex) {
    var eachItem = reviews[currentIndex]
    authorImg.src = eachItem.img;
    authorName.textContent = eachItem.name;
    authorJob.textContent = eachItem.job; 
    authorText.textContent = eachItem.text;
};

nextBtn.addEventListener("click", function () {
    currentIndex++
    if (currentIndex > reviews.length - 1) {
        currentIndex = 0;
    }
    eachProfile(currentIndex);
});
previousBtn.addEventListener("click", function (){
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1 ;
    }
    eachProfile(currentIndex);
});
randomBtn.addEventListener ("click", function () {
    currentIndex = Math.floor(Math.random() * reviews.length);
    eachProfile(currentIndex);
})
