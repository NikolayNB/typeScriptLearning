//if no type is assigned to num, it is recognized as "any" and the value of num could be even transformed toLowerCase without a "real problem"
function addTwo(num) {
    return num + 2;
    //return "hello"; <- is posible even when the value of num is a number, that does not make any sense in this function, we need to ensure that the result is always a number, by adding : number at the end of the parenthesis, this way TS recognize that it must returns a number and not any other type.
}
;
//same thing here, val should have a type so we can not do things like getUpper(4) converted to upper case.
function getUpper(val) {
    return val.toUpperCase();
}
;
function signUpUser(name, email, isPaid) { }
;
//if we pass only 2 values on logInUser we will have problems as isPaid value will never be readed, we provide a default value of false.
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
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
