let score: number | string = 33;

score = 44;
score = "44";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let niko: User | Admin = {name: "Niko", id: 0};
niko = {username: "nik", id: 1};
/* 
function getDbId (id: number | string) {
    //making API call
    console.log(`DB id is ${id}`);
}
 */

getDbId(1);
getDbId("1");

function getDbId (id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

//arrays

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number)[] = [1, "2", 3, "4"];