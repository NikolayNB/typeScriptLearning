"use strict";
/*
const User = {
    name: 'John',
    email: "john@john.com",
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {};

let newUser = {name: "Niko", isPaid: false, email: "niko@niko.com"};

createUser(newUser);

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 100};
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "123",
    name: "John",
    email: "j@j.com",
    isActive: false
};
myUser.email = "j@jj.com"; //<- totally possible
