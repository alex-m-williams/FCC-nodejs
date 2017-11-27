let arr = process.argv.slice(2, process.argv.length);
console.log(arr.reduce((sum, int) => {
    let sumAdd = Number(sum);
    return sumAdd += Number(int); 
}));