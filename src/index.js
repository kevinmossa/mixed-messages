const greet = ['Hello', 'Good morning', 'Aloha', 'AYOOO'];
const person = ['dude', 'you', 'whatever your name is', 'random person'];

let random_message = greet[Math.floor(Math.random() * greet.length)] + ' ' + person[Math.floor(Math.random() * person.length)];



console.log(random_message);