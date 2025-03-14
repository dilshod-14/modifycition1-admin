function getPositiveString(list: number[]): string {
    return list.filter((num: number) => num > 0).join("");
}

console.log(getPositiveString([5, -2, 12, -8, 21, -4]));
 
