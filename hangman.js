let letters = "abcdefghijklmnopqrstuvwxyz";
let elementletterts = document.querySelector(".letters");
let continer=document.querySelector(".container");


Array.from(letters).forEach((letter) => {
    //create span letter
    let spanletter = document.createElement("span");
    spanletter.classList.add("letterbtn");
    spanletter.textContent = letter.toUpperCase();
    
    //append in elementletterts 
    elementletterts.appendChild(spanletter)

})
//object words
let words = {
    programming: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies: ["prestige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    people: ["albert einstein" ,"hitchcock","alexander","cleopatra","mahatma ghandi"],
    countries:["syria","palestine","yemen","egypt","bahrain","qatar"]
}
//random properties from object
let namepropertys = Object.keys(words);
let random_object = Math.floor(Math.random() * namepropertys.length);
let catygory = document.querySelector(".catygory span");
catygory.textContent = namepropertys[random_object];

//random words from proerties from object
let property_words = words[namepropertys[random_object]];
let random_indexwords = Math.floor(Math.random() * words[namepropertys[random_object]].length);

//craete letter gusse
let character_word = property_words[random_indexwords];
let letters_guess = document.querySelector(".letters-guess");

for (let i = 0; i < character_word.length; i++){
    let span = document.createElement("span");
    letters_guess.appendChild(span);
}

console.log(Array.from(character_word));

let letterspan = Array.from(document.querySelectorAll(".letters span"));
let wrong = 0;
let test = false;
let arr = [];

Array.from(character_word).forEach((ele) => {
    if (ele === " ") {
        arr.push(ele);
    }
})

letterspan.forEach((letter) => {
    letter.addEventListener("click", function (e) {
        e.target.classList.add("clicked")
        Array.from(character_word).forEach((element, index) => {
            if (e.target.textContent.toLowerCase() === element) {
                arr.push(element);
                //add class chooes for letter
                Array.from(letters_guess.children)[index].classList.add("chooes");
                Array.from(letters_guess.children)[index].style.border = "none";
                //set leter chooes in span guess
                Array.from(letters_guess.children)[index].textContent = e.target.textContent.toLowerCase();

                    test = true;
                }
        })
        
            //popup resolved
        if (Array.from(letters_guess.children).length === arr.length) {
                        //crate popup resolved
                let popup = document.createElement("div");
                popup.classList.add("resolved");
                popup.textContent = "congratoliation";
                let overlay = document.createElement("div");
                overlay.classList.add("overlay");
                //bulets 
                let one = document.createElement("span");
                let two = document.createElement("span");
                let three = document.createElement("span");
                let four = document.createElement("span");
                one.classList.add("bullets");
                two.classList.add("bullets");
                three.classList.add("bullets");
                four.classList.add("bullets");
                //close popup
            let close = document.createElement("button");
            close.textContent = "X";
            close.classList.add("close-popup");
                //append popup resolved
                popup.appendChild(one)
                popup.appendChild(two)
                popup.appendChild(three)
                popup.appendChild(four)
                popup.appendChild(close)
                document.body.appendChild(popup)
            // continer.appendChild(overlay);
            document.body.prepend(overlay);
            //click close
            document.querySelector(".close-popup").addEventListener("click", function () {
                    window.location.reload()
                })
        }
        
        //popup game over 
        if (test === false) {
            wrong++
            let games = [".stand", ".hang", ".rope", ".head", ".body", ".hands", ".legs"];
            for (let i = 0; i < wrong; i++){
                if (wrong === 7 ) {
                    letterspan.forEach((e) => {
                        e.classList.add("clicked");
                    })
                }
                document.querySelector(games[i]).style.display = "block";
            }
            if (wrong === 7) {
                // create popup game over
                        let popup = document.createElement("div");
                        popup.classList.add("game-over");
                let text_popup = document.createTextNode("Game over");
                let playagin = document.createElement("button");
                playagin.classList.add("playagin")
                playagin.textContent = "play agin";
                let overlay = document.createElement("div");
                overlay.classList.add("overlay");
                let answer = document.createElement("p");
                answer.classList.add("answer");
                    answer.innerHTML=`word: <span>${character_word}</span>`
                        //append text and element
                        popup.appendChild(text_popup);
                popup.appendChild(playagin);
                popup.appendChild(answer);
                // continer.appendChild(overlay);
                document.body.prepend(overlay);
                document.body.appendChild(popup);
                //  //click play agine
                document.querySelector(".playagin").addEventListener("click", function () {
                    window.location.reload()
                })
            }
        }
        test = false;
    })
    //set space in word
    Array.from(character_word).forEach((element, index) => { 
if (element === " ") {
    Array.from(letters_guess.children)[index].textContent = "-";
    Array.from(letters_guess.children)[index].classList.add("chooes");
    Array.from(letters_guess.children)[index].style.border = "none";
}
    })

})






