// arrow function
// An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
const Initials = (firstName, lastName) => `${firstName[0]}${lastName[0]}`;

console.log(Initials("Roger", "Waters")); 
