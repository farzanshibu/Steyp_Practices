class Student {
  constructor(student_name, student_class, student_division, student_marks) {
    this.name = student_name;
    this.class = student_class;
    this.division = student_division;
    this.marks = student_marks;
  }
  total = () => {
    let total_mark = 0;
    this.marks.forEach((mark) => {
      total_mark += mark;
    });
    return total_mark;
  };
}

const student1 = new Student("Joe", 10, "D", [10, 23, 13, 21, 22]);
console.log(parseInt("123abc"));
