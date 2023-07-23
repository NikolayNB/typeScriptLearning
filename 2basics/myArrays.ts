//the arrays should be defined with the syntax as show before, if not the array will be of type never and it will not accept any value

const superHeroes: string[] = [];
//const heroPower: number[] = [];
const heroPower: Array<number> = []; //this is another way to define an array

type User = {
    name: string;
    isActive: boolean;
};

const allUsers: User[] = [];

superHeroes.push("superman");
heroPower.push(100);

allUsers.push({name: "", isActive: true}); //this is the only way to push an object into an array

/*
const MLModels: number[][] = [
    [255, 255, 255],
    []
];

this is a 2D array

*/