// function getPositiveString(list: number[]): string {
//     return list.filter((num: number) => num > 0).join("");
// }

// console.log(getPositiveString([5, -2, 12, -8, 21, -4]));

// function list(a: string): string {
//   return a
//     .split("")
//     .filter((b) => !isNaN(Number(b)) && b !== " ")
//     .join("");
// }

// console.log(list("m14il1iu"));

/*Project Standart
-Logging Standart
-Naming Standart
 function, mathod, variabel => CAMEL          goHome
 class => POSCAL                              MemberServis
 folder => KEBOB
 css => SNAKE                                 button_style

 -Error handling
 */

/**Request
 * Tradition API
 * Rest API
 * GraphQL API
 */

/**  Frontend development
 Traditional FD   =>   SSR  => EJS
 Modern FD        =>   SPA  => REACT
 */

/** cookies
  request join
  self destroy
  */
/** Validation
  Frontend Validation
  Backend validation
Database validation
  */

// function countVowels(a: string) {
//   const vowels = "aeiou";
//   let count = 0;

//   for (const c of a) {
//     if (vowels.includes(c)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("string"));
// function reverseSentence(sentence: string) {
//   return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// console.log(reverseSentence("we like coding!")); 
function getSquareNumbers(a: number[]): { number: number; square: number }[] {
  return a.map(n => ({ number: n, square: n * n }));
}

console.log(getSquareNumbers([1, 2, 3]));




