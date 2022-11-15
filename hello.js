const oneLinerJoke = require("one-liner-joke");
const cowsay = require("cowsay");

var getRandomJoke = oneLinerJoke.getRandomJoke();
const toto = getRandomJoke.tags[0];
const popo = getRandomJoke.tags[1];
console.log(
    cowsay.say({
        text: toto + " " + popo,
        e: "Oo",
        T: "U"
        
    })
);