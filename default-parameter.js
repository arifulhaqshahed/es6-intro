function add(num1, num2 = 2){
    /* num2 = num2 || 0;
     if (num2 == undefined) {
        num2 = 0;
    } */ 
    const total = num1 + num2;
    return total;
}
const result =  add(20);
console.log(result);