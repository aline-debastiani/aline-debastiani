const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorningShift = (obj, key, value) => {
    obj[key] = value;
};
addMorningShift(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson2));

const objectSize = (obj) => Object.keys(obj).length;
console.log(objectSize(lesson1));

const objectValue = (obj) => Object.values(obj);
console.log(objectValue(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

const numberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (let i in array) {
        total += obj[array[i]].numeroEstudantes;
    }
    return total;
};
console.log(numberOfStudents(allLessons));

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj);
    let isEqual = false;
    for (let i in array) {
        if (array[i][0] === key && array[i][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));