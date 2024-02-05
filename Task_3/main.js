let college = [
    {name: "Tom", age: 17, group: "ИС-4-2"},
    {name: "Bob", age: 21, group: "ИС-2-1"},
    {name: "Goga", age: 25, group: "ИС-3-2"},
    {name: "Pavel", age: 20, group: "ИС-1-1"},
];
let count = 0
let StudentAge = college[count]["age"];
let StudentName = college[count]["name"];
if (college[0]["age"] >= 18) {
    console.log(`Студент ${StudentName} совершеннолетний. Ему ${StudentAge}`);
} else if (college[0]["age"] < 18){
    console.log(`Студент ${StudentName} не совершеннолетний. Ему ${StudentAge}`);
}