/* 
   Regan has been possessed and now speaks in a strange language 😱. Father Karras has discovered that when Regan is possessed, she completely reverses the words she says, but keeps the order of the phrases.

Your mission is to create a program that translates Regan's possessed messages into normal human language.

For example:

const message = 'i yojne gnihctaw uoy'
translatePossessed(message) // "i enjoy watching you"
The spaces between words must be preserved:

const message = 'siht si gnorw'
translatePossessed(message) // "this is wrong"
If the message is empty or contains only spaces, return an empty string:

const message = '      '
translatePossessed(message) // ""
Words may contain uppercase and lowercase letters, and they should be preserved:

const message = 'dooG secitcarP'
translatePossessed(message) // "Good Practices"

*/

function translatePossessed (message) {
   if(message.trim() == '') return ''

   let palabras = message.split(' ')
   palabras = palabras.map(palabra => palabra.split("").reverse().join("")).join(" ")

   return palabras
}

/* Test */
const message = 'i yojne gnihctaw uoy'
const result = translatePossessed(message)
console.log(result)