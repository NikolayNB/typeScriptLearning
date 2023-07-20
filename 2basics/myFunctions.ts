//if no type is assigned to num, it is recognized as "any" and the value of num could be even transformed toLowerCase without a "real problem"
function addTwo(num: number): number{
    return num + 2;
    //return "hello"; <- is posible even when the value of num is a number, that does not make any sense in this function, we need to ensure that the result is always a number, by adding : number at the end of the parenthesis, this way TS recognize that it must returns a number and not any other type.
};

//same thing here, val should have a type so we can not do things like getUpper(4) converted to upper case.
function getUpper(val: string){
    return val.toUpperCase();
};

function signUpUser(name: string, email: string, isPaid: boolean){};

//if we pass only 2 values on logInUser we will have problems as isPaid value will never be readed, we provide a default value of false.

let logInUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("nikolay");
signUpUser("nikolay", "niko@alura.com", false);
logInUser("niko", "niko@niko.com");



/* 

function getValue(myVal: number): boolean{
    if (myVal > 5){
        return true <- boolean
    };
    return "200 OK" <- string
}; 

if after the parenthesis we put number as type, the return true will give us an error that it can not receive a boolean as a paremeter for a response, the same way around, if we apply a boolean type, the string will not be allowed as it can not be returned

*/

const getHello = (s: string): string => {
    return "";
};

const heroes = ["Flash", "Batman", "Superman", "Aquaman"]; /*<- this switch the call later to be infered as a string*/
//const heroes = [1, 2, 3, 4, 5]; /*<- this switch the call later to be infered as a number*/


heroes.map((hero): string => {
    return `hero is ${hero}`;
});

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}