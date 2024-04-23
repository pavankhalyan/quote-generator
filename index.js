let btn = document.querySelector('#new-Quote');
let quote = document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes = [ {
    quote: "The only way to do great work is to love what you do.",
    person: "-Steve Jobs"
},{
    quote: "Innovation distinguishes between a leader and a follower.",
    person: "-Steve Jobs"
},{
    quote: "Believe you can and you're halfway there.",
    person: "-Theodore Roosevelt"
},{
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "-Eleanor Roosevelt"
},{
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    person: "-Dalai Lama"
},{
    quote:"if you have dream to chase, nothing can stop you.",
    person:"-Lionel Messi"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})

