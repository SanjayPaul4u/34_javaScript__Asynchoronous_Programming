console.log("Asynchoronous Programming...");

// EXAMPLE OF Synchoronous
// for (let index = 0; index < 1000; index++) {
//     const element = index;
//     console.log(index);
// }
// console.log("Printing Done");



// EXAMPLE OF Asynchoronous
setTimeout(() => {
    for (let index = 0; index < 1000; index++) {
        const element = index;
        console.log(index);
    }
}, 100);

console.log("Printing Done");