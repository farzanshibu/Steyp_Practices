let students = [
  {
    name: "student1",
    class: 1,
    division: "A",
    marks: [10, 20, 12, 23, 25],
  },
  {
    name: "student2",
    class: 1,
    division: "A",
    marks: [20, 20, 22, 23, 25],
  },
  {
    name: "student3",
    class: 1,
    division: "A",
    marks: [10, 10, 12, 13, 15],
  },
];
let topperName = "";
let topperMark = 0;

const totalmarks = (studentObject) => {
  let total = 0;
  for (mark of studentObject.marks) {
    total = mark + total;
  }
  studentObject["totalmarks"] = total;
};

for (student of students) {
  totalmarks(student);
}

studentsArray = students
  .sort((a, b) => {
    return a.totalmarks - b.totalmarks;
  })
  .reverse();

topperMark = studentsArray[0]["totalmarks"];
topperName = studentsArray[0]["name"];

console.log(topperName);
console.log(topperMark);
