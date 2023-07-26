//const user: string[] = ["niko"];

//const user: (string | number)[] = [1, "niko"]; <- the order does not matter as long as the types are correct

const user: [string, number, boolean]; // <- this is a tuple

user = ["niko", 1, true]; //<- the order matters here, we cannot put the boolean first for example

// the order in the tuples matters in cases where we make API calls and we know the order of the data we are getting back

let rgb: [number, number, number] = [255, 0, 0]; //<- another example of a tuple

type User = [number, string]; //<- we can also create a type alias for a tuple
const newUser: User = [1, "niko@n.com"]; //<- we can not place a boolean here for example as it is not part of the type alias

newUser[1] = "niko.com"; //<- we can change the value of the tuple
newUser.push(true); //<- we can push a new value to the tuple, we need to be careful with this as we can change the type of the tuple