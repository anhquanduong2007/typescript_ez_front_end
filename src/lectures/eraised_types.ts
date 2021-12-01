const greeting: string = `Hello ${1 + 1}`;
console.log(greeting);
//----
(() => {
  interface Student {
    id: number;
    name: string;
    age: number;
  }
  const student: Student = {
    id: 1,
    name: 'Alice',
    age: 18,
  };
  const { id, name, age } = student;
  console.log(id, name, age);
})();
