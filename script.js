const func = () => {
    console.log("hello codenation");
}

const print = (functi) => {
    for (let i = 0; i < 5; i++) {
        functi();        
    }
}
print(func);



// act 2


let numbers = [1, 2, 3, 4, 5, 6];

let newNumbers = numbers.map( (num) => {
    return num * 3;
} );

console.log(newNumbers);

// act 3


const add = (a, b) => {
    return a + b ;
}
const minus = (a, b) => {
    return a - b ;
}
const multiply = (a, b) => {
    return a * b ;
}
const divide = (a, b) => {
    return a / b ;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn (num1, num2);
    }
}


console.log(doMaths(2)(5, multiply));


