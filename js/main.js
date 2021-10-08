// Example number-1
// var num = window.prompt('Enter number: ');
// console.log(num)
/* ************************** */
// Example-2
// var num = window.prompt('enter the number: ');
// if(num%3 == 0 && num%4 == 0) 
// {
//     console.log('Yes')
// }
// else 
// {
//     console.log('No')
// }
 /* ************************** */
// Example-3
// var num1 = Number(window.prompt('enter first number: '));
// var num2 = Number(window.prompt('enter second number: '));
// if(num1 > num2)
// {
//     console.log('max number = '+num1);
// }
// else 
// {
//     console.log('max number = '+num2);
// }
 /* ************************** */
//  Example-4
// var num = Number(window.prompt('enter the number: '));
// if (num > 0)
// {
//     console.log('positive')
// }
// else
//  {
//      console.log('negative')
//  }
/* ************************** */
// Example-5
// var num1 = Number(window.prompt('enter the first number: '));
// var num2 = Number(window.prompt('enter the second number: '));
// var num3 = Number(window.prompt('enter the third number: '));
// if(num1 > num2 && num1 > num3)
// {
//     console.log('max element = ' + num1);
// }
// else if(num2 > num1 && num2 > num3)
// {
//     console.log('max element = ' + num2);
// }
// else if(num3 > num2 && num3 > num1)
// {
//     console.log('max element = ' + num3);
// }
// if(num1 < num2 && num1 < num3)
// {
//     console.log('min element = ' + num1);
// }
// else if(num2 < num1 && num2 < num3)
// {
//     console.log('min element = ' + num2);
// }
// else if(num3 < num2 && num3 < num1)
// {
//     console.log('min element = ' + num3);
// }
/* ************************** */
// Example-6
// var num = Number(window.prompt('enter the number: '));
// if (num%2 == 0)
// {
//     console.log('the number is even')
// }
// else {
//     console.log('the number is odd')
// }
/* ************************** */
// Example-8
// var char = window.prompt('enter the character: ');
// if (char == 'a')
// {
//     console.log('vowel');
// }
// else if (char == 'o')
// {
//     console.log('vowel');
// }
// else if (char == 'e')
// {
//     console.log('vowel');
// }
// else if (char == 'i')
// {
//     console.log('vowel');
// }
// else if (char == 'u')
// {
//     console.log('vowel');
// }
// else 
// {
//     console.log('Consonant');
// }
//****************** with switch case ******************
// var char = window.prompt('enter the character: ');
// switch (char) {
//     case 'a':
//         console.log('vowel');
//         break;
//     case 'i':
//         console.log('vowel');
//         break;
//     case 'u':
//         console.log('vowel');
//         break;
//     case 'e':
//         console.log('vowel');
//         break;
//     case 'o':
//         console.log('vowel');
//         break;

//     default:
//         console.log('Consonant');
//         break;
// }
/* ************************** */
// Example-9
// var num = Number(window.prompt('enter the number: '));
// for( i = 1; i <= num ; i++)
// {
//     console.log(i)
// }
/* ************************** */
// Example-10
// var num = Number(window.prompt('enter the number: '));
// for( i = num ; i <= 12 * num ; i+= num)
// {
//     console.log(i)
// }
// ************ قعدت اتنطط مالفرحة بعد ماحليت دى بالذات ************
/* ************************** */
// Example-11
// var num = Number(window.prompt('enter a number: '));
// for( i = 2; i < num ; i+=2)
// {
//     console.log(i)
// }
/* ************************** */
// Example-12
// var num1 = Number(window.prompt('enter the first number: '));
// var num2 = Number(window.prompt('enter the second number: '));
// console.log(num1 ** num2)
/* ************************** */
// Example-13
// var num1 = Number(window.prompt('enter mark 1 of 100: '));
// var num2 = Number(window.prompt('enter mark 2 of 100: '));
// var num3 = Number(window.prompt('enter mark 3 of 100: '));
// var num4 = Number(window.prompt('enter mark 4 of 100: '));
// var num5 = Number(window.prompt('enter mark 5 of 100: '));
// var sum = num1 + num2 + num3 + num4 + num5;
// var avg = sum / 5;
// var percentage = (sum * 100) / 500
// console.log('Total marks = ' + sum)
// console.log('Average = ' + avg)
// console.log('Percentage = ' + percentage +'%')
/* ************************** */
// Example-14
// var monthNum = Number(window.prompt('enter the month number: '));
// switch (monthNum) {
//     case 1:
//         console.log('31 days');
//         break;
//     case 2:
//         console.log('28 days');
//         break;
//     case 3:
//         console.log('31 days');
//         break;
//     case 4:
//         console.log('30 days');
//         break;
//     case 5:
//         console.log('31 days');
//         break;
//     case 6:
//         console.log('30 days');
//         break;
//     case 7:
//         console.log('31 days');
//         break;
//     case 8:
//         console.log('31 days');
//         break;
//     case 9:
//         console.log('30 days');
//         break;
//     case 10:
//         console.log('31 days');
//         break;
//     case 11:
//         console.log('30 days');
//         break;
//     case 12:
//         console.log('31 days');
//         break;
// }
/* ************************** */
// Example-15
// var phy = Number(window.prompt('physics of 100: '));
// var chem = Number(window.prompt('Chemistry of 100: '));
// var bio = Number(window.prompt('Biology of 100: '));
// var math = Number(window.prompt('Mathematics of 100: '));
// var com = Number(window.prompt('Computer of 100: '));
// var sum = phy + chem + bio + math + com;
// var percentage = (sum * 100) / 500;
// if(percentage >= 90)
// {
//     console.log('grade = ' +'A');
// }
// else if(percentage >= 80)
// {
//     console.log('grade = ' +'B');
// }
// else if(percentage >= 70)
// {
//     console.log('grade = ' +'C');
// }
// else if(percentage >= 60)
// {
//     console.log('grade = ' +'D');
// }
// else if(percentage >= 40)
// {
//     console.log('grade = ' +'E');
// }
// else
// {
//     console.log('grade = ' +'F');
// }
// console.log('percentage = ' + percentage+'%')
/* ************************** */
// Example-16

/* ************************** */
// Example-17

/* ************************** */
// Example-18

/* ************************** */
// Example-19

/* ************************** */
// Example-20 simple calculator with switch case
// var operationNumber = Number(window.prompt(`choose the operation number:
// 1.adding
// 2.subtraction
// 3.multiplication
// 4. dividing`));
// switch (operationNumber) {
//     case 1:
//         var num1 = Number(window.prompt('enter the first number: '));
//         var num2 = Number(window.prompt('enter the second number: '));
//         var sum = num1 + num2;
//         console.log(sum)
//         break;
//     case 2:
//         var num1 = Number(window.prompt('enter the first number: '));
//         var num2 = Number(window.prompt('enter the second number: '));
//         var sum = num1 - num2;
//         console.log(sum)
//         break;
//     case 3:
//         var num1 = Number(window.prompt('enter the first number: '));
//         var num2 = Number(window.prompt('enter the second number: '));
//         var sum = num1 * num2;
//         console.log(sum)
//         break;
//     case 4:
//         var num1 = Number(window.prompt('enter the first number: '));
//         var num2 = Number(window.prompt('enter the second number: '));
//         var sum = num1 / num2;
//         console.log(sum)
//         break;
// }
/* ************************** */
