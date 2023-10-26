function isPlainObject(obj) {
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    return true;
  } else {
    return false;
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
