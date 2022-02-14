const quotes = [
    {
        name: "Elon Musk",
        quote: "When something is important enough, you do it even if the odds are not in your favor.",
        image: "elon"
    },
    {
        name: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
        image: "walt"
    },
    {
        name: "Napoleon Hill",
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        image: "napoleon"
    },
    {
        name: "Theodore Roosevelt",
        quote: "Believe you can, and you're halfway there.",
        image: "theodore"
    },
    {
        name: "John C. Maxwell",
        quote: "You'll never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
        image: "john"
    },
    {
        name: "Albert Einstein",
        quote: "Try not to become a person of success, but rather, try to become a person of value.",
        image: "albert"
    },
    {
        name: "Winston Churchill",
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        image: "winston"
    },
    {
        name: "Warren Buffett",
        quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
        image: "warren"
    },
    {
        name: "Abraham Lincoln",
        quote: "It often requires more courage to dare to do right than to fear to do wrong.",
        image: "abraham"
    },
    {
        name: "Mark Zuckerberg",
        quote: "The biggest risk is not taking any risk.",
        image: "mark"
    },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quotetext = document.querySelector("#quote");
const quoteauthor = document.querySelector("#quoteauthor");
const quoteimage = document.querySelector("quoteImage");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);

    quoteauthor.innerHTML = quotes[number].name;
    quote.innerHTML =quotes[number].quote;
    quoteImage.setAttribute("class", quotes[number].image);
}
