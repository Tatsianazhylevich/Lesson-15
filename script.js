// ===========================TASK 1=========================

let array = [];

function addInArray(number, k) {
    for( i = 0; i < number; i++ ) {
        array.push(+prompt('Enter your number'));
    };
    console.log(array);

    let increaseNumber = confirm('Press "Yes" to increase the numbers, "No" - to decrease');
    array = array.map(function(item) {
       if (increaseNumber === true) {
           return item * k;
       } else {
        return item / k;
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