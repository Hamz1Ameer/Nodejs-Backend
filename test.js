// // // sum of two elements in an array matches with target returns the index of theose elements
// // let arr = [2, 7, 11, 15],
// //   target = 9;
// // let a = [];
// // var twoSum = (arr, target) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     let x = target - arr[i];
// //     if (arr.includes(x) && i!=arr.indexOf(x)) {
// //       a[0] = i;
// //       a[1] = arr.indexOf(x);
// //       console.log(a);
// //       break;
// //     } else {
// //       continue;
// //     }
// //   }
// // };
// // twoSum(arr, target);

// // sum of two numbers?

// // l1 = l1.reverse().join("");
// // l1 = Number(l1);
// // l2 = l2.reverse().join("");
// // l2 = Number(l2);

// // let str = l1 + l2;
// // str=str.toString().split('').reverse().map((x)=>{
// //     return parseInt(x);
// // });

// // console.log(str);
// // var addTwoNumbers = function(l1, l2) {};

// // sum of two numbers?
// let l1 = [2, 4, 3],
//   l2 = [5, 6, 4];
// num1 = [];
// l1.forEach((element) => {
//   num1.unshift(element);
// });
// num1 = num1.join("");

// num2 = [];
// l2.forEach((element) => {
//   num2.unshift(element);
// });
// num2 = num2.join("");

// num=Number(num1)+Number(num2);

// // l2 = l2.reverse().join("");
// // l2 = Number(l2);

// // let str = l1 + l2;
// // str=str.toString().split('').reverse().map((x)=>{
// //     return parseInt(x);
// // });

// // console.log(str);
// // var addTwoNumbers = function(l1, l2) {};

// let l1=[9,9,9,9,9,9,9],l2=[9,9,9,9]
// l1 = l1.reverse().join("");
// l1 = Number(l1);
// l2 = l2.reverse().join("");
// l2 = Number(l2);

// let str = l1 + l2;
// str=str.toString().split('').reverse().map((x)=>{
//     return parseInt(x);
// });
// console.log(str);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });
// server.listen(3000, () => {
//   console.log("The server is listening on port 3000");
// });

// var arraySign = function(nums) {
//   let x = nums.reduce((a, b) => {
//     return (a = a * b);
//   }, 1);
//   if (x > 0) {
//     return 1;
//   } else if (x < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// var canMakeArithmeticProgression = function(arr) {
//     let arr1=arr.sort((a,b)=>a-b) //[1,3,5]
//     let diff=Math.abs(arr1[0]-(arr[1])); //2
//     for(let i=1;i<arr.length-1;i++){
//         if(Math.abs(arr1[i+1]-arr[i])==diff){
//             return true;
//         }
//         else return false
//     }
// };

// console.log(canMakeArithmeticProgression([3,5,1]));

// var minimumTime = function(time, totalTrips) {
//   for (let i = 0; i < time.length; i++) {
//     let x = time[i];
//     let arr = time.map((element) => {
//       return Math.floor(x / element);
//     });
//     let val = arr.reduce((accumulator, currentValue) => {
//       return accumulator = accumulator + currentValue;
//     }, 0);
//     console.log(val,totalTrips);
//     if (val===totalTrips) {
//       return time[i];
//     }
//   }
// };
// console.log(minimumTime([5,10,10] , 9));

var minimumTime = function(time, totalTrips) {
    for (let i = 0; i < time.length; i++) {
      let x = time[i];
      let arr = time.filter((element, index) => index !== i).map((element) => {
        return Math.floor(x / element);
      });
      let val = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      console.log(val,totalTrips);
      if (val === totalTrips) {
        return time[i];
      }
    }

  };
  console.log(minimumTime([5,10,25] , 25)); // should output 25
  