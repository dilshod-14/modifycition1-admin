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

/**Tradition API
 * Rest API
 * GraphQL API
 */

function getFilteredList(): number[] {
  const list: number[] = [1, 4, 5, 4, 7, 4];
  const newList: number[] = list.filter((ele) => ele === 4);
  return newList;
}

console.log(getFilteredList());
