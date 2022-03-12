class Worker {
    constructor(organization, salary, gender, chart) {
        this.organization = organization;
        this.chart = chart;
        this.salary = salary;
        this.gender = gender;
    }
    show() {
        console.log(this.organization, this.salary, this.children, this.gender)
    }
    render() {}
}

class Plumber extends Worker {
    constructor(organization, salary, gender, chart, name, surname, age, children) {
        super(organization, salary, gender, chart);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.children = children;
    }
    show() {
        console.log(this.name)
    }
}

class Driver extends Worker {
    constructor(organization, salary, gender, chart, name, surname, age, children) {
        super(organization, salary, gender, chart);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.children = children;
    }
}

const plumber1 = new Plumber('ПАО Организация', 15000, 'мужчина', '2/3', 'Юрьев', 'Михаил', 32, true);
// const plumber2 = new Plumber('Смирнов', 'Алексей', 55);
// const plumber3 = new Plumber('Уткин', 'Дмитрий', 21);
const driver1 = new Driver('ПАО Организация', 125000, 'мужчина', '5/2', 'Калязин', 'Олег', 43, false);
// const driver2 = new Driver('Суслов', 'Степан', 19);
// const driver3 = new Driver('Жик', 'Дмитрий', 44);

console.log(plumber1)
console.log(driver1)

//workers.show();
//console.log(workers.salary);

//console.log(plumber1.salary);
//console.log(plumber2.salary);
//driver1.show();
//plumber1.show();