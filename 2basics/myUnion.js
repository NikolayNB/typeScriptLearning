var score = 33;
score = 44;
score = "44";
var niko = { name: "Niko", id: 0 };
niko = { username: "nik", id: 1 };
/*
function getDbId (id: number | string) {
    //making API call
    console.log(`DB id is ${id}`);
}
 */
getDbId(1);
getDbId("1");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//arrays
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = [1, "2", 3, "4"];
