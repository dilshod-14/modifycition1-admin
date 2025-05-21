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

function removeDuplicate(str: string): string {
  let result = "";
  const seen = new Set<string>();

  for (const char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicate("stringg"));
console.log(removeDuplicate("aabbccddeeff"));
console.log(removeDuplicate("typescript"));
