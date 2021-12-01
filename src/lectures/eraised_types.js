var greeting = "Hello " + (1 + 1);
console.log(greeting);
//----
(function () {
    var student = {
        id: 1,
        name: 'Alice',
        age: 18
    };
    var id = student.id, name = student.name, age = student.age;
    console.log(id, name, age);
})();
