// function getPositiveString(list: number[]): string {
//     return list.filter((num: number) => num > 0).join("");
// }

// console.log(getPositiveString([5, -2, 12, -8, 21, -4]));

function list(a: string): string {
  return a
    .split("")
    .filter((b) => !isNaN(Number(b)) && b !== " ")
    .join("");
}

console.log(list("m14il1iu"));
