// function findArraySum(arr, sum, count=0, ans=[]){
//   for(var i = count; i < arr.length; i++){
//     if(sum === arr[i]){ 
//       return i;
//     }
//     else if(sum > arr[i]){
//       let temp = findArraySum(arr, sum-arr[i], i+1);
//       if(temp){ 
//         ans.push(i);
//         if(typeof temp == "object") ans.push(...temp);
//         else if(!temp) return false;
//         else ans.push(temp);
//         return ans;
//       }
//     }
//   }
//   return false;
// } 

// console.log(findArraySum([9, 6], 45));