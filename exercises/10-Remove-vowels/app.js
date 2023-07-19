// Your code goes here

    const rapid = (string) => {
        let consonants = [];
        for(let letter of string.toLowerCase()){
            if(['a','e','i','o','u'].includes(letter) == false)
                consonants.push(letter.toUpperCase())
        }
        return consonants.join('');
    };
    

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
