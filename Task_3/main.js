let college = [
    {
        name: "Tom",
        age: 18,
        group: "ИС-2-1",
        studID: 32123,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-04-01"],
        cash: 571,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ИСC-2-1",
        studID: 32123,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Bob",
        age: 29,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1", "МДК-02-2", "МДК-09-02"],
        isStudent: false,
    }
];
let count = 1
let peopleAge = college[count]["age"]
let peopleName = college[count]["name"]
let peopleCash = college[count]["cash"]
let thisStudent = college[count]["isStudent"]
let thisKurator = college[count]["isKurator"]
let thisKuratorGroup = college[count]["kuratorGroup"]

if ( thisStudent === true ) {
    console.log(`Вы выбрали студента ${peopleName}`);
    if ( peopleAge >= 18 ) {
        console.log(`Студент ${peopleName} совершеннолетний. Ему ${peopleAge}`);
    } else {
        console.log(`Студент ${peopleName} не совершеннолетний. Ему ${peopleAge}`);
    }
    if (peopleCash >= 4500 ) {
        console.log(`Студент ${peopleName} получает повышенную стипендию. (${peopleAge} руб.)`);
    } else if ( peopleCash <= 4400 && peopleCash >= 1) {
        console.log(`Студент ${peopleName} получает обычную стипендию. (${peopleAge} руб.)`);
    } else if  ( peopleCash == 0 ) {
        console.log(`Студент ${peopleName} не получает стипендию.`);
    }
} else if ( thisStudent === false ) {
    console.log(`Вы выбрали студента ${peopleName}`)
    if ( thisKurator === true) {
        console.log(`Преподаватель ${peopleName} куратор группы ${thisKuratorGroup}`)
    }
    console.log("Преподаватель")
}