function findGreatest(a, b) {
  try {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return Math.max(a, b);
    } else {
      throw new Error("Both inputs must be integers.");
    }
  } catch (error) {
    return (error.message);
  }
}

console.log(findGreatest(34, "23"));
console.log(findGreatest(34,23));