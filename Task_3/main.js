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

if ( college[0]["isStudent"] === true ) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["age"] >= 18 ) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний. Ему ${college[0]["age"]}`);
    } else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний. Ему ${college[0]["age"]}`);
    }
    if (college[0]["cash"] >= 4500 ) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию. (${college[0]["cash"]} руб.)`);
    } else if ( college[0]["cash"] <= 4400 && college[0]["cash"] >= 1) {
        console.log(`Студент ${college[0]["name"]} получает обычную стипендию. (${college[0]["cash"]} руб.)`);
    } else if  ( college[0]["cash"] == 0 ) {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
    }
} else if ( college[0]["isStudent"] === false ) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["isKurator"] === true ) {
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0][kuratorGroup]} `);
    }
}