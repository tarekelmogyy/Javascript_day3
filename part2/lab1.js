let N =Number(prompt("How many numbers would you like to enter?"));
let nums =[];
let sum=0;
for(let i=0; i<N; i++){
    var response =Number(prompt("Enter Your Numbers !"));
    nums.push(response);                              //adding numbers entered by user to an array
    var s = sum+=response;
}
console.log(sum);           //sum of numbers entered by user
console.log(sum/N);         //average of numbers
alert(`The sum is : ${s} And Average is : ${s/N}`);





