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

//types and interaces

/* 
type User = {
    name: string;
    email: string;
    isActive: boolean
};

function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
};

createUser({name: "", email: "", isActive: true})
*/

//READONLY and OPTIONAL

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number; //<- "?" is the sign for optional properties
};

let myUser: User = {
    _id: "123",
    name: "John",
    email: "j@j.com",
    isActive: false
};

type cardNumber = {
    cardnumber: string;
};


type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

myUser.email = "j@jj.com"; //<- totally possible
//myUser._id = "1234"; // <- not possible



export{}