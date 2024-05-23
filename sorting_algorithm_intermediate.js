// Here i will be working on intermediate and fatser sorting algorithm
// 1. merge sort
//  2. quick sort
//  3. radix sort
// ------------------------------------------------------------------------
/*1. Merge sort
it is a combination of two things - merging and sorting
In this the array is decomposing or distructured into smaller array till 0 or 1 (i.e it will split the array into smaller part until the size of the array is 1  ) after splitting, it starts sorting the array and merges it*/
const merging = (arr1, arr2) => {
  let newarr = [];
  // let l1 = arr1.length
  // let l2 = arr2.length
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newarr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      newarr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newarr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newarr.push(arr2[j]);
    j++;
  }
  return newarr;
};
const merge_sort = (arr) => {
  while (arr.length <= 1) {
    return arr;
  }
  let l = Math.floor(arr.length / 2);
  let arr_left = merge_sort(arr.slice(0, l));
  let arr_right = merge_sort(arr.slice(l));
  return merging(arr_left, arr_right);
};
array = [10, 23, 13, 3, 4, 87];
document.write(
  `MERGE SORT <br/> merge sort working <br/> <img class="image" src="images/merge_sort_eg.jpg"> <br/>Given array =[${array}] <br/> merge sort solution [${merge_sort(
    array
  )}] <br/><br/>`
);

merge_sort(array);
//  this "merge_sort_eg will help us to merge the values of two array"

/*2. Quick Sort
In this sorting algorithm, first we will select a piviot number with in the array( starting peviot number can be selected from the start of the element or the end of the element. 
Once the peviot is selcted, the numbers which are less than the peviot will be placed left side and the numbers which are greater than the peviot will be placed on right side.
once above process is done, the peviot number wll be placed on correct position.
Next it will take the next p eviot number from left side of the partially sorted  array.....
Eg:                         [6,3,2,87,36,28]
1st pivot number = 6
after processing it...
                   [3,2,6,87,36,28]
left pivot number =3
                   [2,3,6,87,36,28]
1st pivot number left side has been sorted, next right side peviot number will be selected
right pivot number= 87
                   [2,3,6,36,28,87]
2nd right pivot number = 36
                   [2,3,6,28,36,87] 
*/

// const pivot_helper = (arr, start=0, ) => {
//   let pivot = 0
//   let pivot_index = 0
//   let l = arr.length  // here the length of the array remains same which is not correct for multiple call function therefore i will define this as a property
//   for (let i = 1; i < l; i++) {
//     if (arr[start] > arr[i]) {
//       pivot_index++
//       [arr[pivot_index], arr[i]] = [arr[i], arr[pivot_index]]
//       document.write(`[${arr}] <br/>`)
//     }
//   }
//   [arr[pivot], arr[pivot_index]] = [arr[pivot_index], arr[pivot]]
//   document.write(`[${arr}] <br/>`)
//   return pivot_index
// }

// console.log(pivot_helper([10, 23, 13, 3, 4, 87]))

// above is the solution written by me but there is a problem in the code, it cant find pivot index for sub array as l considers whole array length

document.write(
  `QUICK SORT <br/> <img style={height: 100,width: 100} src="https://www.codingeek.com/wp-content/uploads/2016/06/word-image-2.png"> <br/> Quick sort example <br/> `
);
const pivot_helper = (arr, start = 0) => {
  let pivot_index = start;
  for (let i = start + 1; i < arr.length; i++) {
    // here i= start+1 ;i<end  , next function call start and end will change
    if (arr[start] > arr[i]) {
      pivot_index++;
      [arr[pivot_index], arr[i]] = [arr[i], arr[pivot_index]];
      document.write(`[${arr}] <br/>`);
    }
  }
  [arr[start], arr[pivot_index]] = [arr[pivot_index], arr[start]];
  document.write(`[${arr}] <br/>`);
  return pivot_index;
};

const quicksort = (arr, start = 0, end = arr.length - 1) => {
  // this "start=0,end = arr.length-1" will be assigned when In function call the properties are not assigned
  // here the array length remais same so base condition(for recursion) can not be (arr.length <= 1) so we need to depend on start and end
  if (start < end) {
    let pivot_index = pivot_helper(arr, start); // eg: for fist function call it will return 2
    quicksort(arr, start, pivot_index - 1); // this is for left eg: so start and end for this will be (0,1)
    quicksort(arr, pivot_index + 1, end); // this for right eg: so start and end for this will be (3,5)
  }
  return arr;
};
console.log(quicksort([14, 2, 44, 21, 23, 11, 6]));
document.write(
  `Quick sort time complexity <br/> <img class="image" src="images/Quick_sort_time_complexity.PNG"> <br/> The worst case is when the array is already sorted and quick sort algorithm is applied on it <br/>`
);

/* Radix sort::
this are the special type of sorting algorithm which does not perform comparison to provide us the result(like other algorithm which I learnt above)
Radix sort works on lists of numbers
this algorithm only works on numbers.(strings can not be sorted using this algorithm )
From the given array it starts arranging the value in zero, tens, hundreds, thousands and arranges it in the assending order

*/

document.write(`RADIX sort <br/> eg :[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29] <br/> <img class="image" src="images/radix_sort_eg_starting_phase.PNG" />
<br/> [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
<br/> after sorting everthing it will look like this
<img class="image" src="images/radix_sort_eg.PNG" />
<br/> for more information check this
<a href="https://cs.slides.com/colt_steele/intermediate-sorting-algorithms#/30/0/2"> LINK</a>
<br/><br/>
Radix sort working example: <br/>
given array :[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29] <br/>`);

// algorithm
// first we need write helper function to provide a ones,tens,hundreds.... places eg: getdigit(3429,2) => results is 4 (from the last in 3rd place is "4" )
// 1st helper function
const getdigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  // eg: (1556, 0 )  -> math.floor(1556/1) % 10 => 6
};
// here Math.abs will convert -ve numbers into positive

// console.log(getdigit(3429,0))
// 2nd herlper function to find numbers of digits in a number
const digitcount = (num) => {
  if (num === 0) {
    return 1;
    // this if condition is used because we are using log to count the digit log10(0) is infinity
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  //  eg: log10(987263)  = math.floor(5.994) = 5 +1 = 6
};
// console.log(digitcount(3429))

// 3rd helper function to find maxdigitcount of a number in the given list of the number

const maxdigitcount = (numarr) => {
  
  // for (let i of numarr) {
  //   maxdigit = Math.max(maxdigit, digitcount(i));
  // } 
  // insted of finding digitcount for each number 
  return  maxdigit = digitcount(Math.max(... numarr))
};
// console.log(maxdigitcount([902, 593, 4, 155]))

const Radixsort = (num) => {
  let maxdigits = maxdigitcount(num);
  for (let i = 0; i < maxdigits; i++) {
    let digitbuckets = Array.from({ length: 10 }, () => []); // this line will create 10 empty arrays or we can create those arrays manually [[],[]....]
    for (let j = 0; j < num.length; j++) {
      let getdigits = getdigit(num[j], i);
      digitbuckets[getdigits].push(num[j]);
    }
    // console.log(digitbuckets)
    num = [].concat(...digitbuckets);
    document.write(`[${num}] <br/>`);
  }
  return num;
};

console.log(
  Radixsort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
);

document.write(`Time complexity of radix sort: <br/>
here "k" represents the maxdigitcount of a number in the given list of the number <br/> <img class="image" src="images/Radix_sort_time_complexity.PNG"> `);

//  Counting sort

/*
Counting sort is a sorting algorithm that works by dividing the input into a number of buckets, similar to radix sort, but instead of using characters, it uses numbers. Counting sort is a comparison sort, meaning that it is not adaptive and is not a comparison sort. Counting sort is also stable, meaning that the order of equal elements does not change.
*/

const countingSort = (array) =>{
  //  first to find max of the array
  const max= Math.max(...array)
  console.log(max)
  let a1= new Array(max).fill(0)
  let oparray = new Array(array.length)
  for( let arr of array){
    if(a1[arr]){
      a1[arr]++
    }else a1[arr] =1
  }
 console.log(a1)
  for (let i=1 ; i<a1.length ; i++){
    a1[i] = a1[i-1] + a1[i]
  }
  // console.log(a1)
  for (let j= 0 ; j<array.length ;j++){
    console.log(a1[array[j]])
    if(oparray[a1[array[j]]-1] == array[j]){
      oparray[a1[array[j]]-2] = array[j]
     }
    oparray[a1[array[j]]-1] =array[j]
  }
  console.log(oparray)
}

countingSort([56,-3,6,20,19,56,6])