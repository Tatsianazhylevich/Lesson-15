// ===========================TASK 1=========================

let array = [];

function addInArray(number, index) {
    for( i = 0; i < number; i++ ) {
        array.push(+prompt('Enter your number'));
    };
    console.log(array);

    let increaseNumber = confirm('Press "Yes" to increase the numbers, "No" - to decrease');
    array = array.map(function(item) {
       if (increaseNumber) {
           return item * index;
       } else {
        return item / index;
       }
    });
}
addInArray(3, 2);
console.log(array);


// ========================TASK 2==============================

    let string = 'Перемен, требуют наши сердца!';
    function slisedString (start, end) {
        return string.slice(start, end);
    }
    let newString = slisedString(0, 7);

console.log(string);
console.log(newString);

// ========================TASK 3===============================
let person = {}

function getObject() {
    person.name = prompt('What is your name?'),
    person.surname = prompt('What is your surname?'),
    person.age = +prompt(`How old are you, ${person.name}?`),
    person.spouse = confirm('Are you married?')
    if(person.spouse) {
        person.spouse = {};
        person.spouse.name = prompt("What is his/her name?");
        person.spouse.age = +prompt('How old is he/she?');
    } else { 
        alert('Everythingis ahead!'); 
    }
    person.children = confirm('Do you have children')
    if(person.children) {
        person.children = [];
        getChildren();
    } else {
        alert('Everythingis ahead!')
    }
    person.profession = prompt('What do you work?')
}

function getChildren() {
    let amountOfChildren = +prompt('How many children do you have?')
    for (i=0; i<amountOfChildren; i++) {
        person.children[i] = {};
        person.children[i].name = prompt('What is his/her name?');
        person.children[i].age = +prompt('how old is he/she?');
    }
}

getObject();

console.log(person);

// ===========================TASK 4==============================

var data= ['молоко', 34, 717, false, 'копы', true, 74, 108, 'погроммист', 'котик', 
    'мемчик', true, true, 666, false];

let arrayofNumber = [];
let arrayOfString = [];
let arrayOfBoolean = [];

function getSortedArrays(array) {
    data.forEach(function (item) {
        switch(typeof item) {
            case 'number': arrayofNumber.push(item);
            break;
            case 'string': arrayOfString.push(item);
            break;
            case 'boolean': arrayOfBoolean.push(item);
            break;
        }
    });
}

getSortedArrays(data);

console.log(arrayofNumber);
console.log(arrayOfString);
console.log(arrayOfBoolean);

function increaseNumber(array) {
    return array.map(item => item*2);
}
function reverseBoolean(array) {
    return array.map(item => item =! item);
}
function changingLetters(array) {
    let commonString = array.join(',');
        for (item of commonString) {
            if (item === 'о') {
                commonString = commonString.replace('о', 'л');
            }
        }
    return commonString.split(',');
}

arrayofNumber = increaseNumber(arrayofNumber);
arrayOfString = changingLetters(arrayOfString);
arrayOfBoolean = reverseBoolean(arrayOfBoolean);

console.log(arrayofNumber);
console.log(arrayOfString);
console.log(arrayOfBoolean);

// ==================================TASK 5=============================

let family = {
    amount: 5,
    familyMembers: [
        {name: 'Borya', age: 15},
        {name: 'Tolya', age: 54},
        {name: 'Anjela', age: 45},
        {name: 'Snejana', age: 14},
        {name: 'Gavriil', age: 24},
],
    getoldestFamilyMember() {
        let oldestMember;
        let oldestMemberAge = 0;
        for(member of this.familyMembers) {
            if(oldestMemberAge < member.age) {
                oldestMemberAge = member.age;
                oldestMember = member;
            }
        }
        this.oldestMember = oldestMember;
        return oldestMember;
    }
}
let older = family.getoldestFamilyMember();
console.log(older);
console.log(family);
