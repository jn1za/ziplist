function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

const LIST1 = ['a', 'b', 'c'];
const LIST2 = [1, 2, 3];

console.log(zipList(LIST1, LIST2)); // ['a', 1, 'b', 2, 'c', 3]
