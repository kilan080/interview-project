const arr = [5, 9, [11, 56, 76, 8], [20, 43]];


//simplest form using .flat()
const flat1 = arr.flat();
console.log(flat1);

//deeply nested? Use Infinity
const deepFlat = arr.flat(Infinity);
console.log(deepFlat);

// manual implementation

function flatten(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
    
    }, [])
}
console.log(flatten(arr));

// 2 find the first repeating character in a string

function firstReapeatingChar(str) {
    const seen = new Set();
    for (let char of str) {
        if(seen.has(char)) return char;
        seen.add (char);
    }
    return null  //no repeats
}


firstReapeatingChar("swiss");  // s repeat at index 3, so return s ("swiss")

//3 Debounce in vanilla js

function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
};

console.log(debounce());

// debounce usage
const handleSearch = debounce((query) => {
    console.log("searching for :", query)
}, 200)

input.addEventListener("input", (e) => handleSearch(e.target.value));


//4 find the output: 
let count = 0;
function increment() {
    setTimeout(() => {
        count++;
        console.log("timeout:", count);
    }, 0)

    Promise.resolve().then(() => {
        count++;
        console.log("promise:", count);
    })
}

increment();
console.log("sync:", count);

//output: sync: 0, promise:1, timeout:2