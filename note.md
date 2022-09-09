Primitive Type & NON Primitive Type
Single & Many Value
JS is a Dynamic Typed Language





১. জাভাস্ক্রিপ্ট কী কী ডাটা টাইপের ভেরিয়েবল আছে?

২. জাভাস্ক্রিপ্ট ফাংশন, বা array কি টাইপের জিনিস ? 

৩. জাভাস্ক্রিপ্ট এ array যদি অবজেক্ট হয় তাহলে কিভাবে চেক করবে কোন একটা ভেরিয়েবল একটা array নাকি array না?

৪. এর মধ্যে undefined আর null এর মধ্যে ডিফারেন্স কি। 

৫. double equal (==) আর triple equal (===) এই দুইটার মধ্যে ডিফারেন্স কি। 

৬. বা implicit conversion কি জিনিস একটা কখন হয়। 

৭. এছাড়াও জাভাস্ক্রিপ্ট এ কয়েক ধরনের স্কোপ আছে। এই স্কোপ গুলার মধ্যে ডিফারেন্স কি। কখন কোনটা হয়। 

৮. ব্লক স্কোপ কি জিনিস? let, const কি টাইপের স্কোপ তৈরি করে?

৯. (এডভান্সড) Closure কি জিনিস? এইটা কিভাবে কাজ করে?

১০. Callback function কি জিনিস?

১১. (এডভান্সড) Hoisting কি জিনিস? (গুগলে সার্চ দিয়ে আরো ভালো করে শিখো )

১২. (এডভান্সড) কি ধরণের ভেরিয়েবল reference দিয়ে ফাংশনে পাঠানো হয় আর কোন ধরণের ভেরিয়েবল value হিসেবে পাঠানো হয়। 


Practice Problem Link
https://drive.google.com/file/d/1KPYVI03MqaEjOq4J7k1txJcHp_8_I0au/view

Common Interview Questions

1) Tell the difference Between Primitive and Non-Primitive Data Types in JavaScript.
2) What are the Truthy and Falsy values? Give me some examples.
3) What is the difference between null and undefined?
4) What are the differences between double equal (==) and triple equal (===)?
5) What is scope in JavaScript?
6) Define block scope and global scope.

COMMON INTERVIEW QUESTIONS

7) What is hoisting in JavaScript?
8) How to use the JavaScript callback function?
9) Explain closure in JavaScript
10) Explain passed by value and passed by reference.

1) If I write []==true,will it show true or false? Check it out.

2) Use === to check if the true === "true" gives true or false.

3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false.

Change the value stored in the storeFalsyValue variable to a falsy value,
such that the code in the else statement executes.

let storeFalsyValue = true;
if(storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}

Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation”