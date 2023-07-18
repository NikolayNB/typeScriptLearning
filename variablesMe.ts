let greetings: string = "Hello Nikolay";
greetings.toLowerCase();
console.log(greetings);
export{}


//number
let userId: number = 321321.3;
//not a good practice, inference of types exist in TS and is good practice.

//boolean
let isLogedIn: boolean = false;
//

//any
let hero; // let hero: string <- this will make boolean or numbers to not work with the function called.

function getHero(){
    return "thor" // if boolean or number, will not give error, unless you define at least the type of the variable
}

hero = getHero();