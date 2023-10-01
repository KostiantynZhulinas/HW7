// function reverseArray(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
//   const reversedArray = reverseArray(originalArray);
//   console.log(reversedArray);


// function uniqueValues(arr1, arr2) {
//     const combinedArray = [...arr1, ...arr2];
//     const uniqueArray = [];
    
//     for (let i = 0; i < combinedArray.length; i++) {
//       if (!uniqueArray.includes(combinedArray[i])) {
//         uniqueArray.push(combinedArray[i]);
//       }
//     }
    
//     return uniqueArray;
//   }
  
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 6, 7];
//   const uniqueValuesArray = uniqueValues(array1, array2);
//   console.log(uniqueValuesArray);
 

function calculateAverageGrade(students) {
    if (students.length === 0) {
      return 0.0;
    }
  
    let totalGrade = 0;
  
    for (let i = 0; i < students.length; i++) {
      totalGrade += students[i].grade;
    }
  
    const averageGrade = totalGrade / students.length;
    const roundedAverageGrade = averageGrade.toFixed(1);
  
    return parseFloat(roundedAverageGrade);
  }
  
  const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
  ];
  
  console.log(calculateAverageGrade(students));
  