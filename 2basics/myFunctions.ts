//if no type is assigned to num, it is recognized as "any" and the value of num could be even transformed toLowerCase without a "real problem"
function addTwo(num: number){
    return num + 2;
};

//same thing here, val should have a type so we can not do things like getUpper(4) converted to upper case.
function getUpper(val: string){
    return val.toUpperCase();
};

function signUpUser(name: string, email: string, isPaid: boolean){

};

addTwo(5);
getUpper("nikolay");
signUpUser("nikolay", "niko@alura.com", false)