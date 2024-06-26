document.write(`<b>Learning KMP Algorithm </b> <br/>
The KMP algorithm is a searching algorithm which is used to find a sub string in the given data. <br/>
<b>
The Time complexity: O(N + M)
<br/>
where, N : length of the given data
<br/>
M : length of the substring which needs to be serached
</b>
<br/>
In KMP algorithm first we need to analyze the given substr and need to create a array which is called LPS(i.e Longest Prefix and Suffix).
<br/>
<b>**</b>These Array will be having the count of the longest prefix which is equal to longest suffix of each element of substring.
<br/>
<img class="image" src ="https://scaler-topics-articles-md.s3.us-west-2.amazonaws.com/kmp-algorithm-lps-table.gif" />
<br/>
Here the start of the array will be zero

`)

const KMP =  (str, substr) =>{
  let [prevLPSpos , i] =[0,1]
  let lps = new Array(substr.length).fill(0)
  while (i < substr.length){
    if (substr[i] == substr[prevLPSpos]){
      lps[i] = prevLPSpos + 1
      prevLPSpos +=1
      i +=1
    }
    else if( prevLPSpos == 0){
      lps[i] =0
      i+=1
    }
    else{
      prevLPSpos = lps[prevLPSpos - 1]
    }
  }
  // return lps
  // 2nd while to find the matching substring in the str
  let j = 0 
  i=0
  while ( i< str.length){
    if (str[i] == substr[j]){
      i++
      j++
    }
    else if (j == 0 ){
      i++
    }
    else {
      j = lps[j-1]
    }
    if (j == substr.length){
      return i - substr.length
    }
  }
  return -1
} 

console.log(KMP("aacaaa", "aaa"))

