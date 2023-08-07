// Here i will be working on intermediate and fatser sorting algorithm
// 1. merge sort
//  2. quick sort
//  3. radix sort
// ------------------------------------------------------------------------
/*1. Merge sort
it is a combination of two things - merging and sorting
In this the array is decomposing or distructured into smaller array till 0 or 1 (i.e it will split the array into smaller part until the size of the array is 1  ) after splitting, it starts sorting the array and merges it*/
const merging = (arr1, arr2) => {
  let newarr = []
  // let l1 = arr1.length
  // let l2 = arr2.length
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newarr.push(arr1[i])
      i++
    } else if (arr1[i] > arr2[j]) {
      newarr.push(arr2[j])
      j++
    }

  }
  while (i < arr1.length) {
    newarr.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    newarr.push(arr2[j])
    j++
  }
  return newarr
}
const merge_sort = (arr) => {
  while (arr.length <= 1) {
    return arr
  }
  let l = Math.floor(arr.length / 2)
  let arr_left = merge_sort(arr.slice(0, l))
  let arr_right = merge_sort(arr.slice(l))
  return merging(arr_left, arr_right)

}
array=[10, 23, 13, 3, 4, 87]
document.write(`merge sort working <br/> <img class="merge_img" src="merge_sort_eg.jpg" <br/> Given array =[${array}] <br/> merge sort solution [${merge_sort(array)}]`)

merge_sort(array)
//  this "merge_sort_eg will help us to merge the values of two array"
